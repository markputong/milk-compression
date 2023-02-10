const fs = require('fs');
const byteData = require('byte-data');
//const { toHalfFloat } = require('./src/data-encode.js')
//onst { fromHalfFloat } = require('./src/data-decode.js')

let writeStream;

let file = Buffer.from([])

const game_state = {
    "pre_match": 0 ,
    "round_start": 1 ,
    "playing": 2 ,
    "score": 3 ,
    "round_over": 4 ,
    "post_match": 5 ,
    "pre_sudden_death": 6 ,
    "sudden_death": 7 ,
    "post_sudden_death": 8
}

const sample = {
    "disc": {
        "position": [0.54763, 14.52374, 8.25743],
        "forward": [0.0, 0.0, 1.0],
        "left": [1.0, 0.0, 0.0],
        "up": [0.0, 1.0, 0.0],
        "velocity": [0.0, 0.0, 0.0],
        "bounce_count": 0
    },
    "sessionid": "D2A909E9-4F60-4DD9-94F3-3B57C1198D40",
    "orange_team_restart_request": 0,
    "sessionip": "209.250.255.98",
    "game_status": "round_start",
    "game_clock_display": "04:33.44",
    "game_clock": 273.44052,
    "match_type": "Echo_Arena",
    "map_name": "mpl_arena_a",
    "client_name": "Exhibit",
    "player": {
        "vr_left": [1.0, 0.0, 0.0],
        "vr_position": [0.0, 0.0, 0.0],
        "vr_forward": [0.0, 0.0, 1.0],
        "vr_up": [0.0, 1.0, 0.0]
    },
    "orange_points": 3,
    "private_match": false,
    "possession": [1, 1],
    "tournament_match": false,
    "blue_team_restart_request": 0,
    "blue_points": 0,
    "last_score": {
        "disc_speed": 0.0,
        "team": "orange",
        "goal_type": "[NO GOAL]",
        "point_amount": 0,
        "distance_thrown": 0.0,
        "person_scored": "[INVALID]",
        "assist_scored": "[INVALID]"
    },
    "teams": [{
        "players": [{
            "rhand": {
                "pos": [0.75600004, 3.6940002, -49.740002],
                "forward": [-0.42600003, -0.80100006, -0.42100003],
                "left": [0.42700002, -0.588, 0.68700004],
                "up": [-0.79800004, 0.11300001, 0.59300005]
            },
            "playerid": 0,
            "name": "HerkyTheHawk",
            "userid": 2872639592851004,
            "stats": {
                "possession_time": 0.0,
                "points": 0,
                "saves": 0,
                "goals": 0,
                "stuns": 1,
                "passes": 0,
                "catches": 0,
                "steals": 0,
                "blocks": 0,
                "interceptions": 0,
                "assists": 0,
                "shots_taken": 0
            },
            "number": 0,
            "level": 50,
            "stunned": false,
            "ping": 110,
            "invulnerable": false,
            "head": {
                "position": [0.73700005, 4.46, -49.695004],
                "forward": [-0.53300005, -0.11300001, -0.83900005],
                "left": [-0.84600002, 0.076000005, 0.52700001],
                "up": [0.0040000002, 0.99100006, -0.13600001]
            },
            "possession": false,
            "body": {
                "position": [0.73700005, 4.46, -49.695004],
                "forward": [-0.47900003, 0.0, -0.87800002],
                "left": [-0.87800002, 0.0020000001, 0.47900003],
                "up": [0.0020000001, 1.0, -0.001]
            },
            "lhand": {
                "pos": [0.66200006, 3.6840003, -49.526001],
                "forward": [-0.87900007, -0.133, -0.45800003],
                "left": [-0.087000005, 0.98900002, -0.12],
                "up": [0.46900001, -0.066, -0.88100004]
            },
            "blocking": false,
            "velocity": [-0.072000004, 0.0, 0.036000002]
        }, {
            "rhand": {
                "pos": [-0.039000001, 4.1260004, -53.856003],
                "forward": [0.30600002, -0.081, 0.94900006],
                "left": [0.90100002, -0.29800001, -0.31600001],
                "up": [0.30800003, 0.95100003, -0.019000001]
            },
            "playerid": 1,
            "name": "Alocoste",
            "userid": 1855581837825310,
            "stats": {
                "possession_time": 9.7400818,
                "points": 0,
                "saves": 0,
                "goals": 0,
                "stuns": 1,
                "passes": 0,
                "catches": 0,
                "steals": 0,
                "blocks": 0,
                "interceptions": 0,
                "assists": 0,
                "shots_taken": 0
            },
            "number": 22,
            "level": 50,
            "stunned": false,
            "ping": 38,
            "invulnerable": false,
            "head": {
                "position": [-0.016000001, 4.5160003, -54.371002],
                "forward": [0.012, -0.041000001, 0.99900007],
                "left": [0.97400004, 0.22700001, -0.0020000001],
                "up": [-0.22600001, 0.97300005, 0.043000001]
            },
            "possession": false,
            "body": {
                "position": [-0.016000001, 4.5160003, -54.371002],
                "forward": [-0.001, 0.001, 1.0],
                "left": [1.0, -0.0020000001, 0.001],
                "up": [0.0020000001, 1.0, -0.001]
            },
            "lhand": {
                "pos": [0.27000001, 3.6100001, -54.337002],
                "forward": [-0.12800001, -0.89400005, 0.43000001],
                "left": [0.67500001, 0.23900001, 0.69800001],
                "up": [-0.72600001, 0.38000003, 0.57300001]
            },
            "blocking": false,
            "velocity": [0.33800003, 0.60800004, 0.33700001]
        }, {
            "rhand": {
                "pos": [0.052000001, 4.0650001, -54.530003],
                "forward": [-0.54300004, 0.52900004, 0.65200001],
                "left": [0.32100001, -0.58700001, 0.74400002],
                "up": [0.77600002, 0.61300004, 0.149]
            },
            "playerid": 6,
            "name": "Charlie_13",
            "userid": 1470043449722172,
            "stats": {
                "possession_time": 1.2013452,
                "points": 0,
                "saves": 0,
                "goals": 0,
                "stuns": 1,
                "passes": 0,
                "catches": 0,
                "steals": 1,
                "blocks": 0,
                "interceptions": 0,
                "assists": 0,
                "shots_taken": 0
            },
            "number": 13,
            "level": 50,
            "stunned": false,
            "ping": 21,
            "invulnerable": false,
            "head": {
                "position": [0.33600003, 4.572, -54.658001],
                "forward": [0.12900001, -0.47800002, 0.86900002],
                "left": [0.88900006, -0.33200002, -0.31400001],
                "up": [0.43900001, 0.81300002, 0.38200003]
            },
            "possession": false,
            "body": {
                "position": [0.33600003, 4.572, -54.658001],
                "forward": [0.35200003, 0.001, 0.93600005],
                "left": [0.93600005, -0.0020000001, -0.35200003],
                "up": [0.001, 1.0, -0.001]
            },
            "lhand": {
                "pos": [0.30400002, 4.4590001, -54.670002],
                "forward": [-0.27000001, 0.63300002, -0.72600001],
                "left": [-0.52000004, 0.53900003, 0.66300005],
                "up": [0.81000006, 0.55600005, 0.18400002]
            },
            "blocking": false,
            "velocity": [0.18000001, 0.20600002, -0.045000002]
        }, {
            "rhand": {
                "pos": [0.053000003, 4.3180003, -53.160004],
                "forward": [0.27400002, 0.73400003, 0.62100005],
                "left": [0.90700006, -0.41300002, 0.088000007],
                "up": [0.32100001, 0.53900003, -0.77900004]
            },
            "playerid": 7,
            "name": "ninjaknight93",
            "userid": 2659781197425505,
            "stats": {
                "possession_time": 1.4044478,
                "points": 0,
                "saves": 0,
                "goals": 0,
                "stuns": 5,
                "passes": 0,
                "catches": 0,
                "steals": 0,
                "blocks": 0,
                "interceptions": 0,
                "assists": 0,
                "shots_taken": 0
            },
            "number": 93,
            "level": 50,
            "stunned": false,
            "ping": 49,
            "invulnerable": false,
            "head": {
                "position": [0.109, 4.401, -53.539001],
                "forward": [-0.065000005, -0.13100001, 0.98900002],
                "left": [0.99800003, -0.0060000001, 0.064000003],
                "up": [-0.0020000001, 0.99100006, 0.13100001]
            },
            "possession": false,
            "body": {
                "position": [0.109, 4.401, -53.539001],
                "forward": [-0.046000004, 0.0020000001, 0.99900007],
                "left": [0.99900007, -0.001, 0.046000004],
                "up": [0.001, 1.0, -0.001]
            },
            "lhand": {
                "pos": [0.42500001, 3.6820002, -53.368004],
                "forward": [0.34800002, -0.36400002, 0.86400002],
                "left": [0.55800003, 0.82100004, 0.12100001],
                "up": [-0.75300002, 0.44000003, 0.48900002]
            },
            "blocking": false,
            "velocity": [0.12, 0.24700001, 0.35900003]
        }],
        "team": "BLUE TEAM",
        "possession": false,
        "stats": {
            "points": 0,
            "possession_time": 12.345875,
            "interceptions": 0,
            "blocks": 0,
            "steals": 1,
            "catches": 0,
            "passes": 0,
            "saves": 0,
            "goals": 0,
            "stuns": 8,
            "assists": 0,
            "shots_taken": 0
        }
    }, {
        "players": [{
            "rhand": {
                "pos": [0.112, 3.3540001, 47.506001],
                "forward": [-0.69900006, -0.67700005, 0.23],
                "left": [0.71200001, -0.68600005, 0.15000001],
                "up": [0.057000004, 0.26900002, 0.96200007]
            },
            "playerid": 2,
            "name": "Phil_Swift_Here",
            "userid": 2590722144364973,
            "stats": {
                "possession_time": 0.0,
                "points": 0,
                "saves": 0,
                "goals": 0,
                "stuns": 0,
                "passes": 0,
                "catches": 0,
                "steals": 0,
                "blocks": 0,
                "interceptions": 0,
                "assists": 0,
                "shots_taken": 0
            },
            "number": 1,
            "level": 50,
            "stunned": false,
            "ping": 36,
            "invulnerable": false,
            "head": {
                "position": [0.087000005, 4.2510004, 47.597004],
                "forward": [-0.24100001, -0.29200003, -0.92600006],
                "left": [-0.94600004, -0.141, 0.29100001],
                "up": [-0.215, 0.94600004, -0.24200001]
            },
            "possession": false,
            "body": {
                "position": [0.087000005, 4.2510004, 47.597004],
                "forward": [-0.20300001, -0.116, -0.97200006],
                "left": [-0.96300006, -0.156, 0.22000001],
                "up": [-0.177, 0.98100007, -0.080000006]
            },
            "lhand": {
                "pos": [0.14, 3.4210002, 47.831001],
                "forward": [-0.55900002, -0.648, 0.51700002],
                "left": [-0.193, 0.708, 0.67900002],
                "up": [-0.80700004, 0.28, -0.52000004]
            },
            "blocking": false,
            "velocity": [-0.19400001, -1.148, -3.0550001]
        }, {
            "rhand": {
                "pos": [0.44000003, 5.1440001, 52.256004],
                "forward": [-0.16000001, 0.27200001, -0.94900006],
                "left": [0.30400002, -0.90100002, -0.31],
                "up": [-0.93900007, -0.33800003, 0.061000004]
            },
            "playerid": 3,
            "name": "Echo-0",
            "userid": 2330998406951981,
            "stats": {
                "possession_time": 11.453389,
                "points": 3,
                "saves": 0,
                "goals": 0,
                "stuns": 4,
                "passes": 0,
                "catches": 0,
                "steals": 0,
                "blocks": 0,
                "interceptions": 0,
                "assists": 0,
                "shots_taken": 1
            },
            "number": 84,
            "level": 50,
            "stunned": false,
            "ping": 45,
            "invulnerable": false,
            "head": {
                "position": [0.12, 5.1290002, 52.618004],
                "forward": [-0.43000001, 0.15200001, -0.89000005],
                "left": [-0.88400006, 0.13100001, 0.44900003],
                "up": [0.185, 0.98000002, 0.078000002]
            },
            "possession": true,
            "body": {
                "position": [0.12, 5.1290002, 52.618004],
                "forward": [-0.17500001, 0.096000001, -0.98000002],
                "left": [-0.98400003, 0.011000001, 0.177],
                "up": [0.028000001, 0.99500006, 0.092000008]
            },
            "lhand": {
                "pos": [-0.062000003, 4.6060004, 52.379002],
                "forward": [0.21800001, -0.29200003, -0.93100005],
                "left": [-0.70300001, 0.61500001, -0.35700002],
                "up": [0.67700005, 0.73300004, -0.071000002]
            },
            "blocking": false,
            "velocity": [0.2, -0.12, -0.95800006]
        }, {
            "rhand": {
                "pos": [0.17300001, 4.0490003, 51.026001],
                "forward": [-0.108, -0.85700005, -0.50300002],
                "left": [-0.29300001, -0.45600003, 0.84000003],
                "up": [-0.95000005, 0.23900001, -0.20200001]
            },
            "playerid": 4,
            "name": "Yogzie",
            "userid": 2152383101466362,
            "stats": {
                "possession_time": 0.0,
                "points": 0,
                "saves": 0,
                "goals": 0,
                "stuns": 0,
                "passes": 0,
                "catches": 0,
                "steals": 0,
                "blocks": 0,
                "interceptions": 0,
                "assists": 0,
                "shots_taken": 0
            },
            "number": 44,
            "level": 50,
            "stunned": false,
            "ping": 42,
            "invulnerable": false,
            "head": {
                "position": [0.059000004, 4.868, 51.105003],
                "forward": [-0.11100001, -0.26900002, -0.95700002],
                "left": [-0.99000007, 0.119, 0.082000002],
                "up": [0.092000008, 0.95600003, -0.28]
            },
            "possession": false,
            "body": {
                "position": [0.059000004, 4.868, 51.105003],
                "forward": [-0.15100001, -0.001, -0.98900002],
                "left": [-0.98900002, -0.001, 0.15100001],
                "up": [-0.0020000001, 1.0, -0.001]
            },
            "lhand": {
                "pos": [-0.186, 4.1160002, 51.155003],
                "forward": [-0.41100001, -0.89900005, -0.149],
                "left": [-0.73500001, 0.23, 0.63800001],
                "up": [-0.53900003, 0.37200001, -0.75600004]
            },
            "blocking": false,
            "velocity": [-0.53900003, -0.60100001, -2.2670002]
        }, {
            "rhand": {
                "pos": [1.1600001, 3.7270002, 46.910004],
                "forward": [0.39800003, -0.075000003, -0.91400003],
                "left": [-0.78300005, -0.54700005, -0.296],
                "up": [-0.47900003, 0.83300006, -0.27600002]
            },
            "playerid": 5,
            "name": "david.yarker",
            "userid": 1333975446728268,
            "stats": {
                "possession_time": 0.0,
                "points": 0,
                "saves": 0,
                "goals": 0,
                "stuns": 1,
                "passes": 0,
                "catches": 0,
                "steals": 0,
                "blocks": 0,
                "interceptions": 0,
                "assists": 0,
                "shots_taken": 0
            },
            "number": 5,
            "level": 50,
            "stunned": false,
            "ping": 44,
            "invulnerable": false,
            "head": {
                "position": [0.71200001, 4.2130003, 47.551003],
                "forward": [-0.66700006, -0.0050000004, 0.74500006],
                "left": [0.74400002, 0.054000001, 0.66600001],
                "up": [-0.044000003, 0.99900007, -0.033]
            },
            "possession": false,
            "body": {
                "position": [0.71200001, 4.2130003, 47.551003],
                "forward": [-0.50800002, 0.001, 0.86100006],
                "left": [0.86100006, -0.0020000001, 0.50800002],
                "up": [0.0020000001, 1.0, 0.0]
            },
            "lhand": {
                "pos": [0.41300002, 3.4470003, 48.098003],
                "forward": [-0.87900007, -0.185, 0.44100001],
                "left": [-0.287, 0.94100004, -0.178],
                "up": [-0.38200003, -0.28300002, -0.88000005]
            },
            "blocking": false,
            "velocity": [-0.13500001, -0.18000001, -0.001]
        }],
        "team": "ORANGE TEAM",
        "possession": true,
        "stats": {
            "points": 3,
            "possession_time": 11.453389,
            "interceptions": 0,
            "blocks": 0,
            "steals": 0,
            "catches": 0,
            "passes": 0,
            "saves": 0,
            "goals": 0,
            "stuns": 5,
            "assists": 0,
            "shots_taken": 1
        }
    }, {
        "players": [
            {
            "rhand": {
                "pos": [-0.25, 0.0, -9.6200008],
                "forward": [0.0, 0.0, 1.0],
                "left": [1.0, 0.0, 0.0],
                "up": [0.0, 1.0, 0.0]
            },
            "playerid": 8,
            "name": "Exhibit",
            "userid": 1740295146011360,
            "stats": {
                "possession_time": 0.0,
                "points": 0,
                "saves": 0,
                "goals": 0,
                "stuns": 0,
                "passes": 0,
                "catches": 0,
                "steals": 0,
                "blocks": 0,
                "interceptions": 0,
                "assists": 0,
                "shots_taken": 0
            },
            "number": 7,
            "level": 50,
            "stunned": false,
            "ping": 245,
            "invulnerable": false,
            "head": {
                "position": [0.0, 0.0, -10.0],
                "forward": [0.0, 0.0, 1.0],
                "left": [1.0, 0.0, 0.0],
                "up": [0.0, 1.0, 0.0]
            },
            "possession": false,
            "body": {
                "position": [0.0, 0.0, -10.0],
                "forward": [0.0, 0.0, 1.0],
                "left": [1.0, 0.0, 0.0],
                "up": [0.0, 1.0, 0.0]
            },
            "lhand": {
                "pos": [0.25, -0.25, -10.0],
                "forward": [0.0, 0.0, 1.0],
                "left": [1.0, 0.0, 0.0],
                "up": [0.0, 1.0, 0.0]
            },
            "blocking": false,
            "velocity": [0.0, 0.0, 0.0]
        }],
        "team": "SPECTATORS",
        "possession": false,
        "stats": {
            "possession_time": 0.0,
            "points": 0,
            "goals": 0,
            "saves": 0,
            "stuns": 0,
            "interceptions": 0,
            "blocks": 0,
            "passes": 0,
            "catches": 0,
            "steals": 0,
            "assists": 0,
            "shots_taken": 0
        }
    }]
}

