const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");
const pridatTlacitko = document.getElementById("pridat-tlacitko");
const seznamPoznamek = document.getElementById("seznam-poznamek");

let poznamky = JSON.parse(localStorage.getItem("poznamky")) || [];

zobrazitPoznamky();

pridatTlacitko.onclick = function () {
    const nadpis = titleInput.value.trim();
    const text = textInput.value.trim();

    if (nadpis === "") {
        alert("Nadpis nesmí být prázdný!");
        return;
    }

    if (text === "") {
        alert("Text nesmí být prázdný!");
        return;
    }

    const jednaPoznamka = {
        nadpis: nadpis,
        text: text
    };

    poznamky.push(jednaPoznamka);
    localStorage.setItem("poznamky", JSON.stringify(poznamky));

    titleInput.value = "";
    textInput.value = "";

    zobrazitPoznamky();
};

function zobrazitPoznamky() {
    seznamPoznamek.innerHTML = "";

    for (let i = 0; i < poznamky.length; i++) {
        seznamPoznamek.innerHTML += `
            <div class="poznamka">
                <div class="poznamka-text">
                    <h3>${poznamky[i].nadpis}</h3>
                    <p>${poznamky[i].text}</p>
                </div>
                <button onclick="smazPoznamku(${i})" class="smazat-btn">
                    Smazat
                </button>
            </div>
        `;
    }
}

function smazPoznamku(index) {
    poznamky.splice(index, 1);
    localStorage.setItem("poznamky", JSON.stringify(poznamky));
    zobrazitPoznamky();
}
