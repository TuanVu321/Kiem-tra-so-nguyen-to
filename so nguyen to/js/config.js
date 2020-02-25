let count = 0;
let html = '';

function check(x) {
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; count < 20;i++) {
    if (check(i)) {
        count++;
        html += i + '<br>';
    }
}

document.getElementById('demo').innerHTML=html;