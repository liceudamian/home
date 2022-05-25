new SimpleLightbox({ elements: '.container-galerie a' })
new SimpleLightbox({ elements: '.o-img a' })

AOS.init({
    duration: 800,
    offset: 100,
    once: true
});

emailjs.init("ySgmhV7O9UfthdkVx");

function mobile(){
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className = "nav mobile";
    } else {
        x.className = "nav";
    } 
}

function send() {
    let f=document.getElementById("form");
    if (f.checkValidity() == false) {
        f.reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_hcbt65d", "template_yv0wxul", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            f.reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}
