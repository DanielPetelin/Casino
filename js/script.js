const img = ['camel', 'cat', 'dog', 'duck', 'money', 'ticket', 'tiger'];
let square = document.querySelectorAll('.square');
console.log(square);

function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

square.forEach(function(element) {
    let randNum = random(0, img.length - 1);
    console.log(randNum);
    element.style.backgroundImage = 'url(images/' + img[randNum] + '.png';
    
});