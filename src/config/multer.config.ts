import { BadRequestException } from "@nestjs/common";
import { diskStorage } from "multer";
import { extname } from "path";

export const multerConfig = {
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE),
  },
  
  fileFilter: (req, file, cb) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif|svg)$/)) {
      cb(null, true);
    } else {
      cb(new BadRequestException([`Unsupported file type ${extname(file.originalname)}`]), false);
    }
  },

  storage: diskStorage({
    destination: (req, file, cb) => {
      cb(null, process.env.UPLOAD_FILE_LOCATION)
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + extname(file.originalname));
    },

  }),
};
