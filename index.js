
//Import CSS
var cssId = 'dixcord';  // you could encode the css path itself to generate id..
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
