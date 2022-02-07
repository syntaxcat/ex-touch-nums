'use strict';

var lastNum;
var currNum;

function initGame(dimension) {
	var numOfCells = dimension * dimension;
	var cells = generateNums(numOfCells);
	generateBoard(dimension, cells);
	lastNum = numOfCells;
	currNum = 1;
	stopTime();
}

function generateNums(maxNum) {
	var numsArr = [];
	for (var i = 1; i <= maxNum; i++) {
		numsArr.push(i);
	}
	return numsArr;
}

function generateBoard(dimension, cells) {
	var strHTML = '';

	for (var i = 0; i < dimension; i++) {
		strHTML += '<tr>';
		for (var j = 0; j < dimension; j++) {
			var randomNum = shuffle(cells).pop();
			strHTML += `<td onclick="cellClicked(this)">${randomNum}</td>`;
		}
		strHTML += '</tr>';
	}
	var elBoard = document.querySelector('.board');
	elBoard.innerHTML = strHTML;
}

function cellClicked(clickedNum) {
	if (clickedNum.innerText === '1' && currNum === 1) {
		stopWatch();
	}
	if (clickedNum.innerText === `${currNum}`) {
		clickedNum.style.backgroundColor = 'pink';
		if (clickedNum.innerText === lastNum.toString() && currNum === lastNum) {
			stopTime();
		}
		currNum = +clickedNum.innerText + 1;
	}
}
