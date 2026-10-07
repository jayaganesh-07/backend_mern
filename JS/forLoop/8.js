
  let arr = [1, 2, 3, 4, 5, 6, 7,98]

  let firstLargest = 0
  let secondLargest = 0

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > firstLargest) {
      secondLargest = firstLargest
      firstLargest = arr[i]

      console.log(arr[i]);
      
    }
    // else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
    //   secondLargest = arr[i]
    // }
  }

  console.log("First Largest:", firstLargest)
  console.log("Second Largest:", secondLargest)