function myFunction() {
    var person = prompt("Ditt namn, tack");
    if (person != null) {
        document.getElementById("playerName").innerHTML =
            "Hej " + person + "! Välkommen till det fetaste spelet!";
    }
}



