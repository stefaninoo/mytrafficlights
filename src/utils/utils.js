import * as CONSTANTS from './constants'

/**
 * The function gets the current traffic light state and returns the next one.
 * @param {String} currentState The current state of the traffic light.
 * @returns {String} The next state of the traffic light.
 */
export function getNextTrafficLightState (currentState) {
    let config = CONSTANTS.TRAFFIC_LIGHT.CONFIG;
    if (currentState.nightMode) {
        switch (currentState.config) {
            case config.WARN:
                return config.OFF;
            case config.OFF:
                return config.WARN;
            default:
                return config.WARN;
        }
    } else {
        switch (currentState.config) {
            case config.GO:
                return config.WARN;
            case config.WARN:
                return config.STOP;
            case config.STOP:
                return config.READY;
            case config.READY:
                return config.GO;
            default:
                break;
        }
    }
}

/**
 * The function returns the light duration in ms depending on the received mode.
 * @param {Boolean} nightMode True if night mode is active.
 * @returns The duration based on day/night mode.
 */
export function getLightDuration (nightMode) {
    return nightMode ? CONSTANTS.TRAFFIC_LIGHT.WARNING_DURATION : CONSTANTS.TRAFFIC_LIGHT.DURATION;
}