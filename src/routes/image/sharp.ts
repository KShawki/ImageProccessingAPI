import path from 'path';
import sharp from 'sharp';

// SharpAPI is javascript library Responsable to re{size/format/convert} images
const SharpAPI = async (
  imgName: string,
  width: number,
  height: number,
  fileExtension: string,
  location: string
): Promise<void> => {
  try {
    fileExtension == 'png'
      ? await sharp(imgName).resize(width, height).png().toFile(location)
      : await sharp(imgName).resize(width, height).jpeg().toFile(location);
  } catch (error) {
    console.error(`Oops! ${error}`);
  }
};

export default SharpAPI;
