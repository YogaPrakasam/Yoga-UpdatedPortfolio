const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetup - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.u=querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*---------------------------------------------contact form---------------------------------------------------------*/

const form = document.querySelector("form");

function sendMessageToTelegram() {
    const chatId = "5124941419";
    const botToken = "8019778607:AAHsf7KpNjjc_mhDzcvYH84raZloov6Uyvk";
    const message = `
Name: ${document.getElementById("name").value}
Email: ${document.getElementById("email").value}
Phone No: ${document.getElementById("phonenumber").value}
Subject: ${document.getElementById("subject").value}
Message: ${document.getElementById("message").value}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            form.reset();
        } else {
            Swal.fire({
                title: "Error!",
                text: "Message not sent. Try again.",
                icon: "error"
            });
        }
    })
    .catch(error => {
        Swal.fire({
            title: "Error!",
            text: "An error occurred. Please try again.",
            icon: "error"
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMessageToTelegram();
});

/*--------------------------------------------------scroll reveal-----------------------------------------------*/


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .skills-container, about-content, .project-item, .project-content, .input-box, .input-group-2', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h3, .about img', { origin: 'left'});
ScrollReveal().reveal('.about-content p, .about-content a', { origin: 'right'});


/*-----------------------------------------------------*/

const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst', 'Python Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});