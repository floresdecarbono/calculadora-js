
function calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        clearDisplay();
        cliqueBotoes();

        pressionaDelete();
        pressionaEnter();
    }

    const cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            isBtnNumber(el);
            isBtnClear(el);
            isBtnDel(el);
            isBtnEquals(el);

            this.display.focus()
        })
    }

    const btnParaDisplay = (valor) => this.display.value += valor;
    const clearDisplay = () => this.display.value = ' ';
    const apagaUm = () => this.display.value = this.display.value.slice(0, -1);
    const realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida!');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida!');
            return;
        }
    }

    const pressionaEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) realizaConta();
        });
    }

    const pressionaDelete = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 46) clearDisplay();
        });
    }


    function isBtnNumber(e) {
        if (e.classList.contains('btn-num')) {
             btnParaDisplay(e.innerText);
        }
    }

    function isBtnClear(e) {
        if (e.classList.contains('btn-clear')) {
             clearDisplay();
        }
    }

    function isBtnDel(e) {
        if (e.classList.contains('btn-del')) {
             apagaUm();
        }
    }

    function isBtnEquals(e) {
        if (e.classList.contains('btn-eq')) {
             realizaConta();
        }   
    }

    
}

const calc = new calculadora();
calc.inicia();
