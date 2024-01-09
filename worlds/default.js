// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name:"world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0xe0e0e0,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "jpg",
                toneMappingExposure: 1.2
            }
        },
        {
            card: {
                translation: [0, -1.756348161644599, -5.970223141259936],
                rotation: [0, 0, 0, 1],
                layers: ["pointer"],
                name: "basketball.glb",
                dataLocation: "./assets/3D/basketball.glb",
                dataScale: [16.64163365726752, 16.64163365726752, 16.64163365726752],
                fileName: "basketball.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",            
            }
        },
        {
            card: {
                translation: [13.626162027832844, -0.770171480132806, 4.411444054129259],
                scale: [3.856661852854615, 3.856661852854615, 3.856661852854615],
                rotation: [0, 0.1931872217891989, 0, 0.9811619118868052],
                layers: ["pointer"],
                name: "stadium.glb",
                dataLocation: "./assets/3D/stadium.glb",
                dataScale: [0.006829042960209227, 0.006829042960209227, 0.006829042960209227],
                fileName: "stadium.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",            
            }
        }
    ];
}
