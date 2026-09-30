// Mobile menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}


// Search function
function searchContent() {
    const searchText =
        document.getElementById("searchBox").value.toLowerCase();

    const cards =
        document.querySelectorAll(".card");

    cards.forEach(function(card) {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}
