app.controller('myProfileController', function($scope, $rootScope, env) {
  if ($rootScope.User == null) {
    // Redirect and ask for Login
  }else{
    $scope.User = $rootScope.User;
    // Get recent beatmaps
    $scope.User.RecentModdedBeatmaps = [
      {
        "approved"         : "0",                   // 4 = loved, 3 = qualified, 2 = approved, 1 = ranked, 0 = pending, -1 = WIP, -2 = graveyard
        "approved_date"    : "2013-07-02 01:01:12", // date ranked, UTC+8 for now
        "last_update"      : "2016-10-17 16:51:22", // last update date, timezone same as above. May be after approved_date if map was unranked and reranked.
        "artist"           : "ZdragowDL",
        "beatmap_id"       : "252002",              // beatmap_id is per difficulty
        "beatmapset_id"    : "534035",               // beatmapset_id groups difficulties into a set
        "bpm"              : "240",
        "creator"          : "Cosmolade",
        "difficultyrating" : "5.25",             // The amount of stars the map would have ingame and on the website
        "diff_size"        : "4",                   // Circle size value (CS)
        "diff_overall"     : "6",                   // Overall difficulty (OD)
        "diff_approach"    : "7",                   // Approach Rate (AR)
        "diff_drain"       : "6",                   // Healthdrain (HP)
        "hit_length"       : "113",                 // seconds from first note to last note not including breaks
        "source"           : "",
        "genre_id"         : "1",                   // 0 = any, 1 = unspecified, 2 = video game, 3 = anime, 4 = rock, 5 = pop, 6 = other, 7 = novelty, 9 = hip hop, 10 = electronic (note that there's no 8)
        "language_id"      : "5",                   // 0 = any, 1 = other, 2 = english, 3 = japanese, 4 = chinese, 5 = instrumental, 6 = korean, 7 = french, 8 = german, 9 = swedish, 10 = spanish, 11 = italian
        "title"            : "DOGGOLOVANIA",      // song name
        "total_length"     : "45",                 // seconds from first note to last note including breaks
        "version"          : "Overkill",            // difficulty name
        "file_md5"         : "c8f08438204abfcdd1a748ebfae67421",
        // md5 hash of the beatmap
        "mode"             : "0",                   // game mode,
        "tags"             : "undertale sans gabe dog megalomania hazu- cloudchaser",      // Beatmap tags separated by spaces.
        "favourite_count"  : "1",                 // Number of times the beatmap was favourited. (americans: notice the ou!)
        "playcount"        : "9001",                // Number of times the beatmap was played
        "passcount"        : "1337",                // Number of times the beatmap was passed, completed (the user didn't fail or retry)
        "max_combo"        : "2101"                 // The maximum combo a user can reach playing this beatmap.
      },
      {
        "approved"         : "1",                   // 4 = loved, 3 = qualified, 2 = approved, 1 = ranked, 0 = pending, -1 = WIP, -2 = graveyard
        "approved_date"    : "2013-07-02 01:01:12", // date ranked, UTC+8 for now
        "last_update"      : "2013-07-06 16:51:22", // last update date, timezone same as above. May be after approved_date if map was unranked and reranked.
        "artist"           : "Parry Gripp",
        "beatmap_id"       : "252002",              // beatmap_id is per difficulty
        "beatmapset_id"    : "106500",               // beatmapset_id groups difficulties into a set
        "bpm"              : "128",
        "creator"          : "Cloudchaser",
        "difficultyrating" : "3.16",             // The amount of stars the map would have ingame and on the website
        "diff_size"        : "4",                   // Circle size value (CS)
        "diff_overall"     : "6",                   // Overall difficulty (OD)
        "diff_approach"    : "7",                   // Approach Rate (AR)
        "diff_drain"       : "6",                   // Healthdrain (HP)
        "hit_length"       : "113",                 // seconds from first note to last note not including breaks
        "source"           : "",
        "genre_id"         : "1",                   // 0 = any, 1 = unspecified, 2 = video game, 3 = anime, 4 = rock, 5 = pop, 6 = other, 7 = novelty, 9 = hip hop, 10 = electronic (note that there's no 8)
        "language_id"      : "5",                   // 0 = any, 1 = other, 2 = english, 3 = japanese, 4 = chinese, 5 = instrumental, 6 = korean, 7 = french, 8 = german, 9 = swedish, 10 = spanish, 11 = italian
        "title"            : "Parry Gripp",      // song name
        "total_length"     : "60",                 // seconds from first note to last note including breaks
        "version"          : "Hard",            // difficulty name
        "file_md5"         : "c8f08438204abfcdd1a748ebfae67421",
        // md5 hash of the beatmap
        "mode"             : "0",                   // game mode,
        "tags"             : "mega-party",      // Beatmap tags separated by spaces.
        "favourite_count"  : "1",                 // Number of times the beatmap was favourited. (americans: notice the ou!)
        "playcount"        : "9001",                // Number of times the beatmap was played
        "passcount"        : "1337",                // Number of times the beatmap was passed, completed (the user didn't fail or retry)
        "max_combo"        : "2101"                 // The maximum combo a user can reach playing this beatmap.
      }
    ]

    // Get recently modded beatmaps -- This should be from my own Database tho

    //Declaring URL for the scope
    $scope.bmImageURL       = env.BMIMGURL;
    $scope.profileImageURL  = env.USERIMGURL
  }
});
