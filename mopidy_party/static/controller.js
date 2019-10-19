'use strict';

// TODO : add a mopidy service designed for angular, to avoid ugly $scope.$apply()...
angular.module('partyApp', [])
  .controller('MainController', function($scope, $interval) {

  // Scope variables

  $scope.message = [];
  $scope.tracks  = [];
  $scope.responses = [];
  $scope.preloadedMusic = [];
  $scope.tracksToLookup = [];
  $scope.maxTracksToLookupAtOnce = 50;
  $scope.loading = true;
  $scope.ready   = false;
  $scope.currentState = {
    paused : false,
    length : 0,
    track  : {
      length : 0,
      name   : 'Nothing playing, add some songs to get the party going!'
    }
  };

  // Load in preloaded songs
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.open( "GET", "http://172.16.4.62/", false ); // false for synchronous request
   xmlHttp.send( null );
   $scope.preloadedMusic = JSON.parse(xmlHttp.responseText);
   console.log($scope.preloadedMusic);

  // Initialize

  var mopidy = new Mopidy({
    'callingConvention' : 'by-position-or-by-name'
  });

  // Adding listenners

  mopidy.on('state:online', function () {
    mopidy.playback
    .getCurrentTrack()
    .then(function(track){
      if(track)
        $scope.currentState.track = track;
      return mopidy.playback.getState();
    })
    .then(function(state){
      $scope.currentState.paused = (state === 'paused');
      return mopidy.tracklist.getLength();
    })
    .then(function(length){
      $scope.currentState.length = length;
    })
    .done(function(){
      $scope.ready   = true;
      $scope.loading = false;
      $scope.$apply();
      $scope.search();
    });

    $scope.preloadedMusic.forEach(function(song) {
      mopidy.library.search({
        'uri': [song]
      }).done($scope.handleSearchResultInitial);
    });

    setTimeout(() => {
      console.log($scope.responses);
    }, 70000);
  });
  mopidy.on('event:playbackStateChanged', function(event){
    $scope.currentState.paused = (event.new_state === 'paused');
    $scope.$apply();
  });
  mopidy.on('event:trackPlaybackStarted', function(event){
    $scope.currentState.track = event.tl_track.track;
    $scope.$apply();
  });
  mopidy.on('event:tracklistChanged', function(){
    mopidy.tracklist.getLength().done(function(length){
      $scope.currentState.length = length;
      $scope.$apply();
    });
  });

  stop = $interval(function() {
    $scope.tracks = [];

    // Load in preloaded songs
     var xmlHttp = new XMLHttpRequest();
     xmlHttp.open( "GET", "http://172.16.4.62/", false ); // false for synchronous request
     xmlHttp.send( null );
     $scope.preloadedMusic = JSON.parse(xmlHttp.responseText);
     console.log($scope.preloadedMusic);
     
    $scope.preloadedMusic.forEach(function(song) {
      mopidy.library.search({
        'uri': [song]
      }).done($scope.handleSearchResultInitial);
    });
  }, 60000);

  $scope.printDuration = function(track){

    if(!track.length)
      return '';

    var _sum = parseInt(track.length / 1000);
    var _min = parseInt(_sum / 60);
    var _sec = _sum % 60;

    return '(' + _min + ':' + (_sec < 10 ? '0' + _sec : _sec) + ')' ;
  };

  $scope.togglePause = function(){
    var _fn = $scope.currentState.paused ? mopidy.playback.resume : mopidy.playback.pause;
    _fn().done();
  };

  $scope.search = function(){

    $scope.message = [];
    $scope.loading = true;

    if(!$scope.searchField) {
      mopidy.library.browse({
        'uri' : 'local:directory'
      }).done($scope.handleBrowseResult);
      return;
    }

    mopidy.library.search({
      'any' : [$scope.searchField]
    }).done($scope.handleSearchResult);
  };

  $scope.handleBrowseResult = function(res){

    $scope.loading = false;
    //$scope.tracks  = [];
    $scope.tracksToLookup = [];

    for(var i = 0; i < res.length; i++){
      if(res[i].type == 'directory' && res[i].uri == 'local:directory?type=track'){
        mopidy.library.browse({
          'uri' : res[i].uri
        }).done($scope.handleBrowseResult);
      } else if(res[i].type == 'track'){
        $scope.tracksToLookup.push(res[i]);
      }
    }

    if($scope.tracksToLookup) {
      $scope.lookupOnePageOfTracks();
    }
  }

  $scope.lookupOnePageOfTracks = function(){

    var _index = 0;
    while(_index < $scope.maxTracksToLookupAtOnce && $scope.tracksToLookup){

      var track = $scope.tracksToLookup.shift();
      if(track){
        mopidy.library.lookup({'uri' : track.uri}).done(function(tracklist){
        for(var j = 0; j < tracklist.length; j++){
          $scope.addTrackResult(tracklist[j]);
        }
        $scope.$apply();
        });
      }
      _index++;
    }
  };

  $scope.handleSearchResultInitial = function(res){

    $scope.loading = false;
    $scope.responses.push(res);

    var _index = 0;
    var _found = true;
    while(_found){
      _found = false;
      for(var i = 0; i < res.length; i++){
        if(res[i].tracks && res[i].tracks[_index]){
          $scope.addTrackResult(res[i].tracks[_index]);
          _found = true;
        }
      }
      _index++;
    }

    $scope.$apply();
  };

  $scope.handleSearchResult = function(res){

    $scope.loading = false;
    $scope.tracks  = [];

    var _index = 0;
    var _found = true;
    while(_found){
      _found = false;
      for(var i = 0; i < res.length; i++){
        if(res[i].tracks && res[i].tracks[_index]){
          $scope.addTrackResult(res[i].tracks[_index]);
          _found = true;
        }
      }
      _index++;
    }

    $scope.$apply();
  };

  $scope.addTrackResult = function(track){

    $scope.tracks.push(track);
    mopidy.tracklist.filter({'uri': [track.uri]}).done(
      function(matches){
        if (matches.length) {
          for (var i = 0; i < $scope.tracks.length; i++)
          {
            if ($scope.tracks[i].uri == matches[0].track.uri)
              $scope.tracks[i].disabled = true;
          }
          $scope.$apply();
        }
      });
  };

  $scope.addTrack = function(track){

    track.disabled = true;

    mopidy.tracklist
    .index()
    .then(function(index){
      return mopidy.tracklist.add({uris: [track.uri]});
    })
    .then(function(){
      // Notify user
      $scope.message = ['success', 'Next track: ' + track.name];
      $scope.$apply();
      return mopidy.tracklist.setConsume([true]);
    })
    .then(function(){
      return mopidy.playback.getState();
    })
    .then(function(state){
      // Get current state
      if(state !== 'stopped')
        return;
      // If stopped, start music NOW!
      return mopidy.playback.play();
    })
    .catch(function(){
      track.disabled = false;
      $scope.message = ['error', 'Unable to add track, please try again...'];
      $scope.$apply();
    })
    .done();
  };

  $scope.nextTrack = function(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "/party/vote", false ); // false for synchronous request
    xmlHttp.send( null );
    $scope.message = ['success', xmlHttp.responseText];
    $scope.$apply();
  };
});
