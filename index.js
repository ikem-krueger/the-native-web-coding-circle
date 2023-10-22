// TODO: Rewrite with modulo
function laufendesMaximum(v, k) {
  for(let i = 0; i <= (v.length - k); i++) {
    let max = 0;

    for(let j = 0; j < k; j++) {
      const w = v[i + j];

      if(max < w) {
        max = w;
      }
    }

    console.log(max);

    max = 0;
  }
}

const v = [27, 9, 17, 2, 12, 8];
const k = 3;

laufendesMaximum(v, k); // => [27, 17, 17, 12]
