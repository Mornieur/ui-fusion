console.log('Hello World!');

const array = Array.from({ length: 2000000 }, (_, index) => index);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const makeBinarySearch = () => {
  console.time('io');
  binarySearch(array, 1000);
  console.timeEnd('io');
};

makeBinarySearch();

const makeFilterSearch = () => {
  console.time('io');
  array.filter((i) => i === 1000);
  console.timeEnd('io');
};

makeFilterSearch();
