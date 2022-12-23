<div align="center">
<h2>Image Processing API</h2>
<p>Advanced Full-Stack Web Development Nanodegree Program - EgFWD</p>
<br>
</div>

## Description

Image Processing API with Sharp

## Usage

1. Download Repository & Installing Requirements
   ```shell
   $ git clone git@github.com:KShawki/ImageProccessingAPI.git
   $ cd ImageProccessingAPI
   $ npm install
   ```
2. Run Scripts
   ```shell
   $ npm run build
   ```

## End Point (How to test)?

### Home Page:

```shell
 http://localhost:3000/
```

### Resize Image:

```shell
 http://localhost:3000/resize?name=fjord&width=100&height=100&fileExtension=png
```
-----

## Folder structure

```
IMA/             # Root directory.
  |- build/        # Folder used to store builded (output) files.
  |- images/       # Images folder.
  |- src/          # TypeScript files.
  |- spec/         # Jasmine File Testing.
  |- .prettierrc
  |- .eslintrc.js
  |- index.html
  |- instructions.md
  |- README.md

```

## Technology Used:

NodeJS + TypeScript + Jasmine + Sharp + Prettier + ESLint
