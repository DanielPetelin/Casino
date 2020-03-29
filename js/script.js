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
    element.dataset.data = randNum;
    element.onclick = changeImage;
});

function changeImage() {
    document.querySelector('#out').innerHTML = '';
    let data = this.dataset.data;
    console.log(data);

    if (+data + 1 < img.length) {
        data++;
    } else {
        data = 0;
    };

    this.dataset.data = data;
    this.style.backgroundImage = 'url(images/' + img[data] + '.png';
};