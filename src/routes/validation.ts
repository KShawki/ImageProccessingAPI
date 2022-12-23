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
  const filePath = `${
    path.join(__dirname, '../../../assets/thumb/') + req.query.name
  }_thumb_${req.query.width}_${req.query.height}.${req.query.fileExtension}`;

  try {
    await fs.promises.readFile(filePath);
    res.status(200).sendFile(filePath);
  } catch (err) {
    next();
  }
};

export default Exsisting;
