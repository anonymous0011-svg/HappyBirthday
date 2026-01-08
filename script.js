document.addEventListener("DOMContentLoaded", () => {

    // ================= FLOATING ELEMENTS =================
    function createFloatingElements(container, symbols, count) {
        for (let i = 0; i < count; i++) {
            const el = document.createElement("span");
            el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            el.style.left = Math.random() * 100 + "vw";
            el.style.fontSize = (Math.random() * 8 + 12) + "px";

            // Random starting vertical position
            const startY = Math.random() * 100; // in vh
            el.style.transform = `translateY(${startY}vh)`;

            // Optional small random delay so animation looks natural
            el.style.animationDelay = Math.random() * 2 + "s";

            container.appendChild(el);
        }
    }

    // Hero section floating hearts
    document.querySelectorAll("#hero .hearts").forEach(container =>
        createFloatingElements(container, ["💗", "💕", "❤️"], 30)
    );

    // Message section floating hearts, stars, butterflies
    const messageSection = document.getElementById("message");
    createFloatingElements(messageSection.querySelector(".hearts"), ["💗","💕","❤️"], 10);
    createFloatingElements(messageSection.querySelector(".stars"), ["✨","⭐"], 10);
    createFloatingElements(messageSection.querySelector(".butterflies"), ["🦋"], 10);


    // ================= TYPING EFFECT =================
    const text = "Happy Birthday, Avinash! 💕";
    let i = 0;
    const typing = document.getElementById("typing");

    (function type() {
        if (i < text.length) {
            typing.textContent += text[i++];
            setTimeout(type, 90);
        } else {
            document.querySelectorAll("#hero .fade").forEach(e => e.classList.add("show"));
        }
    })();


    // ================= SECTION NAVIGATION =================
    const hero = document.getElementById("hero");
    const gallery = document.getElementById("gallery");
    const message = document.getElementById("message");
    const startBtn = document.getElementById("startBtn");
    const messageBtn = document.getElementById("messageBtn");

    // Hero → Gallery
    startBtn.onclick = () => {
        hero.classList.add("hidden");       // hide hero
        gallery.classList.remove("hidden");  // show gallery

        // Fade in child elements
        setTimeout(() => {
            document.querySelectorAll("#gallery .fade-section").forEach(e => e.classList.add("show"));
        }, 50);
    };

    // Gallery → Message
    messageBtn.onclick = () => {
        gallery.classList.add("hidden");      // hide gallery
        message.classList.remove("hidden");   // show message

        // Fade in child elements
        setTimeout(() => {
            document.querySelectorAll("#message .fade-section").forEach(e => e.classList.add("show"));
        }, 50);
    };


    // ================= MODAL =================
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalText = document.getElementById("modalText");
    const close = document.querySelector(".close");

    document.querySelectorAll(".card").forEach(card => {
        card.onclick = () => {
            modalImg.src = card.querySelector("img").src;
            modalText.textContent = card.querySelector(".overlay").textContent;
            modal.classList.remove("hidden");
        };
    });

    close.onclick = () => modal.classList.add("hidden");

});
