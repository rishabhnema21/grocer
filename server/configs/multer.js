const multer = require("multer");

const upload = multer({storage: multer.diskStorage({})})

module.exports = upload;