//vars
var dete = new Date();
var hours = dete.getHours();
var mins = dete.getMinutes();
//da discord mode : on
sendnewmsg("Epic // NO MSPAINT", "wirus");
sleep(2000);
sendnewmsg("FireC", "dextop");
sleep(1000);
sendnewmsg("Cth103", "taxbar");
sleep(3000);
sendnewmsg("pengu", "@discord audit logs pls");
sendnewmsg("pengu", "a");
sendnewmsg("pengu", "aa");
sendnewmsg("pengu", "a");
sendnewmsg("pengu", "aav");
sendnewmsg("pengu", "aa");
sleep(10);
sendnewmsg("pengu", "av");
sendnewmsg("pengu", "a");
sendnewmsg("pengu", "aaaa");
sendnewmsg("pengu", "aa");
sendnewmsg("pengu", "aaaa");
sendnewmsg("pengu", "va");
sendnewmsg("pengu", "aa");
sleep(10);
sendnewmsg("pengu", "a");
sleep(1000);
sendnewmsg("J.J (furry and hairplane)", "jjbot/help");
sleep(100);
sendnewmsg("J.J (furry and hairplane) bot", "reed the docs to get help xdddddddddddddddddddd");

function sendnewmsg(usrn, msg) {
//o no jquery
$("body").append('<span class="username-wrapper"><strong class="user-name">' + usrn + '</strong></span><span class="highlight-separator"> - </span><span class="timestamp">Today at ' + hours + ":" + mins +'</span></h2><div class="message-text"><div class="btn-option"></div><div class="markup"><!-- react-text: 12191 -->' + msg + '<!-- /react-text --></div></div></div>');
}
function sleep(milliSeconds){
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
}
