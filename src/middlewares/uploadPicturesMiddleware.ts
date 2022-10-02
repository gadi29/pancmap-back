import multer from "multer";

const upload = multer({ dest: "../../public/uploads/" });

export const cpUpload = upload.fields([
  { name: "leaf-pic", maxCount: 1 },
  { name: "flower-pic", maxCount: 1 },
  { name: "fruit-pic", maxCount: 1 },
  { name: "underground-pic", maxCount: 1 },
]);
