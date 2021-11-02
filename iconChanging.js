function randomFootsPic(x){
    switch(x) {
        case 3: return "FootIcon2.svg";
        case 2: return "FootIcon1.svg";
        case 1: return "FootIcon.svg";
        default: return "FootIcon.png";
    }
}
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function changeIconToRandomFoot(footNumber) {
    $('head #icon').replaceWith(`
        <link id="icon" rel="icon" href="footsPics/${randomFootsPic(footNumber)}">
    `);
}
var fs = require('./');
var files = fs.readdirSync('/downloads');


$('#button').on('click', function() {
    changeIconToRandomFoot(getRandomInt(3));
});

//on start up
