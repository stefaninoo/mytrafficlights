export const
        TRAFFIC_LIGHT = {
            LIGHTS : [
                { color : 'red', on : null },
                { color : 'orange', on : null },
                { color : 'green', on : null }
            ],
            CONFIG : {
                // Lights order 0 - Red, 1 - Yellow, 2 - Green
                GO : [false,false,true],
                WARN : [false,true,false],
                STOP : [true,false,false],
                READY: [true,true,false],
                OFF: [false,false,false]
            },
            // Duration in ms of light ON
            DURATION : 3000,
            WARNING_DURATION : 800
        }