// @ts-check

/**
 * Determine if a set of values could be an RGBA color
 * @param {[number, number, number, number|undefined]} rgba Array containing red, green, blue and (optional) alpha values
 * @returns {boolean}
 */
export default function colorLooksLikeRGBA(rgba) {
    return (
        (rgba.length >= 3 && rgba.length <= 4)
        && rgba[0] >= 0 && rgba[0] <= 255
        && rgba[1] >= 0 && rgba[1] <= 255
        && rgba[2] >= 0 && rgba[2] <= 255
        && (typeof rgba[3] !== 'undefined' ? rgba[3] >= 0 && rgba[3] <= 1 : true)
    )
}
