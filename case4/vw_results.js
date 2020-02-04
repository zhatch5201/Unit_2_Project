'use strict';

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: 
   Date:   
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
var reportHTML = '<h1>' + raceTitle + '</h1>';
for (var i = 0; i < race.length; i++) {
	var totalVotes = 0;
	votes[i].forEach(calcSum);
	reportHTML += '<table><caption>' + race[i] + '</caption><tr><th>Candidate</th><th>Votes</th>';
	reportHTML += '</tr>';
	reportHTML += candidateRows(i, totalVotes);
	reportHTML += '</table>';
}
console.log(totalVotes);
document.getElementsByTagName('section')[0].innerHTML = reportHTML;

function candidateRows(raceNum, totalVotes) {
	var rowHTML = '';
	for (var j = 0; j <= 2; j++) {
		var candidateName = candidate[raceNum][j];
		var candidateParty = party[raceNum][j];
		var candidateVotes = votes[raceNum][j];
		var candidatePercent = calcPercent(candidateVotes, totalVotes);
		rowHTML +=
			'<tr><td>' +
			candidateName +
			' (' +
			candidateParty +
			')</td><td>' +
			candidateVotes.toLocaleString() +
			' (' +
			candidatePercent.toFixed(1) +
			')</td>';
		for (var k = 0; k < candidatePercent; k++) {
			reportHTML += createBar(candidatePercent);
			console.log(createBar(candidatePercent));
		}
		rowHTML += '</tr>';
	}
	return rowHTML;
}
/* Callback Function to calculate an array sum */
function calcSum(value) {
	totalVotes += value;
}
/* Function to calculate a percentage */
function calcPercent(value, sum) {
	return 100 * value / sum;
}

function createBar(partyType) {
	var barHTML = '';
	switch (partyType) {
		case 'D':
			barHTML = '<td class="dem"></td>';
			console.log(partyType);
			break;
		case 'R':
			barHTML = '<td class="rep"></td>';
			console.log(partyType);
			break;
		case 'I':
			barHTML = '<td class="ind"></td>';
			console.log(partyType);
			break;
	}
	return barHTML;
}
