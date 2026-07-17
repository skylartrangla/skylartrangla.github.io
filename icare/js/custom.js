// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});



// This academic prototype is hosted as a static GitHub Pages site. Forms are
// intentionally non-operational so visitors are never led to believe data is sent.
document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var note = form.querySelector(".prototype-note");
        if (!note) {
            note = document.createElement("p");
            note.className = "prototype-note";
            note.textContent = "Prototype only — no information was submitted.";
            form.appendChild(note);
        }
    });
});

var portfolioLink = document.createElement("a");
portfolioLink.className = "portfolio-return";
portfolioLink.href = "../ui-ux/#icare";
portfolioLink.textContent = "← Skylar La portfolio";
document.body.appendChild(portfolioLink);
