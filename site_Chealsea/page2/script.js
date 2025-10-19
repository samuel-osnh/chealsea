// ======== Filtres par poste ======== //
const boutons = document.querySelectorAll(".filtre-btn");
const joueurs = document.querySelectorAll(".joueur");

boutons.forEach(btn => {
    btn.addEventListener("click", () => {
        boutons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filtre = btn.getAttribute("data-filtre");

        joueurs.forEach(joueur => {
            joueur.style.display =
                filtre === "tous" || joueur.getAttribute("data-poste") === filtre
                    ? "block"
                    : "none";
        });
    });
});

// ======== Popup joueur ======== //
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");

// Pour chaque joueur, ouvre sa fiche
joueurs.forEach(joueur => {
    joueur.addEventListener("click", () => {
        document.getElementById("modal-img").src = joueur.querySelector("img").src;
        document.getElementById("modal-nom").textContent = joueur.dataset.nom;
        document.getElementById("modal-poste").textContent = joueur.dataset.postecomplet;
        document.getElementById("modal-nationalite").textContent = joueur.dataset.nationalite;
        document.getElementById("modal-naissance").textContent = joueur.dataset.naissance;
        document.getElementById("modal-age").textContent = joueur.dataset.age;
        document.getElementById("modal-taille").textContent = joueur.dataset.taille;
        document.getElementById("modal-debut").textContent = joueur.dataset.debut;
        modal.style.display = "flex";
    });
});

// Fermer la popup
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.navbarlink');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
