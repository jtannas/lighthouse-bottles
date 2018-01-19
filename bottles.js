const bottles = function calculateTheNumberOfBottlesObtainable(dollars) {
  const dollarsPerNewBottle = 2;
  const bottlesPerNewBottle = 2;
  const capsPerNewBottle = 4;
  const results = {
    total: 0,
    bought: 0,
    earned: {
      bottles: 0,
      caps: 0
    },
    remaining: {
      bottles: 0,
      caps: 0
    }
  };

  if (isNaN(dollars)) {
    throw new Error('dollars must be a number');
  } else if (dollars <= 0) {
    return results;
  }

  results.bought = Math.floor(dollars / dollarsPerNewBottle);
  results.total = results.bought;
  results.remaining.caps = results.bought;
  results.remaining.bottles = results.bought;

  while (results.remaining.bottles >= bottlesPerNewBottle || results.remaining.caps >= capsPerNewBottle) {
    const newBottles = {
      fromCaps: Math.floor(results.remaining.caps / capsPerNewBottle),
      fromBottles: Math.floor(results.remaining.bottles / bottlesPerNewBottle)
    };
    newBottles.total = newBottles.fromBottles + newBottles.fromCaps;

    results.earned.bottles += newBottles.fromBottles;
    results.earned.caps += newBottles.fromCaps;

    results.remaining.bottles = (results.remaining.bottles % bottlesPerNewBottle) + newBottles.total;
    results.remaining.caps = (results.remaining.caps % capsPerNewBottle) + newBottles.total;

    results.total += newBottles.total;
  }

  return results;
};

module.exports = {
  bottles: bottles
};
