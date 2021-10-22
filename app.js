

function toggleDark(a){document.getElementById('darkModeButton')
    .addEventListener(a, function(){
	    $('body').toggleClass('dark');
    })
}

toggleDark('click'); //normal mode


// toggleDark('mousemove'); //seizure mode