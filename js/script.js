const img = ['chest', 'coin', 'coins', 'dollar', 'diamond', 'gold', 'money', 'piggy-bank', 'robbery', 'utilities', 'minus'];
let square = document.querySelectorAll('.square');
const PRIZE = {
    '1111': 4,
    '2222': 12,
    '3333': 72,
    '7777': 560,
    '6666': 1200,
    '4444': 3120,
    '5555': 8430,
    '0000': 38000,
    '10101010': -1000,
    '9999': -3000,
    '8888': -5000,
}

function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

square.forEach(function(element) {
    let randNum = random(0, img.length - 1);

    element.style.backgroundImage = 'url(images/' + img[randNum] + '.png';
    element.dataset.data = randNum;
    element.onclick = changeImage;
});

function updateTotalMoney(value) {
    document.querySelector('#yourMoney').value = getTotalMoney() + value;

    showMessage('Your winnings totaled ' + value + ' coins');
    // showBadMessage('Alas, you lost as many as ' + value + ' coins');
}

function getTotalMoney() {
    return Number(document.querySelector('#yourMoney').value);
}

function showMessage(message) {
    document.querySelector('#out').innerHTML = message;
}

function isEndGame() {
    return document.querySelector('#yourMoney').value <= 0;
}

function changeImage() {
    if (isEndGame()) {
        showMessage('<b>' + 'You don\'t have money' + '</b>');
        return false;
    }

    document.querySelector('#yourMoney').value -= 1;
    document.querySelector('#out').innerHTML = '';
    let data = this.dataset.data;

    if (+data + 1 < img.length) {
        data = random(0, 10); // вывод на рандом
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
    
    if (PRIZE[res.join('')]) {
        updateTotalMoney(PRIZE[res.join('')]);
    }
};