let last_score = {}

buildFrameHeader(sample)

function buildFileHeader(json){
    const replayHeader = {
        "author": json.client_name,
        "players":[],
        "numbers": []
    }
    let p = players(json)
    let byte = 0b00000000
    if(json.private_match !== false){
        byte = byte | 0b10000000
    } 

    if(json.match_type !== 'Echo_Arena'){
        byte = byte | 0b01000000
    } 

    if(json.tournament_match !== false){
        byte = byte | 0b00100000
    }
    replayHeader.numbers = p.numbers
    replayHeader.players = p.names
    let header = JSON.stringify(replayHeader)+String.fromCharCode(byte);
    toBytes(header)
}

function players(json){
    const players = {
        "numbers": [[],[]],
        "names": [[],[]],
    }
    for(var i = 0; i < json.teams.length; i++) {
        json.teams[i].players.map(function(p) { 
            players.names[i].push(p.name)
            players.numbers[i].push(p.number)
        });
    }
    return players
}

function encodeTime(float){
    let split = float.split(':').join(',').split('.').join(',').split(',')
    return split
}

function toggleBits(n, bitIndex) {
    const bitMask = 1 << bitIndex;
    return n | bitMask;
}

function buildFrameHeader(json){
    let full_frame = Buffer.from([]);
    let frame_header = Buffer.alloc(8)
    frame_header.writeUInt16BE(0xFEFD,0)
    let time = encodeTime(json.game_clock_display)
    time.forEach(function(e,i){
        frame_header.writeUInt8(e,i + 2)
    });
    frame_header.writeUInt8(json.blue_points,5)
    frame_header.writeUInt8(json.orange_points,6)
    for (var i = 0; i < json.teams.length; i++) {
        let stats = collectStatFrame(json.teams[i].stats)
        full_frame = Buffer.concat([full_frame,stats],full_frame.length + stats.length)
        json.teams[i].players.map(function(p) {
            let player_stats = collectStatFrame(p.stats)
            full_frame = Buffer.concat([full_frame, player_stats],full_frame.length + player_stats.length)
        });  
    }
    frame_header.writeUInt8(full_frame.length,7)
    full_frame = Buffer.concat([frame_header, full_frame],full_frame.length + frame_header.length)
    file = Buffer.concat([file, full_frame],file.length + full_frame.length)
    createChunk(json)
}

