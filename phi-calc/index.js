document.getElementById('calcButton').addEventListener('click', () => {
    const input = document.getElementById('expression').value;
    const resultDiv = document.getElementById('result');
    const lines = input.split(';');
    const scope = {};
    const results = [];

    try {
        for (let line of lines) {
            const trimmed = line.trim();
            if (trimmed.length === 0) continue;
            const result = math.evaluate(trimmed, scope);
            if (typeof result !== 'function') {
                results.push(result);
            }
        }

//        const resultText = '= [' + results.join(', ') + ']';
//        resultDiv.textContent = resultText;

        // Ergebnis + Formel in localStorage speichern
        const calcEntry = {
            input: input.trim(),
            result: results
        };

        let history = JSON.parse(localStorage.getItem('calcHistory') || '[]');
        history.push(calcEntry);
        localStorage.setItem('calcHistory', JSON.stringify(history));

        renderHistory();

    } catch (e) {
        resultDiv.textContent = 'Fehler: ' + e.message;
    }
});
document.getElementById('expression').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('calcButton').click();
  }
});
function renderHistory() {
    const historyspan = document.querySelector('#history span');
    const history = JSON.parse(localStorage.getItem('calcHistory') || '[]');

    // Wichtig: alten Inhalt löschen!
    historyspan.innerHTML = '';

    if (history.length === 0) {
      historyspan.innerHTML = '<em>Keine bisherigen Berechnungen.</em>';
    }

    history.slice(-10).reverse().forEach(entry => {
        const para = document.createElement('pre');
        para.textContent = JSON.stringify(entry, null, 2);
        historyspan.appendChild(para);
    });
}
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#header h1");
  const span = document.querySelectorAll("#header span");

  header.addEventListener("click", function () {
    let isVisible = span[0].style.display === "block";
    span[0].style.display = (span[0].style.display === "block") ? "none" : "block";
    header.classList.toggle("expanded", !isVisible);
  });
});
renderHistory();
