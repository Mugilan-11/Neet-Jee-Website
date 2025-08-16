// ========== Mobile Menu Toggle ==========
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("nav .navigation ul");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ========== Countdown Timer ==========
function startCountdown() {
    const endDate = new Date("2024-12-31 23:59:59").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) return;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const timeBoxes = document.querySelectorAll("#registration .date");
        if (timeBoxes.length >= 4) {
            timeBoxes[0].innerHTML = `${days} <br> Days`;
            timeBoxes[1].innerHTML = `${hours} <br> Hours`;
            timeBoxes[2].innerHTML = `${minutes} <br> Minutes`;
            timeBoxes[3].innerHTML = `${seconds} <br> Seconds`;
        }
    }, 1000);
}
startCountdown();

// ========== Form Validation ==========
const formBtn = document.querySelector("#registration .form .yellow");

if (formBtn) {
    formBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const inputs = document.querySelectorAll("#registration .form input");
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
                isValid = false;
            } else {
                input.style.border = "1px solid green";
            }
        });

        if (isValid) {
            alert("🎉 Form submitted successfully!");
        } else {
            alert("⚠️ Please fill out all fields.");
        }
    });
}

// ========== Smooth Scroll ==========
document.querySelectorAll('nav .navigation a').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
