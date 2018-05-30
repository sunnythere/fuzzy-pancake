export const nameSort = (catArr) => (
  catArr.sort((a,b) => {
    if (a.animalName < b.animalName) {
      return -1;
    } else if (a.animalName > b.animalName) {
      return 1;
    } else {
      return 0;
    }
  })
)
