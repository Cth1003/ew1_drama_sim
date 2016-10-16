//vars
var dete = new Date();
var hours = dete.getHours();
var mins = dete.getMinutes();
//da discord mode : on
document.addEventListener("DOMContentLoaded", function(event) {
setTimeout(function(){ sendnewmsg("Epic // NO MSPAINT", "wirus"); }, 10);
setTimeout(function(){ sendnewmsg("FireC", "dextop"); }, 20);
setTimeout(function(){ sendnewmsg("Cth103", "taxbar"); }, 30);
setTimeout(function(){ sendnewmsg("pengu", "@Clyde audit logs pls"); }, 40);
sendnewmsg("pengu", "a");
sendnewmsg("pengu", "aa");
sendnewmsg("pengu", "a");
setTimeout(function(){ sendnewmsg("pengu", "aav"); }, 60);
sendnewmsg("pengu", "aa");
setTimeout(function(){ sendnewmsg("pengu", "av"); }, 90);
sendnewmsg("pengu", "a");
sendnewmsg("pengu", "aaaa");
sendnewmsg("pengu", "aa");
sendnewmsg("pengu", "aaaa");
setTimeout(function(){ sendnewmsg("pengu", "va"); }, 100);
sendnewmsg("pengu", "aa");
setTimeout(function(){ sendnewmsg("pengu", "a"); }, 120);
sendnewmsg("J.J (furry and hairplane)", "jjbot/help");
setTimeout(function(){ sendnewmsg("J.J (furry and hairplane) bot", "reed the docs to get help xdddddddddddddddddddd"); }, 1000);
  });
function sendnewmsg(usrn, msg) {
//o no jquery
document.write('<span class="username-wrapper"><strong class="user-name">' + usrn + '</strong></span><span class="highlight-separator"> - </span><span class="timestamp">Today at ' + hours + ":" + mins +'</span></h2><div class="message-text"><div class="btn-option"></div><div class="markup"><!-- react-text: 12191 -->' + msg + '<!-- /react-text --></div></div></div>');
}
