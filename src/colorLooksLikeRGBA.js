
export default function (rgba) {
    if (!Array.isArray(rgba)) {
        return false;
    }

    return (
        (rgba.length == 3 || rgba.length == 4)
        && rgba[0] >= 0 && rgba[0] <= 255
        && rgba[1] >= 0 && rgba[1] <= 255
        && rgba[2] >= 0 && rgba[2] <= 255
        && (rgba.length == 4 ? rgba[3] >= 0 && rgba[3] <= 1 : true)
    )
}
