const moviesList = [
    {
        "adult": false,
        "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 634649,
        "original_language": "en",
        "original_title": "Spider-Man: No Way Home",
        "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        "popularity": 13287.383,
        "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        "release_date": "2021-12-15",
        "title": "Spider-Man: No Way Home",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 9583
    },
    {
        "adult": false,
        "backdrop_path": "/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
        "genre_ids": [
            80,
            9648,
            53
        ],
        "id": 414906,
        "original_language": "en",
        "original_title": "The Batman",
        "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        "popularity": 3256.924,
        "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        "release_date": "2022-03-01",
        "title": "The Batman",
        "video": false,
        "vote_average": 8,
        "vote_count": 1788
    },
    {
        "adult": false,
        "backdrop_path": "/tAztR7AXEesMQAAi5ncFPSZtYlI.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 833425,
        "original_language": "en",
        "original_title": "No Exit",
        "overview": "Stranded at a rest stop in the mountains during a blizzard, a recovering addict discovers a kidnapped child hidden in a car belonging to one of the people inside the building which sets her on a terrifying struggle to identify who among them is the kidnapper.",
        "popularity": 2539.505,
        "poster_path": "/5cnLoWq9o5tuLe1Zq4BTX4LwZ2B.jpg",
        "release_date": "2022-02-25",
        "title": "No Exit",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 213
    },
    {
        "adult": false,
        "backdrop_path": "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            14
        ],
        "id": 568124,
        "original_language": "en",
        "original_title": "Encanto",
        "overview": "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
        "popularity": 2588.776,
        "poster_path": "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
        "release_date": "2021-11-24",
        "title": "Encanto",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 5297
    },
    {
        "adult": false,
        "backdrop_path": "/2hGjmgZrS1nlsEl5PZorn7EsmzH.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 823625,
        "original_language": "en",
        "original_title": "Blacklight",
        "overview": "Travis Block is a shadowy Government agent who specializes in removing operatives whose covers have been exposed. He then has to uncover a deadly conspiracy within his own ranks that reaches the highest echelons of power.",
        "popularity": 3815.594,
        "poster_path": "/1KHoDh6NW8SWOJu8JnFe6wWaMD3.jpg",
        "release_date": "2022-02-10",
        "title": "Blacklight",
        "video": false,
        "vote_average": 5.4,
        "vote_count": 127
    },
    {
        "adult": false,
        "backdrop_path": "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
        "genre_ids": [
            16,
            10751,
            35,
            14
        ],
        "id": 508947,
        "original_language": "en",
        "original_title": "Turning Red",
        "overview": "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
        "popularity": 2792.769,
        "poster_path": "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
        "release_date": "2022-03-10",
        "title": "Turning Red",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 369
    },
    {
        "adult": false,
        "backdrop_path": "/7CamWBejQ9JQOO5vAghZfrFpMXY.jpg",
        "genre_ids": [
            28,
            53,
            80
        ],
        "id": 928381,
        "original_language": "fr",
        "original_title": "Sans répit",
        "overview": "After going to extremes to cover up an accident, a corrupt cop's life spirals out of control when he starts receiving threats from a mysterious witness.",
        "popularity": 1795.912,
        "poster_path": "/9MP21x0OPv0R72obd63tMHssmGt.jpg",
        "release_date": "2022-02-25",
        "title": "Restless",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 152
    },
    {
        "adult": false,
        "backdrop_path": "/pnZ9NMxRqbcJ2dPNROIoregruv5.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 753232,
        "original_language": "en",
        "original_title": "The Commando",
        "overview": "An elite DEA agent returns home after a failed mission when his family makes an unexpected discovery in their house – a stash of money worth $3 million. They soon face the danger and threat of a newly released criminal and his crew, who will do whatever it takes to retrieve the money, including kidnap the agent’s daughters. Stakes are high and lives are at risk in this head-to-head battle as the agent stops at nothing to protect his family against the money-hungry criminals.",
        "popularity": 1717.974,
        "poster_path": "/pSh8MyYu5CmfyWEHzv8FEARH2zq.jpg",
        "release_date": "2022-01-07",
        "title": "The Commando",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 53
    },
    {
        "adult": false,
        "backdrop_path": "/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 646385,
        "original_language": "en",
        "original_title": "Scream",
        "overview": "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
        "popularity": 1539.917,
        "poster_path": "/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg",
        "release_date": "2022-01-12",
        "title": "Scream",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 911
    },
    {
        "adult": false,
        "backdrop_path": "/4OTYefcAlaShn6TGVK33UxLW9R7.jpg",
        "genre_ids": [
            28,
            12,
            53,
            10752
        ],
        "id": 476669,
        "original_language": "en",
        "original_title": "The King's Man",
        "overview": "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
        "popularity": 1550.679,
        "poster_path": "/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
        "release_date": "2021-12-22",
        "title": "The King's Man",
        "video": false,
        "vote_average": 7,
        "vote_count": 1957
    },
    {
        "adult": false,
        "backdrop_path": "/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 580489,
        "original_language": "en",
        "original_title": "Venom: Let There Be Carnage",
        "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        "popularity": 1341.641,
        "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        "release_date": "2021-09-30",
        "title": "Venom: Let There Be Carnage",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 6601
    },
    {
        "adult": false,
        "backdrop_path": "/eG0oOQVsniPAuecPzDD1B1gnYWy.jpg",
        "genre_ids": [
            16,
            35,
            12,
            10751
        ],
        "id": 774825,
        "original_language": "en",
        "original_title": "The Ice Age Adventures of Buck Wild",
        "overview": "The fearless one-eyed weasel Buck teams up with mischievous possum brothers Crash & Eddie as they head off on a new adventure into Buck's home: The Dinosaur World.",
        "popularity": 1345.894,
        "poster_path": "/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg",
        "release_date": "2022-01-28",
        "title": "The Ice Age Adventures of Buck Wild",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 783
    },
    {
        "adult": false,
        "backdrop_path": "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
        "genre_ids": [
            16,
            10751,
            14,
            35,
            12
        ],
        "id": 585083,
        "original_language": "en",
        "original_title": "Hotel Transylvania: Transformania",
        "overview": "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
        "popularity": 1370.703,
        "poster_path": "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
        "release_date": "2022-02-25",
        "title": "Hotel Transylvania: Transformania",
        "video": false,
        "vote_average": 7,
        "vote_count": 381
    },
    {
        "adult": false,
        "backdrop_path": "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
        "genre_ids": [
            878
        ],
        "id": 524434,
        "original_language": "en",
        "original_title": "Eternals",
        "overview": "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
        "popularity": 1386.195,
        "poster_path": "/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
        "release_date": "2021-11-03",
        "title": "Eternals",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 4833
    },
    {
        "adult": false,
        "backdrop_path": "/g0YNGpmlXsgHfhGnJz3c5uyzZ1B.jpg",
        "genre_ids": [
            80,
            18,
            53
        ],
        "id": 597208,
        "original_language": "en",
        "original_title": "Nightmare Alley",
        "overview": "An ambitious carnival man with a talent for manipulating people with a few well-chosen words hooks up with a female psychiatrist who is even more dangerous than he is.",
        "popularity": 1338.913,
        "poster_path": "/vfn1feL0V9HNSXuLLpaxAW8O6LO.jpg",
        "release_date": "2021-12-02",
        "title": "Nightmare Alley",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 1018
    },
    {
        "adult": false,
        "backdrop_path": "/dK12GIdhGP6NPGFssK2Fh265jyr.jpg",
        "genre_ids": [
            28,
            35,
            80,
            53
        ],
        "id": 512195,
        "original_language": "en",
        "original_title": "Red Notice",
        "overview": "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
        "popularity": 1724.363,
        "poster_path": "/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg",
        "release_date": "2021-11-04",
        "title": "Red Notice",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 3238
    },
    {
        "adult": false,
        "backdrop_path": "/i5dUmY2xRzgkmjHJYKNj8kPX1Xx.jpg",
        "genre_ids": [
            37,
            28
        ],
        "id": 928999,
        "original_language": "en",
        "original_title": "Desperate Riders",
        "overview": "After Kansas Red rescues young Billy from a card-game shootout, the boy asks Red for help protecting his family from the outlaw Thorn, who’s just kidnapped Billy’s mother, Carol. As Red and Billy ride off to rescue Carol, they run into beautiful, tough-as-nails Leslie, who’s managed to escape Thorn’s men. The three race to stop Thorn’s wedding to Carol with guns a-blazing - but does she want to be rescued?",
        "popularity": 1331.865,
        "poster_path": "/7pYYGm1dWZGkbJuhcuaHD6nE6k7.jpg",
        "release_date": "2022-02-25",
        "title": "Desperate Riders",
        "video": false,
        "vote_average": 6,
        "vote_count": 17
    },
    {
        "adult": false,
        "backdrop_path": "/cugmVwK0N4aAcLibelKN5jWDXSx.jpg",
        "genre_ids": [
            16,
            28,
            14,
            12
        ],
        "id": 768744,
        "original_language": "ja",
        "original_title": "僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション",
        "overview": "A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-classic selected hero team. It is up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academia.",
        "popularity": 1395.44,
        "poster_path": "/4NUzcKtYPKkfTwKsLjwNt8nRIXV.jpg",
        "release_date": "2021-08-06",
        "title": "My Hero Academia: World Heroes' Mission",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 111
    },
    {
        "adult": false,
        "backdrop_path": "/wMUPT99gw6IB9OVvC46rF8wHIRt.jpg",
        "genre_ids": [
            28,
            80,
            14
        ],
        "id": 890656,
        "original_language": "en",
        "original_title": "Fistful of Vengeance",
        "overview": "A revenge mission becomes a fight to save the world from an ancient threat when superpowered assassin Kai tracks a killer to Bangkok.",
        "popularity": 1300.344,
        "poster_path": "/3cccEF9QZgV9bLWyupJO41HSrOV.jpg",
        "release_date": "2022-02-17",
        "title": "Fistful of Vengeance",
        "video": false,
        "vote_average": 5.4,
        "vote_count": 131
    },
    {
        "adult": false,
        "backdrop_path": "/aTSA5zMWlVFTYBIZxTCMbLkfOtb.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 632727,
        "original_language": "en",
        "original_title": "Texas Chainsaw Massacre",
        "overview": "In this sequel, influencers looking to breathe new life into a Texas ghost town encounter Leatherface, an infamous killer who wears a mask of human skin.",
        "popularity": 1261.286,
        "poster_path": "/meRIRfADEGVo65xgPO6eZvJ0CRG.jpg",
        "release_date": "2022-02-18",
        "title": "Texas Chainsaw Massacre",
        "video": false,
        "vote_average": 5.1,
        "vote_count": 558
    }
]

export default moviesList;