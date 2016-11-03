//vars
var dete = new Date();
var hours = dete.getHours();
var mins = dete.getMinutes();
//da discord mode : on
function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}
basicchatthing();
function basicchatthing() { 
var links = document.getElementsByTagName("link"); for (var i = 0; i < links.length;i++) { var link = links[i]; if (link.rel === "stylesheet") {link.href += "?drink=bleach"; }}
setTimeout(function(){ sendnewmsg("Epic // Anti Group", "wirus"); }, 1000);
setTimeout(function(){ sendnewmsg("FireC", "dextop"); }, 2000);
setTimeout(function(){ sendnewmsg("Cth103", "taxbar"); }, 3000);
setTimeout(function(){ sendnewmsg("pengu", "@Clyde audit logs pls"); }, 4000);
setTimeout(function(){ sendnewmsg("pengu", "a"); }, 5000);
setTimeout(function(){ sendnewmsg("pengu", "aa"); }, 5000);
setTimeout(function(){ sendnewmsg("J.J", "jjbot/help"); }, 6000);
setTimeout(function(){ sendnewmsg("J.J bot", "reed the docs to get help xdddddddddddddddddddd"); }, 6550);
setTimeout(function(){ sendnewmsg("pengu", "JULIA I WILL KMS IF YOU DONT GIVE ME OWNER"); }, 6980);
setTimeout(function(){ sendnewmsg("pengu", "JULIA I WILL KMS IF YOU DONT GIVE ME OWNER"); }, 7040);
setTimeout(function(){ sendnewmsg("pengu", "JULIA I WILL KMS IF YOU DONT GIVE ME OWNER"); }, 7503);
setTimeout(function(){ sendnewmsg("System Restore", "NO pengu i wont give you owner"); }, 8000);
}
function sendnewmsg(usrn, msg) {
if (usrn.startsWith("FireC")){
    var ono = create('<strong class="user-name"><span class="username-wrapper"><strong class="user-name"><div id="sob"><img src="firec.PNG"></div>' + usrn + '</strong></span><span class="highlight-separator"> - </span><span class="timestamp">Today at ' + hours + ":" + mins +'</span></h2><div class="message-text"><div class="btn-option"></div><div class="markup"><!-- react-text: 12191 --> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp;' + msg + '<!-- /react-text --></div></div></div>');
} else if (usrn.startsWith("Epic //") || usrn.startsWith("Cth103")) {
     var ono = create('<strong class="user-name"><span class="username-wrapper"><strong class="user-name"><div id="sob"><img src="red.PNG"></div>' + usrn + '</strong></span><span class="highlight-separator"> - </span><span class="timestamp">Today at ' + hours + ":" + mins +'</span></h2><div class="message-text"><div class="btn-option"></div><div class="markup"><!-- react-text: 12191 --> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;' + msg + '<!-- /react-text --></div></div></div>');
} else if (usrn.startsWith("System Restore") || usrn.startsWith("electronicwiz1")) {
     var ono = create('<strong class="user-name"><span class="username-wrapper"><strong class="user-name"><div id="sob"><img src="jollya.png"></div>' + usrn + '</strong></span><span class="highlight-separator"> - </span><span class="timestamp">Today at ' + hours + ":" + mins +'</span></h2><div class="message-text"><div class="btn-option"></div><div class="markup"><!-- react-text: 12191 --> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;' + msg + '<!-- /react-text --></div></div></div>');
} else if (usrn.startsWith("J.J") || usrn.startsWith("JJ")) {
     var ono = create('<strong class="user-name"><span class="username-wrapper"><strong class="user-name"><div id="sob"><img src="jj.png"></div>' + usrn + '</strong></span><span class="highlight-separator"> - </span><span class="timestamp">Today at ' + hours + ":" + mins +'</span></h2><div class="message-text"><div class="btn-option"></div><div class="markup"><!-- react-text: 12191 --> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;' + msg + '<!-- /react-text --></div></div></div>');
} else if (usrn.startsWith("pengu") || usrn.startsWith("pingu")) {
     var ono = create('<strong class="user-name"><span class="username-wrapper"><strong class="user-name"><div id="sob"><img src="pengu.png"></div>' + usrn + '</strong></span><span class="highlight-separator"> - </span><span class="timestamp">Today at ' + hours + ":" + mins +'</span></h2><div class="message-text"><div class="btn-option"></div><div class="markup"><!-- react-text: 12191 --> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;' + msg + '<!-- /react-text --></div></div></div>');
} else {
    var ono = create('<strong class="user-name"><span class="username-wrapper"><strong class="user-name"><div id="sob"><img src="red.PNG"></div>' + usrn + '</strong></span><span class="highlight-separator"> - </span><span class="timestamp">Today at ' + hours + ":" + mins +'</span></h2><div class="message-text"><div class="btn-option"></div><div class="markup"><!-- react-text: 12191 --> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;' + msg + '<!-- /react-text --></div></div></div>');
}
document.body.appendChild(ono);
}
