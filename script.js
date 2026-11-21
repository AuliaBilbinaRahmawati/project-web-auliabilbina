document.addEventListener("DOMContentLoaded", function () {
    // 1. Menu Mobile Responsive
    const navToggle = document.getElementById("aulia_nav_toggle");
    const navMenu = document.getElementById("aulia_nav_list");
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("aulia_show");
        });
    }

    // 2. Form Kontak Interaktif (contact.html)
    const contactForm = document.getElementById("aulia_contact_form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const nama = document.getElementById("aulia_nama").value.trim();
            const email = document.getElementById("aulia_email").value.trim();
            const subjek = document.getElementById("aulia_subjek").value;
            const pesan = document.getElementById("aulia_pesan").value.trim();
            const statusBox = document.getElementById("aulia_form_status");

            if (!nama || !email || !pesan) {
                statusBox.style.color = "#c62828";
                statusBox.innerText = "Harap lengkapi semua kolom wajib!";
                return;
            }

            statusBox.style.color = "#2e7d32";
            statusBox.innerHTML = `Terima kasih, <strong>${nama}</strong>! Pesan Anda mengenai <em>"${subjek}"</em> berhasil dikirim.`;
            contactForm.reset();
        });
    }

    // 3. Filter Galeri (galeri.html)
    const filterBtns = document.querySelectorAll(".aulia_filter_btn");
    const galleryCards = document.querySelectorAll(".aulia_gallery_item");
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const category = this.getAttribute("data-filter");
            galleryCards.forEach(function (card) {
                card.style.display = (category === "all" || card.getAttribute("data-category") === category) ? "flex" : "none";
            });
        });
    });
});
// Fitur Accordion FAQ
    const auliaFaqQuestions = document.querySelectorAll(".aulia_faq_question");
    auliaFaqQuestions.forEach(function (button) {
        button.addEventListener("click", function () {
            const faqItem = this.parentElement;
            const faqIcon = this.querySelector(".aulia_faq_icon");
            faqItem.classList.toggle("aulia_faq_open");

            if (faqIcon) {
                faqIcon.textContent = faqItem.classList.contains("aulia_faq_open") ? "−" : "+";
            }
        });
    });