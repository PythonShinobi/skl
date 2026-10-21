
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}

// Replace this placeholder with SKL Plaza's real WhatsApp number.
// Use the international country code and digits only.
const WHATSAPP_NUMBER = "254787883017";

function openWhatsApp(message) {
    if (!/^254\d{9}$/.test(WHATSAPP_NUMBER)) {
        alert(
            "Please configure SKL Plaza's real WhatsApp number in main.js."
        );
        return;
    }

    const url = new URL(`https://wa.me/${WHATSAPP_NUMBER}`);
    url.searchParams.set("text", message);

    window.open(url.toString(), "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".whatsapp-enquiry").forEach((link) => {
    const room = link.dataset.room || "a room";

    link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    link.addEventListener("click", (event) => {
        event.preventDefault();

        openWhatsApp(
            `Hello SKL Plaza, I would like to enquire about your ${room}. ` +
            "Please share the availability and current rates."
        );
    });
});

const whatsappLink = document.getElementById("whatsapp-link");

if (whatsappLink) {
    whatsappLink.addEventListener("click", (event) => {
        event.preventDefault();

        openWhatsApp(
            "Hello SKL Plaza, I would like to enquire about your rooms, " +
            "rates, availability and facilities. Please share more details."
        );
    });
}
