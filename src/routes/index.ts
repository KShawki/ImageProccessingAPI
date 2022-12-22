// import dependancies
import express from 'express';
import fs from 'fs';
import path from 'path';
import SharpAPI from './image/sharp';
import Exsisting from './middleware/validation';

// create an instance express routing
const routes = express.Router();

// manage the root request "localhsot:3000/resize" here
routes.get('/', Exsisting, async (req, res): Promise<void> => {
  // parse the data from url request.
  const imgName = req.query.name as string;
  const width = req.query.width as any;
  const height = req.query.height as any;
  const fileExtension = req.query.fileExtension as string;

  // define the output file
  const imgPath = `${
    path.join(__dirname, '../../../images/') + imgName
  }.${fileExtension}`;

  const filePath = `${
    path.join(__dirname, '../../../images/') + imgName
  }_thumb_${width}_${height}.${fileExtension}`;

  // Check if the image requested for resize exists
  try {
    await fs.promises.readFile(imgPath);
  } catch (error) {
    res.send(`Oops: ${error}`).status(401);
  }

  // Main Functionality! SHARP_API
  try {
    await SharpAPI(imgName, width, height, fileExtension);
    res.status(200).sendFile(filePath);
  } catch (error) {
    res.send(`Oops: ${error}`).status(401);
  }
});

export default routes;
