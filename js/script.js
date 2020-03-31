const img = ['chest', 'coin', 'coins', 'dollar', 'diamond', 'gold', 'money', 'piggy-bank'];
let square = document.querySelectorAll('.square');
// console.log(square);

function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

square.forEach(function(element) {
    let randNum = random(0, img.length - 1);
    // console.log(randNum);
    element.style.backgroundImage = 'url(images/' + img[randNum] + '.png';
    element.dataset.data = randNum;
    element.onclick = changeImage;
});

function changeImage() {
    --document.querySelector('#yourMoney').value;
    document.querySelector('#out').innerHTML = '';
    let data = this.dataset.data;
    // console.log(data);

    if (+data + 1 < img.length) {
        data = random(0, 7); // вывод на рандом
        // data++; // вывод по порядку
    } else {
        data = 0;
    };

    this.dataset.data = data;
    this.style.backgroundImage = 'url(images/' + img[data] + '.png';

    checkSurprise();
};

function checkSurprise() {
    let res = [];
    square.forEach(function(element) {
        res.push(element.dataset.data);
    });
    // console.log(res);

    if (res.join('') == '1111') {
        document.querySelector('#yourMoney').value -= 4;
        // document.querySelector('#yourMoney').value += 4;
        document.querySelector('#out').innerHTML = 'Вы выйграли только 4 монет';
    } else if (res.join('') == '2222') {
        document.querySelector('#yourMoney').value -= 12;
        // document.querySelector('#yourMoney').value += 12;
        document.querySelector('#out').innerHTML = 'Вы получили 12 монет';
    } else if (res.join('') == '3333') {
        document.querySelector('#yourMoney').value -= 72;
        // document.querySelector('#yourMoney').value += 72;
        document.querySelector('#out').innerHTML = 'Вы выйграли 72 монет. Неплохо.';
    } else if (res.join('') == '7777') {
        document.querySelector('#yourMoney').value -= 560;
        // document.querySelector('#yourMoney').value += 560;
        document.querySelector('#out').innerHTML = 'Вы получаете 560 монет. Продолжайте играть!';
    } else if (res.join('') == '6666') {
        document.querySelector('#yourMoney').value -= 1200;
        // document.querySelector('#yourMoney').value += 1200;
        document.querySelector('#out').innerHTML = 'Вы выйграли 1200 монет!';
    } else if (res.join('') == '4444') {
        document.querySelector('#yourMoney').value -= 3120;
        // document.querySelector('#yourMoney').value += 3120;
        document.querySelector('#out').innerHTML = 'Вам удалось получить алмаз!? 3120 монет!';
    } else if (res.join('') == '5555') {
        document.querySelector('#yourMoney').value -= 8430;
        // document.querySelector('#yourMoney').value += 8430;
        document.querySelector('#out').innerHTML = 'Ваш выйгрыш составил 8430 монет!';
    } else if (res.join('') == '0000') {
        document.querySelector('#yourMoney').value -= 38000;
        // document.querySelector('#yourMoney').value += 38000;
        document.querySelector('#out').innerHTML = 'Вы получили самый большой приз! 38000 монет теперь ваши!';
    } else if (yourMoney <= 0) { 
        // alert('Вы проиграли!');
    };
};