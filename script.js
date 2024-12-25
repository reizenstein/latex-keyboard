let latexCode = "";

function addToLatex(symbol) {
    // Insert the symbol at the cursor position in the textarea
    latexCode += symbol;
    document.getElementById("latexOutput").value = latexCode;
}

function downloadLatex() {
    const blob = new Blob([latexCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "latex_code.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
