let arrPurchase = [
    {name: 'Телефон', amount: '1', buy: false},
    {name: 'Бананы', amount: '5', buy: false},
    {name: 'Носки', amount: '8', buy: false},
    {name: 'Яблоки', amount: '12', buy: false}
];

for (let obj in arrPurchase) {
    alert(obj.name);
}

// let test1 = {name: 'Nazar',age:22};
// let key = prompt("What do you want?","name");
// alert(test1[key]);
// alert(test1.name + ' years ' + test1.age);

// let test2 = {'name of my girl':'Darya','Darya age':22};
// alert(test2["name of my girl"]);
// alert(test2["Darya age"]);

// delete test1.age;
// alert(test1.age);

// let ask = prompt('Какой фрукт купить?','orange');

// let obj = {
//     [ask]:'Цитрусовые',
// }
// alert('orange' in obj);