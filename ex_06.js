fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getIndexFromName(steph) {
     const index = fruits.indexOf(steph)
     	if (index === -1)
      return null
      
        return index
 }

const steph="Banana"
displayResult(getIndexFromName(steph));
