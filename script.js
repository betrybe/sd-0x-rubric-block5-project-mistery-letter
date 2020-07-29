const inputTexto = document.getElementById('carta-texto');
const botaoTexto = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');
const cartaContador = document.getElementById('carta-contador');

const styleGroup = ['newspaper', 'magazine1', 'magazine2', ''];
const sizeGroup = ['medium', 'big', 'reallybig', ''];
const rotationGroup = ['rotateleft', 'rotateright', ''];
const inclinationGroup = ['skewleft', 'skewright', ''];

function generateRandomClassList() {
    let styleClass = styleGroup[Math.floor(Math.random() * 4)];
    let sizeClass = sizeGroup[Math.floor(Math.random() * 4)];
    let rotationClass = rotationGroup[Math.floor(Math.random() * 3)];
    let inclinationClass = inclinationGroup[Math.floor(Math.random() * 3 )];

    return [styleClass, sizeClass, rotationClass, inclinationClass].filter(String);
}


function applyClassName(span) {
    oldClassName = span.className;
    newClassName = generateRandomClassList().join(" ").trim();
    while (oldClassName === newClassName) {
        newClassName = generateRandomClassList().join(" ").trim();
    }
    
    span.className = newClassName;

    return span;
}

function createLetter() {
    cartaGerada.innerText = '';
    
    if (inputTexto.value.trim().length === 0) {
        cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta!';

    } else {
        let words = inputTexto.value.trim().split(' ');

        for (const index in words) {
            let span = document.createElement('span');
            span.innerText = words[index];
            span = applyClassName(span);

            cartaGerada.appendChild(span);
        }

        reloadEventListenerSpans();

        cartaContador.innerHTML = words.length;
    }   
}


botaoTexto.addEventListener('click', createLetter);

function reloadEventListenerSpans() {
    let wordSpans = document.querySelectorAll('p#carta-gerada > span');

    wordSpans.forEach(function(wordSpan) {
        wordSpan.addEventListener('click', function() {
            wordSpan = applyClassName(wordSpan);
        });
    });         
}