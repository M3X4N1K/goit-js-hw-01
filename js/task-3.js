

function getElementWidth(content, padding, border) {

   // Перетворюємо рядки типу "8px", "4.5px" у числа
  const contentValue = parseFloat(content);
  const paddingValue = parseFloat(padding);
  const borderValue = parseFloat(border);

  // Обчислюємо загальну ширину елемента:
  // content + (padding * 2) + (border * 2)
  const totalWidth = contentValue + paddingValue * 2 + borderValue * 2;

   // Повертаємо обчислену ширину
  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
