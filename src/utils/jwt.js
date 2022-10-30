import {getUnixTime} from "./date";

const LIFE_TIME_TO_UPDATE_MULTIPLIER = 0.5;

export const isTokenExpired = (token) => {
    if (!token) {
        return true
    }

    try {
        const tokenInfo = token.split(".")[1]
        const tokenInfoDecoded = window.atob(tokenInfo)
        const { exp, iat } = JSON.parse(tokenInfoDecoded)

        const tokenLifeTime = exp - getUnixTime()
        const minLifeTimeToUpdate = (exp - iat) * LIFE_TIME_TO_UPDATE_MULTIPLIER

        return tokenLifeTime < minLifeTimeToUpdate
    } catch (e) {
        console.error(e)
        return true
    }
}