function floatToByte(array){
    let buffer = []
    array.forEach(function(float,i){
        let axis = byteData.pack(float, {bits: 16, fp: true})
        buffer = buffer.concat(axis)
    });
    return buffer
}

function byteToFloat(array){
    //Array fed in should be either 2 bytes which will return 1 float, or 6 bytes to return 3 floats 
    //ie. Single Coord or Full 3-axis vector XYZ
    let buffer = byteData.unpackArray(array, {bits: 16,fp: true})
    return buffer
}

function decodeChunk(chunk){
    let disc = chunk.slice(2,9)
    let t = byteToFloat(disc)
    let state = chunk.readUInt8(8)
    let flags = chunk.slice(chunk.length-4, chunk.length)
    Object.keys(game_state).forEach(function(f,i) {
        if(game_state[f] == state){
            state = f
        }
    });

    const nut = {
        "disc_x": t[0],
        "disc_y": t[1],
        "disc_z": t[2],
        "game_state": state,
        "possession": flags.readUInt8(0).toString(2),
        "blocking": flags.readUInt8(1).toString(2),
        "stunned": flags.readUInt8(2).toString(2)
    }
   // console.log(nut)
}

/*     "disc": {
        "position": [0.54763, 14.52374, 8.25743],
        "forward": [0.0, 0.0, 1.0],
        "left": [1.0, 0.0, 0.0],
        "up": [0.0, 1.0, 0.0],
        "velocity": [0.0, 0.0, 0.0],
        "bounce_count": 0
    },
    */

