"use strict";

function cl(...args) {
  console.log(...args);
}

// Frequency counter/same - 3N
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

// Frequency counting - 3N version
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1Counter = {};
  const str2Counter = {};

  for (const ch of str1) {
    str1Counter[ch] ? ++str1Counter[ch] : (str1Counter[ch] = 1);
  }

  for (const ch of str2) {
    str2Counter[ch] ? ++str2Counter[ch] : (str2Counter[ch] = 1);
  }

  for (const key in str1Counter) {
    if (str1Counter[key] !== str2Counter[key]) {
      return false;
    }
  }

  return true;
}

// Frequency counting - anagram - 2N version
function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; ++i) {
    let letter = str1[i];
    lookup[letter] ? ++lookup[letter] : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// Multiple pointers
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// O(log(N))
function search(arr, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (val > currentElement) {
      min = middle + 1;
    } else if (val < currentElement) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

// numbers as args
function sameFrequency(num1, num2) {
  const num1String = num1.toString();
  const num2String = num2.toString();

  if (num1String.length !== num2String.length) {
    return false;
  }

  const freqNum1 = {};
  const freqNum2 = {};

  for (const num of num1String) {
    freqNum1[num] = ++freqNum1[num] || 1;
  }

  for (const num of num2String) {
    freqNum2[num] = ++freqNum2[num] || 1;
  }

  for (const letter of num1String) {
    if (freqNum1[letter] !== freqNum2[letter]) {
      return false;
    }
  }

  return true;
}

function areThereDuplicates(...args) {
  const memo = {};

  for (const arg of args) {
    if (memo[arg]) {
      return true;
    }

    memo[arg] = true;
  }

  return false;
}

// Multiple pointers
function averagePair(arr, targetAvg) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const avg = (arr[left] + arr[right]) / 2;

    if (avg === targetAvg) {
      return true;
    } else if (avg > targetAvg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

// Multiple pointers
// O(N + M)
function isSubsequence(str1, str2) {
  if (!str1) return true;

  for (let i = 0, j = 0; j < str2.length; j++) {
    console.log(i, j);

    if (str1[i] === str2[i]) {
      i++;
    }

    if (i === str1.length) {
      return true;
    }
  }

  return false;
}


// Sliding window O(N)
function maxSubArraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  let tempSum = max;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    max = Math.max(max, tempSum);
  }

  return max;
}

// cl(gcd(9, 3));
function gcd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;

  let absX = Math.abs(x);
  let absY = Math.abs(y);

  while (absY) {
    const newX = absY;
    absY = absX % absY;
    absX = newX;
  }

  return absX;
}

// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
//    // move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
//      end++;
//     }
//     // if current window adds up to at least the sum given then
//    // we can shrink the window
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
//      total -= nums[start];
//      start++;
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// cl(findLongestSubstring('thecatinthehat'));

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    const element = arr[middle];

    console.log("hi");

    if (element === value) {
      return middle;
    } else if (value > element) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

function stringSearch(arr, substr) {
  let match = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      console.log(arr[i], substr[j]);
      if (arr[i + j] !== substr[j]) {
        break;
      }

      if (j === substr.length - 1) {
        match = true;
      }
    }
  }

  return count;
}

// console.log(stringSearch('fooolol', 'lol'));

function bubbleSort(arr) {
  let swapped;

  for (let i = arr.length - 1; i > 0; i++) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

function selectionSort(arr) {
  if (!arr || !arr.length) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (lowest !== i) {
      const temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

// console.log(selectionSort([4, 20, 2, 3, 1, 17, 5, 7, 10, 8]));


function createNElementArray(num) {
  return Array.apply(null, { length: 100000 }).map(Function.call, Math.random);
}

function swapElement(arr, idx, idx2) {
  const temp = arr[idx];
  arr[idx] = arr[idx2];
  arr[idx2] = temp;
}


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[i]; j--) {
      arr[j+1] = arr[j];
      arr[j] = arr[i];
    }
  }

  return arr;
}


// console.log(insertionSort(createNElementArray(1000000)));


// const data = Array.apply(1, { length: 100000 });
// console.log(data);

// const data2 = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);
// console.log(data2);

// bubbleSort(data2);

function merge(arr, arr2) {
  let newArr = [];

  let i = 0;
  let j = 0;

  while (i < arr.length && j < arr2.length) {
    if (arr[i] <= arr2[j]) {
      newArr.push(arr[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr.length) {
    newArr.push(arr[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// console.log(mergeSort(Array.apply(null, { length: 100000 }).map(Function.call, Math.random)));



// GEEKS FOR GEEKS practice
function reverseNoSpecial(str) {
  let reversed = str.split('');

  // swapElement(reversed, 0, reversed.length - 1);
  for (let i = 0; i < Math.floor(reversed.length / 2); i++) {
    console.log(i);

    if (!!reversed[i].match(/[A-Za-z]/) || reversed[reversed.length - i - 1].match(/[A-Za-z]/)) {
      swapElement(reversed, i, reversed.length - i - 1);
    }
  }

  return reversed.join('');
}


console.log(reverseNoSpecial('J$hnisagoodb%y'));



//var fizzBuzz = function(n) {
//
//  const arr = [];
//
//    for (let i = 1; i < n; i++) {
//        const isMultipleOfFive = i % 5 === 0;
//        const isMultipleOfThree = i % 3 === 0;
//        const isMultipleOfFiveOrThree = isMultipleOfFive && isMultipleOfThree;
//
//        if (isMultipleOfFiveOrThree) {
//          arr.push("FizzBuzz");
//        } else if (isMultipleOfFive) {
//          arr.push("Buzz")
//        } else if (isMultipleOfThree) {
//          arr.push("Fizz");
//        } else {
//          arr.push(i);
//        }
//    }
//
//    return arr;
//};
//
//
//console.log(fizzBuzz(100));
//
//
//var longestPalindrome = function(s) {
//  let max = 0;
//
//  let longest = [0, 0];
//  for (let i = 0; i < s.length; i++) {
//    for (let j = i; j < s.length + 1; j++) {
//      const length = j - i;
//      const subStr = s.slice(i, j);
//      const reversed = subStr.split('').reverse().join('');
//
//      if (subStr === reversed) {
//       if (length > max) {
//     console.log('_' + subStr + '_' + reversed + '_', subStr === reversed);
//           console.log(true);
//          longest = [i, j];
//
//          max = length;
//        }
//
//      }
//    }
//  }
//
//  console.log(longest[0], longest[1])
//  return s.slice(longest[0], longest[1]);
//};
//
//console.log(longestPalindrome('erisbeterkayyakk'));
//console.log('finished');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  display() {
    let curr = this.head;
    let str = '';
    while (curr) {
      console.log(curr.val);
      str += `${curr.val} -> `;
      curr = curr.next;
    }

    str += null;

    console.log(str);
  }

  push(val) {
    if (!this.head) {
      this.tail = this.head = new Node(val);

      return;
    }

    this.tail.next = new Node(val);
    this.tail = this.tail.next;

    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let prev;
    let curr = prev = this.head;

    while (curr)
      if (!curr.next) {
        prev.next = null;
        this.tail = prev;
        this.length--;


        break;
      }

    prev = curr;
    curr = curr.next;
  }
}

const list = new SLL();

list.push(1);
list.push(2);
list.push(3);
console.log(list.display());
list.pop();

list.pop();

list.pop();

//list.pop();

//list.pop();

console.log(list.display());
