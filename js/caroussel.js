$(document).ready(function () {
    var BFormations = document.getElementById('buttonFormations');
    var BExperiences = document.getElementById('buttonExperiences');

    const carousel1 = document.getElementsByClassName('caroussel1');
    const carousel2 = document.getElementsByClassName('caroussel2');


    console.log(BExperiences.value)



    console.log("ok")

    BExperiences.addEventListener('click', () =>{

        BExperiences.style.color = "#ffffff";
        BFormations.style.color = " #ffffff"
        carousel1.style= "transform : translate(10000px,0px)";
        carousel2.style.transform = "translateY(0px,-150px)";

    })

    BFormations.addEventListener('click', () =>{

        BExperiences.style.color = "#ffffff";
        BFormations.style.color = "#ffffff"
        carousel1.style.transform = "rotate(7deg)";
        carousel2.style.transform = "translateY(0px,-150px)";

    })

})