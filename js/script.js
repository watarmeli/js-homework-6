// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     let newArray = [];

//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         newArray.push(numbers[i] + value);
//       } else {
//           newArray.push(numbers[i]);
//       }
//     }

//     return newArray;
//     // Пиши код выше этой строки
// }

// var 2
  
function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  let newArray = []
  
  
  numbers.forEach(number => {
    if (number % 2 === 0) {
        newArray.push(number + value);
      } else {
         newArray.push(number);
      };
  });
  
  return newArray;
    // Пиши код выше этой строки
  }