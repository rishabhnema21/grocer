export const optimizeImage = (url, width = 500, quality = "auto") => {
    if (!url) return "";
    if (Array.isArray(url)) url = url[0];

    if (!url.includes("/upload/")) return url;

    return url.replace(
        "/upload/",
        `/upload/f_auto,q_${quality},w_${width}/`
    )
}