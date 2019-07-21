document.getElementById("About").addEventListener("click", showAbout);
document.getElementById("Personal").addEventListener("click", showPersonal);
//document.getElementById("Resume").addEventListener("click", showResume);
document.getElementById("Contact").addEventListener("click", showContact);


function showAbout() {
    document.getElementById("about-body").style.display = "block";
    document.getElementById("personal-body").style.display = "none";
    document.getElementById("contact-body").style.display = "none";
    document.getElementById("About").classList.add("active");
    document.getElementById("Personal").classList.remove("active");
    document.getElementById("Contact").classList.remove("active");
}

function showPersonal() {
    document.getElementById("about-body").style.display = "none";
    document.getElementById("personal-body").style.display = "block";
    document.getElementById("contact-body").style.display = "none";
    document.getElementById("About").classList.remove("active");
    document.getElementById("Personal").classList.add("active");
    document.getElementById("Contact").classList.remove("active");
}
/*
function showResume() {
    window.location='Euntae Ki_Resume.pdf';
}*/

function showContact() {
    document.getElementById("about-body").style.display = "none";
    document.getElementById("personal-body").style.display = "none";
    document.getElementById("contact-body").style.display = "block";
    document.getElementById("About").classList.remove("active");
    document.getElementById("Personal").classList.remove("active");
    document.getElementById("Contact").classList.add("active");
}