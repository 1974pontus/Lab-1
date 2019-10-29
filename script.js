const text = document.getElementById("text");
const inputAnswer = document.getElementById("inputAnswer");
let currentScene = 0
const scenes = [
    {
        message: 'välkommen till spelet',
        actions: ['starta', 'hej då!']
    },
    {
        message: 'fortsättning i spelet',
        actions: ['kom igen', 'hej då!']
    }
]

function showScene() {
    text.innerText = scenes[currentScene].message
}

function handleAction() {
    console.log('test')
}

function hideButton() {
    let person = prompt("Ditt namn, tack");
    if (person != null) {
        document.getElementById("playerName").innerHTML =
            "Hej " + person + "! Välkommen till det fetaste spelet!";
    }
}

showScene()







