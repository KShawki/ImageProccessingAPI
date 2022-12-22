import fs from 'fs';
import express from 'express';
import path from 'path';

const middleware = express.Router();

// Middleware to check if the file is exsisting or not.
// We need this middleware to avoid duplication photos and cashes!

const Exsisting = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const folder_path = `${
    path.join(__dirname, '../../../images/thumb/') + req.query.imgName
  }_thumb_${req.query.width}_${req.query.height}.${req.query.fileExtension}`;

  try {
    await fs.promises.readFile(folder_path);
    res.status(200).sendFile(folder_path);
  } catch (err) {
    next();
  }
};

export default Exsisting;
