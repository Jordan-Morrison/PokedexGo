let moves = [
    {"id":1, "quick":[
          {
            "id": "fury_cutter",
            "name": "Fury Cutter",
            "type": "Bug",
            "power": 3,
            "durationMS": 400,
            "energyGPS": 15
          },
          {
            "id": "bug_bite",
            "name": "Bug Bite",
            "type": "Bug",
            "power": 5,
            "durationMS": 500,
            "energyGPS": 12
          },
          {
            "id": "bite",
            "name": "Bite",
            "type": "Dark",
            "power": 6,
            "durationMS": 500,
            "energyGPS": 8
          },
          {
            "id": "sucker_punch",
            "name": "Sucker Punch",
            "type": "Dark",
            "power": 7,
            "durationMS": 700,
            "energyGPS": 11.43
          },
          {
            "id": "dragon_breath",
            "name": "Dragon Breath",
            "type": "Dragon",
            "power": 6,
            "durationMS": 500,
            "energyGPS": 8
          },
          {
            "id": "thunder_shock",
            "name": "Thunder Shock",
            "type": "Electric",
            "power": 5,
            "durationMS": 600,
            "energyGPS": 13.33
          },
          {
            "id": "spark",
            "name": "Spark",
            "type": "Electric",
            "power": 6,
            "durationMS": 700,
            "energyGPS": 12.86
          },
          {
            "id": "low_kick",
            "name": "Low Kick",
            "type": "Fighting",
            "power": 6,
            "durationMS": 600,
            "energyGPS": 10
          },
          {
            "id": "karate_chop",
            "name": "Karate Chop",
            "type": "Fighting",
            "power": 8,
            "durationMS": 800,
            "energyGPS": 12.5
          },
          {
            "id": "ember",
            "name": "Ember",
            "type": "Fire",
            "power": 10,
            "durationMS": 1000,
            "energyGPS": 10
          },
          {
            "id": "wing_attack",
            "name": "Wing Attack",
            "type": "Flying",
            "power": 8,
            "durationMS": 800,
            "energyGPS": 11.25
          },
          {
            "id": "peck",
            "name": "Peck",
            "type": "Flying",
            "power": 10,
            "durationMS": 1000,
            "energyGPS": 10
          },
          {
            "id": "lick",
            "name": "Lick",
            "type": "Ghost",
            "power": 5,
            "durationMS": 500,
            "energyGPS": 12
          },
          {
            "id": "shadow_claw",
            "name": "Shadow Claw",
            "type": "Ghost",
            "power": 9,
            "durationMS": 700,
            "energyGPS": 8.57
          },
          {
            "id": "vine_whip",
            "name": "Vine Whip",
            "type": "Grass",
            "power": 7,
            "durationMS": 600,
            "energyGPS": 10
          },
          {
            "id": "razor_leaf",
            "name": "Razor Leaf",
            "type": "Grass",
            "power": 13,
            "durationMS": 1000,
            "energyGPS": 7
          },
          {
            "id": "mud_shot",
            "name": "Mud Shot",
            "type": "Ground",
            "power": 5,
            "durationMS": 600,
            "energyGPS": 11.67
          },
          {
            "id": "ice_shard",
            "name": "Ice Shard",
            "type": "Ice",
            "power": 12,
            "durationMS": 1200,
            "energyGPS": 10
          },
          {
            "id": "frost_breath",
            "name": "Frost Breath",
            "type": "Ice",
            "power": 10,
            "durationMS": 900,
            "energyGPS": 8.89
          },
          {
            "id": "quick_attack",
            "name": "Quick Attack",
            "type": "Normal",
            "power": 8,
            "durationMS": 800,
            "energyGPS": 12.5
          },
          {
            "id": "scratch",
            "name": "Scratch",
            "type": "Normal",
            "power": 6,
            "durationMS": 500,
            "energyGPS": 8
          },
          {
            "id": "tackle",
            "name": "Tackle",
            "type": "Normal",
            "power": 5,
            "durationMS": 500,
            "energyGPS": 10
          },
          {
            "id": "pound",
            "name": "Pound",
            "type": "Normal",
            "power": 7,
            "durationMS": 600,
            "energyGPS": 10
          },
          {
            "id": "cut",
            "name": "Cut",
            "type": "Normal",
            "power": 5,
            "durationMS": 500,
            "energyGPS": 10
          },
          {
            "id": "poison_jab",
            "name": "Poison Jab",
            "type": "Poison",
            "power": 10,
            "durationMS": 800,
            "energyGPS": 8.75
          },
          {
            "id": "acid",
            "name": "Acid",
            "type": "Poison",
            "power": 9,
            "durationMS": 800,
            "energyGPS": 10
          },
          {
            "id": "psycho_cut",
            "name": "Psycho Cut",
            "type": "Psychic",
            "power": 5,
            "durationMS": 600,
            "energyGPS": 13.33
          },
          {
            "id": "rock_throw",
            "name": "Rock Throw",
            "type": "Rock",
            "power": 12,
            "durationMS": 900,
            "energyGPS": 7.78
          },
          {
            "id": "metal_claw",
            "name": "Metal Claw",
            "type": "Steel",
            "power": 8,
            "durationMS": 700,
            "energyGPS": 10
          },
          {
            "id": "bullet_punch",
            "name": "Bullet Punch",
            "type": "Steel",
            "power": 9,
            "durationMS": 900,
            "energyGPS": 11.11
          },
          {
            "id": "water_gun",
            "name": "Water Gun",
            "type": "Water",
            "power": 5,
            "durationMS": 500,
            "energyGPS": 10
          },
          {
            "id": "splash",
            "name": "Splash",
            "type": "Water",
            "power": 0,
            "durationMS": 1730,
            "energyGPS": 11.56
          },
          {
            "id": "water_gun_blastoise",
            "name": "Water Gun Blastoise",
            "type": "Water",
            "power": 10,
            "durationMS": 1000,
            "energyGPS": 6
          },
          {
            "id": "mud_slap",
            "name": "Mud Slap",
            "type": "Ground",
            "power": 15,
            "durationMS": 1400,
            "energyGPS": 8.57
          },
          {
            "id": "zen_headbutt",
            "name": "Zen Headbutt",
            "type": "Psychic",
            "power": 12,
            "durationMS": 1100,
            "energyGPS": 9.09
          },
          {
            "id": "confusion",
            "name": "Confusion",
            "type": "Psychic",
            "power": 20,
            "durationMS": 1600,
            "energyGPS": 9.38
          },
          {
            "id": "poison_sting",
            "name": "Poison Sting",
            "type": "Poison",
            "power": 5,
            "durationMS": 600,
            "energyGPS": 11.67
          },
          {
            "id": "bubble",
            "name": "Bubble",
            "type": "Water",
            "power": 12,
            "durationMS": 1200,
            "energyGPS": 11.67
          },
          {
            "id": "feint_attack",
            "name": "Feint Attack",
            "type": "Dark",
            "power": 10,
            "durationMS": 900,
            "energyGPS": 10
          },
          {
            "id": "steel_wing",
            "name": "Steel Wing",
            "type": "Steel",
            "power": 11,
            "durationMS": 800,
            "energyGPS": 7.5
          },
          {
            "id": "fire_fang",
            "name": "Fire Fang",
            "type": "Fire",
            "power": 11,
            "durationMS": 900,
            "energyGPS": 8.89
          },
          {
            "id": "rock_smash",
            "name": "Rock Smash",
            "type": "Fighting",
            "power": 15,
            "durationMS": 1300,
            "energyGPS": 7.69
          },
          {
            "id": "transform",
            "name": "Transform",
            "type": "Normal",
            "power": 0,
            "durationMS": 2230,
            "energyGPS": 0
          },
          {
            "id": "counter",
            "name": "Counter",
            "type": "Fighting",
            "power": 12,
            "durationMS": 900,
            "energyGPS": 8.89
          },
          {
            "id": "powder_snow",
            "name": "Powder Snow",
            "type": "Ice",
            "power": 6,
            "durationMS": 1000,
            "energyGPS": 15
          },
          {
            "id": "charge_beam",
            "name": "Charge Beam",
            "type": "Electric",
            "power": 8,
            "durationMS": 1100,
            "energyGPS": 13.64
          },
          {
            "id": "volt_switch",
            "name": "Volt Switch",
            "type": "Electric",
            "power": 20,
            "durationMS": 2300,
            "energyGPS": 10.87
          },
          {
            "id": "dragon_tail",
            "name": "Dragon Tail",
            "type": "Dragon",
            "power": 15,
            "durationMS": 1100,
            "energyGPS": 8.18
          },
          {
            "id": "air_slash",
            "name": "Air Slash",
            "type": "Flying",
            "power": 14,
            "durationMS": 1200,
            "energyGPS": 8.33
          },
          {
            "id": "infestation",
            "name": "Infestation",
            "type": "Bug",
            "power": 10,
            "durationMS": 1100,
            "energyGPS": 12.73
          },
          {
            "id": "struggle_bug",
            "name": "Struggle Bug",
            "type": "Bug",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "astonish",
            "name": "Astonish",
            "type": "Ghost",
            "power": 8,
            "durationMS": 1100,
            "energyGPS": 12.73
          },
          {
            "id": "hex",
            "name": "Hex",
            "type": "Ghost",
            "power": 10,
            "durationMS": 1200,
            "energyGPS": 12.5
          },
          {
            "id": "iron_tail",
            "name": "Iron Tail",
            "type": "Steel",
            "power": 15,
            "durationMS": 1100,
            "energyGPS": 6.36
          },
          {
            "id": "fire_spin",
            "name": "Fire Spin",
            "type": "Fire",
            "power": 14,
            "durationMS": 1100,
            "energyGPS": 9.09
          },
          {
            "id": "bullet_seed",
            "name": "Bullet Seed",
            "type": "Grass",
            "power": 8,
            "durationMS": 1100,
            "energyGPS": 12.73
          },
          {
            "id": "extrasensory",
            "name": "Extrasensory",
            "type": "Psychic",
            "power": 12,
            "durationMS": 1100,
            "energyGPS": 10.91
          },
          {
            "id": "snarl",
            "name": "Snarl",
            "type": "Dark",
            "power": 12,
            "durationMS": 1100,
            "energyGPS": 10.91
          },
          {
            "id": "hidden_power",
            "name": "Hidden Power",
            "type": "random",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_normal",
            "name": "Hidden Power Normal",
            "type": "Normal",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_fighting",
            "name": "Hidden Power Fighting",
            "type": "Fighting",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_flying",
            "name": "Hidden Power Flying",
            "type": "Flying",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_poison",
            "name": "Hidden Power Poison",
            "type": "Poison",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_ground",
            "name": "Hidden Power Ground",
            "type": "Ground",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_rock",
            "name": "Hidden Power Rock",
            "type": "Rock",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_bug",
            "name": "Hidden Power Bug",
            "type": "Bug",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_ghost",
            "name": "Hidden Power Ghost",
            "type": "Ghost",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_steel",
            "name": "Hidden Power Steel",
            "type": "Steel",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_fire",
            "name": "Hidden Power Fire",
            "type": "Fire",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_water",
            "name": "Hidden Power Water",
            "type": "Water",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_grass",
            "name": "Hidden Power Grass",
            "type": "Grass",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_electric",
            "name": "Hidden Power Electric",
            "type": "Electric",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_psychic",
            "name": "Hidden Power Psychic",
            "type": "Psychic",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_ice",
            "name": "Hidden Power Ice",
            "type": "Ice",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_dragon",
            "name": "Hidden Power Dragon",
            "type": "Dragon",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_dark",
            "name": "Hidden Power Dark",
            "type": "Dark",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "hidden_power_fairy",
            "name": "Hidden Power Fairy",
            "type": "Fairy",
            "power": 15,
            "durationMS": 1500,
            "energyGPS": 10
          },
          {
            "id": "take_down",
            "name": "Take Down",
            "type": "Normal",
            "power": 8,
            "durationMS": 1200,
            "energyGPS": 8.33
          },
          {
            "id": "waterfall",
            "name": "Waterfall",
            "type": "Water",
            "power": 16,
            "durationMS": 1200,
            "energyGPS": 6.67
          },
          {
            "id": "yawn",
            "name": "Yawn",
            "type": "Normal",
            "power": 0,
            "durationMS": 1700,
            "energyGPS": 8.82
          },
          {
            "id": "present",
            "name": "Present",
            "type": "Normal",
            "power": 5,
            "durationMS": 1300,
            "energyGPS": 15.38
          }
    ]},
    {"id":2, "charged":[
          {
            "id": "wrap",
            "name": "Wrap",
            "type": "Normal",
            "power": 60,
            "durationMS": 2900,
            "energyCost": 33
          },
          {
            "id": "hyper_beam",
            "name": "Hyper Beam",
            "type": "Normal",
            "power": 150,
            "durationMS": 3800,
            "energyCost": 100
          },
          {
            "id": "dark_pulse",
            "name": "Dark Pulse",
            "type": "Dark",
            "power": 80,
            "durationMS": 3000,
            "energyCost": 50
          },
          {
            "id": "sludge",
            "name": "Sludge",
            "type": "Poison",
            "power": 50,
            "durationMS": 2100,
            "energyCost": 33
          },
          {
            "id": "vice_grip",
            "name": "Vice Grip",
            "type": "Normal",
            "power": 35,
            "durationMS": 1900,
            "energyCost": 33
          },
          {
            "id": "flame_wheel",
            "name": "Flame Wheel",
            "type": "Fire",
            "power": 60,
            "durationMS": 2700,
            "energyCost": 50
          },
          {
            "id": "megahorn",
            "name": "Megahorn",
            "type": "Bug",
            "power": 90,
            "durationMS": 2200,
            "energyCost": 100
          },
          {
            "id": "flamethrower",
            "name": "Flamethrower",
            "type": "Fire",
            "power": 70,
            "durationMS": 2200,
            "energyCost": 50
          },
          {
            "id": "dig",
            "name": "Dig",
            "type": "Ground",
            "power": 100,
            "durationMS": 4700,
            "energyCost": 50
          },
          {
            "id": "cross_chop",
            "name": "Cross Chop",
            "type": "Fighting",
            "power": 50,
            "durationMS": 1500,
            "energyCost": 50
          },
          {
            "id": "psybeam",
            "name": "Psybeam",
            "type": "Psychic",
            "power": 70,
            "durationMS": 3200,
            "energyCost": 50
          },
          {
            "id": "earthquake",
            "name": "Earthquake",
            "type": "Ground",
            "power": 120,
            "durationMS": 3600,
            "energyCost": 100
          },
          {
            "id": "stone_edge",
            "name": "Stone Edge",
            "type": "Rock",
            "power": 100,
            "durationMS": 2300,
            "energyCost": 100
          },
          {
            "id": "ice_punch",
            "name": "Ice Punch",
            "type": "Ice",
            "power": 50,
            "durationMS": 1900,
            "energyCost": 33
          },
          {
            "id": "heart_stamp",
            "name": "Heart Stamp",
            "type": "Psychic",
            "power": 40,
            "durationMS": 1900,
            "energyCost": 33
          },
          {
            "id": "discharge",
            "name": "Discharge",
            "type": "Electric",
            "power": 65,
            "durationMS": 2500,
            "energyCost": 33
          },
          {
            "id": "flash_cannon",
            "name": "Flash Cannon",
            "type": "Steel",
            "power": 100,
            "durationMS": 2700,
            "energyCost": 100
          },
          {
            "id": "drill_peck",
            "name": "Drill Peck",
            "type": "Flying",
            "power": 60,
            "durationMS": 2300,
            "energyCost": 33
          },
          {
            "id": "ice_beam",
            "name": "Ice Beam",
            "type": "Ice",
            "power": 90,
            "durationMS": 3300,
            "energyCost": 50
          },
          {
            "id": "blizzard",
            "name": "Blizzard",
            "type": "Ice",
            "power": 130,
            "durationMS": 3100,
            "energyCost": 100
          },
          {
            "id": "heat_wave",
            "name": "Heat Wave",
            "type": "Fire",
            "power": 95,
            "durationMS": 3000,
            "energyCost": 100
          },
          {
            "id": "aerial_ace",
            "name": "Aerial Ace",
            "type": "Flying",
            "power": 55,
            "durationMS": 2400,
            "energyCost": 33
          },
          {
            "id": "drill_run",
            "name": "Drill Run",
            "type": "Ground",
            "power": 80,
            "durationMS": 2800,
            "energyCost": 50
          },
          {
            "id": "petal_blizzard",
            "name": "Petal Blizzard",
            "type": "Grass",
            "power": 110,
            "durationMS": 2600,
            "energyCost": 100
          },
          {
            "id": "mega_drain",
            "name": "Mega Drain",
            "type": "Grass",
            "power": 25,
            "durationMS": 2600,
            "energyCost": 50
          },
          {
            "id": "bug_buzz",
            "name": "Bug Buzz",
            "type": "Bug",
            "power": 90,
            "durationMS": 3700,
            "energyCost": 50
          },
          {
            "id": "poison_fang",
            "name": "Poison Fang",
            "type": "Poison",
            "power": 35,
            "durationMS": 1700,
            "energyCost": 33
          },
          {
            "id": "night_slash",
            "name": "Night Slash",
            "type": "Dark",
            "power": 50,
            "durationMS": 2200,
            "energyCost": 33
          },
          {
            "id": "bubble_beam",
            "name": "Bubble Beam",
            "type": "Water",
            "power": 45,
            "durationMS": 1900,
            "energyCost": 33
          },
          {
            "id": "submission",
            "name": "Submission",
            "type": "Fighting",
            "power": 60,
            "durationMS": 2200,
            "energyCost": 50
          },
          {
            "id": "low_sweep",
            "name": "Low Sweep",
            "type": "Fighting",
            "power": 40,
            "durationMS": 1900,
            "energyCost": 33
          },
          {
            "id": "aqua_jet",
            "name": "Aqua Jet",
            "type": "Water",
            "power": 45,
            "durationMS": 2600,
            "energyCost": 33
          },
          {
            "id": "aqua_tail",
            "name": "Aqua Tail",
            "type": "Water",
            "power": 50,
            "durationMS": 1900,
            "energyCost": 33
          },
          {
            "id": "seed_bomb",
            "name": "Seed Bomb",
            "type": "Grass",
            "power": 55,
            "durationMS": 2100,
            "energyCost": 33
          },
          {
            "id": "psyshock",
            "name": "Psyshock",
            "type": "Psychic",
            "power": 65,
            "durationMS": 2700,
            "energyCost": 33
          },
          {
            "id": "ancient_power",
            "name": "Ancient Power",
            "type": "Rock",
            "power": 70,
            "durationMS": 3500,
            "energyCost": 33
          },
          {
            "id": "rock_tomb",
            "name": "Rock Tomb",
            "type": "Rock",
            "power": 70,
            "durationMS": 3200,
            "energyCost": 50
          },
          {
            "id": "rock_slide",
            "name": "Rock Slide",
            "type": "Rock",
            "power": 80,
            "durationMS": 2700,
            "energyCost": 50
          },
          {
            "id": "power_gem",
            "name": "Power Gem",
            "type": "Rock",
            "power": 80,
            "durationMS": 2900,
            "energyCost": 50
          },
          {
            "id": "shadow_sneak",
            "name": "Shadow Sneak",
            "type": "Ghost",
            "power": 50,
            "durationMS": 2900,
            "energyCost": 33
          },
          {
            "id": "shadow_punch",
            "name": "Shadow Punch",
            "type": "Ghost",
            "power": 40,
            "durationMS": 1700,
            "energyCost": 33
          },
          {
            "id": "ominous_wind",
            "name": "Ominous Wind",
            "type": "Ghost",
            "power": 50,
            "durationMS": 2300,
            "energyCost": 33
          },
          {
            "id": "shadow_ball",
            "name": "Shadow Ball",
            "type": "Ghost",
            "power": 100,
            "durationMS": 3000,
            "energyCost": 50
          },
          {
            "id": "magnet_bomb",
            "name": "Magnet Bomb",
            "type": "Steel",
            "power": 70,
            "durationMS": 2800,
            "energyCost": 33
          },
          {
            "id": "iron_head",
            "name": "Iron Head",
            "type": "Steel",
            "power": 60,
            "durationMS": 1900,
            "energyCost": 50
          },
          {
            "id": "parabolic_charge",
            "name": "Parabolic Charge",
            "type": "Electric",
            "power": 25,
            "durationMS": 2800,
            "energyCost": 50
          },
          {
            "id": "thunder_punch",
            "name": "Thunder Punch",
            "type": "Electric",
            "power": 45,
            "durationMS": 1800,
            "energyCost": 33
          },
          {
            "id": "thunder",
            "name": "Thunder",
            "type": "Electric",
            "power": 100,
            "durationMS": 2400,
            "energyCost": 100
          },
          {
            "id": "thunderbolt",
            "name": "Thunderbolt",
            "type": "Electric",
            "power": 80,
            "durationMS": 2500,
            "energyCost": 50
          },
          {
            "id": "twister",
            "name": "Twister",
            "type": "Dragon",
            "power": 45,
            "durationMS": 2800,
            "energyCost": 33
          },
          {
            "id": "dragon_pulse",
            "name": "Dragon Pulse",
            "type": "Dragon",
            "power": 90,
            "durationMS": 3600,
            "energyCost": 50
          },
          {
            "id": "dragon_claw",
            "name": "Dragon Claw",
            "type": "Dragon",
            "power": 50,
            "durationMS": 1700,
            "energyCost": 33
          },
          {
            "id": "disarming_voice",
            "name": "Disarming Voice",
            "type": "Fairy",
            "power": 70,
            "durationMS": 3900,
            "energyCost": 33
          },
          {
            "id": "draining_kiss",
            "name": "Draining Kiss",
            "type": "Fairy",
            "power": 60,
            "durationMS": 2600,
            "energyCost": 50
          },
          {
            "id": "dazzling_gleam",
            "name": "Dazzling Gleam",
            "type": "Fairy",
            "power": 100,
            "durationMS": 3500,
            "energyCost": 50
          },
          {
            "id": "moonblast",
            "name": "Moonblast",
            "type": "Fairy",
            "power": 130,
            "durationMS": 3900,
            "energyCost": 100
          },
          {
            "id": "play_rough",
            "name": "Play Rough",
            "type": "Fairy",
            "power": 90,
            "durationMS": 2900,
            "energyCost": 50
          },
          {
            "id": "cross_poison",
            "name": "Cross Poison",
            "type": "Poison",
            "power": 40,
            "durationMS": 1500,
            "energyCost": 33
          },
          {
            "id": "sludge_bomb",
            "name": "Sludge Bomb",
            "type": "Poison",
            "power": 80,
            "durationMS": 2300,
            "energyCost": 50
          },
          {
            "id": "sludge_wave",
            "name": "Sludge Wave",
            "type": "Poison",
            "power": 110,
            "durationMS": 3200,
            "energyCost": 100
          },
          {
            "id": "gunk_shot",
            "name": "Gunk Shot",
            "type": "Poison",
            "power": 130,
            "durationMS": 3100,
            "energyCost": 100
          },
          {
            "id": "bone_club",
            "name": "Bone Club",
            "type": "Ground",
            "power": 40,
            "durationMS": 1600,
            "energyCost": 33
          },
          {
            "id": "bulldoze",
            "name": "Bulldoze",
            "type": "Ground",
            "power": 80,
            "durationMS": 3500,
            "energyCost": 50
          },
          {
            "id": "mud_bomb",
            "name": "Mud Bomb",
            "type": "Ground",
            "power": 55,
            "durationMS": 2300,
            "energyCost": 33
          },
          {
            "id": "signal_beam",
            "name": "Signal Beam",
            "type": "Bug",
            "power": 75,
            "durationMS": 2900,
            "energyCost": 50
          },
          {
            "id": "x-scissor",
            "name": "X-Scissor",
            "type": "Bug",
            "power": 45,
            "durationMS": 1600,
            "energyCost": 33
          },
          {
            "id": "flame_charge",
            "name": "Flame Charge",
            "type": "Fire",
            "power": 70,
            "durationMS": 3800,
            "energyCost": 33
          },
          {
            "id": "flame_burst",
            "name": "Flame Burst",
            "type": "Fire",
            "power": 70,
            "durationMS": 2600,
            "energyCost": 50
          },
          {
            "id": "fire_blast",
            "name": "Fire Blast",
            "type": "Fire",
            "power": 140,
            "durationMS": 4200,
            "energyCost": 100
          },
          {
            "id": "brine",
            "name": "Brine",
            "type": "Water",
            "power": 60,
            "durationMS": 2300,
            "energyCost": 50
          },
          {
            "id": "water_pulse",
            "name": "Water Pulse",
            "type": "Water",
            "power": 70,
            "durationMS": 3200,
            "energyCost": 50
          },
          {
            "id": "scald",
            "name": "Scald",
            "type": "Water",
            "power": 80,
            "durationMS": 3700,
            "energyCost": 50
          },
          {
            "id": "hydro_pump",
            "name": "Hydro Pump",
            "type": "Water",
            "power": 130,
            "durationMS": 3300,
            "energyCost": 100
          },
          {
            "id": "psychic",
            "name": "Psychic",
            "type": "Psychic",
            "power": 100,
            "durationMS": 2800,
            "energyCost": 100
          },
          {
            "id": "psystrike",
            "name": "Psystrike",
            "type": "Psychic",
            "power": 100,
            "durationMS": 4400,
            "energyCost": 50
          },
          {
            "id": "icy_wind",
            "name": "Icy Wind",
            "type": "Ice",
            "power": 60,
            "durationMS": 3300,
            "energyCost": 33
          },
          {
            "id": "giga_drain",
            "name": "Giga Drain",
            "type": "Grass",
            "power": 50,
            "durationMS": 3900,
            "energyCost": 100
          },
          {
            "id": "fire_punch",
            "name": "Fire Punch",
            "type": "Fire",
            "power": 55,
            "durationMS": 2200,
            "energyCost": 33
          },
          {
            "id": "solar_beam",
            "name": "Solar Beam",
            "type": "Grass",
            "power": 180,
            "durationMS": 4900,
            "energyCost": 100
          },
          {
            "id": "leaf_blade",
            "name": "Leaf Blade",
            "type": "Grass",
            "power": 70,
            "durationMS": 2400,
            "energyCost": 33
          },
          {
            "id": "power_whip",
            "name": "Power Whip",
            "type": "Grass",
            "power": 90,
            "durationMS": 2600,
            "energyCost": 50
          },
          {
            "id": "air_cutter",
            "name": "Air Cutter",
            "type": "Flying",
            "power": 60,
            "durationMS": 2700,
            "energyCost": 50
          },
          {
            "id": "hurricane",
            "name": "Hurricane",
            "type": "Flying",
            "power": 110,
            "durationMS": 2700,
            "energyCost": 100
          },
          {
            "id": "brick_break",
            "name": "Brick Break",
            "type": "Fighting",
            "power": 40,
            "durationMS": 1600,
            "energyCost": 33
          },
          {
            "id": "swift",
            "name": "Swift",
            "type": "Normal",
            "power": 60,
            "durationMS": 2800,
            "energyCost": 50
          },
          {
            "id": "horn_attack",
            "name": "Horn Attack",
            "type": "Normal",
            "power": 40,
            "durationMS": 1850,
            "energyCost": 33
          },
          {
            "id": "stomp",
            "name": "Stomp",
            "type": "Normal",
            "power": 55,
            "durationMS": 1700,
            "energyCost": 50
          },
          {
            "id": "hyper_fang",
            "name": "Hyper Fang",
            "type": "Normal",
            "power": 80,
            "durationMS": 2500,
            "energyCost": 50
          },
          {
            "id": "body_slam",
            "name": "Body Slam",
            "type": "Normal",
            "power": 50,
            "durationMS": 1900,
            "energyCost": 33
          },
          {
            "id": "rest",
            "name": "Rest",
            "type": "Normal",
            "power": 50,
            "durationMS": 1900,
            "energyCost": 33
          },
          {
            "id": "struggle",
            "name": "Struggle",
            "type": "Normal",
            "power": 35,
            "durationMS": 2200,
            "energyCost": 0
          },
          {
            "id": "scald_blastoise",
            "name": "Scald Blastoise",
            "type": "Water",
            "power": 50,
            "durationMS": 4700,
            "energyCost": 100
          },
          {
            "id": "hydro_pump_blastoise",
            "name": "Hydro Pump Blastoise",
            "type": "Water",
            "power": 90,
            "durationMS": 4500,
            "energyCost": 100
          },
          {
            "id": "wrap_green",
            "name": "Wrap Green",
            "type": "Normal",
            "power": 25,
            "durationMS": 2900,
            "energyCost": 33
          },
          {
            "id": "wrap_pink",
            "name": "Wrap Pink",
            "type": "Normal",
            "power": 25,
            "durationMS": 2900,
            "energyCost": 33
          },
          {
            "id": "close_combat",
            "name": "Close Combat",
            "type": "Fighting",
            "power": 100,
            "durationMS": 2300,
            "energyCost": 100
          },
          {
            "id": "dynamic_punch",
            "name": "Dynamic Punch",
            "type": "Fighting",
            "power": 90,
            "durationMS": 2700,
            "energyCost": 50
          },
          {
            "id": "focus_blast",
            "name": "Focus Blast",
            "type": "Fighting",
            "power": 140,
            "durationMS": 3500,
            "energyCost": 100
          },
          {
            "id": "aurora_beam",
            "name": "Aurora Beam",
            "type": "Ice",
            "power": 80,
            "durationMS": 3550,
            "energyCost": 50
          },
          {
            "id": "wild_charge",
            "name": "Wild Charge",
            "type": "Electric",
            "power": 90,
            "durationMS": 2600,
            "energyCost": 50
          },
          {
            "id": "zap_cannon",
            "name": "Zap Cannon",
            "type": "Electric",
            "power": 140,
            "durationMS": 3700,
            "energyCost": 100
          },
          {
            "id": "avalanche",
            "name": "Avalanche",
            "type": "Ice",
            "power": 90,
            "durationMS": 2700,
            "energyCost": 50
          },
          {
            "id": "brave_bird",
            "name": "Brave Bird",
            "type": "Flying",
            "power": 90,
            "durationMS": 2000,
            "energyCost": 100
          },
          {
            "id": "sky_attack",
            "name": "Sky Attack",
            "type": "Flying",
            "power": 70,
            "durationMS": 2000,
            "energyCost": 50
          },
          {
            "id": "sand_tomb",
            "name": "Sand Tomb",
            "type": "Ground",
            "power": 80,
            "durationMS": 4000,
            "energyCost": 50
          },
          {
            "id": "rock_blast",
            "name": "Rock Blast",
            "type": "Rock",
            "power": 50,
            "durationMS": 2100,
            "energyCost": 33
          },
          {
            "id": "silver_wind",
            "name": "Silver Wind",
            "type": "Bug",
            "power": 70,
            "durationMS": 3700,
            "energyCost": 33
          },
          {
            "id": "night_shade",
            "name": "Night Shade",
            "type": "Ghost",
            "power": 60,
            "durationMS": 2600,
            "energyCost": 50
          },
          {
            "id": "gyro_ball",
            "name": "Gyro Ball",
            "type": "Steel",
            "power": 80,
            "durationMS": 3300,
            "energyCost": 50
          },
          {
            "id": "heavy_slam",
            "name": "Heavy Slam",
            "type": "Steel",
            "power": 70,
            "durationMS": 2100,
            "energyCost": 50
          },
          {
            "id": "overheat",
            "name": "Overheat",
            "type": "Fire",
            "power": 160,
            "durationMS": 4000,
            "energyCost": 100
          },
          {
            "id": "grass_knot",
            "name": "Grass Knot",
            "type": "Grass",
            "power": 90,
            "durationMS": 2600,
            "energyCost": 50
          },
          {
            "id": "energy_ball",
            "name": "Energy Ball",
            "type": "Grass",
            "power": 90,
            "durationMS": 3900,
            "energyCost": 50
          },
          {
            "id": "futuresight",
            "name": "Futuresight",
            "type": "Psychic",
            "power": 120,
            "durationMS": 2700,
            "energyCost": 100
          },
          {
            "id": "mirror_coat",
            "name": "Mirror Coat",
            "type": "Psychic",
            "power": 60,
            "durationMS": 2600,
            "energyCost": 50
          },
          {
            "id": "outrage",
            "name": "Outrage",
            "type": "Dragon",
            "power": 110,
            "durationMS": 3900,
            "energyCost": 50
          },
          {
            "id": "crunch",
            "name": "Crunch",
            "type": "Dark",
            "power": 70,
            "durationMS": 3200,
            "energyCost": 33
          },
          {
            "id": "foul_play",
            "name": "Foul Play",
            "type": "Dark",
            "power": 70,
            "durationMS": 2000,
            "energyCost": 50
          },
          {
            "id": "surf",
            "name": "Surf",
            "type": "Water",
            "power": 65,
            "durationMS": 1700,
            "energyCost": 50
          },
          {
            "id": "draco_meteor",
            "name": "Draco Meteor",
            "type": "Dragon",
            "power": 150,
            "durationMS": 3600,
            "energyCost": 100
          },
          {
            "id": "doom_desire",
            "name": "Doom Desire",
            "type": "Steel",
            "power": 80,
            "durationMS": 1700,
            "energyCost": 50
          },
          {
            "id": "psycho_boost",
            "name": "Psycho Boost",
            "type": "Psychic",
            "power": 70,
            "durationMS": 4000,
            "energyCost": 50
          }
    ]}
];