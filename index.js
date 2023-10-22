function laufendesMaximum(v, k) {
  const arr = [];

  for(let i = 0; i <= (v.length - k); i++) {
    let max = 0;

    // walking through the window...
    for(let j = 0; j < k; j++) {
      const cur = v[i + j];

      if (cur > max)
        max = cur;
    }

    arr.push(max);

    max = 0; // reset value for the next run
  }

  return arr;
}

const v = [27, 9, 17, 2, 12, 8];
const k = 3;

const arr = laufendesMaximum(v, k)

console.log(arr);
