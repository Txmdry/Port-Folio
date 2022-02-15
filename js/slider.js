$(document).ready(function () {
    var buttoninformatique = document.getElementById("informatique");
    var buttonpassion = document.getElementById("passion");

    var sectioninformatique = document.getElementById("slider1");
    var sectionpassion = document.getElementById("slider2");



    buttoninformatique.addEventListener('click', () => {
    console.log("hy")
    sectioninformatique.style.visibility = "visible";
    sectioninformatique.style.display= "block";
    sectionpassion.style.visibility = "hidden";
    sectionpassion.style.display= "none";

    buttoninformatique.style.backgroundColor = "var(--marron-2-blanc)"
    buttonpassion.style.backgroundColor = "initial"
    })

    buttonpassion.addEventListener('click', () => {
    console.log("hy")


    sectioninformatique.style.visibility = "hidden";
    sectioninformatique.style.display= "none";
    sectionpassion.style.visibility = "visible";
    sectionpassion.style.display= "block";


    buttoninformatique.style.backgroundColor = "initial"
    buttonpassion.style.backgroundColor = "var(--marron-2-blanc)"
    })
    
})