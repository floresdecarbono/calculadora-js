
const calculadora = criaCalculadora();
calculadora.inicia();

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia: function() {
            this.clearDisplay();
            this.cliqueBotoes();

            this.pressionaEnter();
            this.pressionaDelete();
        },

        cliqueBotoes: function() {
            document.addEventListener('click', e => {
                const el = e.target;
                
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();

            });
        },

        pressionaEnter: function() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        pressionaDelete: function() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 46 || e.keyCode === 8) {
                    this.clearDisplay();
                }
            });
        },

        btnParaDisplay: function(valor) {
            this.display.value += valor;
        },

        clearDisplay: function() {
            this.display.value = ' ';
        },

        apagaUm: function() {
            this.display.value = this.display.value.slice(0, -1);

        },

        realizaConta: function() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida.');
                    return;
                }

                this.display.value =conta;
            } catch(e) {
                alert('Conta inválida.');
                return;
            }
        },

    };
}

