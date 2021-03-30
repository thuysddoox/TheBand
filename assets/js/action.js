var imgIndex = 0;
var slide = document.getElementsByClassName("slideshow")[0];
var text = [document.getElementById("chicago"), document.getElementById("losangeles"), document.getElementById("newyork")];
var img = ["url('./assets/img/chicago.jpg')", "url('./assets/img/la.jpg')", "url('./assets/img/ny.jpg')"];

function slideshow() {
    slide.style.backgroundImage = img[imgIndex];
    text[imgIndex].style.display = "block";
    for (var j = 0; j < text.length; j++)
        if (imgIndex !== j) text[j].style.display = "none";
    if (imgIndex == 2) imgIndex = 0;
    else imgIndex++;
    setTimeout(slideshow, 3000);
}
slideshow();

function popupFormTicket() {
    var form = document.getElementById('buy--ticket');
    document.getElementById('Opacity').style.display = 'block';
    form.style.display = 'block';

}

function closeFormTickets() {
    var form = document.getElementById('buy--ticket');
    form.style.display = "none";
    document.getElementById('Opacity').style.display = 'none';

}

function showNavigation() {
    var navBtn = document.getElementById("nav--btn");
    var nav = document.getElementById("nav");
    var opc = document.getElementById('Opacity');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        opc.style.display = 'none';
    } else {
        nav.style.display = 'block';
        opc.style.display = 'block';
    }
}

function delOpacityAndNav() {
    document.getElementById('Opacity').style.display = 'none';
    if (document.getElementById("nav").style.display === "block") document.getElementById("nav").style.display = 'none';
    var subnav = document.getElementsByClassName("subnav")[0];
    if (subnav.style.display === "block") subnav.style.display = "none";
}

function showSearch() {
    var search = document.getElementById("search--infor");
    console.log(search.style.display);
    if (search.style.display === "inline-block") search.style.display = "none";
    else search.style.display = "inline-block";
}

function showSubNav() {
    var subnav = document.getElementsByClassName("subnav")[0];
    if (subnav.style.display === "block") subnav.style.display = "none";
    else subnav.style.display = "block";
}

function showMessage() {
    var mes = document.getElementById("boxchat");
    document.getElementById("boxchat__icon").style.display = 'none';
    mes.style.display = "block";

}

function closeMess() {
    var mes = document.getElementById("boxchat");
    mes.style.display = "none";
    document.getElementById("boxchat__icon").style.display = 'block';

}