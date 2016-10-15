//vars
var dete = new Date();
var hours = dete.getHours();
var mins = dete.getMinutes();
//Import CSS
var cssId = 'dixcord';  
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://discordapp.com/assets/22d05df3752ed5186dc5.css';
    link.media = 'all';
    head.appendChild(link);
}
//da discord mode : on
sendnewmsg("Epic // NO MSPAINT", "wirus");
sendnewmsg("FireC", "dextop");
sendnewmsg("Cth103", "taxbar");
sendnewmsg("pengu", "@discord audit logs pls");
sendnewmsg("pengu", "a");
sendnewmsg("pengu", "aa");
sendnewmsg("pengu", "a");
sendnewmsg("pengu", "aav");
sendnewmsg("pengu", "aa");
sendnewmsg("pengu", "av");
sendnewmsg("pengu", "a");
sendnewmsg("pengu", "aaaa");
sendnewmsg("pengu", "aa");
sendnewmsg("pengu", "aaaa");
sendnewmsg("pengu", "va");
sendnewmsg("pengu", "aa");
sendnewmsg("pengu", "a");
sendnewmsg("J.J (furry and hairplane) bot", "reed the docs to get help xdddddddddddddddddddd");

function sendnewmsg(usrn, msg) {
//o no jquery
$("body").append('<span class="username-wrapper"><strong class="user-name">' + usrn + '</strong></span><span class="highlight-separator"> - </span><span class="timestamp">Today at ' + hours + ":" + mins +'</span></h2><div class="message-text"><div class="btn-option"></div><div class="markup"><!-- react-text: 12191 -->' + msg + '<!-- /react-text --></div></div></div>');
}
