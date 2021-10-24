function randomFootsPic(x){
    switch(x) {
        case 1: return "footsPics/foot icon good.svg";
        case 2: return "footsPics/FootIcon.png";
        default: return "footsPics/FootIcon2.svg";
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// $( ".inner" ).prepend( "<p>Test</p>" );

$('#button').on('click', function() {
    console.log(getRandomInt(3));
    $('head #icon').replaceWith(`
        <link id="icon" rel="icon" href="${randomFootsPic(getRandomInt(3))}">
    `);
    // $('head #icon').replaceWith(`

});