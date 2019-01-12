import React from 'react';
import {
  StyleSheet, View,
  Picker, AsyncStorage
} from 'react-native';
import Check from './components/Check';
import Season from './components/Season';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      language: '',
      seasons: ["spring", "summer", "fall", "winter", "any"],
      season: "spring",
      checks: {
        spring: {
          foraging: {
            "Wild Horseradish": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Spring Foraging",
                lastChance: true
              },
              checked: false,
              image: require('./assets/Wild_Horseradish.png')
            },
            "Leek": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Spring Foraging",
                lastChance: true
              },
              checked: false,
              image: require('./assets/Leek.png')
            },
            "Daffodil": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Spring Foraging",
                lastChance: true
              },
              checked: false,
              image: require('./assets/Daffodil.png')
            },
            "Dandelion": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Spring Foraging",
                lastChance: true
              },
              checked: false,
              image: require('./assets/Dandelion.png')
            },
            "Morel": {
              expanse: {
                location: "Secret Woods",
                bundle: "Exotic Foraging",
                lastChance: true
              },
              checked: false,
              image: require('./assets/Morel.png')
            },
            "Common Mushroom": {
              expanse: {
                location: "Secret Woods",
                bundle: "Fall Foraging",
                lastChance: false
              },
              checked: false,
              image: require('./assets/Common_Mushroom.png')
            },
          },
          farming: {
            "Parsnip": {
              expanse: {
                location: "Farm",
                bundle: "Spring Crops",
                lastChance: true
              },
              image: require('./assets/Parsnip.png')
            },
            "Parsnip(Gold Quality) x5": {
              expanse: {
                location: "Farm",
                bundle: "Quality Crops",
                lastChance: true
              },
              image: require('./assets/Gold_Parsnip.png')
            },
            "Cauliflower": {

              expanse: {
                location: "Farm",
                bundle: "Spring Crops",
                lastChance: true
              },
              image: require('./assets/Cauliflower.png')
            },
            "Potato": {
              expanse: {
                location: "Farm",
                bundle: "Spring Crops",
                lastChance: true
              },
              image: require('./assets/Potato.png')
            },
            "Green Bean": {
              expanse: {
                location: "Farm",
                bundle: "Spring Crops",
                lastChance: true
              },
              image: require('./assets/Green_Bean.png')
            },
            "Apricot": {
              expanse: {
                location: "Farm",
                bundle: "Artisan",
                lastChance: true
              },
              image: require('./assets/Apricot.png')
            },
            "Cherry": {
              expanse: {
                location: "Farm",
                bundle: "Artisan",
                lastChance: true
              },
              image: require('./assets/Cherry.png')
            },
          },
          fishing: {
            "Sunfish": {
              expanse: {
                location: "River",
                bundle: "River Fish",
                lastChance: false
              },
              image: require('./assets/Sunfish.png')
            },
            "Sardine": {
              expanse: {
                location: "Ocean",
                bundle: "Ocean Fish",
                lastChance: false
              },
              image: require('./assets/Sardine.png')

            },
            "Eel": {
              expanse: {
                location: "Ocean",
                bundle: "Night Fishing",
                lastChance: false
              },
              image: require('./assets/Eel.png')

            },
            "Catfish": {
              expanse: {
                location: "River/Secret Woods",
                bundle: "River Fish",
                lastChance: false
              },
              image: require('./assets/Catfish.png')

            },
            "Shad": {
              expanse: {
                location: "River",
                bundle: "River Fish",
                lastChance: false
              },
              image: require('./assets/Shad.png')
            },
          }
        },
        summer: {
          foraging: {
            "Spice Berry": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Summer Foraging",
                lastChance: true
              },
              image: require('./assets/Spice_Berry.png')
            },
            "Sweet Pea": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Summer Foraging",
                lastChance: true
              },
              image: require('./assets/Sweet_Pea.png')

            },
            "Grape": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Summer Foraging",
                lastChance: true
              },
              image: require('./assets/Grape.png')
            },
            "Fiddlehead Fern": {
              expanse: {
                location: "Secret Woods",
                bundle: "Chef",
                lastChance: true
              },
              image: require('./assets/Fiddlehead_Fern.png')
            },
            "Red Mushroom": {
              expanse: {
                location: "Secret Woods",
                bundle: "Exotic Foraging",
                lastChance: false
              },
              image: require('./assets/Red_Mushroom.png')
            },
          },
          farming: {
            "Tomato": {
              expanse: {
                location: "Farm",
                bundle: "Summer Crops",
                lastChance: true
              },
              image: require('./assets/Tomato.png')
            },
            "Hot Pepper": {
              expanse: {
                location: "Farm",
                bundle: "Summer Crops",
                lastChance: true
              },
              image: require('./assets/Hot_Pepper.png')
            },
            "Blueberry": {
              expanse: {
                location: "Farm",
                bundle: "Summer Crops",
                lastChance: true
              },
              image: require('./assets/Blueberry.png')
            },
            "Melon": {
              expanse: {
                location: "Farm",
                bundle: "Summer Crops",
                lastChance: true
              },
              image: require('./assets/Melon.png')
            },
            "Poppy": {
              expanse: {
                location: "Farm",
                bundle: "Chef",
                lastChance: true
              },
              image: require('./assets/Poppy.png')
            },
            "Red Cabbage": {
              expanse: {
                location: "Farm",
                bundle: "Dye",
                lastChance: true
              },
              image: require('./assets/Red_Cabbage.png')
            },
            "Melon (Gold Quality) x5": {
              expanse: {
                location: "Farm",
                bundle: "Quality Crops",
                lastChance: true
              },
              image: require('./assets/Gold_Melon.png')
            },
            "Orange": {
              expanse: {
                location: "Farm",
                bundle: "Artisan",
                lastChance: true
              },
              image: require('./assets/Orange.png')
            },
            "Peach": {
              expanse: {
                location: "Farm",
                bundle: "Artisan",
                lastChance: true
              },
              image: require('./assets/Peach.png')
            },
            "Sunflower": {
              expanse: {
                location: "Farm",
                bundle: "Dye",
                lastChance: false
              },
              image: require('./assets/Sunflower.png')
            },
            "Wheat x10": {
              expanse: {
                location: "Farm",
                bundle: "Fodder",
                lastChance: false
              },
              image: require('./assets/Wheat.png')
            },
            "Corn (Gold Quality) x5": {
              expanse: {
                location: "Farm",
                bundle: "Quality Crops",
                lastChance: false
              },
              image: require('./assets/Gold_Corn.png')
            },
          },
          fishing: {
            "Sunfish": {
              expanse: {
                location: "River",
                bundle: "River Fish",
                lastChance: true
              },
              image: require('./assets/Sunfish.png')
            },
            "Pufferfish": {
              expanse: {
                location: "Ocean",
                bundle: "Specialty Fish",
                lastChance: true
              },
              image: require('./assets/Pufferfish.png')
            },
            "Tilapia": {
              expanse: {
                location: "Ocean",
                bundle: "Ocean Fish",
                lastChance: false
              },
              image: require('./assets/Tilapia.png')
            },
            "Tuna": {
              expanse: {
                location: "Ocean",
                bundle: "Ocean Fish",
                lastChance: false
              },
              image: require('./assets/Tuna.png')
            },
            "Sturgeon": {
              expanse: {
                location: "Mountain Lake",
                bundle: "Lake Fish",
                lastChance: false
              },
              image: require('./assets/Sturgeon.png')
            },
            "Red Snapper": {
              expanse: {
                location: "Ocean",
                bundle: "Ocean Fish",
                lastChance: false
              },
              image: require('./assets/Red_Snapper.png')
            },
            "Catfish": {
              expanse: {
                location: "River, Secret Woods",
                bundle: "River Fish",
                lastChance: false,
                details: "Only when raining"
              },
              image: require('./assets/Catfish.png')
            },
            "Shad": {
              expanse: {
                location: "River",
                bundle: "River Fish",
                lastChance: false
              },
              image: require('./assets/Shad.png')
            },
          }
        },
        fall: {
          foraging: {
            "Wild Plum": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Fall Foraging",
                lastChance: true
              },
              image: require('./assets/Wild_Plum.png')
            },
            "Hazelnut": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Fall Foraging",
                lastChance: true
              },
              image: require('./assets/Hazelnut.png')
            },
            "Blackberry": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Fall Foraging",
                lastChance: true
              },
              image: require('./assets/Blackberry.png')
            },
            "Red Mushroom": {
              expanse: {
                location: "Secret Woods",
                bundle: "Exotic Foraging",
                lastChance: true
              },
              image: require('./assets/Red_Mushroom.png')
            },
            "Common Mushroom": {
              expanse: {
                location: "Secret Woods",
                bundle: "Fall Foraging",
                lastChance: false
              },
              image: require('./assets/Common_Mushroom.png')
            },
          },
          farming: {
            "Corn": {
              expanse: {
                location: "Farm",
                bundle: "Fall Crops",
                lastChance: true
              },
              image: require('./assets/Corn.png')
            },
            "Corn (Gold Quality) x5": {
              expanse: {
                location: "Farm",
                bundle: "Quality Crops",
                lastChance: true
              },
              image: require('./assets/Gold_Corn.png')
            },
            "Sunflower": {
              expanse: {
                location: "Farm",
                bundle: "Dye",
                lastChance: true
              },
              image: require('./assets/Sunflower.png')
            },
            "Wheat x10": {
              expanse: {
                location: "Farm",
                bundle: "Fodder",
                lastChance: true
              },
              image: require('./assets/Wheat.png')
            },
            "Eggplant": {
              expanse: {
                location: "Farm",
                bundle: "Fall Crops",
                lastChance: true
              },
              image: require('./assets/Eggplant.png')
            },
            "Pumpkin": {
              expanse: {
                location: "Farm",
                bundle: "Fall Crops",
                lastChance: true
              },
              image: require('./assets/Pumpkin.png')
            },
            "Pumpkin (Gold Quality) x5": {
              expanse: {
                location: "Farm",
                bundle: "Quality Crops",
                lastChance: true
              },
              image: require('./assets/Gold_Pumpkin.png')
            },
            "Yam": {
              expanse: {
                location: "Farm",
                bundle: "Fall Crops",
                lastChance: true
              },
              image: require('./assets/Yam.png')
            },
            "Pomegranate x2": {
              expanse: {
                location: "Farm",
                bundle: "Enchanters & Artisan",
                lastChance: true
              },
              image: require('./assets/Pomegranate.png')
            },
            "Apple x4": {
              expanse: {
                location: "Farm",
                bundle: "Fodder & Artisan",
                lastChance: true
              },
              image: require('./assets/Apple.png')
            },
          },
          fishing: {
            "Red Snapper": {
              expanse: {
                location: "Ocean",
                bundle: "Ocean Fish",
                lastChance: true
              },
              image: require('./assets/Red_Snapper.png')
            },
            "Walleye": {
              expanse: {
                location: "River, Forest Pond, Mountain Lake",
                bundle: "Night Fishing",
                lastChance: true
              },
              image: require('./assets/Walleye.png')
            },
            "Eel": {
              expanse: {
                location: "Ocean",
                bundle: "Night Fishing",
                lastChance: true
              },
              image: require('./assets/Eel.png')
            },
            "Catfish": {
              expanse: {
                location: "River & Secret Woods",
                bundle: "River Fish",
                lastChance: true
              },
              image: require('./assets/Catfish.png')
            },
            "Shad": {
              expanse: {
                location: "River",
                bundle: "River Fish",
                lastChance: true
              },
              image: require('./assets/Shad.png')
            },
            "Tilapia": {
              expanse: {
                location: "Ocean",
                bundle: "Ocean Fish",
                lastChance: true
              },
              image: require('./assets/Tilapia.png')
            },
            "Tiger Trout": {
              expanse: {
                location: "River",
                bundle: "River Fish",
                lastChance: false
              },
              image: require('./assets/Tiger_Trout.png')
            },
            "Sardine": {
              expanse: {
                location: "Ocean",
                bundle: "Ocean Fish",
                lastChance: false
              },
              image: require('./assets/Sardine.png')
            },
          }
        },
        winter: {
          forage: {
            "Winter Root": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Winter Foraging",
                lastChance: true
              },
              image: require('./assets/Winter_Root.png')
            },
            "Crystal Fruit": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Winter Foraging",
                lastChance: true
              },
              image: require('./assets/Crystal_Fruit.png')
            },
            "Crocus": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Winter Foraging",
                lastChance: true
              },
              image: require('./assets/Crocus.png')
            },
            "Snow Yam": {
              expanse: {
                location: "Stardew Valley",
                bundle: "Winter Foraging",
                lastChance: true
              },
              image: require('./assets/Snow_Yam.png')
            },
            "Nautilus Shell": {
              expanse: {
                location: "Beach",
                bundle: "Field Research",
                lastChance: true
              },
              image: require('./assets/Nautilus_Shell.png')
            },
          },
          fishing: {
            "Tiger Trout": {
              expanse: {
                location: "River",
                bundle: "River Fish",
                lastChance: true
              },
              image: require('./assets/Tiger_Trout.png')
            },
            "Sturgeon": {
              expanse: {
                location: "Mountain Lake",
                bundle: "Lake Fish",
                lastChance: true
              },
              image: require('./assets/Sturgeon.png')
            },
            "Sardine": {
              expanse: {
                location: "Ocean",
                bundle: "Ocean Fish",
                lastChance: true
              },
              image: require('./assets/Sardine.png')
            },
            "Tuna": {
              expanse: {
                location: "Ocean",
                bundle: "Ocean Fish",
                lastChance: true
              },
              image: require('./assets/Tuna.png')
            },
          }
        },
        any: {
          foraging: {
            "Coconut": {
              expanse: {
                location: "Desert",
                bundle: "Exotic Foraging",
                lastChance: false
              },
              image: require('./assets/Coconut.png')
            },
            "Cactus Fruit": {
              expanse: {
                location: "Desert",
                bundle: "Exotic Foraging",
                lastChance: false
              },
              image: require('./assets/Cactus_Fruit.png')
            },
            "Cockle": {
              expanse: {
                location: "Beach",
                bundle: "Crab Pot",
                lastChance: false
              },
              image: require('./assets/Cockle.png')
            },
            "Mussel": {
              expanse: {
                location: "Beach",
                bundle: "Crab Pot",
                lastChance: false
              },
              image: require('./assets/Mussel.png')
            },
            "Clam": {
              expanse: {
                location: "Beach",
                bundle: "Crab Pot",
                lastChance: false
              },
              image: require('./assets/Clam.png')
            },
            "Sea Urchin": {
              expanse: {
                location: "Beach",
                bundle: "Dye",
                lastChance: false
              },
              image: require('./assets/Sea_Urchin.png')
            },
            "Purple Mushroom x2": {
              expanse: {
                location: "The Mines (Floors 81+)",
                bundle: "Field Research & Exotic",
                lastChance: false
              },
              image: require('./assets/Purple_Mushroom.png')
            },
          },
          farming: {
            "Large Milk": {
              expanse: {
                location: "Farm - Cows",
                bundle: "Animal",
                lastChance: false
              },
              image: require('./assets/Large_Milk.png')
            },
            "Large Egg (Brown)": {
              expanse: {
                location: "Farm - Brown Chickens",
                bundle: "Animal",
                lastChance: false
              },
              image: require('./assets/Large_Egg_Brown.png')
            },
            "Large Egg (White)": {
              expanse: {
                location: "Farm - White Chickens",
                bundle: "Animal",
                lastChance: false
              },
              image: require('./assets/Large_Egg_White.png')
            },
            "Large Goat Milk": {
              expanse: {
                location: "Farm - Goats",
                bundle: "Animal",
                lastChance: false
              },
              image: require('./assets/Large_Goat_Milk.png')
            },
            "Duck Egg": {
              expanse: {
                location: "Farm - Ducks",
                bundle: "Animal",
                lastChance: false
              },
              image: require('./assets/Duck_Egg.png')
            },
            "Wool": {
              expanse: {
                location: "Farm - Sheep",
                bundle: "Animal",
                lastChance: false
              },
              image: require('./assets/Wool.png')
            },
            "Truffle": {
              expanse: {
                location: "Farm - Pigs",
                bundle: "Chef",
                lastChance: false
              },
              image: require('./assets/Truffle.png')
            },
            "Duck Feather": {
              expanse: {
                location: "Farm - Ducks",
                bundle: "Dye",
                lastChance: false
              },
              image: require('./assets/Duck_Feather.png')
            },
            "Jelly": {
              expanse: {
                location: "Farm - Fruit in Keg",
                bundle: "Artisan",
                lastChance: false
              },
              image: require('./assets/Jelly.png')
            },
            "Honey": {
              expanse: {
                location: "Farm - Bee House",
                bundle: "Artisan",
                lastChance: false
              },
              image: require('./assets/Honey.png')
            },
            "Truffle Oil": {
              expanse: {
                location: "Farm - Oil Maker",
                bundle: "Artisan",
                lastChance: false
              },
              image: require('./assets/Truffle_Oil.png')
            },
            "Goat Cheese": {
              expanse: {
                location: "Farm - Cheese Press",
                bundle: "Artisan",
                lastChance: false
              },
              image: require('./assets/Goat_Cheese.png')
            },
            "Cloth": {
              expanse: {
                location: "Farm - Loom",
                bundle: "Artisan",
                lastChance: false
              },
              image: require('./assets/Cloth.png')
            },
            "Cheese": {
              expanse: {
                location: "Farm - Cheese Press",
                bundle: "Animal",
                lastChance: false
              },
              image: require('./assets/Cheese.png')
            },
            "Maple Syrup": {
              expanse: {
                location: "Tapped Maple Tree",
                bundle: "Exotic Foraging",
                lastChance: false
              },
              image: require('./assets/Maple_Syrup.png')
            },
            "Pine Tar": {
              expanse: {
                location: "Tapped Pine Tree",
                bundle: "Exotic Foraging",
                lastChance: false
              },
              image: require('./assets/Pine_Tar.png')
            },
            "Oak Resin x2": {
              expanse: {
                location: "Tapped Oak Tree",
                bundle: "Enchanter & Exotic",
                lastChance: false
              },
              image: require('./assets/Oak_Resin.png')
            },
            "Wine": {
              expanse: {
                location: "Farm - Casks/Kegs",
                bundle: "Enchanter",
                lastChance: false
              },
              image: require('./assets/Wine.png')
            },
            "Rabbit's Foot": {
              expanse: {
                location: "Farm - Rabbits",
                bundle: "Enchanter",
                lastChance: false
              },
              image: require('./assets/Rabbit\'s_Foot.png')
            },
          },
          fishing: {
            "Bullhead": {
              expanse: {
                location: "Mountain Lake",
                bundle: "Lake Fish",
                lastChance: false
              },
              image: require('./assets/Bullhead.png')
            },
            "Largemouth Bass": {
              expanse: {
                location: "Mountain Lake",
                bundle: "Lake Fish",
                lastChance: false
              },
              image: require('./assets/Largemouth_Bass.png')
            },
            "Lobster": {
              expanse: {
                location: "Ocean - Crab Pots",
                bundle: "Crab Pot",
                lastChance: false
              },
              image: require('./assets/Lobster.png')
            },
            "Crayfish": {
              expanse: {
                location: "River, Lake - Crab Pots",
                bundle: "Crab Pot",
                lastChance: false
              },
              image: require('./assets/Crayfish.png')
            },
            "Crab": {
              expanse: {
                location: "Ocean - Crab Pots",
                bundle: "Crab Pots",
                lastChance: false
              },
              image: require('./assets/Crab.png')
            },
            "Shrimp": {
              expanse: {
                location: "Ocean - Crab Pots",
                bundle: "Crab Pot",
                lastChance: false
              },
              image: require('./assets/Shrimp.png')
            },
            "Snail": {
              expanse: {
                location: "River, Lake - Crab Pots",
                bundle: "Crab Pot",
                lastChance: false
              },
              image: require('./assets/Snail.png')
            },
            "Periwinkle": {
              expanse: {
                location: "River, Lake - Crab Pots",
                bundle: "Crab Pot",
                lastChance: false
              },
              image: require('./assets/Periwinkle.png')
            },
            "Oyster": {
              expanse: {
                location: "Ocean - Crab Pots",
                bundle: "Crab Pot",
                lastChance: false
              },
              image: require('./assets/Oyster.png')
            },
            "Ghostfish": {
              expanse: {
                location: "Cave Fishing, Killing Ghosts",
                bundle: "Specialty Fish",
                lastChance: false
              },
              image: require('./assets/Ghostfish.png')
            },
            "Sandfish": {
              expanse: {
                location: "Desert Fishing",
                bundle: "Specialty Fish",
                lastChance: false
              },
              image: require('./assets/Sandfish.png')
            },
            "Carp": {
              expanse: {
                location: "All Lakes",
                bundle: "Lake Fish",
                lastChance: false
              },
              image: require('./assets/Carp.png')
            },
            "Woodskip": {
              expanse: {
                location: "Secret Woods",
                bundle: "Speciality Fish",
                lastChance: false
              },
              image: require('./assets/Woodskip.png')
            },
            "Chub": {
              expanse: {
                location: "Anywhere",
                bundle: "Field Research",
                lastChance: false
              },
              image: require('./assets/Chub.png')
            },
            "Bream": {
              expanse: {
                location: "River",
                bundle: "Night Fishing",
                lastChance: false
              },
              image: require('./assets/Bream.png')
            },
          },
          "mining and combat": {
            "Copper Bar": {
              expanse: {
                location: "The Mines",
                bundle: "Blacksmith",
              },
              image: require('./assets/Copper_Bar.png')
            },
            "Iron Bar": {
              expanse: {
                location: "The Mines (Floors 40+)",
                bundle: "Blacksmith",
              },
              image: require('./assets/Iron_Bar.png')
            },
            "Gold Bar x6": {
              expanse: {
                location: "The Mines (Floors 80+)",
                bundle: "Blacksmith & Enchanters",
              },
              image: require('./assets/Gold_Bar.png')
            },
            "Quartz": {
              expanse: {
                location: "The Mines",
                bundle: "Geologist",
              },
              image: require('./assets/Quartz.png')
            },
            "Earth Crystal": {
              expanse: {
                location: "The Mines (Floors 1-39)",
                bundle: "Geologist",
              },
              image: require('./assets/Earth_Crystal.png')
            },
            "Frozen Tear": {
              expanse: {
                location: "The Mines (Floors 40-79) ",
                bundle: "Geologist",
              },
              image: require('./assets/Frozen_Tear.png')
            },
            "Fire Quartz": {
              expanse: {
                location: "The Mines (Floors 80-120)",
                bundle: "Geologist",
              },
              image: require('./assets/Fire_Quartz.png')
            },
            "Aquamarine": {
              expanse: {
                location: "The Mines",
                bundle: "Dye",
              },
              image: require('./assets/Aquamarine.png')
            },
            "Frozen Geode": {
              expanse: {
                location: "The Mines (Floors 40-79)",
                bundle: "Field Research",
              },
              image: require('./assets/Frozen_Geode.png')
            },
            "Bat Wings x10": {
              expanse: {
                location: "The Mines",
                bundle: "Adventurer",
              },
              image: require('./assets/Bat_Wings.png')
            },
            "Slime x99": {
              expanse: {
                location: "The Mines",
                bundle: "Adventurer",
              },
              image: require('./assets/Slime.png')
            },
            "Solar Essence": {
              expanse: {
                location: "The Mines (Floors 31+)",
                bundle: "Adventurer",
              },
              image: require('./assets/Solar_Essence.png')
            },
            "Void Essence": {
              expanse: {
                location: "The Mines (Floors 81+)",
                bundle: "Blacksmith",
              },
              image: require('./assets/Void_Essence.png')
            },
            "Cave Carrot": {
              expanse: {
                location: "The Mines",
                bundle: "Exotic Foraging",
              },
              image: require('./assets/Cave_Carrot.png')
            },
          },
          "misc.": {
            "Maki Roll": {
              expanse: {
                location: "Cooking",
                bundle: "Chef"
              },
              image: require('./assets/Maki_Roll.png')
            },
            "Fried Egg": {
              expanse: {
                location: "Cooking",
                bundle: "Chef"
              },
              image: require('./assets/Fried_Egg.png')
            },
            "Hay x10": {
              expanse: {
                location: "Farm - Grass",
                bundle: "Fodder"
              },
              image: require('./assets/Hay.png')
            },
            "Wood x198": {
              expanse: {
                location: "Trees",
                bundle: "Construction"
              },
              image: require('./assets/Wood.png')
            },
            "Stone x99": {
              expanse: {
                location: "Rocks",
                bundle: "Construction"
              },
              image: require('./assets/Stone.png')
            },
            "Hardwood x10": {
              expanse: {
                location: "Big Tree Stumps & Logs",
                bundle: "Construction"
              },
              image: require('./assets/Hardwood.png')
            },
            "Money x2.5k": {
              expanse: {
                location: "-",
                bundle: "Vault"
              },
              image: require('./assets/Money.png')
            },
            "Money x5k": {
              expanse: {
                location: "-",
                bundle: "Vault"
              },
              image: require('./assets/Money.png')
            },
            "Money x10k": {
              expanse: {
                location: "-",
                bundle: "Vault"
              },
              image: require('./assets/Money.png')
            },
            "Money x25k": {
              expanse: {
                location: "-",
                bundle: "Vault"
              },
              image: require('./assets/Money.png')
            },
          }
        }
      }

    }
    this.check = this.check.bind(this)
    this.storeData = this.storeData.bind(this)
    this.loadData = this.loadData.bind(this)

    this.loadData()
  }
  // used for propagating up changes in checks
  check(season, category, name, checked) {
    const newState = Object.assign({}, this.state)
    newState.checks[season][category][name]["checked"] = checked
    this.setState(newState, () => {
      this.storeData()
    })
    //this.state.checks[season][category][name]["checked"] = checked
  }
  storeData = async () => {
    try {
      await AsyncStorage.setItem('checks', JSON.stringify(this.state.checks))
    }
    catch (error) {
      console.log(error.message)
    }
  }
  loadData = async () => {
    let data = null
    try {
      data = await AsyncStorage.getItem('checks')
    }
    catch (error) {
      console.log(error.message)
    }
    if (data != null) {
      this.setState({ checks: JSON.parse(data) })
    }
  }
  render() {
    let x = []
    let count = 0
    for (const s in this.state.seasons) {
      x.push(<Picker.Item key={count} label={this.state.seasons[s]} value={this.state.seasons[s]} />)
      count++
    }
    return (
      <View style={styles.container}>
        <Picker style={styles.picker}
          selectedValue={this.state.season}
          onValueChange={(value, index) => { this.setState({ season: value }, () => { this.forceUpdate() }) }}
        >
          {x}
        </Picker>
        <Season season={this.state.season} checks={this.state.checks[this.state.season]} check={this.check} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    /*
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    */
    marginBottom: 100
  },
  picker: {
    marginTop: 50,
    width: 150
  }
});
