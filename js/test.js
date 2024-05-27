// const square = () => x*x//sử dụng nó như callback
// setInterval(square,1000);//lap sau 1s
// setTimeout(square,5000) //delay 5s

// const numbers = [1, 2, 3, 4, 5];

// let sum=0;
// // numbers.forEach(numbers => sum+=numbers)//foreach
// numbers.map
// console.log(sum)

// //bai moi
// //document.get or querySelector
// let main = document.getElementById('main');
// console.log(main.children[0].textContent);
// //thay doi gia tri van ban cua 1 not
// main.children[0].textContent = 'Hello';

// //thay doi thuoc tinh
// main.children[0].style.color = 'blue';
// main.children[0].style.backgroundColor = 'silver';
// console.log(main.Attributes);

// // console.log(main.firstChild);

// //xoa nut
// let childtoremove = main.children[0].nextElementSibling;//nextElementSibling: lay nut ke tiep
// main.removeChild(childtoremove);
// //them nut
// let newelement = document.createElement('h1');
// newelement.textContent = 'Heading';
// newelement.style.color = 'pink';
// newelement.style.fontSize = '50px';

// main.appendChild(newelement);

//reduce
const numbers = [1, -7, 3, 4, 5]
// const prod = numbers.reduce((acc, cur) => {
//     console.log(acc, cur);
//     return acc * cur
// },1)

// console.log(sum)
// //every
const checkSoChan = numbers.every(number => number>0, numbers % 2 == 0)
console.log(checkSoChan);

// mẫu biểu thức chính quy check email (regular expression)
const email = '';
const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}$/;
const checkEmail = emailPattern.test(email);
//json

