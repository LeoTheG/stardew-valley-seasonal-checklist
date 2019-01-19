export const initChecks = () => {
    const x = JSON.stringify(checks)
    return JSON.parse(x)

}
const categories = {
    fishing: 'fishing',
    foraging: 'foraging',
    farming: 'foraging',
}
const seasons = {
    spring: 'spring',
    summer: 'summer',
    fall: 'fall',
    winter: 'winter'
}
// mark all duplicates in every season already checked
export function checkDuplicates(checks) {
    for (const season in checks) {
        for (const category in checks[season]) {
            for (const itemName in checks[season][category]) {
                const checked = checks[season][category][itemName].checked || false
                // duplicates exist and is checked
                if (itemName in duplicates && checked) {
                    for (const s in duplicates[itemName].seasons) {
                        const seasonName = duplicates[itemName].seasons[s]
                        checks[seasonName][category][itemName].checked = true
                    }
                }
            }
        }
    }
}
// check if duplicate, if so mark all entries of item across seasons
export function markDuplicate(checks, itemName, checked) {
    return new Promise((resolve, reject) => {
        if (itemName in duplicates) {
            const category = duplicates[itemName].category
            for (const season in duplicates[itemName].seasons) {
                const seasonName = duplicates[itemName].seasons[season]
                checks[seasonName][category][itemName].checked = checked
                console.log("marked duplicate " + itemName + " in season " + seasonName)
            }
            resolve()
        }
    })
}
const duplicates = {
    'Sunfish': {
        category: categories.fishing,
        seasons: [seasons.spring, seasons.summer]
    },
    'Catfish': {
        category: categories.fishing,
        seasons: [seasons.spring, seasons.summer, seasons.fall],
    },
    'Shad': {
        category: categories.fishing,
        seasons: [seasons.spring, seasons.summer, seasons.fall]
    },
    'Red Mushroom x2': {
        category: categories.foraging,
        seasons: [seasons.summer, seasons.fall]
    },
    'Common Mushroom': {
        category: categories.foraging,
        seasons: [seasons.spring, seasons.fall]
    },
    'Corn(Gold Quality) x5': {
        category: categories.farming,
        seasons: [seasons.summer, seasons.fall]
    },
    'Sunflower': {
        category: categories.farming,
        seasons: [seasons.summer, seasons.fall]
    },
    'Wheat x10': {
        category: categories.farming,
        seasons: [seasons.summer, seasons.fall]
    },
    'Red Snapper': {
        category: categories.fishing,
        seasons: [seasons.summer, seasons.fall]
    },
    'Eel': {
        category: categories.fishing,
        seasons: [seasons.spring, seasons.fall]
    },
    'Tilapia': {
        category: categories.fishing,
        seasons: [seasons.summer, seasons.fall]
    },
    'Sardine': {
        category: categories.fishing,
        seasons: [seasons.spring, seasons.fall, seasons.winter]
    },
    'Tiger Trout': {
        category: categories.fishing,
        seasons: [seasons.fall, seasons.winter]
    },
    'Sturgeon': {
        category: categories.fishing,
        seasons: [seasons.summer, seasons.winter],
    },
    'Tuna': {
        category: categories.fishing,
        seasons: [seasons.summer, seasons.winter]
    }
}
/*
export const getDuplicates = () => {
    const names = {}
    const duplicates = []
    for(const season in checks){
        for(const category in checks[season]){
            for(const itemName in checks[season][category]){
                //const item = checks[season][category][itemName]
                if(!names[itemName]) names[itemName] = itemName
                else duplicates.push(itemName)
            }
        }
    }
    console.log("duplicates: " + duplicates)
}
*/
const checks = {
    spring: {
        foraging: {
            'Wild Horseradish': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Spring Foraging',
                    lastChance: true
                },
                checked: false,
                image: require('./assets/Wild_Horseradish.png')
            },
            'Leek': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Spring Foraging',
                    lastChance: true
                },
                checked: false,
                image: require('./assets/Leek.png')
            },
            'Daffodil': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Spring Foraging',
                    lastChance: true
                },
                checked: false,
                image: require('./assets/Daffodil.png')
            },
            'Dandelion': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Spring Foraging',
                    lastChance: true
                },
                checked: false,
                image: require('./assets/Dandelion.png')
            },
            'Morel': {
                expanse: {
                    location: 'Secret Woods, Mushroom Cave',
                    bundle: 'Exotic Foraging',
                    lastChance: true,
                },
                checked: false,
                image: require('./assets/Morel.png')
            },
            'Common Mushroom': {
                expanse: {
                    location: 'Secret Woods, Mushroom Cave',
                    bundle: 'Fall Foraging',
                    lastChance: false
                },
                checked: false,
                image: require('./assets/Common_Mushroom.png')
            },
        },
        farming: {
            'Parsnip': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Spring Crops',
                    lastChance: true
                },
                image: require('./assets/Parsnip.png')
            },
            'Parsnip(Gold Quality) x5': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Quality Crops',
                    lastChance: true
                },
                image: require('./assets/Gold_Parsnip.png')
            },
            'Cauliflower': {

                expanse: {
                    location: 'Farm',
                    bundle: 'Spring Crops',
                    lastChance: true
                },
                image: require('./assets/Cauliflower.png')
            },
            'Potato': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Spring Crops',
                    lastChance: true
                },
                image: require('./assets/Potato.png')
            },
            'Green Bean': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Spring Crops',
                    lastChance: true
                },
                image: require('./assets/Green_Bean.png')
            },
            'Apricot': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Artisan',
                    lastChance: true,
                    details: 'Must be planted before Spring. Not possible in Year 1'
                },
                image: require('./assets/Apricot.png')
            },
            'Cherry': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Artisan',
                    lastChance: true,
                    details: 'Must be planted before Spring. Not possible in Year 1'
                },
                image: require('./assets/Cherry.png')
            },
        },
        fishing: {
            'Sunfish': {
                expanse: {
                    location: 'River',
                    bundle: 'River Fish',
                    lastChance: false,
                    details: '6AM to 7PM only'
                },
                image: require('./assets/Sunfish.png')
            },
            'Sardine': {
                expanse: {
                    location: 'Ocean',
                    bundle: 'Ocean Fish',
                    lastChance: false,
                    details: '6AM to 7PM only'
                },
                image: require('./assets/Sardine.png')

            },
            'Eel': {
                expanse: {
                    location: 'Ocean',
                    bundle: 'Night Fishing',
                    lastChance: false,
                    details: 'Raining; 4PM to 2AM only'
                },
                image: require('./assets/Eel.png')

            },
            'Catfish': {
                expanse: {
                    location: 'River/Secret Woods',
                    bundle: 'River Fish',
                    lastChance: false,
                    details: 'Only when raining'
                },
                image: require('./assets/Catfish.png')

            },
            'Shad': {
                expanse: {
                    location: 'River',
                    bundle: 'River Fish',
                    lastChance: false,
                    details: 'Only when raining'
                },
                image: require('./assets/Shad.png')
            },
        }
    },
    summer: {
        foraging: {
            'Spice Berry': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Summer Foraging',
                    lastChance: true
                },
                image: require('./assets/Spice_Berry.png')
            },
            'Sweet Pea': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Summer Foraging',
                    lastChance: true
                },
                image: require('./assets/Sweet_Pea.png')

            },
            'Grape': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Summer Foraging',
                    lastChance: true,
                    details: 'Can also be grown on farm'
                },
                image: require('./assets/Grape.png')
            },
            'Fiddlehead Fern': {
                expanse: {
                    location: 'Secret Woods',
                    bundle: 'Chef',
                    lastChance: true
                },
                image: require('./assets/Fiddlehead_Fern.png')
            },
            'Red Mushroom x2': {
                expanse: {
                    location: 'Secret Woods',
                    bundle: 'Exotic Foraging',
                    lastChance: false,
                    details: 'Also in Mushroom Cave and The Mines (Floors 27+)'
                },
                image: require('./assets/Red_Mushroom.png')
            },
        },
        farming: {
            'Tomato': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Summer Crops',
                    lastChance: true
                },
                image: require('./assets/Tomato.png')
            },
            'Hot Pepper': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Summer Crops',
                    lastChance: true
                },
                image: require('./assets/Hot_Pepper.png')
            },
            'Blueberry': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Summer Crops',
                    lastChance: true
                },
                image: require('./assets/Blueberry.png')
            },
            'Melon': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Summer Crops',
                    lastChance: true
                },
                image: require('./assets/Melon.png')
            },
            'Poppy': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Chef',
                    lastChance: true
                },
                image: require('./assets/Poppy.png')
            },
            'Red Cabbage': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Dye',
                    lastChance: true,
                    details: 'Available Year 2 from Pierre; Possible to get from traveling cart.'
                },
                image: require('./assets/Red_Cabbage.png')
            },
            'Melon (Gold Quality) x5': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Quality Crops',
                    lastChance: true
                },
                image: require('./assets/Gold_Melon.png')
            },
            'Orange': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Artisan',
                    lastChance: true,
                    details: 'Must be planted before Summer'
                },
                image: require('./assets/Orange.png')
            },
            'Peach': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Artisan',
                    lastChance: true,
                    details: 'Must be planted before Summer'
                },
                image: require('./assets/Peach.png')
            },
            'Sunflower': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Dye',
                    lastChance: false,
                    details: 'Also plantable in Fall'
                },
                image: require('./assets/Sunflower.png')
            },
            'Wheat x10': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Fodder',
                    lastChance: false,
                    details: 'Also plantable in Fall'
                },
                image: require('./assets/Wheat.png')
            },
            'Corn (Gold Quality) x5': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Quality Crops',
                    lastChance: false
                },
                image: require('./assets/Gold_Corn.png')
            },
        },
        fishing: {
            'Sunfish': {
                expanse: {
                    location: 'River',
                    bundle: 'River Fish',
                    lastChance: true,
                    details: '6AM to 7PM only'
                },
                image: require('./assets/Sunfish.png')
            },
            'Pufferfish': {
                expanse: {
                    location: 'Ocean',
                    bundle: 'Specialty Fish',
                    lastChance: true,
                    details: '12PM to 4PM only'
                },
                image: require('./assets/Pufferfish.png')
            },
            'Tilapia': {
                expanse: {
                    location: 'Ocean',
                    bundle: 'Ocean Fish',
                    lastChance: false,
                    details: '6AM to 2PM only'
                },
                image: require('./assets/Tilapia.png')
            },
            'Tuna': {
                expanse: {
                    location: 'Ocean',
                    bundle: 'Ocean Fish',
                    lastChance: false,
                    details: '6AM to 7PM only'
                },
                image: require('./assets/Tuna.png')
            },
            'Sturgeon': {
                expanse: {
                    location: 'Mountain Lake',
                    bundle: 'Lake Fish',
                    lastChance: false,
                    details: '6AM to 7PM only'
                },
                image: require('./assets/Sturgeon.png')
            },
            'Red Snapper': {
                expanse: {
                    location: 'Ocean',
                    bundle: 'Ocean Fish',
                    lastChance: false,
                    details: 'Raining; 6AM to 7PM only'
                },
                image: require('./assets/Red_Snapper.png')
            },
            'Catfish': {
                expanse: {
                    location: 'River, Secret Woods',
                    bundle: 'River Fish',
                    lastChance: false,
                    details: 'Only when raining'
                },
                image: require('./assets/Catfish.png')
            },
            'Shad': {
                expanse: {
                    location: 'River',
                    bundle: 'River Fish',
                    lastChance: false,
                    details: 'Only when raining'
                },
                image: require('./assets/Shad.png')
            },
        }
    },
    fall: {
        foraging: {
            'Wild Plum': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Fall Foraging',
                    lastChance: true
                },
                image: require('./assets/Wild_Plum.png')
            },
            'Hazelnut': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Fall Foraging',
                    lastChance: true
                },
                image: require('./assets/Hazelnut.png')
            },
            'Blackberry': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Fall Foraging',
                    lastChance: true,
                    details: 'Found on bushes from Fall 8th to 11th'
                },
                image: require('./assets/Blackberry.png')
            },
            'Red Mushroom x2': {
                expanse: {
                    location: 'Secret Woods',
                    bundle: 'Exotic Foraging',
                    lastChance: true,
                    details: 'Also in Mushroom Cave and The Mines (Floors 27+)'
                },
                image: require('./assets/Red_Mushroom.png')
            },
            'Common Mushroom': {
                expanse: {
                    location: 'Secret Woods, Mushroom Cave',
                    bundle: 'Fall Foraging',
                    lastChance: false
                },
                image: require('./assets/Common_Mushroom.png')
            },
        },
        farming: {
            'Corn': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Fall Crops',
                    lastChance: true
                },
                image: require('./assets/Corn.png')
            },
            'Corn (Gold Quality) x5': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Quality Crops',
                    lastChance: true
                },
                image: require('./assets/Gold_Corn.png')
            },
            'Sunflower': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Dye',
                    lastChance: true
                },
                image: require('./assets/Sunflower.png')
            },
            'Wheat x10': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Fodder',
                    lastChance: true
                },
                image: require('./assets/Wheat.png')
            },
            'Eggplant': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Fall Crops',
                    lastChance: true
                },
                image: require('./assets/Eggplant.png')
            },
            'Pumpkin': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Fall Crops',
                    lastChance: true
                },
                image: require('./assets/Pumpkin.png')
            },
            'Pumpkin (Gold Quality) x5': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Quality Crops',
                    lastChance: true
                },
                image: require('./assets/Gold_Pumpkin.png')
            },
            'Yam': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Fall Crops',
                    lastChance: true
                },
                image: require('./assets/Yam.png')
            },
            'Pomegranate x2': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Enchanters & Artisan',
                    lastChance: true,
                    details: 'Must be planted before Fall'
                },
                image: require('./assets/Pomegranate.png')
            },
            'Apple x4': {
                expanse: {
                    location: 'Farm',
                    bundle: 'Fodder & Artisan',
                    lastChance: true,
                    details: 'Must be planted before Fall'
                },
                image: require('./assets/Apple.png')
            },
        },
        fishing: {
            'Red Snapper': {
                expanse: {
                    location: 'Ocean',
                    bundle: 'Ocean Fish',
                    lastChance: true,
                    details: 'Raining; 6AM to 7PM only'
                },
                image: require('./assets/Red_Snapper.png')
            },
            'Walleye': {
                expanse: {
                    location: 'River, Forest Pond, Mountain Lake',
                    bundle: 'Night Fishing',
                    lastChance: true,
                    details: 'Raining; 12PM to 2AM only'
                },
                image: require('./assets/Walleye.png')
            },
            'Eel': {
                expanse: {
                    location: 'Ocean',
                    bundle: 'Night Fishing',
                    lastChance: true,
                    details: 'Raining; 4PM to 2AM only'
                },
                image: require('./assets/Eel.png')
            },
            'Catfish': {
                expanse: {
                    location: 'River & Secret Woods',
                    bundle: 'River Fish',
                    lastChance: true,
                    details: 'Only when raining'
                },
                image: require('./assets/Catfish.png')
            },
            'Shad': {
                expanse: {
                    location: 'River',
                    bundle: 'River Fish',
                    lastChance: true,
                    details: 'Only when raining'
                },
                image: require('./assets/Shad.png')
            },
            'Tilapia': {
                expanse: {
                    location: 'Ocean',
                    bundle: 'Ocean Fish',
                    lastChance: true,
                    details: '6AM to 2PM only'
                },
                image: require('./assets/Tilapia.png')
            },
            'Tiger Trout': {
                expanse: {
                    location: 'River',
                    bundle: 'River Fish',
                    lastChance: false,
                    details: '6AM to 7PM only'
                },
                image: require('./assets/Tiger_Trout.png')
            },
            'Sardine': {
                expanse: {
                    location: 'Ocean',
                    bundle: 'Ocean Fish',
                    lastChance: false,
                    details: '6AM to 7PM only'
                },
                image: require('./assets/Sardine.png')
            },
        }
    },
    winter: {
        forage: {
            'Winter Root': {
                expanse: {
                    location: 'Stardew Valley, Secret Woods',
                    bundle: 'Winter Foraging',
                    lastChance: true,
                    details: 'Found by digging with hoe outside Farm. Also found in The Mines (Floors 40 - 80)'
                },
                image: require('./assets/Winter_Root.png')
            },
            'Crystal Fruit': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Winter Foraging',
                    lastChance: true,
                    details: 'Also found from Dust Sprites in The Mines (Floors 40 - 80)'
                },
                image: require('./assets/Crystal_Fruit.png')
            },
            'Crocus': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Winter Foraging',
                    lastChance: true
                },
                image: require('./assets/Crocus.png')
            },
            'Snow Yam': {
                expanse: {
                    location: 'Stardew Valley',
                    bundle: 'Winter Foraging',
                    lastChance: true,
                    details: 'Found by digging with hoe outside Farm.'
                },
                image: require('./assets/Snow_Yam.png')
            },
            'Nautilus Shell': {
                expanse: {
                    location: 'Beach',
                    bundle: 'Field Research',
                    lastChance: true
                },
                image: require('./assets/Nautilus_Shell.png')
            },
        },
        fishing: {
            'Tiger Trout': {
                expanse: {
                    location: 'River',
                    bundle: 'River Fish',
                    lastChance: true,
                    details: '6AM to 7PM only'
                },
                image: require('./assets/Tiger_Trout.png')
            },
            'Sturgeon': {
                expanse: {
                    location: 'Mountain Lake',
                    bundle: 'Lake Fish',
                    lastChance: true,
                    details: '6AM to 7PM only'
                },
                image: require('./assets/Sturgeon.png')
            },
            'Sardine': {
                expanse: {
                    location: 'Ocean',
                    bundle: 'Ocean Fish',
                    lastChance: true,
                    details: '6AM to 7PM only'
                },
                image: require('./assets/Sardine.png')
            },
            'Tuna': {
                expanse: {
                    location: 'Ocean',
                    bundle: 'Ocean Fish',
                    lastChance: true,
                    details: '6AM to 7PM only'
                },
                image: require('./assets/Tuna.png')
            },
        }
    },
    any: {
        foraging: {
            'Coconut': {
                expanse: {
                    location: 'Desert',
                    bundle: 'Exotic Foraging',
                    lastChance: false
                },
                image: require('./assets/Coconut.png')
            },
            'Cactus Fruit': {
                expanse: {
                    location: 'Desert',
                    bundle: 'Exotic Foraging',
                    lastChance: false
                },
                image: require('./assets/Cactus_Fruit.png')
            },
            'Cockle': {
                expanse: {
                    location: 'Beach',
                    bundle: 'Crab Pot',
                    lastChance: false
                },
                image: require('./assets/Cockle.png')
            },
            'Mussel': {
                expanse: {
                    location: 'Beach',
                    bundle: 'Crab Pot',
                    lastChance: false
                },
                image: require('./assets/Mussel.png')
            },
            'Clam': {
                expanse: {
                    location: 'Beach',
                    bundle: 'Crab Pot',
                    lastChance: false
                },
                image: require('./assets/Clam.png')
            },
            'Sea Urchin': {
                expanse: {
                    location: 'Beach',
                    bundle: 'Dye',
                    lastChance: false
                },
                image: require('./assets/Sea_Urchin.png')
            },
            'Purple Mushroom x2': {
                expanse: {
                    location: 'The Mines (Floors 81+)',
                    bundle: 'Field Research & Exotic',
                    lastChance: false,
                    details: 'Also found in Mushroom Cave and Skull Cavern'
                },
                image: require('./assets/Purple_Mushroom.png')
            },
        },
        farming: {
            'Large Milk': {
                expanse: {
                    location: 'Farm - Cows',
                    bundle: 'Animal',
                    lastChance: false,
                    details: 'Need to have a high friendship level with chicken'
                },
                image: require('./assets/Large_Milk.png')
            },
            'Large Egg (Brown)': {
                expanse: {
                    location: 'Farm - Brown Chickens',
                    bundle: 'Animal',
                    lastChance: false,
                    details: 'Need to have a high friendship level with chicken'
                },
                image: require('./assets/Large_Egg_Brown.png')
            },
            'Large Egg (White)': {
                expanse: {
                    location: 'Farm - White Chickens',
                    bundle: 'Animal',
                    lastChance: false,
                    details: 'Need to have a high friendship level with chicken'
                },
                image: require('./assets/Large_Egg_White.png')
            },
            'Large Goat Milk': {
                expanse: {
                    location: 'Farm - Goats',
                    bundle: 'Animal',
                    lastChance: false,
                    details: 'Need to have a high friendship level with goat'
                },
                image: require('./assets/Large_Goat_Milk.png')
            },
            'Duck Egg': {
                expanse: {
                    location: 'Farm - Ducks',
                    bundle: 'Animal',
                    lastChance: false
                },
                image: require('./assets/Duck_Egg.png')
            },
            'Wool': {
                expanse: {
                    location: 'Farm - Sheep',
                    bundle: 'Animal',
                    lastChance: false
                },
                image: require('./assets/Wool.png')
            },
            'Truffle': {
                expanse: {
                    location: 'Farm - Pigs',
                    bundle: 'Chef',
                    lastChance: false
                },
                image: require('./assets/Truffle.png')
            },
            'Duck Feather': {
                expanse: {
                    location: 'Farm - Ducks',
                    bundle: 'Dye',
                    lastChance: false,
                    details: 'Must have a least 1 friendship heart'
                },
                image: require('./assets/Duck_Feather.png')
            },
            'Jelly': {
                expanse: {
                    location: 'Farm - Fruit in Keg',
                    bundle: 'Artisan',
                    lastChance: false
                },
                image: require('./assets/Jelly.png')
            },
            'Honey': {
                expanse: {
                    location: 'Farm - Bee House',
                    bundle: 'Artisan',
                    lastChance: false
                },
                image: require('./assets/Honey.png')
            },
            'Truffle Oil': {
                expanse: {
                    location: 'Farm - Oil Maker',
                    bundle: 'Artisan',
                    lastChance: false,
                    details: 'Place a truffle in an oil maker'
                },
                image: require('./assets/Truffle_Oil.png')
            },
            'Goat Cheese': {
                expanse: {
                    location: 'Farm - Cheese Press',
                    bundle: 'Artisan',
                    lastChance: false,
                    details: 'Place goat milk in a cheese press'
                },
                image: require('./assets/Goat_Cheese.png')
            },
            'Cloth': {
                expanse: {
                    location: 'Farm - Loom',
                    bundle: 'Artisan',
                    lastChance: false,
                    details: 'Place wool in a loom. Can also get from using a soggy newspaper in a recycling machine'
                },
                image: require('./assets/Cloth.png')
            },
            'Cheese': {
                expanse: {
                    location: 'Farm - Cheese Press',
                    bundle: 'Animal',
                    lastChance: false,
                    details: 'Place milk in a cheese press'
                },
                image: require('./assets/Cheese.png')
            },
            'Maple Syrup': {
                expanse: {
                    location: 'Tapped Maple Tree',
                    bundle: 'Exotic Foraging',
                    lastChance: false
                },
                image: require('./assets/Maple_Syrup.png')
            },
            'Pine Tar': {
                expanse: {
                    location: 'Tapped Pine Tree',
                    bundle: 'Exotic Foraging',
                    lastChance: false
                },
                image: require('./assets/Pine_Tar.png')
            },
            'Oak Resin x2': {
                expanse: {
                    location: 'Tapped Oak Tree',
                    bundle: 'Enchanter & Exotic',
                    lastChance: false
                },
                image: require('./assets/Oak_Resin.png')
            },
            'Wine': {
                expanse: {
                    location: 'Farm - Casks/Kegs',
                    bundle: 'Enchanter',
                    lastChance: false
                },
                image: require('./assets/Wine.png')
            },
            'Rabbit\'s Foot': {
                expanse: {
                    location: 'Farm - Rabbits',
                    bundle: 'Enchanter',
                    lastChance: false,
                    details: 'Also dropped by Serpents in Skull Cavern'
                },
                image: require('./assets/Rabbit\'s_Foot.png')
            },
        },
        fishing: {
            'Bullhead': {
                expanse: {
                    location: 'Mountain Lake',
                    bundle: 'Lake Fish',
                    lastChance: false
                },
                image: require('./assets/Bullhead.png')
            },
            'Largemouth Bass': {
                expanse: {
                    location: 'Mountain Lake',
                    bundle: 'Lake Fish',
                    lastChance: false,
                    details: '6AM to 7PM only'
                },
                image: require('./assets/Largemouth_Bass.png')
            },
            'Lobster': {
                expanse: {
                    location: 'Ocean - Crab Pots',
                    bundle: 'Crab Pot',
                    lastChance: false
                },
                image: require('./assets/Lobster.png')
            },
            'Crayfish': {
                expanse: {
                    location: 'River, Lake - Crab Pots',
                    bundle: 'Crab Pot',
                    lastChance: false
                },
                image: require('./assets/Crayfish.png')
            },
            'Crab': {
                expanse: {
                    location: 'Ocean - Crab Pots',
                    bundle: 'Crab Pots',
                    lastChance: false
                },
                image: require('./assets/Crab.png')
            },
            'Shrimp': {
                expanse: {
                    location: 'Ocean - Crab Pots',
                    bundle: 'Crab Pot',
                    lastChance: false
                },
                image: require('./assets/Shrimp.png')
            },
            'Snail': {
                expanse: {
                    location: 'River, Lake - Crab Pots',
                    bundle: 'Crab Pot',
                    lastChance: false
                },
                image: require('./assets/Snail.png')
            },
            'Periwinkle': {
                expanse: {
                    location: 'River, Lake - Crab Pots',
                    bundle: 'Crab Pot',
                    lastChance: false
                },
                image: require('./assets/Periwinkle.png')
            },
            'Oyster': {
                expanse: {
                    location: 'Ocean - Crab Pots',
                    bundle: 'Crab Pot',
                    lastChance: false,
                    details: 'Can also be found at the beach'
                },
                image: require('./assets/Oyster.png')
            },
            'Ghostfish': {
                expanse: {
                    location: 'Cave Fishing, Killing Ghosts',
                    bundle: 'Specialty Fish',
                    lastChance: false
                },
                image: require('./assets/Ghostfish.png')
            },
            'Sandfish': {
                expanse: {
                    location: 'Desert Fishing',
                    bundle: 'Specialty Fish',
                    lastChance: false,
                    details: '6AM to 8PM only'
                },
                image: require('./assets/Sandfish.png')
            },
            'Carp': {
                expanse: {
                    location: 'All Lakes',
                    bundle: 'Lake Fish',
                    lastChance: false
                },
                image: require('./assets/Carp.png')
            },
            'Woodskip': {
                expanse: {
                    location: 'Secret Woods',
                    bundle: 'Speciality Fish',
                    lastChance: false
                },
                image: require('./assets/Woodskip.png')
            },
            'Chub': {
                expanse: {
                    location: 'Anywhere',
                    bundle: 'Field Research',
                    lastChance: false
                },
                image: require('./assets/Chub.png')
            },
            'Bream': {
                expanse: {
                    location: 'River',
                    bundle: 'Night Fishing',
                    lastChance: false,
                    details: '6PM to 2AM only'
                },
                image: require('./assets/Bream.png')
            },
        },
        'mining and combat': {
            'Copper Bar': {
                expanse: {
                    location: 'The Mines',
                    bundle: 'Blacksmith',
                },
                image: require('./assets/Copper_Bar.png')
            },
            'Iron Bar': {
                expanse: {
                    location: 'The Mines (Floors 40+)',
                    bundle: 'Blacksmith',
                },
                image: require('./assets/Iron_Bar.png')
            },
            'Gold Bar x6': {
                expanse: {
                    location: 'The Mines (Floors 80+)',
                    bundle: 'Blacksmith & Enchanters',
                },
                image: require('./assets/Gold_Bar.png')
            },
            'Quartz': {
                expanse: {
                    location: 'The Mines',
                    bundle: 'Geologist',
                },
                image: require('./assets/Quartz.png')
            },
            'Earth Crystal': {
                expanse: {
                    location: 'The Mines (Floors 1-39)',
                    bundle: 'Geologist',
                },
                image: require('./assets/Earth_Crystal.png')
            },
            'Frozen Tear': {
                expanse: {
                    location: 'The Mines (Floors 40-79) ',
                    bundle: 'Geologist',
                },
                image: require('./assets/Frozen_Tear.png')
            },
            'Fire Quartz': {
                expanse: {
                    location: 'The Mines (Floors 80-120)',
                    bundle: 'Geologist',
                },
                image: require('./assets/Fire_Quartz.png')
            },
            'Aquamarine': {
                expanse: {
                    location: 'The Mines',
                    bundle: 'Dye',
                },
                image: require('./assets/Aquamarine.png')
            },
            'Frozen Geode': {
                expanse: {
                    location: 'The Mines (Floors 40-79)',
                    bundle: 'Field Research',
                },
                image: require('./assets/Frozen_Geode.png')
            },
            'Bat Wings x10': {
                expanse: {
                    location: 'The Mines',
                    bundle: 'Adventurer',
                    details: 'Drops from bats'
                },
                image: require('./assets/Bat_Wings.png')
            },
            'Slime x99': {
                expanse: {
                    location: 'The Mines',
                    bundle: 'Adventurer',
                    details: 'Drops from slimes'
                },
                image: require('./assets/Slime.png')
            },
            'Solar Essence': {
                expanse: {
                    location: 'The Mines (Floors 31+)',
                    bundle: 'Adventurer',
                    details: 'Drops from ghosts, metal heads, mummies, and squid kids'
                },
                image: require('./assets/Solar_Essence.png')
            },
            'Void Essence': {
                expanse: {
                    location: 'The Mines (Floors 81+)',
                    bundle: 'Blacksmith',
                    details: 'Drops from shadow brutes, shadow shamans, and serpents. Also sold by Krobus'
                },
                image: require('./assets/Void_Essence.png')
            },
            'Cave Carrot': {
                expanse: {
                    location: 'The Mines',
                    bundle: 'Exotic Foraging',
                    details: 'Commonly found in wooden containers. Can also be found by hoeing dirt Floors 10-20'
                },
                image: require('./assets/Cave_Carrot.png')
            },
        },
        'misc.': {
            'Maki Roll': {
                expanse: {
                    location: 'Cooking',
                    bundle: 'Chef',
                    details: 'Can get recipe from Stardrop Saloon. Created with 1 fish, 1 seaweed, and 1 rice'
                },
                image: require('./assets/Maki_Roll.png')
            },
            'Fried Egg': {
                expanse: {
                    location: 'Cooking',
                    bundle: 'Chef',
                    details: 'Get recipe from upgraded farmhouse. Created with 1 egg'
                },
                image: require('./assets/Fried_Egg.png')
            },
            'Hay x10': {
                expanse: {
                    location: 'Farm - Grass',
                    bundle: 'Fodder',
                    details: 'Scythe grass in the Farm after getting a silo. Can also buy from Marnie'
                },
                image: require('./assets/Hay.png')
            },
            'Wood x198': {
                expanse: {
                    location: 'Trees',
                    bundle: 'Construction'
                },
                image: require('./assets/Wood.png')
            },
            'Stone x99': {
                expanse: {
                    location: 'Rocks',
                    bundle: 'Construction'
                },
                image: require('./assets/Stone.png')
            },
            'Hardwood x10': {
                expanse: {
                    location: 'Big Tree Stumps & Logs',
                    bundle: 'Construction',
                    details: 'Chop big tree stumps and logs. Recurring ones found in Secret Woods'
                },
                image: require('./assets/Hardwood.png')
            },
            'Money x2.5k': {
                expanse: {
                    location: '-',
                    bundle: 'Vault'
                },
                image: require('./assets/Money.png')
            },
            'Money x5k': {
                expanse: {
                    location: '-',
                    bundle: 'Vault'
                },
                image: require('./assets/Money.png')
            },
            'Money x10k': {
                expanse: {
                    location: '-',
                    bundle: 'Vault'
                },
                image: require('./assets/Money.png')
            },
            'Money x25k': {
                expanse: {
                    location: '-',
                    bundle: 'Vault'
                },
                image: require('./assets/Money.png')
            },
        }
    }
}
/**
/* @param {string} name - the name to turn into image url
*/
function convertNameToPath(name) {
    if (name == 'Parsnip(Gold Quality) x5')
        return 'Gold_Parsnip.png'
    else if (name == 'Melon (Gold Quality) x5')
        return 'Gold_Melon.png'
    else if (name == 'Corn (Gold Quality) x5')
        return 'Gold_Corn.png'
    else if (name == 'Pumpkin (Gold Quality) x5')
        return 'Gold_Pumpkin.png'
    //_x#
    let lastSpacePos = -1
    for (const i = name.length - 1; i >= 0; i--) {
        if (name.charAt(i) == ' ') {
            lastSpacePos = i
            break
        }
    }
    name = name.substring(0, lastSpacePos)
    // switch spaces with underscores
    name = name.split(" ").join("_")
    name += '.png'
    return name
}
/**
/* @param {string} name - item to mark in bundle
*/
export function markBundle(name){
    for(const bundle in x[name]){
        if(!bundles[bundle].items)
            bundles[bundle].items = {}
        if(!bundles[bundle].items[name])
            bundles[bundle].items[name] = {
                path: convertNameToPath(name)
            }
        bundles[bundle].items[name].checked = !bundles[bundle].items[name].checked
        console.log("marked item " + name + " in bundle " + bundle)
    }
}
export const getBundles = () => {return bundles}
/**
 * 
/* @param {Object} checks
*/
export function checkBundles(checks) {
    for (const season in checks) {
        for (const category in checks[season]) {
            for (const itemName in checks[season][category]) {
                // if item is checked
                if (checks[season][category][itemName].checked) {
                    for (const bundle in x[itemName]) {
                        // place in bundle
                        if (!bundles[bundle].items)
                            bundles[bundle].items = {}
                        if (!bundles[bundle].items[itemName])
                            bundles[bundle].items[itemName] = {
                                path: convertNameToPath(itemName)
                            }
                        bundles[bundle].items[itemName].checked = true
                    }
                }
            }
        }
    }
}
const bundles = {
    'Spring Foraging': {
        amountNeeded: 4
    },
    'Summer Foraging': {
        amountNeeded: 3
    },
    'Fall Foraging': {
        amountNeeded: 4
    },
    'Winter Foraging': {
        amountNeeded: 3
    },
    'Construction': {
        amountNeeded: 4
    },
    'Exotic': {
        amountNeeded: 5
    },
    'Spring Crops': {
        amountNeeded: 4
    },
    'Summer Crops': {
        amountNeeded: 4
    },
    'Fall Crops': {
        amountNeeded: 4
    },
    'Quality Crops': {
        amountNeeded: 3
    },
    'Animal': {
        amountNeeded: 5
    },
    'Artisan': {
        amountNeeded: 6
    },
    'River Fish': {
        amountNeeded: 4
    },
    'Lake Fish': {
        amountNeeded: 4
    },
    'Ocean Fish': {
        amountNeeded: 4
    },
    'Night Fishing': {
        amountNeeded: 3
    },
    'Crab Pot': {
        amountNeeded: 5
    },
    'Specialty Fish': {
        amountNeeded: 4
    },
    'Blacksmith\'s': {
        amountNeeded: 3
    },
    'Geologist\'s': {
        amountNeeded: 4
    },
    'Adventurer\'s': {
        amountNeeded: 2
    },
    'Chef\'s': {
        amountNeeded: 6
    },
    'Dye': {
        amountNeeded: 6
    },
    'Field Research': {
        amountNeeded: 4
    },
    'Fodder': {
        amountNeeded: 3
    },
    'Enchanter\'s': {
        amountNeeded: 4
    },
    '2,500': {
        amountNeeded: 1
    },
    '5,000': {
        amountNeeded: 1
    },
    '10,000': {
        amountNeeded: 1
    },
    '25,000': {
        amountNeeded: 1
    },

}
const x = {
    'Wild Horseradish': ['Spring Foraging'],
    'Daffodil': ['Spring Foraging'],
    'Leek': ['Spring Foraging'],
    'Dandelion': ['Spring Foraging'],
    'Grape': ['Summer Foraging'],
    'Spice Berry': ['Summer Foraging'],
    'Sweet Pea': ['Summer Foraging'],
    'Common Mushroom': ['Fall Foraging'],
    'Wild Plum': ['Fall Foraging'],
    'Hazelnut': ['Fall Foraging'],
    'Blackberry': ['Fall Foraging'],
    'Winter Root': ['Winter Foraging'],
    'Crystal Fruit': ['Winter Foraging'],
    'Snow Yam': ['Winter Foraging'],
    'Crocus': ['Winter Foraging'],
    'Wood x198': ['Construction'],
    'Stone x99': ['Construction'],
    'Hardwood x10': ['Construction'],
    'Coconut': ['Exotic Foraging'],
    'Cactus Fruit': ['Exotic Foraging'],
    'Cave Carrot': ['Exotic Foraging'],
    'Red Mushroom x2': ['Exotic Foraging', 'Dye Bundle'],
    'Purple Mushroom': ['Exotic Foraging', 'Field Research'],
    'Maple Syrup': ['Exotic Foraging'],
    'Oak Resin': ['Exotic Foraging'],
    'Pine Tar': ['Exotic Foraging'],
    'Morel': ['Exotic Foraging'],
    'Parsnip': ['Spring Crops'],
    'Green Bean': ['Spring Crops'],
    'Cauliflower': ['Spring Crops'],
    'Potato': ['Spring Crops'],
    'Tomato': ['Summer Crops'],
    'Hot Pepper': ['Summer Crops'],
    'Blueberry': ['Summer Crops'],
    'Melon': ['Summer Crops'],
    'Corn': ['Fall Crops'],
    'Eggplant': ['Fall Crops'],
    'Pumpkin': ['Fall Crops'],
    'Yam': ['Fall Crops'],
    'Parsnip(Gold Quality) x5': ['Quality Crops'],
    'Melon (Gold Quality) x5': ['Quality Crops'],
    'Pumpkin (Gold Quality) x5': ['Quality Crops'],
    'Corn(Gold Quality) x5': ['Quality Crops'],
    'Large Milk': ['Animal'],
    'Large Egg (Brown)': ['Animal'],
    'Large Egg (White)': ['Animal'],
    'Large Goat Milk': ['Animal'],
    'Wool': ['Animal'],
    'Duck Egg': ['Animal'],
    'Truffle Oil': ['Artisan'],
    'Cloth': ['Artisan'],
    'Goat Cheese': ['Artisan'],
    'Cheese': ['Artisan'],
    'Honey': ['Artisan'],
    'Jelly': ['Artisan'],
    'Apple x4': ['Artisan', 'Fodder'],
    'Apricot': ['Artisan'],
    'Orange': ['Artisan'],
    'Peach': ['Artisan'],
    'Pomegranate': ['Artisan'],
    'Cherry': ['Artisan'],
    'Sunfish': ['River Fish'],
    'Catfish': ['River Fish'],
    'Shad': ['River Fish'],
    'Tiger Trout': ['River Fish'],
    'Largemouth Bass': ['Lake Fish'],
    'Carp': ['Lake Fish'],
    'Bullhead': ['Lake Fish'],
    'Sturgeon': ['Lake Fish'],
    'Sardine': ['Ocean Fish'],
    'Tuna': ['Ocean Fish'],
    'Red Snapper': ['Ocean Fish'],
    'Tilapia': ['Ocean Fish'],
    'Walleye': ['Night Fishing'],
    'Bream': ['Night Fishing'],
    'Eel': ['Night Fishing'],
    'Lobster': ['Crab Pot'],
    'Crayfish': ['Crab Pot'],
    'Crab': ['Crab Pot'],
    'Cockle': ['Crab Pot'],
    'Mussel': ['Crab Pot'],
    'Shrimp': ['Crab Pot'],
    'Snail': ['Crab Pot'],
    'Periwinkle': ['Crab Pot'],
    'Oyster': ['Crab Pot'],
    'Clam': ['Crab Pot'],
    'Pufferfish': ['Specialty Fish'],
    'Ghostfish': ['Specialty Fish'],
    'Sandfish': ['Specialty Fish'],
    'Woodskip': ['Specialty Fish'],
    'Copper Bar': ['Blacksmith\'s'],
    'Iron Bar': ['Blacksmith\'s'],
    'Gold Bar': ['Blacksmith\'s'],
    'Quartz': ['Geologist\'s'],
    'Earth Crystal': ['Geologist\'s'],
    'Frozen Tear': ['Geologist\'s'],
    'Fire Quartz': ['Geologist\'s'],
    'Slime x99': ['Adventurer\'s'],
    'Bat Wing x10': ['Adventurer\'s'],
    'Solar Essence': ['Adventurer\'s'],
    'Void Essence': ['Adventurer\'s'],
    'Maple Syrup': ['Chef\'s'],
    'Fiddlehead Fern': ['Chef\'s'],
    'Truffle': ['Chef\'s'],
    'Poppy': ['Chef\'s'],
    'Maki Roll': ['Chef\'s'],
    'Fried Egg': ['Chef\'s'],
    'Sea Urchin': ['Dye'],
    'Sunflower': ['Dye'],
    'Duck Feather': ['Dye'],
    'Aquamarine': ['Dye'],
    'Red Cabbage': ['Dye'],
    'Nautilus Shell': ['Field Research'],
    'Chub': ['Field Research'],
    'Frozen Geode': ['Field Research'],
    'Wheat x10': ['Fodder'],
    'Hay x10': ['Fodder'],
    'Oak Resin': ['Enchanter\'s'],
    'Wine': ['Enchanter\'s'],
    'Rabbit\'s Foot': ['Enchanter\'s'],
    'Pomegranate': ['Enchanter\'s'],
    'Money x2.5k': ['2,500'],
    'Money x5k': ['5,000'],
    'Money x10k': ['10,000'],
    'Money x25k': ['25,000'],
}

//todo: turn red mushroom fix into a "patch" for those w/ current version < new version