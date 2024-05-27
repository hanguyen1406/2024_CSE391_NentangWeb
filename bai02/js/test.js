// const square = () => x*x//sử dụng nó như callback
// setInterval(square,1000);//lap sau 1s
// setTimeout(square,5000) //delay 5s

// const numbers = [1, 2, 3, 4, 5];

// let sum=0;
// // numbers.forEach(numbers => sum+=numbers)//foreach
// numbers.map
// console.log(sum)

//bai moi
//document.get or querySelector
let main = document.getElementById('main');
console.log(main.children[0].textContent);
//thay doi gia tri van ban cua 1 not
main.children[0].textContent = 'Hello';

//thay doi thuoc tinh
main.children[0].style.color = 'blue';
main.children[0].style.backgroundColor = 'silver';
console.log(main.Attributes);

// console.log(main.firstChild);

//xoa nut
let childtoremove = main.children[0].nextElementSibling;//nextElementSibling: lay nut ke tiep
main.removeChild(childtoremove);
//them nut
let newelement = document.createElement('h1');
newelement.textContent = 'Heading';
newelement.style.color = 'pink';
newelement.style.fontSize = '50px';

main.appendChild(newelement);