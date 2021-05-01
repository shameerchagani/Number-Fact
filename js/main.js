let inputNum = document.getElementById('inputNum')
let fact = document.querySelector('.fact')
let factText = document.querySelector('.factText')
window.onLoad = hide();

function hide(){
    fact.style.display = 'none'
}

inputNum.addEventListener('input', getFact)

function getFact(){
    if(inputNum.value !== ''){
        fact.style.display = 'block'
        fetch('http://numbersapi.com/' + Math.round(inputNum.value))
        .then(response => response.text())
        .then(data => {
            factText.innerHTML=data;
        }).catch(err => console.log(err))
    }else fact.style.display = 'none'
}
