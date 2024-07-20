// import { BadRequestException } from "@nestjs/common";
// import { diskStorage } from "multer";
// import { extname } from "path";

// export const multerConfig = {
//   limits: {
//     fileSize: parseInt(process.env.MAX_FILE_SIZE, 10),
//   },
  
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = /jpg|jpeg|png|gif|svg/;
//     if (allowedTypes.test(extname(file.originalname).toLowerCase())) {
//       cb(null, true);
//     } else {
//       cb(new BadRequestException(`Unsupported file type ${extname(file.originalname)}`), false);
//     }
//   },

//   storage: diskStorage({
//     destination: (req, file, cb) => {
//       console.log('Destination called with location:', process.env.UPLOAD_FILE_LOCATION);
//       cb(null, process.env.UPLOAD_FILE_LOCATION);
//     },
//     filename: (req, file, cb) => {
//       console.log('Filename called with original name:', file.originalname);
//       cb(null, Date.now() + extname(file.originalname));
//     },
//   }),
// };

import { BadRequestException } from "@nestjs/common";
import { diskStorage } from "multer";
import { extname } from "path";

export const multerConfig = {
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE, 10),
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpg|jpeg|png|gif|svg/;
    if (allowedTypes.test(extname(file.originalname).toLowerCase())) {
      cb(null, true);
    } else {
      cb(new BadRequestException(`Unsupported file type ${extname(file.originalname)}`), false);
    }
  },
  storage: diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = process.env.UPLOAD_FILE_LOCATION;
      console.log(`File is being saved to: ${uploadPath}`);
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      console.log(`File name: ${Date.now()}${extname(file.originalname)}`);
      cb(null, `${Date.now()}${extname(file.originalname)}`);
    },
  }),
};