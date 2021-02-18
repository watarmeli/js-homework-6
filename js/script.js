function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки

    firstArray.forEach(number => {
        if (secondArray.includes(number)) {
            commonElements.push(number);
        };
    });
  
    return commonElements;
    // Пиши код выше этой строки
};