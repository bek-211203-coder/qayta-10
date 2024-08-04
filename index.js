// function str(arg){
//     let words = arg.split(' ');
//     for(let i  = 0 ; i < words.length; i++ ){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1)

//     }
//     return words.join(' ')
// }
// let text = 'nok anjir malina';
// let res = str(text);
// console.log(res );

// let text = 'nok anjir malina';
// let resalt = text.split(' ');

// let res = resalt.map(function (element){
//     return element[0].toUpperCase() + element.slice(1)
// })
// console.log(res.join(' '));


// let user = {
//     name : 'john',
//     age : 45,
//     phones : ['+9656469545', '+542548485255']
// }
// user.email ='shgvsdhv@nbxc.com';
// user.age = 85;
// delete phones ;
// user.phones.pop();

// console.log(user);


// let user = [
//     {name:'john', age: 45},
//     {name:'hon', age: 5},
//     {name:'Alex', age: 41},
//     {name:'john', age: 4},
//     {name:'john', age: 10}
// ]
// let res = user.find(function(element){
//     return element.name == 'Alex'
// })

// console.log(res);

// console.log(user.name);
// console.log(user['name']);




// String metodlariga oid masalalar

// 1. **Berilgan so‘zda a harfi nechta borligini aniqlovchi funksiya yozing.**
// let words = "Berilgan so‘zda a harfi nechta borligini aniqlovchi funksiya yozing"
// function str(arg){
//     let word = arg.split('');
//     let sum= 0;
//     for (const element of word) {
//         if( element == 'a'){
//             sum+=1;
//         }
//     }
//     return sum;
// }
// let res = str(words);
// console.log(res);


// 2. **Berilgan so‘zning oxirgi 3 harfini qaytaruvchi funksiya yozing.**
// let text = 'Berilgan so‘zning oxirgi 3 harfini qaytaruvchi funksiya yozing'
// function str (arg){
//     return arg.slice(-3);
// }
// let res = str(text);
// console.log(res);


// 3. **Berilgan gapdagi har bir so‘zning birinchi harfini katta qiluvchi funksiya yozing.**
// let words = `Berilgan gapdagi har bir so‘zning birinchi harfini katta qiluvchi funksiya yozing`
// function str(arg){
//     let value = arg.split(` `);
//     let res = value.map(function(element){
//         return element[0].toUpperCase() + element.slice(1);
//     });
//     return res.join(' ');
// }
// let fun = str(words);
// console.log(fun);


// 4. **Berilgan gapdan barcha bo‘sh joylarni olib tashlaydigan funksiya yozing.**
// let words = `Berilgan gapdan barcha bo'sh joylarni olib tashlaydigan funksiya yozing`
// function str(arg){
//     return arg.replaceAll(' ', '')
// }
// let text = str(words);
// console.log(text);


// 5. **Berilgan so‘zni teskari qilib qaytaruvchi funksiya yozing.**
// let text = `Berilgan so‘zni teskari qilib qaytaruvchi funksiya yozing`;
// function str(arg){
//     return arg.split(' ').reverse().join(' ')
// }
// let res = str(text);
// console.log(res);


// 6. **Berilgan so‘zda nechta belgi borligini aniqlovchi funksiya yozing.**
// let text = `Berilgan so'zda nechta belgi borligini aniqlovchi funksiya yozing.`
// function str(arg){
//     return arg.length;
// }
// let res = str(text);
// console.log(res);


// 7. **Berilgan so‘zni 3 marta takrorlab qaytaruvchi funksiya yozing.**
// let text = `Berilgan so‘zni 3 marta takrorlab qaytaruvchi funksiya yozing`
// function str(arg){
//     return arg.repeat(3);
// }
// let res = str(text);
// console.log(res);


// 8. **Berilgan so‘zdan faqat sonlarni olib qaytaruvchi funksiya yozing.**
// let  word = '12asdfgh456dfg78654vb32';
// function str(arg){
//     let res = '';
//     for (const element of arg) {
//         if(element >0 && element < 9){
//             res += element
//         }
//     }
//     return res;
// }
// let func = str(word)
// console.log(func);


