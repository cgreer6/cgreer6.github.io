/*    JavaScript 6th Edition
 *    Chapter 12
 *    Hands-on Project 12-2

 *    Author: Cheyenne Greer
 *    Date:   07/11/2018
 *    Filename: script.js
 */

 function convert (){
     var lb = $("#pValue").val();
     var kg = Math.round(lb / 2.2);
     $("#kValue").html(kg);
 }
 $("#convertButton").click(convert);
 $("#pValue").val("");
 $("#kValue").html("");
