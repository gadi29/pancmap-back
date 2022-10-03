import { TPicturesPath, TSpecieObj } from "../types/specieType";

export async function createSpecie(specie, pictures: Object) {
  const picturesPath = createPicturePathObject(pictures);
  const specieData = createSpecieObject(specie);

  console.log({ ...specieData, ...picturesPath });
}

function createSpecieObject(specie: Object) {
  let specieData: TSpecieObj = {
    cientificName: specie["cientific-name"],
    generalCharacteristics: specie["general-characteristics"],
    leafMorfology: specie["leaf-morfology"],
    flowerMorfology: specie["flower-morfology"],
    fruitMorfology: specie["fruit-morfology"],
    undergroundMorfology: specie["underground-morfology"],
    edibleParts: specie["edible-parts"],
  };

  if (specie["curiosities"])
    specieData = { ...specieData, curiosities: specie["curiosities"] };

  return specieData;
}

function createPicturePathObject(pictures: Object) {
  let picsPath: TPicturesPath = {
    leafPicturePath: `/public/uploads/${pictures["leaf-pic"][0].filename}`,
    flowerPicturePath: `/public/uploads/${pictures["flower-pic"][0].filename}`,
    fruitPicturePath: `/public/uploads/${pictures["fruit-pic"][0].filename}`,
  };

  if (pictures["underground-pic"])
    picsPath = {
      ...picsPath,
      undergroundPicturePath: `/public/uploads/${pictures["underground-pic"][0].filename}`,
    };

  return picsPath;
}
