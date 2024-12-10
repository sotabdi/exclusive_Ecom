const path = require("path");
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);
    const fileName = file.originalname
      .replace(fileExt, "")
      .toLowerCase()
      .split(" ")
      .join("-")+ "-" +Date.now();

    cb(null, `Exclusive-${fileName+fileExt}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
