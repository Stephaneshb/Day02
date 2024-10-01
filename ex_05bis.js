function getBasketContent(selectedFruits) {
  const fruits = [
    'strawberry', 'strawberry', 'strawberry',
    'apple', 
  ];

  if (selectedFruits > fruits.length) {
    console.log("Too many fruit(s) selected.");
    return [];
  }

  console.log(${selectedFruits} fruit(s) selected);

  return fruits.slice(0, selectedFruits);
}

if (typeof getBasketContent === "function") {
  const selectedFruits = 4;
  const fruits = getBasketContent(selectedFruits);
  showMyBasket(fruits); 
}
