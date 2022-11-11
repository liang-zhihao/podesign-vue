const getAssetsFile = (url) => {
    return new URL(`../assets/${url}`, import.meta.url).href
}
const getCOSFile = (url) => {
    return 'https://podesign-main-1314901625.cos.ap-guangzhou.myqcloud.com/' + url
}
const buildImgStr = (src, width, height) => {
    src = getAssetsFile(src)
    if (width === "" && height === "") {
        return { src }
    }
    if (width === "") {
        return { src, height, style: { height: height + " !important" } }
    }
    if (height === "") {
        return { src, width, style: { width: width + " !important" } }
    }
    return { src, width, height, style: { width: width + " !important", height: height + " !important" } }

}
export default { getAssetsFile, buildImgStr, getCOSFile }