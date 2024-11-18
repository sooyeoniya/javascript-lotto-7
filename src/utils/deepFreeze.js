const deepFreeze = (object) => {
  Object.keys(object).forEach((key) => {
    if (
      typeof object[key] === 'object' 
      && object[key] !== null 
      && !Object.isFrozen(object[key])
    ) {
      deepFreeze(object[key]);
    }
  });

  return Object.freeze(object);
}

export default deepFreeze;