function disc(){
    
}
//Chunks contain everything
function createChunk(json){
    let chunk_head = Buffer.alloc(9)
    chunk_head.writeUInt16BE(0xFDFE,0)
    chunk_head.writeUInt8(game_state[json.game_status],8)

    let flags = {
        "posession": 0b00000000,
        "blocking": 0b00000000,
        "stunned": 0b00000000,
        "invulnerable": 0b00000000,
    }
    
    json.disc.position.forEach(function(e,i){
        let axis = byteData.pack(e, {bits: 16, fp: true})
        axis.forEach(function(x,j){
            chunk_head.writeUInt8(x, ((i*2)+j) + 2)
        })
    })

    let team_buf = Buffer.from([])
    json.teams.forEach(function(e,i){
        if(i < 2){
            e.players.map(function(p,index) {
                let player_info = Buffer.alloc(24)

                //Gets Player head position info
                Object.keys(p.head).forEach(function(c,i) {
                    let x = floatToByte(p.head[c])
                    x.forEach(function(e,j){
                        player_info.writeUInt8(e,(i * 6) + j)
                    })
                });
                team_buf = Buffer.concat([team_buf, player_info], team_buf.length + player_info.length);

                //Checks the flags and updates them if true
                Object.keys(flags).forEach(function(f,i) {
                    if(p[f] == true){
                        console.log(p[f],f)
                        flags[f] = toggleBits(flags[f] , (1 << ((i * 4) + index)))
                    }
                });
                
            });
        }
    });
    
    //Write all flags to buffer
    Object.keys(flags).forEach(function(f,i) {
        team_buf.writeUInt8(flags[f], team_buf.length - 1)
    });

    let chunk = Buffer.concat([chunk_head, team_buf], chunk_head.length + team_buf.length)
    file = Buffer.concat([file, chunk],file.length + chunk.length)
    decodeChunk(chunk)
   // writeFile(file)
}

