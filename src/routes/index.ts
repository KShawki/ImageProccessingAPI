// import dependancies
import express from 'express';
import fs from 'fs';
import path from 'path';
import SharpAPI from './image/sharp';
import Exsisting from './validation';

// create an instance express routing
const routes = express.Router();

// manage the root request "localhsot:3000/resize" here
routes.get(
  '/',
  Exsisting,
  async (req: express.Request, res: express.Response): Promise<void> => {
    const imgName = req.query.name as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    const fileExtension = req.query.fileExtension as string;

    // Input FUle
    const imgPath = `${
      path.join(__dirname, '../../images/') + imgName
    }.${fileExtension}`;

    // Output file (Caching)
    const Location = `${
      path.join(__dirname, '../../images/thumb/') + imgName
    }_thumb_${width}_${height}.${fileExtension}`;

    try {
      await fs.promises.readFile(imgPath);
    } catch (error) {
      res.status(401).send(`Error: ${error}`);
    }

    // Main Fnctionality
    try {
      await SharpAPI(imgPath, width, height, fileExtension, Location);
      res.status(200).sendFile(Location);
    } catch (error) {
      res.status(401).send(`Error: ${error}`);
    }
  }
);

export default routes;
