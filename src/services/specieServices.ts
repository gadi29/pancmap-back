export async function createSpecie(specie, pictures: Object) {
  const picturesPath = createPicturePathObject(pictures);

  const specieData = JSON.parse(JSON.stringify(specie));
  console.log(specieData);
}

function createPicturePathObject(pictures: Object) {
  let picsPath = {};

  if (pictures["leaf-pic"])
    picsPath = {
      ...picsPath,
      leafPicturePath: `/public/uploads/${pictures["leaf-pic"][0].filename}`,
    };
  if (pictures["flower-pic"])
    picsPath = {
      ...picsPath,
      flowerPicturePath: `/public/uploads/${pictures["flower-pic"][0].filename}`,
    };
  if (pictures["fruit-pic"])
    picsPath = {
      ...picsPath,
      fruitPicturePath: `/public/uploads/${pictures["fruit-pic"][0].filename}`,
    };
  if (pictures["underground-pic"])
    picsPath = {
      ...picsPath,
      undergroundPicturePath: `/public/uploads/${pictures["underground-pic"][0].filename}`,
    };

  return picsPath;
}
