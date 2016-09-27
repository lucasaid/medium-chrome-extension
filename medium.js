$('*').filter(function() {
    var match = 'rgb(255, 255, 255)';
    return ( $(this).css('background-color') == match );
}).css('background-color', 'black');

$('*').filter(function() {
    var match = 'rgb(0,0,0)';
    return ( $(this).css('color') == match );

}).css('color', 'white');

//Manual Setting
$('body, h1, h2, h3, h4, h5 ,h6, a, .card, .postMetaInline, .label--quote, .streamItemConversation .heading-title, .u-textColorNormal, .inlineEditor-placeholder, .button--chromeless, .button--link, .u-textColorDarkest, .graf--sectionCaption, .imageCaption').attr('style', 'color: white !important');
$('.u-accentColor--highlightFaint').attr('style', 'color: black !important');
$('.responsesWrapper').css('background-color', 'black');
$('.u-backgroundGrayLightest, .u-backgroundWhite').attr('style', 'background-color: black !important');
$('.u-borderCardBorder').attr('style', 'background-color: black !important; border: 1px solid white !important');
$('.button--chromeless .svgIcon, .button--link .svgIcon').css('fill', 'white');
$('.label--quote').css('background-color', 'rgba(39,243,106,.3)');
$('.inlineEditor .postArticle-content').css('border','1px solid white')
