'use strict';

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1
  
   Author: 
   Date:   
     
   Filename: tc_order.js  

   The item array contains the ID numbers of the items ordered by the customer
   The itemDescription array contains the description of each item
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item
   
*/

var item = [ 10582, 23015, 41807, 10041 ];
var itemDescription = [
	'1975 Green Bay Packers Football (signed), Item 10582',
	'Tom Landry 1955 Football Card (unsigned), Item 23015',
	'1916 Army-Navy Game, Framed Photo (signed), Item 23015',
	'Protective Card Sheets, Item 10041'
];
var itemPrice = [ 149.93, 89.98, 334.93, 22.67 ];
var itemQty = [ 1, 1, 1, 4 ];
var orderTotal = 0;
var cartHTML = '<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>';

for (var i = 0; i < item.length; i++) {
	cartHTML += '<tr><td><img src="tc_' + item[i] + '.png" alt="' + item[i] + '" /></td>';
	cartHTML += '<td>' + itemDescription[i] + '</td><td>$' + itemPrice[i] + '</td><td>' + itemQty[i] + '</td>';
	var itemCost = itemPrice[i] * itemQty[i];
	cartHTML += '<td>$' + itemCost + '</td></tr>';
	orderTotal += itemCost;
}

cartHTML += '<tr><td colspan="4">Subtotal</td><td>$' + orderTotal + '</td></tr></table>';
document.getElementById('cart').innerHTML = cartHTML;
