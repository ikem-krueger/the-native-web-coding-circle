// TODO: Rewrite with modulo
function laufendesMaximum(v, k) {
  for(let i = 0; i < v.length; i++) {
    let currentMax = 0;

    for(let j = 0; j < k; j++) {
      if(i > (v.length - k)) {
        return // we are done with the algorithm
      }

      const w = v[i + j];

      if(currentMax < w) {
        currentMax = w;
      }
    }

    console.log(currentMax);

    currentMax = 0;
  }
}

const v = [27, 9, 17, 2, 12, 8];
const k = 3;

laufendesMaximum(v, k); // => [27, 17, 17, 12]
