let startNum = 0,
    batch = 70;

const rgFilters = [{
  "fieldName": "animalOrgID",
  "operation": "equals",
  "criteria": "2420"
}, {
  "fieldName": "animalStatus",
  "operation": "equals",
  "criteria": "Available"
}];

const oneAnimalFilters = (catID) => (
  [...rgFilters, {
    "fieldName": "animalID",
    "operation": "equals",
    "criteria": catID
  }]
);

const fields = ["animalName", "animalOrgID", "animalBreed", "animalGeneralAge", "animalColor", "animalSex", "animalDescriptionPlain", "animalPictures", "animalVideoUrls", "animalStatus", "locationName"];

const mainPostData = {
  "apikey": "Z1GzrPbx",
  "objectType": "animals",
  "objectAction": "publicSearch"
};

export const postData = {
  ...mainPostData,
  "search": {
    "resultStart": startNum,
    "resultLimit": batch,
    "resultSort": "animalName",
    "resultOrder": "asc",
    "calcFoundRows": "Yes",
    "filters": [...rgFilters],
    "fields": fields
  }
};

export const postDataOneCat = (catID) => ({
  ...mainPostData,
  "search": {
    "filters": oneAnimalFilters(catID),
    "fields": fields
  }
});

