
var zro = document.getElementById('zro');
var screen = document.getElementById('screen');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var pl = document.getElementById('pl');
var min = document.getElementById('min');
var ang = document.getElementById('ang');
var baj = document.getElementById('baj');
var on = document.getElementById('on');
var end = document.getElementById('end');
var del = document.getElementById('del');
var ket = document.getElementById('ket');
var hav = document.getElementById('hav');
var scr = document.getElementById('scr');
var off = document.getElementById('off');


on.onclick = function () {
    nine.style.backgroundColor = 'aquamarine';
    nine.style.boxShadow = '0 3px 30px aquamarine';
    eight.style.backgroundColor = 'aquamarine';
    eight.style.boxShadow = '0 3px 30px aquamarine';
    seven.style.backgroundColor = 'aquamarine';
    seven.style.boxShadow = '0 3px 30px aquamarine';
    six.style.backgroundColor = 'aquamarine';
    six.style.boxShadow = '0 3px 30px aquamarine';
    five.style.backgroundColor = 'aquamarine';
    five.style.boxShadow = '0 3px 30px aquamarine';
    four.style.backgroundColor = 'aquamarine';
    four.style.boxShadow = '0 3px 30px aquamarine';
    three.style.backgroundColor = 'aquamarine';
    three.style.boxShadow = '0 3px 30px aquamarine';
    two.style.backgroundColor = 'aquamarine';
    two.style.boxShadow = '0 3px 30px aquamarine';
    one.style.backgroundColor = 'aquamarine';
    one.style.boxShadow = '0 3px 30px aquamarine';
    zro.style.backgroundColor = 'aquamarine';
    zro.style.boxShadow = '0 3px 30px aquamarine';
    screen.style.boxShadow = ' 0 5px 30px aquamarine';
    screen.style.backgroundColor = ' aquamarine';
    end.style.boxShadow = ' 0 5px 30px white';
    del.style.boxShadow = ' 0 5px 30px white';
    ket.style.boxShadow = ' 0 5px 30px white';
    pl.style.boxShadow = ' 0 5px 30px white';
    min.style.boxShadow = ' 0 5px 30px white';
    ang.style.boxShadow = ' 0 5px 30px white';
    baj.style.boxShadow = ' 0 5px 30px white';
    hav.style.boxShadow = ' 0 5px 30px white';
    on.style.boxShadow = ' 0 5px 30px white';
    scr.style.backgroundColor = 'aquamarine';
    off.style.display = 'block';
}
off.onclick = function () {
    nine.style.backgroundColor = 'gray';
    nine.style.boxShadow = '';
    eight.style.backgroundColor = 'gray';
    eight.style.boxShadow = '';
    seven.style.backgroundColor = 'gray';
    seven.style.boxShadow = '';
    six.style.backgroundColor = 'gray';
    six.style.boxShadow = '';
    five.style.backgroundColor = 'gray';
    five.style.boxShadow = '';
    four.style.backgroundColor = 'gray';
    four.style.boxShadow = '';
    three.style.backgroundColor = 'gray';
    three.style.boxShadow = '';
    two.style.backgroundColor = 'gray';
    two.style.boxShadow = '';
    one.style.backgroundColor = 'gray';
    one.style.boxShadow = '';
    zro.style.backgroundColor = 'gray';
    zro.style.boxShadow = '';
    screen.style.boxShadow = '';
    screen.style.backgroundColor = 'black';
    end.style.boxShadow = '';
    del.style.boxShadow = '';
    ket.style.boxShadow = '';
    pl.style.boxShadow = '';
    min.style.boxShadow = '';
    ang.style.boxShadow = '';
    baj.style.boxShadow = '';
    hav.style.boxShadow = '';
    on.style.boxShadow = '';
    scr.style.backgroundColor = 'black';
    off.style.display = ' none'
    on.style.display = 'block';
}

const inputCalc = document.querySelector('#scr'),
    resultCalc = document.querySelector('#scr');

function input(i) {
    inputCalc.value = inputCalc.value + i
}

function result() {
    if (eval(inputCalc.value) == undefined) {
        resultCalc.value = '';
        inputCalc.value = '';
    } if (eval(inputCalc.value) == Infinity) {
        resultCalc.value = '';
        inputCalc.value = '';
    }
    resultCalc.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
}
function back() {
    var result = '';
    var x = inputCalc.value;
    for(var i = 0; i < x.length - 1; i++){
        result += x[i]
    }
    inputCalc.value = result
}

function reset() {
    resultCalc.value = '';
    inputCalc.value = '';
}

