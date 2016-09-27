var elementTwitter = document.querySelector('meta[name="twitter:app:name:iphone"]');
var contentTwitter = elementTwitter && elementTwitter.getAttribute("content");
var elementIos = document.querySelector('meta[property="al:ios:app_name"]');
var contentIso = elementIos && elementIos.getAttribute("content");
var elementandroid = document.querySelector('meta[property="al:android:app_name"]');
var contentandroid = elementandroid && elementandroid.getAttribute("content");
var flag = false;
if(contentTwitter === "Medium" || contentIso === "Medium" || contentandroid === "Medium"){
    flag = true;
}
if(flag || window.location.href.indexOf("https://medium") != -1 || window.location.href.indexOf("http://medium.") != -1 ) {
    var power = power ? !localStorage.power : true;
    localStorage.power = power

    if(power){
        $('*').filter(function() {
            var match = 'rgb(255, 255, 255)';
            return ( $(this).css('background-color') == match );
        }).css('background-color', 'black');

        $('*').filter(function() {
            var match = 'rgb(0,0,0)';
            return ( $(this).css('color') == match );

        }).css('color', 'white');

        //Manual Setting
        $('body, h1, h2, h3, h4, h5 ,h6, a, .card, .postMetaInline, .label--quote, .streamItemConversation .heading-title, .u-textColorNormal, .inlineEditor-placeholder, .button--chromeless, .button--link, .u-textColorDarkest, .graf--sectionCaption, .imageCaption, .graf--pullquote').attr('style', 'color: white !important');
        $('.u-accentColor--highlightFaint').attr('style', 'color: black !important');
        $('body.is-withMagicUnderlines .markup--anchor').attr('style','background-image: linear-gradient(to bottom,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 50%);')
        $('.u-backgroundGrayLightest, .u-backgroundWhite, .responsesWrapper').attr('style', 'background-color: black !important');
        $('.u-borderCardBorder').attr('style', 'background-color: black !important; border: 1px solid white !important');
        $('.button--chromeless .svgIcon, .button--link .svgIcon').attr('style', 'fill: white');;
        $('.label--quote').attr('style', 'background-color: rgba(39,243,106,.3)');
        $('.inlineEditor .postArticle-content').attr('style', 'border: 1px solid white');
    } else {
        $('*').filter(function() {
            var match = 'rgb(0, 0, 0)';
            return ( $(this).css('background-color') == match );
        }).css('background-color', 'white');

        $('*').filter(function() {
            var match = 'rgb(255,255,255)';
            return ( $(this).css('color') == match );

        }).css('color', 'black');

        //Manual Setting
        $('body, h1, h2, h3, h4, h5 ,h6, a, .card, .postMetaInline, .label--quote, .streamItemConversation .heading-title, .u-textColorNormal, .inlineEditor-placeholder, .button--chromeless, .button--link, .u-textColorDarkest, .graf--sectionCaption, .imageCaption, .graf--pullquote').attr('style', '');
        $('.u-accentColor--highlightFaint').attr('style', '');
        $('body.is-withMagicUnderlines .markup--anchor').attr('style','')
        $('.u-backgroundGrayLightest, .u-backgroundWhite, .responsesWrapper').attr('style', '');
        $('.u-borderCardBorder').attr('style', '');
        $('.button--chromeless .svgIcon, .button--link .svgIcon').attr('style', '');;
        $('.label--quote').attr('style', '');
        $('.inlineEditor .postArticle-content').attr('style', '');
    }
}