// 9. **Berilgan gapdagi birinchi so‘zni qaytaruvchi funksiya yozing.**
// let text =`Berilgan gapdagi birinchi so‘zni qaytaruvchi funksiya yozing`;
// function str(arg){
//     let words = arg.split(' ');
//     return words[0]
// }
// let res = str(text)
// console.log(res);


// 10. **Berilgan so‘zda ‘js’ so‘z birikmasi borligini tekshiruvchi funksiya yozing.**
// let word = 'script.js'
// function str (arg){
//     return arg.includes('js')
// }
// let res = str(word);
// console.log(res);



// Massivlarga oid masalalar

// 1. **Berilgan massivdagi eng katta elementni qaytaruvchi funksiya yozing.**
// let arr = [1,2,3,4,56,7];
// function num(arg){
//     let max = arg[0];
//     arg.forEach(function(element){
//         if(max < element ){
//             max = element;
//         }
//     });
//     return max;
// }
// let res = num(arr);
// console.log(res);


// 2. **Berilgan massivdagi barcha juft sonlarni qaytaruvchi funksiya yozing.**
// let arr = [1,2,3,4,5,6,7];
// function num (arg){
//     let res = arg.filter(function(element){
//         return element % 2==0;
//     });
//     return res;
// }
// let value = num(arr);
// console.log(value);



// 3. **Berilgan massivdagi elementlarning yig‘indisini hisoblaydigan funksiya yozing.**
// let arr = [1,2,3,4,5,6,7];
// function num (arg){
//     let sum = 0;
//     arg.forEach(function(element){
//         sum += element;
//     });
//     return sum
// }
// let value = num(arr)
// console.log(value);



// 4. **Berilgan massivdagi har bir elementni 2 baravar oshiradigan va yangi massiv qaytaradigan funksiya yozing.**
// let arr = [1,2,3,4,5,6,7];
// let sum = 2;
// function num (arg , number){
//     let res = arg.map(function(element){
//         return element * number;
//     });
//     return  res
// }
// let value = num(arr, sum)
// console.log(value);


// 5. **Berilgan massivdagi barcha manfiy sonlarni olib tashlaydigan va yangi massiv qaytaradigan funksiya yozing.**
// let arr = [1,-2,3,-4,5,-6,-7];
// function num (arg){
//     let res = arg.filter(function (element){
//         return element > 0;
//     })
//     return res;
// }
// let value = num(arr)
// console.log(value);

// 6. **Berilgan massivdagi faqat noyob elementlarni qaytaruvchi funksiya yozing.**

// 7. **Ikki massivni birlashtiradigan va yangi massiv qaytaradigan funksiya yozing.**
// let arr1 = [1,2,3,4,5,6]
// let arr2 = [7,8,9,10,11]
// function func (arg1, arg2){
//     let res = arg1.concat(arg2)
//     return res ;
// }
// let resalt = func(arr1, arr2);
// console.log(resalt);

// 8. **Berilgan massivni teskari tartibda qaytaruvchi funksiya yozing.**
// let arr1 = [1,2,3,4,5,6]
// function num(arg){
//     let newArr = [];
//     for (const element of arg) {
//         newArr.unshift(element)
//     } 
//     return newArr;
// }
// let res = num(arr1)
// console.log(res);


// 9. **Berilgan massivdan faqat toq indeksli elementlarni qaytaruvchi funksiya yozing.**
// let arr1 = [1,2,3,4,5,6];
// function num(arg){
//     let newArr =[];
//     arg.forEach(function(element , index){
//         if(index % 2 == 1){
//             newArr.push(element)
//         }
//     })
//     return newArr;
// }
// let res = num (arr1)
// console.log(res);



// 10. **Berilgan massivdagi elementlarning o‘rtacha qiymatini hisoblaydigan funksiya yozing.**
// function num(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     const average = sum / numbers.length;
//     return average;
// }
// const numbers = [1, 2, 3, 4, 5];
// const avg = num(numbers);
// console.log(avg);



// Obyekt va Massivlarga oid masalalar

// 1. **Berilgan massivdan eng katta yoshi bor odamning ismini qaytaruvchi funksiya yozing.**
//    ```js
//    const people = [
//        { name: "Ali", age: 25 },
//        { name: "Vali", age: 30 },
//        { name: "Hasan", age: 28 }
//    ];
//    function getOldestPersonName(people) {
//    }

// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// function getOldestPerson(people) {
//     return people.reduce((oldest, person) => {
//         return (person.age > oldest.age) ? person : oldest;
//     });
// }
// let res = getOldestPerson(people);
// console.log(res);



// 2. **Berilgan massivdan ma'lum bir yoshdan katta bo'lgan odamlarni qaytaruvchi funksiya yozing.**
//    ```js
// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// let number = 25;
// function getPeopleAboveAge(people, age) { 
//     let res = people.filter(function (element){
//         return element.age > age
//     }) ;
//     return res;
// } 
// let func = getPeopleAboveAge(people, number )
// console.log(func);



// 3. **Berilgan massivdagi odamlarning ismlarini ro'yxat sifatida qaytaruvchi funksiya yozing.**
//    ```js
//    const people = [
//        { name: "Ali", age: 25 },
//        { name: "Vali", age: 30 },
//        { name: "Hasan", age: 28 }
//    ];
//    function getNames(people) {
//     let sum = [];
//     people.forEach(element => {
//         return sum.push(element.name);
//     });
//     return sum;
//    }
//    let res  = getNames(people)
//    console.log(res );
   


// 4. **Berilgan massivdagi barcha odamlarning yoshi yig'indisini hisoblaydigan funksiya yozing.**
//    ```js
//    const people = [
//        { name: "Ali", age: 25 },
//        { name: "Vali", age: 30 },
//        { name: "Hasan", age: 28 }
//    ];
//    function getTotalAge(people) { 
//     let sum = 0 
//     people.forEach(element => {
//         return sum += element.age
//     });
//     return sum;
//     }
//     let res = getTotalAge(people);
//     console.log(res);
    
   

// 5. **Berilgan massivdan ma'lum bir ismdagi odamni qaytaruvchi funksiya yozing.**
// //    ```js
//    const people = [
//        { name: "Ali", age: 25 },
//        { name: "Vali", age: 30 },
//        { name: "Hasan", age: 28 }
//    ];
//    function getPersonByName(people, name) {
//     let res  =  people.filter(function(element){
//         if (element.name == name){
//             return {
//                 name: element.name,
//                 age : element.age
//             }
//         }
//     })
//     return res;
//    }
//    let userName = 'Ali'
//    let value = getPersonByName(people, userName)
//    console.log(value);
   


// 6. **Berilgan massivdagi barcha odamlarning yoshlarini o‘rtacha qiymatini hisoblaydigan funksiya yozing.**
//    ```js
//    const people = [
//        { name: "Ali", age: 25 },
//        { name: "Vali", age: 30 },
//        { name: "Hasan", age: 28 }
//    ];
//    function getTotalAge(people) { 
//     let sum = 0 
//     people.forEach(element => {
//         return sum += element.age
        
//     });
//     let value = sum / people.length;
//     return value;
//     }
//     let res = getTotalAge(people);
//     console.log(res);

// 7. **Berilgan massivdagi faqat ayol jinsiga mansub odamlarni qaytaruvchi funksiya yozing.**
//    ```js
//    const people = [
//        { name: "Ali", age: 25, gender: "male" },
//        { name: "Vali", age: 30, gender: "male" },
//        { name: "Hasan", age: 28, gender: "male" },
//        { name: "Salima", age: 22, gender: "female" }
//    ];
//    function getFemales(people) { 

//     let res = people.filter(element => {
//         if(element.gender == 'female'){
//             return {
//                 name: element.name,
//                 ege : element.age,
//                 gender: element.gender
//             }
//         }
//     });
//     return res;
//    }
//    let value = getFemales(people);
//    console.log(value);
   


// 8. **Berilgan massivdagi har bir odamning yoshini 1 yil oshiradigan va yangi massiv qaytaradigan funksiya yozing.**
//    ```js
// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// function incrementAges(people) {
//     let result = people.map(element => {
//         return {
//             name: element.name,
//             age: element.age + 1
//         };
//     });
//     return result;
// }
// let res = incrementAges(people);
// console.log(res);

   
