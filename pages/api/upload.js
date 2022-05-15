import formidable from "formidable";
import fs from "fs";

const moment = require("moment")

const timeStamp = moment().format("MMMM-Do-YYYY-h-mm-ss-a");

export const config = {
  api: {
    bodyParser: false
  }
};

const post = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    const path = await saveFile(files.file)
    // console.log(path)
    return res.status(201).json({path});
  });
};

const saveFile = async (file) => {
    // console.log(file, file.filepath);
    const data = fs.readFileSync(file.filepath);
    const unee = `./public/product/${timeStamp}${file.originalFilename}`
    fs.writeFileSync(unee, data);
    await fs.unlinkSync(file.filepath);
    return "product/"+timeStamp+file.originalFilename;
  };

export default  post