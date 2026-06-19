console.log("Website Loaded Successfully");

let slideIndex = 0;

showSlides();

function showSlides(){

    let slides =
    document.getElementsByClassName("slides");

    for(let i=0;i<slides.length;i++){

        slides[i].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > slides.length){

        slideIndex = 1;
    }

    slides[slideIndex-1].style.display =
    "block";

    setTimeout(showSlides,4000);
}

/* COUNTER ANIMATION */

const counters =
document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute('data-target');

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter,20);
        }

        else{

            counter.innerText =
            target + "+";
        }
    };

    updateCounter();
});

function sendToWhatsApp(){

    let name =
    document.getElementById("name").value;

    let phone =
    document.getElementById("phone").value;

    let location =
    document.getElementById("location").value;

    let fenceType =
    document.getElementById("fenceType").value;

    let length =
    document.getElementById("length").value;

    let message =
    document.getElementById("message").value;

    if(
        name === "" ||
        phone === "" ||
        location === "" ||
        fenceType === ""
    ){
        alert("Please fill all required fields.");
        return;
    }

    let whatsappMessage =
`*NEW QUOTE REQUEST*

👤 Name: ${name}

📞 Phone: ${phone}

📍 Location: ${location}

🛡 Fence Type: ${fenceType}

📏 Approx Length: ${length} Feet

📝 Additional Requirements:
${message}`;

    let whatsappNumber =
    "919600410089";

    let whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(
        whatsappURL,
        "_blank"
    );
}

/* BACK TO TOP */

let topButton =
document.getElementById("topBtn");

window.onscroll = function(){

    scrollFunction();
};

function scrollFunction(){

    if(
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ){

        topButton.style.display = "block";
    }

    else{

        topButton.style.display = "none";
    }
}

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"
    });
}

/* MOBILE MENU */

function toggleMenu(){

    let navLinks =
    document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}

document.getElementById("year").innerHTML =
new Date().getFullYear();