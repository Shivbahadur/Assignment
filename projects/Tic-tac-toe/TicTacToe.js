var isPl1 = true;
let arr = new Array();
arr.fill(null);

function getGameStatus() {
    if (arr[0] == arr[1] && arr[1] == arr[2]) {
        return arr[0];
    }
    else if (arr[0] == arr[3] && arr[3] == arr[6]) {
        return arr[0];
    }
    else if (arr[0] == arr[4] && arr[4] == arr[8]) {
        return arr[0];
    }
    else if (arr[1] == arr[4] && arr[4] == arr[7]) {
        return arr[1];
    }
    else if (arr[2] == arr[5] && arr[5] == arr[8]) {
        return arr[2];
    }
    else if (arr[2] == arr[4] && arr[4] == arr[6]) {
        return arr[2];
    }
    else if (arr[3] == arr[4] && arr[4] == arr[5]) {
        return arr[3];
    }
    else if (arr[6] == arr[7] && arr[4] == arr[5]) {
        return arr[6];
    }
    else return null;
}

function putmark(e) {

    if (isPl1) {
        if (arr[e.target.id] == null) {
            e.target.innerHTML = 'X';
            arr[e.target.id] = 'X';
            document.getElementById('pl1').disabled = true;
            document.getElementById('pl2').disabled = false;
            isPl1 = false;
        }
    } else {
        if (arr[e.target.id] == null) {
            e.target.innerHTML = 'O';
            arr[e.target.id] = 'O';
            document.getElementById('pl1').disabled = false;
            document.getElementById('pl2').disabled = true;
            isPl1 = true;
        }
    }
    let gameStatus = getGameStatus();
    if (gameStatus == 'X') {
        setTimeout(() => {
            document.getElementById('container').style.display='none';
            document.getElementById('winningPlayer').style.display='block';
            document.getElementById('winningPlayer').innerHTML='X won the game';
        }, 100);
    } else if (gameStatus == 'O') {
        setTimeout(() => {
            document.getElementById('container').style.display='none';
            document.getElementById('winningPlayer').style.display='block';
            document.getElementById('winningPlayer').innerHTML='O won the game';
        }, 100);
    } else return;
}

document.getElementById('0').addEventListener('click', putmark);
document.getElementById('1').addEventListener('click', putmark);
document.getElementById('2').addEventListener('click', putmark);
document.getElementById('3').addEventListener('click', putmark);
document.getElementById('4').addEventListener('click', putmark);
document.getElementById('5').addEventListener('click', putmark);
document.getElementById('6').addEventListener('click', putmark);
document.getElementById('7').addEventListener('click', putmark);
document.getElementById('8').addEventListener('click', putmark);
document.getElementById('restart').addEventListener('click', restart);

function restart() {
    arr.fill(null);
    document.getElementById('pl1').disabled = false;
    document.getElementById('pl2').disabled = true;
    isPl1 = true;
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = '';
    }
    document.getElementById('winningPlayer').style.display='none';
    document.getElementById('container').style.display='grid';
}
