    var Question = function (domanda, risposte, risposteCorrette) {
        this.domanda = domanda,
            this.risposte = risposte,
            this.risposteCorrette = risposteCorrette
    };

    var domanda0 = new Question("Siamo nel 2018?", ["Si", "No"], 0);
    var domanda1 = new Question("Da quanto studi Js?", ["Una settimana", "Un mese", "Un anno"], 2);
    var domanda2 = new Question("Finirai gli studi a tempo?", ["Si", "No", "Forse"], 0);
    var domanda3 = new Question("Hai progetti per il futuro?", ["Si", "No", "Cercando nuove possibilità"], 3);
    var domanda4 = new Question("Troverai lavoro come programmatore?", ["Speriamo", "Si", "No", "Forse"], 1);

    var domande = [domanda0, domanda1, domanda2,domanda3,domanda4];

    Question.prototype.selezzionaDomanda = function () {
        console.log(this.domanda);

        for (let i = 0; i < this.risposte.length; i++) {
            console.log(i + ":" + this.risposte[i]);
        }
    }

    Question.prototype.controllaRisposta = function (rispostaUtente, callback) {
        var risposta;
        if (rispostaUtente === this.risposteCorrette) {
            console.log("Risposta Corretta!!")
            risposta = callback(true);

        } else {
            console.log("Risposta Incorrecta!!")
            risposta = callback(false);
        }
    }

    function punteggio() {
        var totPunteggio = 0;
        return function (corretta) {
            if (corretta) {
                totPunteggio++;
            }
            console.log("Risposte Corrette: " + totPunteggio);
            console.log("------------------");
            return totPunteggio;
        }
    }

    var registraPunteggio = punteggio();

    function nuovaDomanda() {

        var risultatoAcaso = Math.floor(Math.random() * domande.length);

        domande[risultatoAcaso].selezzionaDomanda();
        var rispostaUtente = prompt("Inserisci risposta");

        if (rispostaUtente !== "exit") {
            domande[risultatoAcaso].controllaRisposta(parseInt(rispostaUtente), registraPunteggio);

            nuovaDomanda();

        } else {
            console.log("------------------");
            console.log("Gioco finito")
        }

    }
    document.getElementById("inizio").addEventListener("click", nuovaDomanda);