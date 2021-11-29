const testParagraph = document.getElementById('alevel');

function displaynone(){
    testParagraph.style.transition = 'opacity 3s';
    testParagraph.style.opacity = '0';
}

const myButton = document.getElementById('button');
myButton.addEventListener('click', displaynone);

function display(){
    testParagraph.style.transition = 'opacity 3s';
    testParagraph.style.opacity = '1';

}
const myBtn = document.getElementById('button2');
myBtn.addEventListener('click', display);