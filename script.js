const text = document.getElementById("text");
const inputAnswer = document.getElementById("inputAnswer");
let currentScene = 0;
let currentAnswer;

/**
 * The story of the game represented in scenes.
 * @type {Array<Scene>}
 */
const scenes = [
    {
        message: 'vill du spela?\n ja eller nej?',
        actions: [{ answer: 'ja', nextScene: 1 }, { answer: 'nej', nextScene: 6 }]
    },
    {
        message: 'Alarmet drar igång! Harpa! för den har lugnande effekt. Du hade Marimba länge som alla andra, men stressnivån sköt i höjden alltså. Vad kan denna dag tänkas ha att erbjuda? Du ångrar bittert quizkvällen igår och bannar dig för att du alltid MÅSTE bara ta en öl till innan du går hem. Och belgiskt spontanjäst öl är ju betydligt starkare än vad man vill erkänna för sig själv i glädjeyran över segern i quizzet. Tänker du gå upp? \nja eller nej?',
        actions: [{ answer: 'ja', nextScene: 2 }, { answer: 'nej', nextScene: 6 }]
    },
    {
        message: 'Dags att göra morgonkaffet! hur vill du ha din kopp? e-brygg, snabbkaffe, espresso eller latte? Du minns din Italiensemester och det doftade nymalda bönor från torget. Men också den trygga doften från gamla bettan på landet som puttrar och fräser som en ångturbin för att ingen har kalkat av maskinen på 35 år. Men kaffe är grejen va? \nJa eller Nej?',
        actions: [{ answer: 'ja', nextScene: 3 }, { answer: 'nej', nextScene: 6 }]
    },
    {
        message: 'Ja nu har vi kommit så här långt! Kläderna är på och ryggsäcken är packad med matlåda och dator. Ut genom dörren, rusa ner till hållplatsen! Dags att välja transportmedel. Du har tre alternativ:\n 1. Buss 60( kortast promenad när du kliver av).\n2. Gå( såklart längst promenad, men vardagsmotionen i ett stillasittande yrke är ju otroligt viktigt om man vill undvika blodpropp i alldeles för ung ålder).\n3. Spårvagn 8( näst längst promenad men kortast resväg). \nVälj 1, 2 eller 3',
        actions: [{ answer: '2', nextScene: 4 }, { answer: '1', nextScene: 6 }, { answer: '3', nextScene: 6 }]
    },
    {
        message: 'Väl framme! slår in koden 1085 på dörren. går in och kollar schemat. Faaan!! Inga lektioner idag. Jämna/ojämna veckor? Att du aldrig lär dig. Jaja! Vad gör du nu då? Sätter du dig och repeterar kapitlet om javaScript-funktioner resten av dagen eller passar du på att åka och storhandla på Willy’s till lanpartyt du arrangerar i helgen? Power king och salta pinnar är ju mycket billigare där än på Coop Avenyn. Du väljer att plugga va? \nja eller nej?',
        actions: [{ answer: 'ja', nextScene: 5 }, { answer: 'nej', nextScene: 6 }]
    },
    {
        message: 'grattis! om två år har du ett fett kneg med fussball och beer pong på betald arbetstid varje fredag. Du klarade spelet!!\n 👑' ,
        actions: [],
        isGameWon: true
    },
    {
        message: 'Ledsen kompis, om du inte kan greppa syntaxen så är det kört. Du sumpar inlämningen på fredag-indraget csn- flytta hem till mamma- spelet börjar om. Vill du spela igen?\nja eller nej?',
        actions: [{ answer: 'ja', nextScene: 1 }, { answer: 'nej', nextScene: 0 }]
    }
]

/**
 * Describes possible answers and the outcome of the answer.
 * @typedef {{ answer: String, nextScene: Number }} Action
 */

/**
 * A part/level of the story in the game.
 * @typedef {{ message: String, isGameWon?: Boolean, actions: Array<Action> }} Scene
 */

/**
 * uses the current scene and adda it's text to the dom element.
 * It also checks if the user has won the game.
 * @param {Scene} scene current scene in the game.
 */
function showScene(scene) {
    text.innerText = scene.message;
    if (scene.isGameWon) {
        document.getElementById("inputs").innerHTML = '';
    }
}

function handleAction() {
    currentAnswer = inputAnswer.value;
    inputAnswer.value = '';

    const actions = scenes[currentScene].actions

    for (const action of actions) {
        if (action.answer === currentAnswer) {
            currentScene = action.nextScene;
            showScene(scenes[currentScene]);
            break;
        }
    }


}


function hideButton() {
    let person = prompt("Ditt namn, tack");
    if (person != null) {
        document.getElementById("playerName").innerHTML =
            "Hej " + person + "! Välkommen till det fetaste spelet!";
    }
}

showScene(scenes[currentScene])







