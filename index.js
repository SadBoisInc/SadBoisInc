function menuToggle(x){
    x.classList.toggle("change")
}


function setTheme(theme) {
    switch(theme){
        case 'default':

        break;
        case 'latte':
            document.querySelector(".wrapper").style.backgroundColor = "#FCE8D9";
            document.querySelector(".info").style.color = "#4C2823";
            document.querySelector(".banner").style.backgroundColor = "#885649";
            document.querySelector(".navButton").style.backgroundImage = "url('sources/SadBoisIncLogo_latte.png')"
            document.querySelector(".wrapper").style.fontFamily = "font-family: 'Roboto Mono', monospace;"
            document.querySelector('.bar1 .bar2. bar3').style,backgroundColor = "#EFB97F"
        break;
    }
}

function storeTheme(theme){
    localStorage.setItem('theme', theme);
}

//
//    MAIN
//
setTheme(localStorage.getItem('theme'));