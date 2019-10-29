const text = document.getElementById("text");
const inputAnswer = document.getElementById("inputAnswer");
let currentScene = 0;
let currentAction;
const scenes = [
    {
        message: 'vill du spela?',
        actions: [{ right: 'ja', next: 1 }, { wrong: 'nej', next: 0 }]
    },
    {
        message: 'Alarmet drar igång! Harpa! för den har lugnande effekt. Du hade Marimba länge som alla andra, men stressnivån sköt i höjden alltså. Vad kan denna dag tänkas ha att erbjuda? Du ångrar bittert quizkvällen igår och bannar dig för att du alltid MÅSTE bara ta en öl till innan du går hem. Och belgiskt spontanjäst öl är ju betydligt starkare än vad man vill erkänna för sig själv i glädjeyran över segern i quizzet. Tänker du gå upp?',
        actions: [{ right: 'ja', next: 2 }, { wrong: 'nej', next: 0 }]
    },
    {
        message: 'Dags att göra morgonkaffet! hur vill du ha din kopp? e-brygg, snabbkaffe, espresso eller latte? Du minns din Italiensemester och det doftade nymalda bönor från torget. Men också den trygga doften från gamla bettan på landet som puttrar och fräser som en ångturbin för att ingen har kalkat av maskinen på 35 år. Men kaffe är grejen va? Ja eller Nej?',
        actions: [{ right: 'ja', next: 3 }, { wrong: 'nej', next: 0 }]
    },
    {
        message: 'Ja nu har vi kommit så här långt! Kläderna är på och ryggsäcken är packad med matlåda och dator. Ut genom dörren, rusa ner till hållplatsen! Dags att välja transportmedel. Du har tre alternativ: 1. Buss 60( kortast promenad när du kliver av). 2. Spårvagn 8( näst längst promenad men kortast resväg).3. Gå( såklart längst promenad, men vardagsmotionen i ett stillasittande yrke är ju otroligt viktigt om man vill undvika blodpropp i alldeles för ung ålder).',
        actions: [{ right: 'ja', next: 4 }, { wrong: 'nej', next: 0 }]
    },
    {
        message: 'välkommen till spelet',
        actions: [{ right: 'ja', next: 5 }, { wrong: 'nej', next: 0 }]
    },
    {
        message: 'fortsättning i spelet',
        actions: [{ right: 'ja', next: 6 }, { wrong: 'nej', next: 0 }]
    }
]

function showScene() {
    text.innerText = scenes[currentScene].message;

}

function handleAction() {
    currentAction = inputAnswer.value;
    if (scenes[currentScene].actions[0].right === currentAction) {
        currentScene = scenes[currentScene].actions[0].next;
        showScene()
    }
    else if (scenes[currentScene].actions[1].wrong === currentAction) {
        currentScene = scenes[currentScene].actions[1].next;
        showScene()
    }

}



function hideButton() {
    let person = prompt("Ditt namn, tack");
    if (person != null) {
        document.getElementById("playerName").innerHTML =
            "Hej " + person + "! Välkommen till det fetaste spelet!";
    }
}

showScene()







