

export const splitKeyValue = (obj) => {
    const keys = Object.keys(obj);
    const res = [{}];
    for (let i = 0; i < keys.length; i++) {
      res.push({
        date: keys[i],
        cases: obj[keys[i]],
      });
    }
    return res;
  };