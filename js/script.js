let emoj =document.getElementById('txtemoji');
let btn =document.querySelector('.btn');
let output =document.querySelector('.output');
let img =document.querySelector('img');

btn.addEventListener('click',doSomeThing);

function doSomeThing(e){
    e.preventDefault(); //chan su kien submit mac dinh cua form
    console.log('clicked');
    let emojis = emoj.value;
        if(emojis == ''){
        alert('Please enter an emoji');
        return;
    }else{
        var text = document.querySelector('#txtemoji');
        if(!text.value.includes(emojis)){
            output.textContent = "the" + emojis + "not found";
console.log('hii');
        }else{
            output.textContent = "the" + emojis + "found";
            img.src = 'images/' + emojis + '.jpg';
        }
    }
}