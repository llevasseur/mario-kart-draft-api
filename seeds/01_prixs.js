/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const prixs = [
  { id: 1, name: "Mushroom Cup", icon: "MK8_MushroomCup.png" },
  { id: 2, name: "Flower Cup", icon: "MK8_FlowerCup.png" },
  { id: 3, name: "Star Cup", icon: "MK8_Star_Cup_Emblem.png" },
  { id: 4, name: "Special Cup", icon: "MK8_Special_Cup_Emblem.png" },
  { id: 5, name: "Egg Cup", icon: "MK8_Egg_Cup_Emblem.png" },
  { id: 6, name: "Crossing Cup", icon: "MK8_Crossing_Cup_Emblem.png" },
  { id: 7, name: "Shell Cup", icon: "MK8_Shell_Cup_Emblem.png" },
  { id: 8, name: "Banana Cup", icon: "MK8_Banana_Cup_Emblem.png" },
  { id: 9, name: "Leaf Cup", icon: "MK8_Leaf_Cup_Emblem.png" },
  { id: 10, name: "Lightning Cup", icon: "MK8_Lightning_Cup_Emblem.png" },
  { id: 11, name: "Triforce Cup", icon: "MK8_Triforce_Cup_Emblem.png" },
  { id: 12, name: "Bell Cup", icon: "MK8_Bell_Cup_Emblem.png" },
  {
    id: 13,
    name: "Golden Dash Cup",
    icon: "140px-MK8D_BCP_Golden_Dash_Emblem.png",
  },
  {
    id: 14,
    name: "Lucky Cat Cup",
    icon: "140px-MK8D_BCP_Lucky_Cat_Emblem.png",
  },
  { id: 15, name: "Turnip Cup", icon: "140px-MK8D_BCP_Turnip_Emblem.png" },
  {
    id: 16,
    name: "Propeller Cup",
    icon: "140px-MK8D_BCP_Propeller_Emblem.png",
  },
  { id: 17, name: "Rock Cup", icon: "140px-MK8D_BCP_Rock_Emblem.png" },
  { id: 18, name: "Moon Cup", icon: "140px-MK8D_BCP_Moon_Emblem.png" },
  { id: 19, name: "Fruit Cup", icon: "140px-MK8D_BCP_Fruit_Emblem.png" },
  {
    id: 20,
    name: "Boomerang Cup",
    icon: "140px-MK8D_BCP_Boomerang_Emblem.png",
  },
  { id: 21, name: "Feather Cup", icon: "140px-MK8D_BCP_Feather_Emblem.png" },
  { id: 22, name: "Cherry Cup", icon: "140px-MK8D_BCP_Cherry_Emblem.png" },
  { id: 23, name: "Acorn Cup", icon: "140px-MK8D_BCP_Acorn_Emblem.png" },
  { id: 24, name: "Spiny Cup", icon: "140px-MK8D_BCP_Spiny_Emblem.png" },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("prixs").del();
  await knex("prixs").insert(prixs);
};
