function laufendesMaximum(v, k) {
  const values = [];

  for(let index = 0; index <= (v.length - k); index++) {
    let maxValue = 0;

    // walking through the window...
    for(let offset = 0; offset < k; offset++) {
      const currentValue = v[index + offset];

      if (currentValue > maxValue)
        maxValue = currentValue;
    }

    values.push(maxValue);

    maxValue = 0; // reset value for the next run
  }

  return values;
}

const v = [27, 9, 17, 2, 12, 8];
const k = 3;

const values = laufendesMaximum(v, k)

console.log(values);
