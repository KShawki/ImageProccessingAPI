import express from 'express';
import * as fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// SharpAPI is Responsable

const SharpAPI = async (
  imgName: string,
  width: number,
  height: number,
  fileExtension: string
) => {
  const output = `${
    path.join(__dirname, '../../../assets/full/') + imgName
  }.${fileExtension}`;

  try {
    fileExtension == 'png'
      ? await sharp(imgName).resize(width, height).png().toFile(output)
      : await sharp(imgName).resize(width, height).jpeg().toFile(output);
  } catch (error) {
    console.error(`Oops! ${error}`);
  }
};

export default SharpAPI;
