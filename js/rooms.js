var rooms = {
    "A1" : {
        "description": "You have reached the end. You can go <em>South</em>",
        "directions": {
            "south": "B1",
        }
    },
    "A2" : {
        "description": "You are in A-2. You can go <em>East</em>",
        "directions": {
            "east": "A3"
        }
    },
    "A3" : {
        "description": "You are in A-3. You can go <em>East</em>, and <em>West</em>",
        "directions": {
            "west": "A2",
            "east": "A4"
        }
    },
    "A4" : {
        "description": "You are in A-4. You can go <em>East</em>, <em>South</em>, and <em>West</em>",
        "directions": {
            "west": "A3",
            "east": "A5",
            "south": "B4"
        }
    },
    "A5" : {
        "description": "You are in A-5. You can go <em>West</em>",
        "directions": {
            "west": "A4"
        }
    },
    "B1" : {
        "description": "You are in B-1. You can go <em>North</em>, and <em>South</em>",
        "directions": {
            "north": "A1",
            "south": "C1"
        }
    },
    "B2" : {
        "description": "You are in B-2. You can go <em>East</em>, and <em>South</em>",
        "directions": {
            "east": "B3",
            "south": "C2"
        }
    },
    "B3" : {
        "description": "You are in B-3. You can go <em>East</em>, <em>South</em>, and <em>West</em>",
        "directions": {
            "west": "B2",
            "east": "B4",
            "south": "C3"
        }
    },
    "B4" : {
        "description": "You are in B-4. You can go <em>North</em>, and <em>West</em>",
        "directions": {
            "north": "A4",
            "west": "B3"
        }
    },
    "B5" : {
        "description": "You are in B-5. You can go <em>South</em>",
        "directions": {
            "south": "C5"
        }
    },
    "C1" : {
        "description": "You are in C-1. You can go <em>North</em>, <em>East</em>, and <em>South</em>",
        "directions": {
            "north": "B1",
            "east": "C2",
            "south": "D1"
        }
    },
    "C2" : {
        "description": "You are in C-2. You can go <em>North</em>, and <em>West</em>",
        "directions": {
            "north": "B2",
            "west": "C1"
        }
    },
    "C3" : {
        "description": "You are in C-3. You can go <em>North</em>, <em>East</em>, and <em>South</em>",
        "directions": {
            "north": "B3",
            "east": "C4",
            "south": "D3"
        }
    },
    "C4" : {
        "description": "You are in C-4. You can go <em>East</em>, and <em>West</em>",
        "directions": {
            "east": "C5",
            "west": "C3"
        }
    },
    "C5" : {
        "description": "You are in C-5. You can go <em>North</em>, and <em>West</em>",
        "directions": {
            "north": "B5",
            "west": "C4"
        }
    },
    "D1" : {
        "description": "You are in D-1. You can go <em>North</em>, <em>East</em>, and <em>South</em>",
        "directions": {
            "north": "C1",
            "east": "D2",
            "south": "E1"
        }
    },
    "D2" : {
        "description": "You are in D-2. You can go <em>West</em>",
        "directions": {
            "west": "D1"
        }
    },
    "D3" : {
        "description": "You are in D-3. You can go <em>North</em>, <em>East</em>, and <em>South</em>",
        "directions": {
            "north": "C3",
            "east": "D4",
            "south": "E3"
        }
    },
    "D4" : {
        "description": "You are in D-4. You can go <em>West</em>",
        "directions": {
            "west": "D3",
        }
    },
    "D5" : {
        "description": "You are in D-5. You can go <em>South</em>",
        "directions": {
            "south": "E5"
        }
    },
    "E1" : {
        "description": "You are in E-1. You can go <em>North</em>, and <em>East</em>",
        "directions": {
            "north": "D1",
            "east": "E2"
        }
    },
    "E2" : {
        "description": "You are in E-2. You can go <em>East</em>, and <em>West</em>",
        "directions": {
            "east": "E3",
            "west": "E1"
        }
    },
    "E3" : {
        "description": "You are in the starting area. You can go <em>North</em>, <em>East</em>, and <em>West</em>",
        "directions": {
            "north": "D3",
            "east": "E4",
            "west": "E2"
        }
    },
    "E4" : {
        "description": "You are in E-4. You can go <em>East</em>, and <em>West</em>",
        "directions": {
            "east": "E5",
            "west": "E3"
        }
    },
    "E5" : {
        "description": "You are in E-5 You can go <em>North</em> and <em>West</em>",
        "directions": {
            "north": "D5",
            "west": "E4"
        }
    },
}
