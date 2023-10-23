function calculateRunningMedian(v, k) {
  const median = [];

  for(let index = 0; index <= (v.length - k); index++) {
    let maxValue = 0;

    // walking through the window...
    for(let offset = 0; offset < k; offset++) {
      const currentValue = v[index + offset];

      if (currentValue > maxValue)
        maxValue = currentValue;
    }

    median.push(maxValue);

    maxValue = 0; // reset value for the next run
  }

  return median;
}

const v = [27, 9, 17, 2, 12, 8];
const k = 3;

const median = calculateRunningMedian(v, k)

console.log(median);
