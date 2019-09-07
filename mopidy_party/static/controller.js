'use strict';

const SEVENTIES_MUSIC = [
   {
      spotify_uri: "spotify:track:70RnDnl6ctOyXHICnWOnMb",
      track_name: "Blame It On The Boogie",
      artist_name: "The Jacksons",
      album_name: "Can You Feel It: The Jacksons Collection",
      disc_number: 1,
      track_number: 2,
      track_duration: 210333,
      added_by: "spotify:user:teo227",
      added_at: "2014-08-02T20:30:51Z"
   },
   {
      spotify_uri: "spotify:track:28NBmftocOzTPEb6OYA9fW",
      track_name: "Le Freak",
      artist_name: "CHIC",
      album_name: "C'est Chic",
      disc_number: 1,
      track_number: 2,
      track_duration: 327573,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:32:37Z"
   },
   {
      spotify_uri: "spotify:track:714hERk9U1W8FMYkoC83CO",
      track_name: "You Sexy Thing",
      artist_name: "Hot Chocolate",
      album_name: "Hot Chocolate",
      disc_number: 1,
      track_number: 5,
      track_duration: 244920,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:34:18Z"
   },
   {
      spotify_uri: "spotify:track:3MFa9idQuY4iJLWsZl3tIQ",
      track_name: "Young Hearts Run Free",
      artist_name: "Candi Staton",
      album_name: "Young Hearts Run Free (US Internet Release)",
      disc_number: 1,
      track_number: 5,
      track_duration: 248360,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:30:22Z"
   },
   {
      spotify_uri: "spotify:track:7ej2rxPjH2yCWF3n3jWDpR",
      track_name: "Going Back to My Roots - 12 Version",
      artist_name: "Odyssey",
      album_name: "Legends",
      disc_number: 1,
      track_number: 3,
      track_duration: 325826,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:32:28Z"
   },
   {
      spotify_uri: "spotify:track:2ewkzc0sDkf6a0qQOtBvUH",
      track_name: "This Love Affair",
      artist_name: "Gloria Gaynor",
      album_name: "The Collection",
      disc_number: 1,
      track_number: 16,
      track_duration: 159306,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-19T18:18:56Z"
   },
   {
      spotify_uri: "spotify:track:6uFOoeyV950TepJGGWZ8qs",
      track_name: "Last Dance - Single Version",
      artist_name: "Donna Summer",
      album_name: "The Journey: The Very Best Of Donna Summer (International Version)",
      disc_number: 1,
      track_number: 7,
      track_duration: 198906,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T22:17:20Z"
   },
   {
      spotify_uri: "spotify:track:56oWLWe6okx1mQIYzCBX5M",
      track_name: "Rapper's Delight",
      artist_name: "The Sugarhill Gang",
      album_name: "Sugar Hill Rap Classics - The Pioneers of Hip-Hop",
      disc_number: 1,
      track_number: 1,
      track_duration: 427306,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:31:36Z"
   },
   {
      spotify_uri: "spotify:track:55OjNE2lCUX19YsiwjmtYX",
      track_name: "Super Freak",
      artist_name: "Rick James",
      album_name: "Street Songs (Remastered)",
      disc_number: 1,
      track_number: 5,
      track_duration: 204413,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-13T18:51:16Z"
   },
   {
      spotify_uri: "spotify:track:3hJLKtTpgct9Y9wKww0BiR",
      track_name: "Miss You - Remastered",
      artist_name: "The Rolling Stones",
      album_name: "Some Girls",
      disc_number: 1,
      track_number: 1,
      track_duration: 288666,
      added_by: "spotify:user:teo227",
      added_at: "2019-06-10T16:27:03Z"
   },
   {
      spotify_uri: "spotify:track:4sWWZfkmuSe3KBg6l1mnAI",
      track_name: "Heart Of Glass - Remastered 2001",
      artist_name: "Blondie",
      album_name: "Parallel Lines: Deluxe Collector's Edition",
      disc_number: 1,
      track_number: 10,
      track_duration: 348093,
      added_by: "spotify:user:teo227",
      added_at: "2017-03-31T09:43:38Z"
   },
   {
      spotify_uri: "spotify:track:4ZXxmmsp1Nd7ejbHs2BNBG",
      track_name: "Let's Groove",
      artist_name: "Earth, Wind & Fire",
      album_name: "The Best Of Earth, Wind & Fire-Vol. II",
      disc_number: 1,
      track_number: 2,
      track_duration: 334866,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-11T09:50:58Z"
   },
   {
      spotify_uri: "spotify:track:0ew27xRdxSexrWbODuLfeE",
      track_name: "I'm Coming Out",
      artist_name: "Diana Ross",
      album_name: "Diana",
      disc_number: 1,
      track_number: 4,
      track_duration: 326373,
      added_by: "spotify:user:teo227",
      added_at: "2019-06-10T17:26:47Z"
   },
   {
      spotify_uri: "spotify:track:69PWHBGoJhIwY8l4Mi7HdS",
      track_name: "Can You Feel It",
      artist_name: "The Jacksons",
      album_name: "The Essential Jacksons",
      disc_number: 1,
      track_number: 9,
      track_duration: 358333,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:44:50Z"
   },
   {
      spotify_uri: "spotify:track:7LsbKgRQ0IZRMO3TF7pTUm",
      track_name: "Stayin' Alive",
      artist_name: "Bee Gees",
      album_name: "Saturday Night Fever (The Original Movie Soundtrack)",
      disc_number: 1,
      track_number: 1,
      track_duration: 284066,
      added_by: "spotify:user:teo227",
      added_at: "2017-01-12T09:58:42Z"
   },
   {
      spotify_uri: "spotify:track:1MAsscucG6PZqNrNDGkpLO",
      track_name: "Celebration",
      artist_name: "Kool & The Gang",
      album_name: "Celebration: The Best Of Kool & The Gang (1979-1987)",
      disc_number: 1,
      track_number: 1,
      track_duration: 299466,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:17:17Z"
   },
   {
      spotify_uri: "spotify:track:22v4KpviPTHTLDqhNkeGKL",
      track_name: "Family Affair - Single Version",
      artist_name: "Sly & The Family Stone",
      album_name: "There's A Riot Goin'On",
      disc_number: 1,
      track_number: 4,
      track_duration: 184440,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-22T18:50:09Z"
   },
   {
      spotify_uri: "spotify:track:5uCdgBAqYPWQ2HGpJVGAeD",
      track_name: "Get Up I Feel Like Being A Sex Machine - Pt. 1 / Single Version",
      artist_name: "James Brown",
      album_name: "James Brown Vol 2. - Universal Masters",
      disc_number: 1,
      track_number: 1,
      track_duration: 316546,
      added_by: "spotify:user:teo227",
      added_at: "2019-06-10T16:34:49Z"
   },
   {
      spotify_uri: "spotify:track:4zH6dB5VUvQxuPzy19zJqp",
      track_name: "I Love The Nightlife (Disco 'Round)",
      artist_name: "Alicia Bridges",
      album_name: "Disco Nights",
      disc_number: 1,
      track_number: 15,
      track_duration: 200360,
      added_by: "spotify:user:teo227",
      added_at: "2019-06-10T16:45:47Z"
   },
   {
      spotify_uri: "spotify:track:5v5ZRfxlraJIihJZ32qHCi",
      track_name: "Love Is in the Air",
      artist_name: "John Paul Young",
      album_name: "I Hate The Music",
      disc_number: 1,
      track_number: 12,
      track_duration: 210293,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T22:18:29Z"
   },
   {
      spotify_uri: "spotify:track:5MU22Zh4uwY0nkREliOLcU",
      track_name: "Can't Get Enough Of Your Love, Babe",
      artist_name: "Barry White",
      album_name: "Let The Music Play (Re-issue)",
      disc_number: 1,
      track_number: 2,
      track_duration: 241905,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:37:00Z"
   },
   {
      spotify_uri: "spotify:track:07NrCEN3egNvw8td2LxqJO",
      track_name: "Boogie Oogie Oogie - Remastered 2004",
      artist_name: "A Taste Of Honey",
      album_name: "A Taste Of Honey",
      disc_number: 1,
      track_number: 1,
      track_duration: 338320,
      added_by: "spotify:user:teo227",
      added_at: "2019-06-15T18:01:56Z"
   },
   {
      spotify_uri: "spotify:track:69rMjPtfWbelVGHM0TZaAr",
      track_name: "(Shake Shake Shake) Shake Your Booty",
      artist_name: "KC & The Sunshine Band",
      album_name: "The Very Best Of KC And The Sunshine Band",
      disc_number: 1,
      track_number: 3,
      track_duration: 185640,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T19:57:24Z"
   },
   {
      spotify_uri: "spotify:track:4IMArXimMttK8tB0UBa0Ue",
      track_name: "Don't Leave Me This Way - Single Version",
      artist_name: "Thelma Houston",
      album_name: "Motown 50",
      disc_number: 3,
      track_number: 13,
      track_duration: 215333,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T20:04:29Z"
   },
   {
      spotify_uri: "spotify:track:5uuJruktM9fMdN9Va0DUMl",
      track_name: "Play That Funky Music",
      artist_name: "Wild Cherry",
      album_name: "Wild Cherry",
      disc_number: 1,
      track_number: 1,
      track_duration: 300000,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:33:32Z"
   },
   {
      spotify_uri: "spotify:track:7wNYqliW0LVNT3B25gGXtw",
      track_name: "I Will Survive - Single Version",
      artist_name: "Gloria Gaynor",
      album_name: "Music For Seventies",
      disc_number: 1,
      track_number: 11,
      track_duration: 195880,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T22:55:18Z"
   },
   {
      spotify_uri: "spotify:track:7DhnBXTRbyW3JRueLlOmLm",
      track_name: "Grease - From Grease Original Motion Picture Soundtrack",
      artist_name: "Frankie Valli",
      album_name: "Grease (Deluxe Edition)",
      disc_number: 1,
      track_number: 1,
      track_duration: 204346,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T22:10:47Z"
   },
   {
      spotify_uri: "spotify:track:4BAMN6J32yZKesrPxXKtx7",
      track_name: "Dancing Queen",
      artist_name: "ABBA",
      album_name: "The Essential Collection",
      disc_number: 1,
      track_number: 13,
      track_duration: 233440,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T23:00:02Z"
   },
   {
      spotify_uri: "spotify:track:4Wr14AISsCuBGdkA6rids4",
      track_name: "Fly Robin Fly",
      artist_name: "Silver Convention",
      album_name: "Silver Convention - Fly Robin Fly",
      disc_number: 1,
      track_number: 1,
      track_duration: 230920,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:59:25Z"
   },
   {
      spotify_uri: "spotify:track:5IKLwqBQG6KU6MP2zP80Nu",
      track_name: "We Are Family",
      artist_name: "Sister Sledge",
      album_name: "We Are Family [Expanded]",
      disc_number: 1,
      track_number: 5,
      track_duration: 216733,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:34:11Z"
   },
   {
      spotify_uri: "spotify:track:0XYm6E59GxzX2kc5RrhjcY",
      track_name: "Good Times - Original 12 Mix; 2006 Remaster",
      artist_name: "CHIC",
      album_name: "The 12 Singles Collection",
      disc_number: 1,
      track_number: 6,
      track_duration: 490040,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:31:54Z"
   },
   {
      spotify_uri: "spotify:track:76BXDL0EoH8veVl7pgqRQc",
      track_name: "Night Fever",
      artist_name: "Bee Gees",
      album_name: "Saturday Night Fever (The Original Movie Soundtrack)",
      disc_number: 1,
      track_number: 3,
      track_duration: 211640,
      added_by: "spotify:user:teo227",
      added_at: "2017-03-31T09:46:09Z"
   },
   {
      spotify_uri: "spotify:track:3sAObUuDeZ5qLej8C21AHg",
      track_name: "Love Train",
      artist_name: "The O'Jays",
      album_name: "The Ultimate O'Jays",
      disc_number: 1,
      track_number: 3,
      track_duration: 177306,
      added_by: "spotify:user:teo227",
      added_at: "2015-02-07T16:08:03Z"
   },
   {
      spotify_uri: "spotify:track:1PwB9EADXS90I8LoewLXfl",
      track_name: "Sex & Drugs & Rock & Roll",
      artist_name: "Ian Dury",
      album_name: "New Boots And Panties (Deluxe Edition)",
      disc_number: 1,
      track_number: 11,
      track_duration: 187573,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:37:07Z"
   },
   {
      spotify_uri: "spotify:track:4Ymk3pqpkGx19gyxxUj5LK",
      track_name: "Ain't No Stoppin' Us Now",
      artist_name: "McFadden & Whitehead",
      album_name: "McFadden & Whitehead",
      disc_number: 1,
      track_number: 1,
      track_duration: 420986,
      added_by: "spotify:user:teo227",
      added_at: "2015-10-12T06:37:17Z"
   },
   {
      spotify_uri: "spotify:track:5QXf0c8rfR3alA0JbofJVz",
      track_name: "Heartache No. 9",
      artist_name: "Delegation",
      album_name: "Put A Little Love On Me - EP",
      disc_number: 1,
      track_number: 3,
      track_duration: 272306,
      added_by: "spotify:user:teo227",
      added_at: "2015-05-18T00:40:53Z"
   },
   {
      spotify_uri: "spotify:track:7qVOasZcHa4faF1TqvPEKF",
      track_name: "Fame - 2007 Remaster",
      artist_name: "David Bowie",
      album_name: "Young Americans",
      disc_number: 1,
      track_number: 8,
      track_duration: 260946,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:37:47Z"
   },
   {
      spotify_uri: "spotify:track:46eu3SBuFCXWsPT39Yg3tJ",
      track_name: "Don't Stop 'Til You Get Enough - Single Version",
      artist_name: "Michael Jackson",
      album_name: "Off the Wall",
      disc_number: 1,
      track_number: 1,
      track_duration: 365466,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:45:06Z"
   },
   {
      spotify_uri: "spotify:track:3msXQay9Cm00BanvO7eGsm",
      track_name: "And The Beat Goes On - Single Version",
      artist_name: "The Whispers",
      album_name: "The Complete Solar Hit Singles Collection",
      disc_number: 2,
      track_number: 7,
      track_duration: 296240,
      added_by: "spotify:user:teo227",
      added_at: "2015-02-08T10:38:21Z"
   },
   {
      spotify_uri: "spotify:track:1mCI3atQyw3r8rd0icztLR",
      track_name: "Gonna Get Along Without You Now",
      artist_name: "Viola Wills",
      album_name: "Gonna Get Along Without You Now",
      disc_number: 1,
      track_number: 1,
      track_duration: 200600,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-11T14:05:32Z"
   },
   {
      spotify_uri: "spotify:track:3kEA66ZM9mCxwhynOxgsLh",
      track_name: "Music and Lights",
      artist_name: "Imagination",
      album_name: "In the Heat of the Night",
      disc_number: 1,
      track_number: 4,
      track_duration: 322933,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T15:10:33Z"
   },
   {
      spotify_uri: "spotify:track:0ZvLrvwzp0nBkfmtzL7XO1",
      track_name: "Relight My Fire - Single Version",
      artist_name: "Dan Hartman",
      album_name: "70s Gems",
      disc_number: 1,
      track_number: 1,
      track_duration: 224333,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:54:21Z"
   },
   {
      spotify_uri: "spotify:track:6kC5Ufo12MiUP3gpZsm6LW",
      track_name: "Pop Muzik",
      artist_name: "M",
      album_name: "Pop Muzik - The Remix Album",
      disc_number: 1,
      track_number: 1,
      track_duration: 296266,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-12T14:05:14Z"
   },
   {
      spotify_uri: "spotify:track:027CK9Qn97CUNBVlbNetoV",
      track_name: "Slave To The Rhythm",
      artist_name: "Grace Jones",
      album_name: "Island Life",
      disc_number: 1,
      track_number: 10,
      track_duration: 261373,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T15:21:09Z"
   },
   {
      spotify_uri: "spotify:track:3JVekmh9m9f1l20mV9kMAH",
      track_name: "Emotional Rescue",
      artist_name: "The Rolling Stones",
      album_name: "Emotional Rescue",
      disc_number: 1,
      track_number: 8,
      track_duration: 337571,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-14T20:23:42Z"
   },
   {
      spotify_uri: "spotify:track:2NHyfIeUIRucBcHhErA3pN",
      track_name: "Get Down Saturday Night",
      artist_name: "Oliver Cheatham",
      album_name: "True Soul 3 CD Set",
      disc_number: 3,
      track_number: 3,
      track_duration: 242800,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-11T14:47:47Z"
   },
   {
      spotify_uri: "spotify:track:3angbhy5QRJ5ylzxUMOgZY",
      track_name: "Never Can Say Goodbye",
      artist_name: "Gloria Gaynor",
      album_name: "Never Can Say Goodbye",
      disc_number: 1,
      track_number: 1,
      track_duration: 226706,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T20:01:35Z"
   },
   {
      spotify_uri: "spotify:track:3GGcwG519BTMdvMeFy7meT",
      track_name: "Lady Marmalade",
      artist_name: "Patti LaBelle",
      album_name: "Best Of Patti Labelle",
      disc_number: 1,
      track_number: 1,
      track_duration: 235266,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T15:11:13Z"
   },
   {
      spotify_uri: "spotify:track:7zpm7lTY2EZn7AfFm3mGg2",
      track_name: "Lost in Music",
      artist_name: "Sister Sledge",
      album_name: "The Best Of Sister Sledge (1973-1985)",
      disc_number: 1,
      track_number: 7,
      track_duration: 287440,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:59:16Z"
   },
   {
      spotify_uri: "spotify:track:3uPNgO5ASB2CAyfGvvzJhG",
      track_name: "Shake Your Body (Down to the Ground)",
      artist_name: "The Jacksons",
      album_name: "The Essential Jacksons",
      disc_number: 1,
      track_number: 6,
      track_duration: 477240,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:44:43Z"
   },
   {
      spotify_uri: "spotify:track:0eEncOnmSHqnm1sgXsjUSA",
      track_name: "September",
      artist_name: "Earth, Wind & Fire",
      album_name: "The Best Of Earth, Wind & Fire Vol. 1",
      disc_number: 1,
      track_number: 7,
      track_duration: 215093,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:32:08Z"
   },
   {
      spotify_uri: "spotify:track:2ENNh53D59sL2yHLS5BbvU",
      track_name: "I'm Your Boogie Man",
      artist_name: "KC & The Sunshine Band",
      album_name: "The Very Best Of KC And The Sunshine Band",
      disc_number: 1,
      track_number: 6,
      track_duration: 241920,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T19:57:33Z"
   },
   {
      spotify_uri: "spotify:track:7htuX4mIrg5njoVXm1QSkU",
      track_name: "The Love I Lost",
      artist_name: "Harold Melvin & The Blue Notes",
      album_name: "The Best Of Harold Melvin & The Blue Notes: If You Don't Know Me By Now (Featuring Teddy Pendergrass) (feat. Teddy Pendergrass)",
      disc_number: 1,
      track_number: 2,
      track_duration: 383826,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:34:28Z"
   },
   {
      spotify_uri: "spotify:track:7IoKA8yRibsK8Ryy4SH2NL",
      track_name: "I Love Music",
      artist_name: "The O'Jays",
      album_name: "The Ultimate O'Jays",
      disc_number: 1,
      track_number: 1,
      track_duration: 409933,
      added_by: "spotify:user:teo227",
      added_at: "2015-02-07T16:10:35Z"
   },
   {
      spotify_uri: "spotify:track:7qWJhWw75OAyDeFSrWrA4g",
      track_name: "Native New Yorker - 12 Disco Mix",
      artist_name: "Odyssey",
      album_name: "Legends",
      disc_number: 1,
      track_number: 1,
      track_duration: 334760,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:32:56Z"
   },
   {
      spotify_uri: "spotify:track:2qzvwG15vcdBWGSsSy7oA7",
      track_name: "It's A Love Thing",
      artist_name: "The Whispers",
      album_name: "The Complete Solar Hit Singles Collection",
      disc_number: 2,
      track_number: 10,
      track_duration: 228573,
      added_by: "spotify:user:teo227",
      added_at: "2015-05-19T10:46:59Z"
   },
   {
      spotify_uri: "spotify:track:6dORMC8Gq7Vf7XuMwWMr37",
      track_name: "Reasons To Be Cheerful (Part 3)",
      artist_name: "Ian Dury, The Blockheads",
      album_name: "Sex&Drugs&Rock&Roll - The Essential Collection",
      disc_number: 1,
      track_number: 3,
      track_duration: 284773,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:34:51Z"
   },
   {
      spotify_uri: "spotify:track:3Ro71R8Vpy166E2PuQDSc8",
      track_name: "The Magnificent Seven - Remastered",
      artist_name: "The Clash",
      album_name: "Sandinista! (Remastered)",
      disc_number: 1,
      track_number: 1,
      track_duration: 333520,
      added_by: "spotify:user:teo227",
      added_at: "2019-03-10T19:28:48Z"
   },
   {
      spotify_uri: "spotify:track:0Ij05JKffxZRYky7FGfFyI",
      track_name: "Get Down On It",
      artist_name: "Kool & The Gang",
      album_name: "Something Special",
      disc_number: 1,
      track_number: 5,
      track_duration: 291280,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:16:43Z"
   },
   {
      spotify_uri: "spotify:track:4QxjZHaiNT4euwrUIFBayl",
      track_name: "Don't Look Any Further - Original 12 Mix",
      artist_name: "Dennis Edwards, Siedah Garrett",
      album_name: "12 80s Classics",
      disc_number: 3,
      track_number: 7,
      track_duration: 322093,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:02:00Z"
   },
   {
      spotify_uri: "spotify:track:4ccZx5HCIzaXHd6RjjQutq",
      track_name: "Everybody Dance",
      artist_name: "CHIC",
      album_name: "Chic",
      disc_number: 1,
      track_number: 4,
      track_duration: 403200,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-11T10:38:14Z"
   },
   {
      spotify_uri: "spotify:track:5jWI1xNxABzDRFTnD2yp8L",
      track_name: "I Love to Love",
      artist_name: "Tina Charles",
      album_name: "I Love To Love - The Best Of",
      disc_number: 1,
      track_number: 1,
      track_duration: 183693,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:50:04Z"
   },
   {
      spotify_uri: "spotify:track:1rvD5v0RfsdIsZCTZQ1jfI",
      track_name: "So You Win Again",
      artist_name: "Hot Chocolate",
      album_name: "Very Best Of Hot Chocolate",
      disc_number: 1,
      track_number: 2,
      track_duration: 271426,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:26:43Z"
   },
   {
      spotify_uri: "spotify:track:5jUA1njy3h6ynHLvPdEVHt",
      track_name: "Disco Inferno - LP / 12 Version",
      artist_name: "The Trammps",
      album_name: "Disco Inferno",
      disc_number: 1,
      track_number: 4,
      track_duration: 659000,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T19:40:56Z"
   },
   {
      spotify_uri: "spotify:track:3zYpRGnnoegSpt3SguSo3W",
      track_name: "Off the Wall",
      artist_name: "Michael Jackson",
      album_name: "Off the Wall",
      disc_number: 1,
      track_number: 5,
      track_duration: 246000,
      added_by: "spotify:user:teo227",
      added_at: "2015-12-18T09:13:27Z"
   },
   {
      spotify_uri: "spotify:track:0QpZ69CTjRbJ3ZVsnTaGfa",
      track_name: "Sexy Eyes",
      artist_name: "Dr. Hook",
      album_name: "Greatest Hits",
      disc_number: 1,
      track_number: 19,
      track_duration: 209133,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T15:09:12Z"
   },
   {
      spotify_uri: "spotify:track:68oPWciPnkCZBNbq0HfFJE",
      track_name: "You Make Me Feel (Mighty Real)",
      artist_name: "Sylvester",
      album_name: "The Original Hits",
      disc_number: 1,
      track_number: 2,
      track_duration: 394693,
      added_by: "spotify:user:teo227",
      added_at: "2019-06-10T16:52:24Z"
   },
   {
      spotify_uri: "spotify:track:4v3d8GGzWpGtp3TWK1qqzj",
      track_name: "Rock the Boat",
      artist_name: "Hues Corporation",
      album_name: "The Best Year Of My Life: 1974",
      disc_number: 1,
      track_number: 4,
      track_duration: 199906,
      added_by: "spotify:user:teo227",
      added_at: "2015-02-07T15:30:36Z"
   },
   {
      spotify_uri: "spotify:track:7si5k4ui9pxKNp799VkNtY",
      track_name: "I Feel Love",
      artist_name: "Donna Summer",
      album_name: "I Remember Yesterday",
      disc_number: 1,
      track_number: 8,
      track_duration: 355173,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T22:31:52Z"
   },
   {
      spotify_uri: "spotify:track:3WimzuWXQt4bnd4jcv0Gov",
      track_name: "Instant Replay",
      artist_name: "Dan Hartman",
      album_name: "Keep The Fire Burnin'",
      disc_number: 1,
      track_number: 9,
      track_duration: 320333,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T19:53:52Z"
   },
   {
      spotify_uri: "spotify:track:4QT3YKobBj4BI7xCYRLr9u",
      track_name: "Just an Illusion",
      artist_name: "Imagination",
      album_name: "In the Heat of the Night",
      disc_number: 1,
      track_number: 6,
      track_duration: 387866,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T15:08:39Z"
   },
   {
      spotify_uri: "spotify:track:4cVHMHgmWgudD399ZdhQ3L",
      track_name: "Let's Dance (Single Version) [2002 Remastered Version]",
      artist_name: "David Bowie",
      album_name: "Let's Dance",
      disc_number: 1,
      track_number: 1,
      track_duration: 247600,
      added_by: "spotify:user:teo227",
      added_at: "2016-12-04T10:16:52Z"
   },
   {
      spotify_uri: "spotify:track:4S6JXoWs2G7BeBonOYyiSv",
      track_name: "All American Girls - LP / 12 Version",
      artist_name: "Sister Sledge",
      album_name: "The Best Of Sister Sledge (1973-1985)",
      disc_number: 1,
      track_number: 11,
      track_duration: 235226,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-14T11:37:08Z"
   },
   {
      spotify_uri: "spotify:track:1zzw7QiQ2bHta03vrZCjma",
      track_name: "Car Wash",
      artist_name: "Rose Royce",
      album_name: "Soundtrack Smashes #1's",
      disc_number: 1,
      track_number: 7,
      track_duration: 306026,
      added_by: "spotify:user:teo227",
      added_at: "2018-06-02T20:53:07Z"
   },
   {
      spotify_uri: "spotify:track:6NSqiyQWIyZLouviktad9X",
      track_name: "Last Night a D.J. Saved My Life",
      artist_name: "Indeep",
      album_name: "The Collection",
      disc_number: 1,
      track_number: 1,
      track_duration: 341426,
      added_by: "spotify:user:teo227",
      added_at: "2015-10-12T05:59:16Z"
   },
   {
      spotify_uri: "spotify:track:0uRzka6sn4LVUj8sHQELYz",
      track_name: "Shame",
      artist_name: "Evelyn Champagne King",
      album_name: "Legends",
      disc_number: 1,
      track_number: 1,
      track_duration: 393240,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-14T11:55:02Z"
   },
   {
      spotify_uri: "spotify:track:0jyElqUm59deyol951jPsr",
      track_name: "Boogie Wonderland",
      artist_name: "Earth, Wind & Fire (with The Emotions)",
      album_name: "The Best Of Earth, Wind & Fire-Vol. II",
      disc_number: 1,
      track_number: 8,
      track_duration: 287026,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T15:19:47Z"
   },
   {
      spotify_uri: "spotify:track:7oOOI85fVQvVnK5ynNMdW7",
      track_name: "Rock with You - Single Version",
      artist_name: "Michael Jackson",
      album_name: "Off the Wall",
      disc_number: 1,
      track_number: 2,
      track_duration: 220626,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:44:58Z"
   },
   {
      spotify_uri: "spotify:track:4GTypoTQkSuet1aaa9KpbR",
      track_name: "I Can't Go for That (No Can Do)",
      artist_name: "Daryl Hall & John Oates",
      album_name: "The Original Hits Of Daryl Hall & John Oates",
      disc_number: 1,
      track_number: 1,
      track_duration: 306933,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T19:52:39Z"
   },
   {
      spotify_uri: "spotify:track:7KcRpITrNF1Uc9SroSokDB",
      track_name: "Fresh",
      artist_name: "Kool & The Gang",
      album_name: "Celebration: The Best Of Kool & The Gang (1979-1987)",
      disc_number: 1,
      track_number: 3,
      track_duration: 264160,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:20:28Z"
   },
   {
      spotify_uri: "spotify:track:50H9JNoKqPMDQazo1BEv0J",
      track_name: "Back Stabbers",
      artist_name: "The O'Jays",
      album_name: "The Ultimate O'Jays",
      disc_number: 1,
      track_number: 2,
      track_duration: 184106,
      added_by: "spotify:user:teo227",
      added_at: "2015-02-07T16:07:37Z"
   },
   {
      spotify_uri: "spotify:track:5MCpdJawYOuGRVui6zP8qx",
      track_name: "Rock Your Baby (Album Version)",
      artist_name: "George McCrae",
      album_name: "Rock Your Baby",
      disc_number: 1,
      track_number: 1,
      track_duration: 384275,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-11T09:49:30Z"
   },
   {
      spotify_uri: "spotify:track:0xqnKVGjoPZLMJOrz4nz55",
      track_name: "That's the Way (I Like It)",
      artist_name: "KC & The Sunshine Band",
      album_name: "The Very Best Of KC And The Sunshine Band",
      disc_number: 1,
      track_number: 17,
      track_duration: 306146,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T19:58:00Z"
   },
   {
      spotify_uri: "spotify:track:3OYXIE5zADLMYQBJ57b7EE",
      track_name: "White Lines (Don't Do It)",
      artist_name: "Grandmaster Flash",
      album_name: "The Best of Grandmaster Flash & Sugar Hill",
      disc_number: 1,
      track_number: 1,
      track_duration: 269026,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-11T14:49:34Z"
   },
   {
      spotify_uri: "spotify:track:4JaOd0NUBTckYFZMguuY7M",
      track_name: "Soul Makossa",
      artist_name: "Manu Dibango",
      album_name: "Anthology",
      disc_number: 1,
      track_number: 1,
      track_duration: 264306,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T15:17:00Z"
   },
   {
      spotify_uri: "spotify:track:7iy2drfgPO7cZTdODEg0AE",
      track_name: "Now That We Found Love",
      artist_name: "Third World",
      album_name: "25th Anniversary",
      disc_number: 1,
      track_number: 7,
      track_duration: 329720,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-13T13:52:14Z"
   },
   {
      spotify_uri: "spotify:track:6rXf1s7HZX87l6tm2PuI3c",
      track_name: "Rivers of Babylon",
      artist_name: "Boney M.",
      album_name: "Rivers Of Babylon",
      disc_number: 1,
      track_number: 1,
      track_duration: 260293,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:46:16Z"
   },
   {
      spotify_uri: "spotify:track:5n1A3VxqT4VcNez4Ah6dSu",
      track_name: "Got To Give It Up (Pt. 1)",
      artist_name: "Marvin Gaye",
      album_name: "The Best Of Marvin Gaye",
      disc_number: 1,
      track_number: 19,
      track_duration: 248693,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:51:14Z"
   },
   {
      spotify_uri: "spotify:track:2aCNP3VGrSvXW0gfXAqAEh",
      track_name: "(If You Want It) Do It Yourself",
      artist_name: "Gloria Gaynor",
      album_name: "The Collection",
      disc_number: 1,
      track_number: 10,
      track_duration: 357200,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-19T18:14:05Z"
   },
   {
      spotify_uri: "spotify:track:2YK4NQ0SrVJOBHMHqAcrN6",
      track_name: "One Nation Under A Groove",
      artist_name: "Funkadelic",
      album_name: "The Original Cosmic Funk Crew",
      disc_number: 1,
      track_number: 2,
      track_duration: 446976,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-11T14:30:17Z"
   },
   {
      spotify_uri: "spotify:track:34i7b1wsO5UZRBNjL9OxXi",
      track_name: "Say Say Say",
      artist_name: "Paul McCartney, Michael Jackson",
      album_name: "All The Best (UK Version)",
      disc_number: 1,
      track_number: 14,
      track_duration: 234533,
      added_by: "spotify:user:teo227",
      added_at: "2015-09-04T08:23:46Z"
   },
   {
      spotify_uri: "spotify:track:3jTKA7CKqIxlxa8vMO0wlj",
      track_name: "How Deep Is Your Love",
      artist_name: "Bee Gees",
      album_name: "Saturday Night Fever (The Original Movie Soundtrack)",
      disc_number: 1,
      track_number: 2,
      track_duration: 243933,
      added_by: "spotify:user:teo227",
      added_at: "2017-03-31T09:46:09Z"
   },
   {
      spotify_uri: "spotify:track:4SACGhs89thPJCJD3bWyXZ",
      track_name: "Ma quale idea",
      artist_name: "Pino D'Angiò",
      album_name: "Italian Classics: Pino D'Angiò Collection, Vol. 1",
      disc_number: 1,
      track_number: 4,
      track_duration: 262456,
      added_by: "spotify:user:teo227",
      added_at: "2015-05-27T23:47:50Z"
   },
   {
      spotify_uri: "spotify:track:4aVowfVhlyNUgHYqXbK8Ev",
      track_name: "Disco Nights (Rock Freak)",
      artist_name: "G.Q.",
      album_name: "Disco Nights (Expanded Edition)",
      disc_number: 1,
      track_number: 1,
      track_duration: 354906,
      added_by: "spotify:user:teo227",
      added_at: "2018-04-26T16:28:15Z"
   },
   {
      spotify_uri: "spotify:track:4txFRJmpBJCRfDIAc30yTB",
      track_name: "Hit Me With Your Rhythm Stick",
      artist_name: "Ian Dury, The Blockheads",
      album_name: "Sex&Drugs&Rock&Roll - The Essential Collection",
      disc_number: 1,
      track_number: 4,
      track_duration: 223133,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:37:35Z"
   },
   {
      spotify_uri: "spotify:track:6qNa9AhOat3HHYWF0L7J7F",
      track_name: "Every 1's a Winner",
      artist_name: "Hot Chocolate",
      album_name: "Very Best Of Hot Chocolate",
      disc_number: 1,
      track_number: 9,
      track_duration: 244480,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:27:07Z"
   },
   {
      spotify_uri: "spotify:track:6HZKlK1mDDBsILMoNNncxL",
      track_name: "I Want Your Love",
      artist_name: "CHIC",
      album_name: "C'est Chic",
      disc_number: 1,
      track_number: 5,
      track_duration: 415466,
      added_by: "spotify:user:teo227",
      added_at: "2015-05-18T11:29:03Z"
   },
   {
      spotify_uri: "spotify:track:58MVOJWr88GiTmCH6W45bL",
      track_name: "Pull Up To The Bumper",
      artist_name: "Grace Jones",
      album_name: "Island Life",
      disc_number: 1,
      track_number: 7,
      track_duration: 219826,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-11T16:17:41Z"
   },
   {
      spotify_uri: "spotify:track:594FzPlCmqygQMoZAkGegM",
      track_name: "Hot Stuff",
      artist_name: "Donna Summer",
      album_name: "Bad Girls",
      disc_number: 1,
      track_number: 1,
      track_duration: 314760,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T22:33:55Z"
   },
   {
      spotify_uri: "spotify:track:0PiZcjWPnqgnAsmI6FMxYC",
      track_name: "Brick House",
      artist_name: "Commodores",
      album_name: "The Ultimate Collection: The Commodores",
      disc_number: 1,
      track_number: 9,
      track_duration: 206800,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-13T19:09:08Z"
   },
   {
      spotify_uri: "spotify:track:5DZ3qFBGoTzJQaFiZ85UI0",
      track_name: "Let The Music Play",
      artist_name: "Barry White",
      album_name: "Barry White - Universal Masters Collection",
      disc_number: 1,
      track_number: 7,
      track_duration: 375253,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:37:39Z"
   },
   {
      spotify_uri: "spotify:track:3ypMsqUwfNFMiooMLVHfkp",
      track_name: "YMCA",
      artist_name: "Village People",
      album_name: "Can't Stop the Music (Original Soundtrack 1980)",
      disc_number: 1,
      track_number: 8,
      track_duration: 202573,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:24:40Z"
   },
   {
      spotify_uri: "spotify:track:1ZEjxE0DetpmFKzPZb8vpW",
      track_name: "Get Down Tonight",
      artist_name: "KC & The Sunshine Band",
      album_name: "The Very Best Of KC And The Sunshine Band",
      disc_number: 1,
      track_number: 1,
      track_duration: 320400,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T19:57:15Z"
   },
   {
      spotify_uri: "spotify:track:78JAqmzSWW9SKUM6MchOrs",
      track_name: "Best Of My Love",
      artist_name: "The Emotions",
      album_name: "Boogie Nights / Music From The Original Motion Picture",
      disc_number: 1,
      track_number: 2,
      track_duration: 219066,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-13T00:08:22Z"
   },
   {
      spotify_uri: "spotify:track:3KGM2fm1K3p5alOyHGzTyY",
      track_name: "Give Up The Funk (Tear The Roof Off The Sucker)",
      artist_name: "Parliament",
      album_name: "The Best Of Parliament: Give Up The Funk",
      disc_number: 1,
      track_number: 8,
      track_duration: 345866,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T14:34:42Z"
   },
   {
      spotify_uri: "spotify:track:0VgxNl79cgnYpFPGnik2vP",
      track_name: "Fantasy",
      artist_name: "Earth, Wind & Fire",
      album_name: "Boogie Wonderland: The Best Of Earth, Wind & Fire",
      disc_number: 1,
      track_number: 12,
      track_duration: 222400,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T15:02:44Z"
   },
   {
      spotify_uri: "spotify:track:77XwMMBECbIWOzIbdeAfz6",
      track_name: "Low Rider",
      artist_name: "War",
      album_name: "Why Can't We Be Friends",
      disc_number: 1,
      track_number: 7,
      track_duration: 193933,
      added_by: "spotify:user:teo227",
      added_at: "2015-10-12T06:52:06Z"
   },
   {
      spotify_uri: "spotify:track:3XIEWK1V9n25PS9Vb6axj5",
      track_name: "Born to Be Alive - Original Mix 79",
      artist_name: "Patrick Hernandez",
      album_name: "Born to Be Alive (Original Mix 79)",
      disc_number: 1,
      track_number: 1,
      track_duration: 188133,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-13T00:20:05Z"
   },
   {
      spotify_uri: "spotify:track:0B5kY9i9bmP7554oU4jRoO",
      track_name: "Funkytown - Single Version",
      artist_name: "Lipps Inc.",
      album_name: "'80s Pop #1's",
      disc_number: 1,
      track_number: 2,
      track_duration: 245413,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-12T20:06:03Z"
   },
   {
      spotify_uri: "spotify:track:2kulOHR2XY6YDZCWXb38hn",
      track_name: "Wanna Be Startin' Somethin'",
      artist_name: "Michael Jackson",
      album_name: "Thriller 25 Super Deluxe Edition",
      disc_number: 1,
      track_number: 1,
      track_duration: 362373,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-12T23:14:26Z"
   },
   {
      spotify_uri: "spotify:track:5YdHNygVjhaivT5F1iaU2f",
      track_name: "More Than A Woman",
      artist_name: "Bee Gees",
      album_name: "Saturday Night Fever (The Original Movie Soundtrack)",
      disc_number: 1,
      track_number: 4,
      track_duration: 196440,
      added_by: "spotify:user:teo227",
      added_at: "2017-03-31T09:46:09Z"
   },
   {
      spotify_uri: "spotify:track:6J9paEX8rcBYuAIawdnzUj",
      track_name: "Heaven Must Be Missing An Angel - Pt. 1",
      artist_name: "Tavares",
      album_name: "Capitol Gold: The Best Of Tavares",
      disc_number: 1,
      track_number: 9,
      track_duration: 393960,
      added_by: "spotify:user:teo227",
      added_at: "2015-05-18T02:18:12Z"
   },
   {
      spotify_uri: "spotify:track:20zOIoex7YchUh87d8tlvg",
      track_name: "Boogie Nights",
      artist_name: "Heatwave",
      album_name: "Too Hot To Handle",
      disc_number: 1,
      track_number: 2,
      track_duration: 303533,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-22T18:40:55Z"
   },
   {
      spotify_uri: "spotify:track:2CIPN1w9gOX2A3ESO0NynE",
      track_name: "Never Gonna Give You Up",
      artist_name: "Barry White",
      album_name: "Barry White - His Greatest Hits",
      disc_number: 1,
      track_number: 4,
      track_duration: 290285,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-14T12:11:07Z"
   },
   {
      spotify_uri: "spotify:track:5F8CrWvnESlOBmFkyxFJqt",
      track_name: "Ladies Night - Single Version",
      artist_name: "Kool & The Gang",
      album_name: "Celebration: The Best Of Kool & The Gang (1979-1987)",
      disc_number: 1,
      track_number: 9,
      track_duration: 209800,
      added_by: "spotify:user:teo227",
      added_at: "2014-09-14T19:08:17Z"
   },
   {
      spotify_uri: "spotify:track:4PmYovs6PrdEKTApJYOJSD",
      track_name: "Now That We Found Love",
      artist_name: "The O'Jays",
      album_name: "Ship Ahoy",
      disc_number: 1,
      track_number: 6,
      track_duration: 279640,
      added_by: "spotify:user:teo227",
      added_at: "2015-02-07T16:09:21Z"
   },
   {
      spotify_uri: "spotify:track:6LNCUjTYG9KMaLdNJHVwaT",
      track_name: "No No Joe",
      artist_name: "Silver Convention",
      album_name: "Silver Convention",
      disc_number: 1,
      track_number: 3,
      track_duration: 178200,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T22:01:53Z"
   },
   {
      spotify_uri: "spotify:track:6qkxwiYaNSRzSPP3iY3Kqy",
      track_name: "Dance, Dance, Dance (Yowsah, Yowsah, Yowsah) - 12 Version; 2006 Remaster",
      artist_name: "CHIC",
      album_name: "Definitive Groove: Chic",
      disc_number: 1,
      track_number: 1,
      track_duration: 501786,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T15:01:01Z"
   },
   {
      spotify_uri: "spotify:track:4kjgGgDbNN4nR3OZYuRkUe",
      track_name: "All Night Long (All Night)",
      artist_name: "Lionel Richie",
      album_name: "The Definitive Collection (International 2CD Version)",
      disc_number: 1,
      track_number: 1,
      track_duration: 260826,
      added_by: "spotify:user:teo227",
      added_at: "2016-01-01T23:08:41Z"
   },
   {
      spotify_uri: "spotify:track:0fYbhMj96zG9fpUK10e8kB",
      track_name: "Don't Leave Me This Way",
      artist_name: "Harold Melvin & The Blue Notes",
      album_name: "The Best Of Harold Melvin & The Blue Notes: If You Don't Know Me By Now (Featuring Teddy Pendergrass) (feat. Teddy Pendergrass)",
      disc_number: 1,
      track_number: 4,
      track_duration: 366573,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T22:21:45Z"
   },
   {
      spotify_uri: "spotify:track:4cCgNHbDNru7VbWWvwgQU4",
      track_name: "Stomp! - Single Version",
      artist_name: "The Brothers Johnson",
      album_name: "Strawberry Letter 23/The Very Best Of The Brothers Johnson",
      disc_number: 1,
      track_number: 13,
      track_duration: 247133,
      added_by: "spotify:user:teo227",
      added_at: "2015-04-11T14:14:50Z"
   },
   {
      spotify_uri: "spotify:track:7kllQQPam6HumbUCIPSvHJ",
      track_name: "T.S.O.P. (The Sound of Philadelphia)",
      artist_name: "MFSB, The Three Degrees",
      album_name: "Love Is The Message",
      disc_number: 1,
      track_number: 5,
      track_duration: 222346,
      added_by: "spotify:user:teo227",
      added_at: "2015-05-01T08:55:48Z"
   },
   {
      spotify_uri: "spotify:track:2mXbqtqKuOX9pyyUga7UZ1",
      track_name: "Kung Fu Fighting",
      artist_name: "Carl Douglas",
      album_name: "The Soul of the Kung Fu Fighter",
      disc_number: 1,
      track_number: 1,
      track_duration: 197693,
      added_by: "spotify:user:teo227",
      added_at: "2015-10-12T06:03:33Z"
   },
   {
      spotify_uri: "spotify:track:3ZKQVyxT4Jg2lLZRLs7Vgo",
      track_name: "Bad Girls",
      artist_name: "Donna Summer",
      album_name: "Bad Girls",
      disc_number: 1,
      track_number: 2,
      track_duration: 295106,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T22:34:40Z"
   },
   {
      spotify_uri: "spotify:track:6JjoKJOuX4XuAiJw62sfVN",
      track_name: "Love Machine - Pt. 1",
      artist_name: "The Miracles",
      album_name: "The 35th Anniversary Collection",
      disc_number: 4,
      track_number: 18,
      track_duration: 181440,
      added_by: "spotify:user:teo227",
      added_at: "2015-09-04T08:25:13Z"
   },
   {
      spotify_uri: "spotify:track:0SdfUMRHhcjxrMv5d9V1UP",
      track_name: "Go West - Original Version 1979",
      artist_name: "Village People",
      album_name: "Go West In the Navy",
      disc_number: 1,
      track_number: 2,
      track_duration: 250880,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:24:25Z"
   },
   {
      spotify_uri: "spotify:track:3WMbD1OyfKuwWDWMNbPQ4g",
      track_name: "Daddy Cool",
      artist_name: "Boney M.",
      album_name: "Take The Heat Off Me",
      disc_number: 1,
      track_number: 1,
      track_duration: 208600,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T22:36:32Z"
   },
   {
      spotify_uri: "spotify:track:3J10dBa9JghqiPVJgRMhsK",
      track_name: "Machine Gun",
      artist_name: "Commodores",
      album_name: "Boogie Nights / Music From The Original Motion Picture",
      disc_number: 1,
      track_number: 7,
      track_duration: 158600,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T19:55:04Z"
   },
   {
      spotify_uri: "spotify:track:4a3aw82b5ZFvyOP4q11Q6y",
      track_name: "Do Or Die",
      artist_name: "Grace Jones",
      album_name: "Island Life",
      disc_number: 1,
      track_number: 3,
      track_duration: 202040,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-19T12:14:29Z"
   },
   {
      spotify_uri: "spotify:track:5ChkMS8OtdzJeqyybCc9R5",
      track_name: "Billie Jean",
      artist_name: "Michael Jackson",
      album_name: "Thriller 25 Super Deluxe Edition",
      disc_number: 1,
      track_number: 6,
      track_duration: 293826,
      added_by: "spotify:user:teo227",
      added_at: "2014-08-06T19:03:50Z"
   },
   {
      spotify_uri: "spotify:track:7qHQc9hJ9GoiOS2l7wRuoZ",
      track_name: "All Night Long",
      artist_name: "Mary Jane Girls",
      album_name: "Mary Jane Girls",
      disc_number: 1,
      track_number: 7,
      track_duration: 333293,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T22:19:40Z"
   },
   {
      spotify_uri: "spotify:track:6TWbjjl3gafia6e7EiVvkj",
      track_name: "You're The First, The Last, My Everything",
      artist_name: "Barry White",
      album_name: "Barry White - Universal Masters Collection",
      disc_number: 1,
      track_number: 5,
      track_duration: 276426,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T21:37:34Z"
   },
   {
      spotify_uri: "spotify:track:4nAL9QONNKfWz3YOUJU9wU",
      track_name: "Blue Jeans",
      artist_name: "Chocolate Milk",
      album_name: "Blue Jeans (Expanded Edition)",
      disc_number: 1,
      track_number: 1,
      track_duration: 457960,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-14T13:26:13Z"
   },
   {
      spotify_uri: "spotify:track:5Ard7Os60YgM0rgyZ6v7ed",
      track_name: "Love Rollercoaster",
      artist_name: "Ohio Players",
      album_name: "Gold",
      disc_number: 1,
      track_number: 9,
      track_duration: 287506,
      added_by: "spotify:user:teo227",
      added_at: "2014-11-24T16:03:47Z"
   },
   {
      spotify_uri: "spotify:track:1fa5UPTTzONFPYONW7rIwH",
      track_name: "Saturday Night, Sunday Morning",
      artist_name: "Thelma Houston",
      album_name: "The Best Of",
      disc_number: 1,
      track_number: 3,
      track_duration: 235066,
      added_by: "spotify:user:teo227",
      added_at: "2015-05-18T11:14:29Z"
   },
   {
      spotify_uri: "spotify:track:608xszaAxVh4m7NcKJiAbF",
      track_name: "One of These Nights - 2013 Remaster",
      artist_name: "Eagles",
      album_name: "One of These Nights (2013 Remaster)",
      disc_number: 1,
      track_number: 1,
      track_duration: 291685,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-12T10:28:14Z"
   },
   {
      spotify_uri: "spotify:track:23chygECXqQIz7l80H87lS",
      track_name: "It's a Disco Night (Rock Don't Stop), Pts. 1 & 2",
      artist_name: "The Isley Brothers",
      album_name: "Summer Breeze - The Best Of",
      disc_number: 2,
      track_number: 15,
      track_duration: 314893,
      added_by: "spotify:user:teo227",
      added_at: "2015-05-11T11:38:48Z"
   },
   {
      spotify_uri: "spotify:track:1DMd9492Lqod3CqYaw6T5q",
      track_name: "Love You Inside Out",
      artist_name: "Bee Gees",
      album_name: "Spirits Having Flown",
      disc_number: 1,
      track_number: 3,
      track_duration: 251333,
      added_by: "spotify:user:teo227",
      added_at: "2017-12-26T09:27:55Z"
   },
   {
      spotify_uri: "spotify:track:5hZEoJNMf6VGaKQ177GQKv",
      track_name: "When You're In Love With A Beautiful Woman",
      artist_name: "Dr. Hook",
      album_name: "Dr. Hook - The Best Of",
      disc_number: 1,
      track_number: 1,
      track_duration: 173493,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-14T10:02:38Z"
   },
   {
      spotify_uri: "spotify:track:3HFdPsHeAtmIrCz5fOYnp4",
      track_name: "I'll Be Around - Remastered Version",
      artist_name: "The Spinners",
      album_name: "Definitive Soul: Spinners",
      disc_number: 1,
      track_number: 2,
      track_duration: 191786,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-10T15:14:25Z"
   },
   {
      spotify_uri: "spotify:track:5WwRKYnVy9dekqXAGPbAvU",
      track_name: "He's the Greatest Dancer",
      artist_name: "Sister Sledge",
      album_name: "We Are Family [Expanded]",
      disc_number: 1,
      track_number: 1,
      track_duration: 375400,
      added_by: "spotify:user:teo227",
      added_at: "2015-05-18T00:29:09Z"
   },
   {
      spotify_uri: "spotify:track:5uvAIUrJq6V5T8zWVILoyb",
      track_name: "Love's Theme",
      artist_name: "The Love Unlimited Orchestra",
      album_name: "Barry White - The Collection",
      disc_number: 1,
      track_number: 8,
      track_duration: 247373,
      added_by: "spotify:user:teo227",
      added_at: "2014-11-15T21:56:59Z"
   },
   {
      spotify_uri: "spotify:track:26VrotMHCu4m9I1rbHB1GN",
      track_name: "Shining Star",
      artist_name: "Earth, Wind & Fire",
      album_name: "Greatest Hits",
      disc_number: 1,
      track_number: 1,
      track_duration: 170106,
      added_by: "spotify:user:teo227",
      added_at: "2019-06-10T16:55:38Z"
   },
   {
      spotify_uri: "spotify:track:5QVdcoYVUHU143cTfgmULG",
      track_name: "A Night To Remember",
      artist_name: "Shalamar",
      album_name: "A Night To Remember",
      disc_number: 1,
      track_number: 1,
      track_duration: 211253,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-12T14:06:49Z"
   },
   {
      spotify_uri: "spotify:track:4PGuNpPaBn6ndUcI7pimFo",
      track_name: "You To Me Are Everything",
      artist_name: "The Real Thing",
      album_name: "It's The Real Thing: The Singles Collection",
      disc_number: 1,
      track_number: 2,
      track_duration: 212880,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-12T14:05:31Z"
   },
   {
      spotify_uri: "spotify:track:6IUTkogN6itN7rMDo5ILq2",
      track_name: "Ease On Down The Road #1 - From The Wiz Soundtrack",
      artist_name: "Diana Ross, Michael Jackson",
      album_name: "The Wiz",
      disc_number: 1,
      track_number: 9,
      track_duration: 234773,
      added_by: "spotify:user:teo227",
      added_at: "2015-01-20T15:30:19Z"
   },
   {
      spotify_uri: "spotify:track:2x1LQq8lsUzAA2wNj8yjC9",
      track_name: "Pick Up The Pieces",
      artist_name: "Average White Band",
      album_name: "AWB",
      disc_number: 1,
      track_number: 3,
      track_duration: 239908,
      added_by: "spotify:user:teo227",
      added_at: "2015-05-26T01:05:00Z"
   },
   {
      spotify_uri: "spotify:track:75PHqzep3Lf11sIYP5ps5q",
      track_name: "The Hustle - Original Mix",
      artist_name: "Van McCoy",
      album_name: "The Hustle & The Best of Van McCoy",
      disc_number: 1,
      track_number: 14,
      track_duration: 250240,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-12T20:09:44Z"
   },
   {
      spotify_uri: "spotify:track:5rGFFy8Uyi2ekXsDUXhwck",
      track_name: "Do It Any Way You Wanna",
      artist_name: "People's Choice",
      album_name: "The Sound Of Philadelphia: Gamble & Huff's Greatest Hits",
      disc_number: 1,
      track_number: 8,
      track_duration: 195813,
      added_by: "spotify:user:teo227",
      added_at: "2014-10-05T13:57:51Z"
   },
   {
      spotify_uri: "spotify:track:0QX4u1gl2VZ6HKShy7BWEn",
      track_name: "The Groove Line",
      artist_name: "Heatwave",
      album_name: "Central Heating",
      disc_number: 1,
      track_number: 5,
      track_duration: 262506,
      added_by: "spotify:user:teo227",
      added_at: "2014-08-07T17:03:33Z"
   },
   {
      spotify_uri: "spotify:track:3Ls5qhpvs46HkG12xCh3bD",
      track_name: "Going Back to My Roots",
      artist_name: "Lamont Dozier",
      album_name: "Discomania: Hits Dance 70-80, Vol. 6",
      disc_number: 1,
      track_number: 8,
      track_duration: 278573,
      added_by: "spotify:user:teo227",
      added_at: "2014-11-23T12:02:11Z"
   },
   {
      spotify_uri: "spotify:track:0BJlaQNRFXSz6IE5QpjyJh",
      track_name: "Chic Cheer - 2006 Remaster",
      artist_name: "CHIC",
      album_name: "The 12 Singles Collection",
      disc_number: 1,
      track_number: 5,
      track_duration: 283240,
      added_by: "spotify:user:teo227",
      added_at: "2015-05-19T11:03:28Z"
   },
   {
      spotify_uri: "spotify:track:2akOT20GHnC1qoYkRLvYhr",
      track_name: "I'm Gonna Love You Just A Little More Baby",
      artist_name: "Barry White",
      album_name: "I've Got So Much To Give",
      disc_number: 1,
      track_number: 5,
      track_duration: 431493,
      added_by: "spotify:user:teo227",
      added_at: "2019-02-23T20:29:50Z"
   },
   {
      spotify_uri: "spotify:track:6XGMoy3rv8YMAFZc1d5nWS",
      track_name: "Apache",
      artist_name: "The Sugarhill Gang",
      album_name: "The Greatest Hits (The Sugarhill Gang vs. Grandmaster Flash)",
      disc_number: 1,
      track_number: 2,
      track_duration: 373026,
      added_by: "spotify:user:teo227",
      added_at: "2014-08-24T13:13:53Z"
   },
   {
      spotify_uri: "spotify:track:4Kce47aW64a2jGHyNQ1hpp",
      track_name: "Spank - 1980 Remix",
      artist_name: "Jimmy Bo Horne",
      album_name: "The Best Of The TK Years 1975 - 1985",
      disc_number: 1,
      track_number: 1,
      track_duration: 417960,
      added_by: "spotify:user:teo227",
      added_at: "2015-11-29T14:29:38Z"
   },
   {
      spotify_uri: "spotify:track:06IMCyZxJLmfBqyKb38ykw",
      track_name: "Wordy Rappinghood",
      artist_name: "Tom Tom Club",
      album_name: "Wordy Rappinghood",
      disc_number: 1,
      track_number: 1,
      track_duration: 387933,
      added_by: "spotify:user:teo227",
      added_at: "2014-10-05T19:56:37Z"
   },
   {
      spotify_uri: "spotify:track:5Cu0kZsLEPuz10201vzJe8",
      track_name: "Dance (Pt. 1)",
      artist_name: "The Rolling Stones",
      album_name: "Emotional Rescue",
      disc_number: 1,
      track_number: 1,
      track_duration: 263082,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-11T16:09:47Z"
   },
   {
      spotify_uri: "spotify:track:1kR8zUFIRLXpk1v9aC2VcA",
      track_name: "Turn the Beat Around",
      artist_name: "Vicki Sue Robinson",
      album_name: "More Monty",
      disc_number: 1,
      track_number: 4,
      track_duration: 204200,
      added_by: "spotify:user:teo227",
      added_at: "2015-11-29T15:05:52Z"
   },
   {
      spotify_uri: "spotify:track:1yZJzpBOacWRwACrRBRoLh",
      track_name: "You Should Be Dancing",
      artist_name: "Bee Gees",
      album_name: "Children Of The World",
      disc_number: 1,
      track_number: 1,
      track_duration: 257560,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-12T14:19:51Z"
   },
   {
      spotify_uri: "spotify:track:1B0OQy7xZcrs3ec2Ugf4QI",
      track_name: "Serpentine Fire",
      artist_name: "Earth, Wind & Fire",
      album_name: "The Best Of Earth, Wind & Fire-Vol. II",
      disc_number: 1,
      track_number: 6,
      track_duration: 229000,
      added_by: "spotify:user:teo227",
      added_at: "2015-04-11T14:35:30Z"
   },
   {
      spotify_uri: "spotify:track:4ad5sf0xFQh4SVbSyFQILb",
      track_name: "Why Did You Do It' - One Two Jazz Long Version",
      artist_name: "Stretch",
      album_name: "Why Did You Do It",
      disc_number: 1,
      track_number: 4,
      track_duration: 471506,
      added_by: "spotify:user:teo227",
      added_at: "2015-05-26T01:43:52Z"
   },
   {
      spotify_uri: "spotify:track:1xkOg49ZxldiM1ioIudwUS",
      track_name: "Could Heaven Ever Be Like This",
      artist_name: "Idris Muhammad",
      album_name: "Turn This Mutha Out",
      disc_number: 1,
      track_number: 1,
      track_duration: 516586,
      added_by: "spotify:user:teo227",
      added_at: "2018-09-01T21:20:59Z"
   },
   {
      spotify_uri: "spotify:track:0yOKHir8V0Me9heF0D4wBA",
      track_name: "That Lady, Pts. 1 & 2",
      artist_name: "The Isley Brothers",
      album_name: "3 + 3",
      disc_number: 1,
      track_number: 1,
      track_duration: 334360,
      added_by: "spotify:user:teo227",
      added_at: "2015-04-06T12:32:58Z"
   },
   {
      spotify_uri: "spotify:track:601b5N587Fslqt10D7VVUy",
      track_name: "It Only Takes A Minute",
      artist_name: "Tavares",
      album_name: "Capitol Gold: The Best Of Tavares",
      disc_number: 1,
      track_number: 7,
      track_duration: 239666,
      added_by: "spotify:user:teo227",
      added_at: "2015-10-12T07:24:52Z"
   },
   {
      spotify_uri: "spotify:track:64jJFsFNCeSPJpS74XG6v0",
      track_name: "Found A Cure - 7 Inch",
      artist_name: "Ashford & Simpson",
      album_name: "Found A Cure",
      disc_number: 1,
      track_number: 1,
      track_duration: 223232,
      added_by: "spotify:user:teo227",
      added_at: "2015-12-14T00:30:29Z"
   },
   {
      spotify_uri: "spotify:track:16vObRGAKtbmSLybpEbnch",
      track_name: "In the Heat of the Night",
      artist_name: "Imagination",
      album_name: "In the Heat of the Night",
      disc_number: 1,
      track_number: 2,
      track_duration: 315533,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-21T16:55:12Z"
   },
   {
      spotify_uri: "spotify:track:5lA3pwMkBdd24StM90QrNR",
      track_name: "P.Y.T. (Pretty Young Thing)",
      artist_name: "Michael Jackson",
      album_name: "Thriller 25 Super Deluxe Edition",
      disc_number: 1,
      track_number: 8,
      track_duration: 238733,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-12T23:12:29Z"
   },
   {
      spotify_uri: "spotify:track:17EVu5b0l5uo2gErSfqEt1",
      track_name: "Love Come Down",
      artist_name: "Evelyn Champagne King",
      album_name: "Get Loose",
      disc_number: 1,
      track_number: 1,
      track_duration: 365760,
      added_by: "spotify:user:teo227",
      added_at: "2018-09-02T20:26:09Z"
   },
   {
      spotify_uri: "spotify:track:13V3nwDlSia4OEHTnTxT5m",
      track_name: "Pick Me Up, I'll Dance - 12 Mix",
      artist_name: "Melba Moore",
      album_name: "Melba",
      disc_number: 1,
      track_number: 5,
      track_duration: 419200,
      added_by: "spotify:user:teo227",
      added_at: "2018-04-26T17:13:26Z"
   },
   {
      spotify_uri: "spotify:track:7mimnm2QlSzW3J38FRMETP",
      track_name: "Thinking of You",
      artist_name: "Sister Sledge",
      album_name: "We Are Family [Expanded]",
      disc_number: 1,
      track_number: 4,
      track_duration: 266826,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-13T19:05:58Z"
   },
   {
      spotify_uri: "spotify:track:0GuUFX7ffy4qLExjpLmGpg",
      track_name: "Don't Make Me Wait Too Long",
      artist_name: "Barry White",
      album_name: "Is This Whatcha Wont?",
      disc_number: 1,
      track_number: 1,
      track_duration: 279840,
      added_by: "spotify:user:teo227",
      added_at: "2019-02-23T20:29:50Z"
   },
   {
      spotify_uri: "spotify:track:1jyFhPbKXwWAFEyg4X2ymb",
      track_name: "Let's Go Round Again",
      artist_name: "Average White Band",
      album_name: "Shine",
      disc_number: 1,
      track_number: 3,
      track_duration: 296693,
      added_by: "spotify:user:teo227",
      added_at: "2018-04-26T17:08:46Z"
   },
   {
      spotify_uri: "spotify:track:1LiwqqaafXkNQuWGW3HeId",
      track_name: "More Bounce to the Ounce",
      artist_name: "Zapp",
      album_name: "Zapp",
      disc_number: 1,
      track_number: 1,
      track_duration: 311120,
      added_by: "spotify:user:teo227",
      added_at: "2019-01-20T18:17:04Z"
   },
   {
      spotify_uri: "spotify:track:58r4JuwHhXLAkttkaUZfLw",
      track_name: "Got to Be Real",
      artist_name: "Cheryl Lynn",
      album_name: "Cheryl Lynn (Expanded Edition)",
      disc_number: 1,
      track_number: 1,
      track_duration: 307946,
      added_by: "spotify:user:teo227",
      added_at: "2018-04-26T16:36:33Z"
   },
   {
      spotify_uri: "spotify:track:3Kf0nJpV3AMRWRTL1SEqUl",
      track_name: "Haven't You Heard",
      artist_name: "Patrice Rushen",
      album_name: "Pizzazz",
      disc_number: 1,
      track_number: 5,
      track_duration: 405293,
      added_by: "spotify:user:teo227",
      added_at: "2019-06-10T18:18:57Z"
   },
   {
      spotify_uri: "spotify:track:08pTWZPpPcAZa4m0NM32jd",
      track_name: "Getting Serious",
      artist_name: "Frantique",
      album_name: "Frantique",
      disc_number: 1,
      track_number: 2,
      track_duration: 476853,
      added_by: "spotify:user:teo227",
      added_at: "2018-04-26T16:45:50Z"
   },
   {
      spotify_uri: "spotify:track:1VPmeKAZHB1byxOEgRJOA3",
      track_name: "Chase",
      artist_name: "Giorgio Moroder",
      album_name: "Midnight Express (Soundtrack)",
      disc_number: 1,
      track_number: 1,
      track_duration: 509840,
      added_by: "spotify:user:teo227",
      added_at: "2014-07-11T16:21:44Z"
   }
];

// TODO : add a mopidy service designed for angular, to avoid ugly $scope.$apply()...
angular.module('partyApp', [])
  .controller('MainController', function($scope) {

  // Scope variables

  $scope.message = [];
  $scope.tracks  = [];
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

    SEVENTIES_MUSIC.forEach(function(song) {
      console.log('Searching for ' + song.track_name);
      mopidy.library.search({
        'uri': [song.spotify_uri]
      }).done($scope.handleSearchResultInitial);
    });
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
    $scope.tracks  = [];
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
