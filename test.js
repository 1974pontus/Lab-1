textIn  = document.getElementById("input-textbox");
textOut = document.getElementById("output-textbox");

function process(input) {
    if (input == "hi") { return "Hi to you too, player."; }
    else if (input == "exit") { return "No."; }
}

function go() {
    var input = textIn.value;
    textIn.value = "";
    var output = process(input);
    textOut.value += output + "\n";
}
