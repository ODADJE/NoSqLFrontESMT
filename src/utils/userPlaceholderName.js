export const userPlaceHolderName = (name) => {
  if (name) {
    const nameTab = name?.split(' ');
    if (nameTab?.length === 1) return nameTab[0][0];
    return nameTab[0][0] + nameTab[1][0];
  }
};
