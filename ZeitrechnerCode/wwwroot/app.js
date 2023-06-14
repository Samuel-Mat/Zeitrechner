async function GebeZeit() {
  const userInput = document.getElementById("date");
  const zeitrechner = await Getzeit(userInput.value);
  console.log(zeitrechner);
  const zeitrechnerTitel = document.getElementById("zeitrechner-datum");
  const zeitrechnerTage = document.getElementById("zeitrechner-tage");
  const zeitrechnerStunden = document.getElementById("zeitrechner-stunden");
  const zeitrechnerMinuten = document.getElementById("zeitrechner-minuten");
  const zeitrechnerSekunden = document.getElementById("zeitrechner-sekunden");

  zeitrechnerTitel.textContent =
    "Ihr gewähltes Datum lautet: " + zeitrechner.datum;
  zeitrechnerTage.textContent =
    "In Tagen beträgt die Zeit: " + zeitrechner.tage + " Tage";
  zeitrechnerStunden.textContent =
    "In Stunden beträgt die Zeit: " + zeitrechner.stunden + " Stunden";
  zeitrechnerMinuten.textContent =
    "In Minuten beträgt die Zeit: " + zeitrechner.minuten + " Minuten";
  zeitrechnerSekunden.textContent =
    "In Sekunden beträgt die Zeit: " + zeitrechner.sekunden + " Sekunden";
}

async function Getzeit(datum) {
  return await fetch("https://localhost:7130/Home/" + datum, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
}
