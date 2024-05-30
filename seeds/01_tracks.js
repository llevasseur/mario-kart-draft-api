/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const tracks = [
  {
    id: 1,
    name: "3DS Rainbow Road",
    img: "152px-MK8D_3DS_Rainbow_Road_Course_Icon.png",
  },
  {
    id: 2,
    name: "3DS Rock Rock Mountain",
    img: "152px-MK8D_3DS_Rock_Rock_Mountain_Course_Icon.png",
  },
  {
    id: 3,
    name: "3DS Rosalina's Ice World",
    img: "152px-MK8D_3DS_Rosalina's_Ice_World_Course_Icon.png",
  },
  {
    id: 4,
    name: "3DS Toad Circuit",
    img: "152px-MK8D_3DS_Toad_Circuit_Course_Icon.png",
  },
  {
    id: 5,
    name: "DS Mario Circuit",
    img: "152px-MK8D_DS_Mario_Circuit_Course_Icon.png",
  },
  {
    id: 6,
    name: "DS Peach Gardens",
    img: "152px-MK8D_DS_Peach_Gardens_Course_Icon.png",
  },
  {
    id: 7,
    name: "DS Shroom Ridge",
    img: "152px-MK8D_DS_Shroom_Ridge_Course_Icon.png",
  },
  {
    id: 8,
    name: "DS Waluigi Pinball",
    img: "152px-MK8D_DS_Waluigi_Pinball_Course_Icon.png",
  },
  {
    id: 9,
    name: "GBA Boo Lake",
    img: "152px-MK8D_GBA_Boo_Lake_Course_Icon.png",
  },
  {
    id: 10,
    name: "GBA Riverside Park",
    img: "152px-MK8D_GBA_Riverside_Park_Course_Icon.png",
  },
  {
    id: 11,
    name: "GBA Sky Garden",
    img: "152px-MK8D_GBA_Sky_Garden_Course_Icon.png",
  },
  {
    id: 12,
    name: "GBA Snow Land",
    img: "152px-MK8D_GBA_Snow_Land_Course_Icon.png",
  },
  {
    id: 13,
    name: "GBA Sunset Wilds",
    img: "152px-MK8D_GBA_Sunset_Wilds_Course_Icon.png",
  },
  {
    id: 14,
    name: "GCN DK Mountain",
    img: "152px-MK8D_GCN_DK_Mountain_Course_Icon.png",
  },
  {
    id: 15,
    name: "GCN Daisy Cruiser",
    img: "152px-MK8D_GCN_Daisy_Cruiser_Course_Icon.png",
  },
  {
    id: 16,
    name: "GCN Waluigi Stadium",
    img: "152px-MK8D_GCN_Waluigi_Stadium_Course_Icon.png",
  },
  {
    id: 17,
    name: "Merry Mountain",
    img: "152px-MK8D_Merry_Mountain_Course_Icon.png",
  },
  {
    id: 18,
    name: "N64 Choco Mountain",
    img: "152px-MK8D_N64_Choco_Mountain_Course_Icon.png",
  },
  {
    id: 19,
    name: "N64 Kalimari Desert",
    img: "152px-MK8D_N64_Kalimari_Desert_Course_Icon.png",
  },
  {
    id: 20,
    name: "Ninja Hideaway",
    img: "152px-MK8D_Ninja_Hideaway_Course_Icon.png",
  },
  {
    id: 21,
    name: "Piranha Plant Cove",
    img: "152px-MK8D_Piranha_Plant_Cove_Course_Icon.png",
  },
  {
    id: 22,
    name: "SNES Bowser Castle 3",
    img: "152px-MK8D_SNES_Bowser_Castle_3_Course_Icon.png",
  },
  {
    id: 23,
    name: "SNES Mario Circuit 3",
    img: "152px-MK8D_SNES_Mario_Circuit_3_Course_Icon.png",
  },
  {
    id: 24,
    name: "Sky-High Sundae",
    img: "152px-MK8D_Sky-High_Sundae_Course_Icon.png",
  },
  {
    id: 25,
    name: "Squeaky Clean Sprint",
    img: "152px-MK8D_Squeaky_Clean_Sprint_Course_Icon.png",
  },
  {
    id: 26,
    name: "Tour Amsterdam Drift",
    img: "152px-MK8D_Tour_Amsterdam_Drift_Course_Icon.png",
  },
  {
    id: 27,
    name: "Tour Athens Dash",
    img: "152px-MK8D_Tour_Athens_Dash_Course_Icon.png",
  },
  {
    id: 28,
    name: "Tour Bangkok Rush",
    img: "152px-MK8D_Tour_Bangkok_Rush_Course_Icon.png",
  },
  {
    id: 29,
    name: "Tour Berlin Byways",
    img: "152px-MK8D_Tour_Berlin_Byways_Course_Icon.png",
  },
  {
    id: 30,
    name: "Tour London Loop",
    img: "152px-MK8D_Tour_London_Loop_Course_Icon.png",
  },
  {
    id: 31,
    name: "Tour Los Angeles Laps",
    img: "152px-MK8D_Tour_Los_Angeles_Laps_Course_Icon.png",
  },
  {
    id: 32,
    name: "Tour Madrid Drive",
    img: "152px-MK8D_Tour_Madrid_Drive_Course_Icon.png",
  },
  {
    id: 33,
    name: "Tour New York Minute",
    img: "152px-MK8D_Tour_New_York_Minute_Course_Icon.png",
  },
  {
    id: 34,
    name: "Tour Paris Promenade",
    img: "152px-MK8D_Tour_Paris_Promenade_Course_Icon.png",
  },
  {
    id: 35,
    name: "Tour Rome Avanti",
    img: "152px-MK8D_Tour_Rome_Avanti_Course_Icon.png",
  },
  {
    id: 36,
    name: "Tour Singapore Speedway",
    img: "152px-MK8D_Tour_Singapore_Speedway_Course_Icon.png",
  },
  {
    id: 37,
    name: "Tour Sydney Sprint",
    img: "152px-MK8D_Tour_Sydney_Sprint_Course_Icon.png",
  },
  {
    id: 38,
    name: "Tour Tokyo Blur",
    img: "152px-MK8D_Tour_Tokyo_Blur_Course_Icon.png",
  },
  {
    id: 39,
    name: "Tour Vancouver Velocity",
    img: "152px-MK8D_Tour_Vancouver_Velocity_Course_Icon.png",
  },
  {
    id: 40,
    name: "Wii Coconut Mall",
    img: "152px-MK8D_Wii_Coconut_Mall_Course_Icon.png",
  },
  {
    id: 41,
    name: "Wii DK Summit",
    img: "152px-MK8D_Wii_DK_Summit_Course_Icon.png",
  },
  {
    id: 42,
    name: "Wii Daisy Circuit",
    img: "152px-MK8D_Wii_Daisy_Circuit_Course_Icon.png",
  },
  {
    id: 43,
    name: "Wii Koopa Cape",
    img: "152px-MK8D_Wii_Koopa_Cape_Course_Icon.png",
  },
  {
    id: 44,
    name: "Wii Maple Treeway",
    img: "152px-MK8D_Wii_Maple_Treeway_Course_Icon.png",
  },
  {
    id: 45,
    name: "Wii Moonview Highway",
    img: "152px-MK8D_Wii_Moonview_Highway_Course_Icon.png",
  },
  {
    id: 46,
    name: "Wii Mushroom Gorge",
    img: "152px-MK8D_Wii_Mushroom_Gorge_Course_Icon.png",
  },
  {
    id: 47,
    name: "Wii Rainbow Road",
    img: "152px-MK8D_Wii_Rainbow_Road_Course_Icon.png",
  },
  {
    id: 48,
    name: "Yoshi's Island",
    img: "152px-MK8D_Yoshi's_Island_Course_Icon.png",
  },
  {
    id: 49,
    name: "3DS Neo Bowser City",
    img: "MK8-DLC-Course-icon-3DS_NeoBowserCity.png",
  },
  {
    id: 50,
    name: "Animal Crossing",
    img: "MK8-DLC-Course-icon-AnimalCrossing.png",
  },
  {
    id: 51,
    name: "Big Blue",
    img: "MK8-DLC-Course-icon-BigBlue.png",
  },
  {
    id: 52,
    name: "Dragon Driftway",
    img: "MK8-DLC-Course-icon-DragonDriftway.png",
  },
  {
    id: 53,
    name: "Excitebike Arena",
    img: "MK8-DLC-Course-icon-ExcitebikeArena.png",
  },
  {
    id: 54,
    name: "GBA Cheese Land",
    img: "MK8-DLC-Course-icon-GBA_CheeseLand.png",
  },
  {
    id: 55,
    name: "GBA Ribbon Road",
    img: "MK8-DLC-Course-icon-GBA_RibbonRoad.png",
  },
  {
    id: 56,
    name: "GCN Baby Park",
    img: "MK8-DLC-Course-icon-GCN_BabyPark.png",
  },
  {
    id: 57,
    name: "GCN Yoshi Circuit",
    img: "MK8-DLC-Course-icon-GCN_YoshiCircuit.png",
  },
  {
    id: 58,
    name: "Hyrule Circuit",
    img: "MK8-DLC-Course-icon-HyruleCircuit.png",
  },
  {
    id: 59,
    name: "Ice Ice Outpost",
    img: "MK8-DLC-Course-icon-IceIceOutpost.png",
  },
  {
    id: 60,
    name: "Mute City",
    img: "MK8-DLC-Course-icon-MuteCity.png",
  },
  {
    id: 61,
    name: "SNES Rainbow Road",
    img: "MK8-DLC-Course-icon-SNES_RainbowRoad.png",
  },
  {
    id: 62,
    name: "Super Bell Subway",
    img: "MK8-DLC-Course-icon-SuperBellSubway.png",
  },
  {
    id: 63,
    name: "Wii Wario's Gold Mine",
    img: "MK8-DLC-Course-icon-Wii_Wario'sGoldMine.png",
  },
  {
    id: 64,
    name: "Wild Woods",
    img: "MK8-DLC-Course-icon-WildWoods.png",
  },
  {
    id: 65,
    name: "3DS DK Jungle",
    img: "MK8-_3DS_DK_Jungle.png",
  },
  {
    id: 66,
    name: "3DS Music Park",
    img: "MK8-_3DS_Music_Park.png",
  },
  {
    id: 67,
    name: "3DS Piranha Plant Slide",
    img: "MK8-_3DS_Piranha_Plant_Slide.png",
  },
  {
    id: 68,
    name: "Bone-Dry Dunes",
    img: "MK8-_Bone-Dry_Dunes.png",
  },
  {
    id: 69,
    name: "Bowser's Castle",
    img: "MK8-_Bowser's_Castle.png",
  },
  {
    id: 70,
    name: "Cloudtop Cruise",
    img: "MK8-_Cloudtop_Cruise.png",
  },
  {
    id: 71,
    name: "DS Cheep Cheep Beach",
    img: "MK8-_DS_Cheep_Cheep_Beach.png",
  },
  {
    id: 72,
    name: "DS Tick-Tock Clock",
    img: "MK8-_DS_Tick-Tock_Clock.png",
  },
  {
    id: 73,
    name: "DS Wario Stadium",
    img: "MK8-_DS_Wario_Stadium.png",
  },
  {
    id: 74,
    name: "Dolphin Shoals",
    img: "MK8-_Dolphin_Shoals.png",
  },
  {
    id: 75,
    name: "Electrodrome",
    img: "MK8-_Electrodrome.png",
  },
  {
    id: 76,
    name: "GBA Mario Circuit",
    img: "MK8-_GBA_Mario_Circuit.png",
  },
  {
    id: 77,
    name: "GCN Dry Dry Desert",
    img: "MK8-_GCN_Dry_Dry_Desert.png",
  },
  {
    id: 78,
    name: "GCN Sherbet Land",
    img: "MK8-_GCN_Sherbet_Land.png",
  },
  {
    id: 79,
    name: "Mario Circuit",
    img: "MK8-_Mario_Circuit.png",
  },
  {
    id: 80,
    name: "Mario Kart Stadium",
    img: "MK8-_Mario_Kart_Stadium.png",
  },
  {
    id: 81,
    name: "Mount Wario",
    img: "MK8-_Mount_Wario.png",
  },
  {
    id: 82,
    name: "N64 Rainbow Road",
    img: "MK8-_N64_Rainbow_Road.png",
  },
  {
    id: 83,
    name: "N64 Royal Raceway",
    img: "MK8-_N64_Royal_Raceway.png",
  },
  {
    id: 84,
    name: "N64 Toad's Turnpike",
    img: "MK8-_N64_Toad's_Turnpike.png",
  },
  {
    id: 85,
    name: "N64 Yoshi Valley",
    img: "MK8-_N64_Yoshi_Valley.png",
  },
  {
    id: 86,
    name: "Rainbow Road",
    img: "MK8-_Rainbow_Road.png",
  },
  {
    id: 87,
    name: "SNES Donut Plains 3",
    img: "MK8-_SNES_Donut_Plains_3.png",
  },
  {
    id: 88,
    name: "Shy Guy Falls",
    img: "MK8-_Shy_Guy_Falls.png",
  },
  {
    id: 89,
    name: "Sunshine Airport",
    img: "MK8-_Sunshine_Airport.png",
  },
  {
    id: 90,
    name: "Sweet Sweet Canyon",
    img: "MK8-_Sweet_Sweet_Canyon.png",
  },
  {
    id: 91,
    name: "Thwomp Ruins",
    img: "MK8-_Thwomp_Ruins.png",
  },
  {
    id: 92,
    name: "Toad Harbor",
    img: "MK8-_Toad_Harbor.png",
  },
  {
    id: 93,
    name: "Twisted Mansion",
    img: "MK8-_Twisted_Mansion.png",
  },
  {
    id: 94,
    name: "Water Park",
    img: "MK8-_Water_Park.png",
  },
  {
    id: 95,
    name: "Wii Grumble Volcano",
    img: "MK8-_Wii_Grumble_Volcano.png",
  },
  {
    id: 96,
    name: "Wii Moo Moo Meadows",
    img: "MK8-_Wii_Moo_Moo_Meadows.png",
  },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tracks").del();
  await knex("tracks").insert(tracks);
};