function collectStatFrame(json){
    const stat_frame = Buffer.alloc(13)
    Object.keys(json).forEach(function(stat,i) {
        if(stat == 'possession_time'){
            let packed = byteData.pack(json[stat], {bits: 16, fp: true});
            packed.forEach(function(e){
                stat_frame.writeUInt8(e, 1)
            });
        } else{
            stat_frame.writeUInt8(json[stat], i)
        } 
    });
    return stat_frame
}

function writeFile(buffer){
    //Just builds a random name using the structure of <map name> + <randomly generated string> + '_compressed.dds'
    fs.writeFile('nuts.bin', buffer,  "binary",function(err) {
    });
}

function checkFloat(value){
    return !isNaN(value) && value.toString().indexOf('.') != -1
}

function toBytes(bytes){
    let str = Buffer.from(bytes)
    fileStream(str)
}
/*
module.exports = { 
    startCompress(out, rate) {
        writeStream = fs.createWriteStream(out);

        fs.readFile("./temp", 'utf8', function(err, contents) {
            let file = JSON.parse(contents);
            buildFileHeader(file.frames[0])
            let allFrames = file.frames
            let iterations = allFrames.length/rate
            for(var i=0; i < iterations;i++){
                let arr = allFrames.slice(0, rate);
                allFrames = allFrames.slice(rate, allFrames.length);
                if(i == iterations.length-2){
                    console.log(allFrames)
                }
                buildFrameHeader(arr[0])
                arr.forEach(function(frame){
                    createChunk(frame)
                });
            }
            writeStream.end()
            writeStream.on('finish', () => {
                fs.unlinkSync('temp')
            });
        });
    }
}*/

function fileStream(data){
    writeStream.write(data);
}
