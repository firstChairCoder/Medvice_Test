function getHighestFrequencyChar(string: string) {
  const { most, ...times } = (string || "").split("").reduce(
    (acc, char) => {
      acc[char] = acc[char] ? acc[char] + 1 : 1;
      acc.most = acc.most < acc[char] ? acc[char] : acc.most;

      return acc;
    },
    { most: 0 }
  );

  return Object.entries(times)
    .filter(([_, val]) => val === most)
    .flat()
    .filter((_, index) => index % 2 === 0);
}

/**
 * explanation:
 * we have an array for each unique value with the number of times they occur.
 * the reduce function goes through the string, increasing each object value count by 1
 * it checks each unique value and only returns the object(s) that has the highest number of appearances
 * return part (from line 12) simply flattens, then removes our "frequency recorder"
 * this should also work with numbers as strings . e.g "2023" should return ["2"] and multiple words
 * e.g: "fantastic four" should return ["f", "a", "t"]
 */
