const { testResultsProcessor } = require('./jest.config');

function analyzeArray(arr) {
  let result = {
    average() {
      let average = 0;
      arr.forEach((element) => {
        average += element;
      });
      return average / 2;
    },

    min() {
      let min = arr[0];
      arr.forEach((element) => {
        min = element < min ? element : min;
      });
      return min;
    },

    max() {
      let max = arr[0];
      arr.forEach((element) => {
        max = element > max ? element : max;
      });
      return max;
    },

    length() {
        let length = 0;
        arr.forEach(element => {
            length++;
        });
        return length;
    }
  };

  return result;
}

export { analyzeArray };
