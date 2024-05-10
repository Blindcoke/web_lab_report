// function getProductDetails(productId, successCallback, errorCallback) {
//     const products = {
//         "1": { id: 1, name: "Хліб", price: 20 },
//         "2": { id: 2, name: "Пиво", price: 30 },
//     };

//     if (products[productId]) {
//         successCallback(products[productId].name, products[productId].price);
//     } else {
//         errorCallback("Товар з вказаним ідентифікатором не знайдено.");
//     }
// }

// const productId = "1";
// getProductDetails(
//     productId,
//     function(product, productPrice) {
//         console.log("Ціна товару", product, ": ", productPrice);
//     },
//     function(errorMessage) {
//         console.error("Помилка:", errorMessage);
//     }
// );







// const concerts = {
//     Київ: new Date("2020-04-01"),
//     Умань: new Date("2025-07-02"),
//     Вінниця: new Date("2020-04-21"),
//     Одеса: new Date("2025-03-15"),
//     Хмельницький: new Date("2020-04-18"),
//     Харків: new Date("2025-07-10"),
// };

// const cities = Object.keys(concerts);

// const upcomingCities = cities.filter(city => concerts[city] > new Date());

// upcomingCities.sort((cityA, cityB) => concerts[cityA] - concerts[cityB]);

// console.log(upcomingCities);








// const medicines = [
//     { name: "Noshpa", price: 170 },
//     { name: "Analgin", price: 55 },
//     { name: "Quanil", price: 310 },
//     { name: "Alphacholine", price: 390 },
//   ];

// const medicinesSale = medicines.map((medicine, index,) => ({...medicine, id: index + 1, price: medicine.price * 0.7}));
// console.log("Товари зі знижкою:\n", medicinesSale);







// function Storage (inArr){
//     this.items = inArr;

//     this.getItems = function(){
//         return this.items;
//     }
//     this.addItems = function(item){
//         this.items.push(item);
//     }
//     this.removeItem = function(item){
//         var index = this.items.indexOf(item);
//         if (index !== -1){
//             this.items.splice(index, 1);
//             }
//     }


// }
// const arr = ["apple", "banana", "mango"]
// storage = new Storage(arr);
// console.log("Всі продукти: ", storage.getItems());
// storage.addItems("orange");
// console.log("Додання апельсину: ",storage.getItems());
// storage.removeItem("banana");
// console.log("Видалення банану: ",storage.getItems());





function checkBrackets(str){
    const stack = [];
    bracketsMap ={
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for (let char of str){
        if (bracketsMap[char]){
            stack.push(char);
        } else if (char === ")" || char === "]" || char === "}"){
            previousChar = stack.pop();
            if (!previousChar || bracketsMap[previousChar] !== char){
                return false;
            }
        }
    }
    return stack.length === 0;
} 

console.log(checkBrackets("function someFn() { return (a + b) * c; }")); 
console.log(checkBrackets("function someFn() { return (a + b; }")); 