// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

var unselectedDie = [];
var selectedDie = [];

function removeDie(value,array){
	for (var i = 0; i < array.length; i++){
		if (array[i] == value){
			array.splice(i,1);
			break;
		}
	}
}

function printDie(dice,selectedDie){
	//display not selected dice on top part of frame
	var notSelected = document.getElementById('not-selected');

	//clearing dice from the div, re-initializing the frame.
	while (notSelected.firstChild) {
	    notSelected.removeChild(notSelected.firstChild);
	}
	for (var i = 0; i < dice.length; i++) {
		if(dice[i]!=null){
			var die = document.createElement('div');
			die.innerHTML = dice[i];
			die.classList.add('die');	
			notSelected.appendChild(die);	
		}
	}

	//display not selected dice on top part of frame
	var selected = document.getElementById('selected');

	//clearing dice from the div, re-initializing the frame.
	while (selected.firstChild) {
	    selected.removeChild(selected.firstChild);
	}
	for (var i = 0; i < selectedDie.length; i++) {
		console.log(selectedDie[i]);
	var die = document.createElement('div');
		die.innerHTML = selectedDie[i];
		die.classList.add('die');
		selected.appendChild(die);	
	}
	return [dice,selectedDie]
}

function generateDice(times){
	var dice = [];
	for (var i = 0; i < times; i++) {
		dice[i] = Math.floor(Math.random() * 6)+1;
	}
	return dice;
}


function checkPossible(cup){
	var sortedCup = bubbleSortBasic(cup);
	var Ones = ones(sortedCup);
	var Twos = twos(sortedCup);
	var Threes = threes(sortedCup);
	var Fours = fours(sortedCup);
	var Fives = fives(sortedCup);
	var Sixes = sixes(sortedCup);
	var Straight = straight(sortedCup);
	var FullHouse = fullHouse(sortedCup);
	var Chance = chance(sortedCup);
	var Yahtzee = yahtzee(sortedCup);

	return [Ones,Twos,Threes,Fours,Fives,Sixes,Straight,FullHouse,Chance,Yahtzee];
}	


function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}	

function bubbleSortBasic(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 1; j < array.length; j++) {
      if(array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}

function sum(array){
	var value= 0;
	for(var i =0 ; i<array.length;i++){
		value += array[i];
	}
	return value;
}

function ones(cup){
	var value = 0;
	for (var i = 0; i<cup.length; i++) {
		if (cup[i] == 1){
			value += 1;
		};	
	}
	return value;
}


function twos(cup){
	var value = 0;
	for (var i = 0; i<cup.length; i++) {
		if (cup[i] == 2){
			value += 2;
		}
	}
	return value;
}

function threes(cup){
	var value = 0;
	for (var i = 0; i<cup.length; i++) {
		if (cup[i] == 3){
			value += 3;
		}
	}
	return value;
}

function fours(cup){
	var value = 0;
	for (var i = 0; i<cup.length; i++) {
		if (cup[i] == 4){
			value += 4;
		}
	}
	return value;
}


function fives(cup){
	var value = 0;
	for (var i = 0; i<cup.length; i++) {
		if (cup[i] == 5){
			value += 5;
		}
	}
	return value;
}


function sixes(cup){
	var value = 0;
	for (var i = 0; i<cup.length; i++) {
		if (cup[i] == 6){
			value += 6;
		}
	}
	return value;
}

function fullHouse(cup){
	var value = 0;
	if (((cup[0] == cup[1]) && (cup[1] == cup[2]) && (cup[3] == cup[4])) || ((cup[0] == cup[1]) && (cup[2] == cup[3]) && (cup[3] == cup[4]))){
		value = 25;
   	}
	return value
}

function straight(cup){
	var value = 0;
	for (var i =0; i<cup.length-1; i++){
		if (cup[i+1] != cup[i]+1){
			break;
		}
		else{
			value = 30;
			return value;
		}
	}
}
function chance(cup){
	var value = sum(cup);
	return value;
}
function yahtzee(cup) {
	var value = 0
	var check = true;
	for(var i = 0; i < cup.length-1; i++){
		if (cup[i] !=cup[i+1]){
			check = false;
		}
	}
	if (check == true){
		return value = 50;
	}else{
		return value = 0;
	}
}
