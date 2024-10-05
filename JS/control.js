const corpo = [...document.querySelectorAll(".corpo")];
const titulo_dica = document.getElementById("titulo_dica");
let palavra_oculta = document.getElementById("palavra_oculta");
const input_texto = document.getElementById("input_texto");
const confirmar = document.getElementById("confirmar");
const conteiner_usados = document.getElementById("conteiner_usados");
let mensagem = document.getElementById("mensagem");

let chances = 6;
const letras_usadas = [];

const palavras = [
    {
        animal: [
            "elefante",
            "girafa",
            "canguru",
            "crocodilo",
            "papagaio",
            "pinguim",
            "morcego",
            "golfinho",
            "tartaruga",
            "rato",
            "gato",
            "boi",
            "flamingo"
        ],
    },
    {
        fruta: [
            "abacaxi",
            "morango",
            "melancia",
            "limao",
            "kiwi",
            "amora",
            "pera",
            "cereja",
            "laranja",
            "uva"
        ],
    },
    {
        país: [
            "brasil",
            "argentina",
            "japao",
            "canada",
            "frança",
            "alemanha",
            "espanha",
            "italia",
            "mexico",
            "russia",
            "arabia"
        ],
    },
    {
        profissão: [
            "professor",
            "engenheiro",
            "medico",
            "enfermeiro",
            "advogado",
            "arquiteto",
            "jornalista",
            "veterinario",
            "dentista",
            "psicologo",
            "pedreiro"
        ],
    },
    {
        objeto: [
            "computador",
            "cadeira",
            "ventilador",
            "furadeira",
            "caixa",
            "interruptor",
            "perfume",
            "celular",
            "janela",
            "armario",
            "tesoura"
        ],
    },
];


const tema_aleatorio = palavras[Math.floor(Math.random() * palavras.length)];


const chave_do_tema = Object.keys(tema_aleatorio)[0];
titulo_dica.textContent = `Tema: ${chave_do_tema}`;


const palavra_aleatoria = tema_aleatorio[chave_do_tema][Math.floor(Math.random() * tema_aleatorio[chave_do_tema].length)];
console.log(palavra_aleatoria);


let palavra_oculta_array = Array(palavra_aleatoria.length).fill("_");
palavra_oculta.textContent = palavra_oculta_array.join(" ");


confirmar.addEventListener("click", () => {
    const input_texto_value = input_texto.value.toLowerCase();

    if (input_texto_value === "" || letras_usadas.includes(input_texto_value)) {

        mensagem.style.visibility = "visible";
        mensagem.style.color = "red";
        mensagem.innerText = "Digite uma letra válida";

        setTimeout(() => {
            mensagem.style.visibility = "hidden";
        }, 3000);

        return;
    };

    letras_usadas.push(input_texto_value);
    conteiner_usados.textContent = letras_usadas.join(" - ");

    if (palavra_aleatoria.includes(input_texto_value)) {
        for (let i = 0; i < palavra_aleatoria.length; i++) {
            if (palavra_aleatoria[i] === input_texto_value) {
                palavra_oculta_array[i] = input_texto_value;
            }
        }
        palavra_oculta.textContent = palavra_oculta_array.join(" ");
    } else {
        chances--;
        console.log(`Chances restantes: ${chances}`);

        switch (chances) {
            case 5:
                corpo[0].style.visibility = "visible";
                break;
            case 4:
                corpo[0].style.visibility = "visible";
                corpo[1].style.visibility = "visible";
                break;
            case 3:
                corpo[0].style.visibility = "visible";
                corpo[1].style.visibility = "visible";
                corpo[2].style.visibility = "visible";
                break;
            case 2:
                corpo[0].style.visibility = "visible";
                corpo[1].style.visibility = "visible";
                corpo[2].style.visibility = "visible";
                corpo[3].style.visibility = "visible";
                break;
            case 1:
                corpo[0].style.visibility = "visible";
                corpo[1].style.visibility = "visible";
                corpo[2].style.visibility = "visible";
                corpo[3].style.visibility = "visible";
                corpo[4].style.visibility = "visible";
                break;
            case 0:
                corpo[0].style.visibility = "visible";
                corpo[1].style.visibility = "visible";
                corpo[2].style.visibility = "visible";
                corpo[3].style.visibility = "visible";
                corpo[4].style.visibility = "visible";
                corpo[5].style.visibility = "visible";
                break;
        };

    };


    if (chances === 0) {
        mensagem.style.visibility = "visible";
        mensagem.style.color = "red";
        mensagem.innerText = "Você perdeu!";
        input_texto.style.visibility = "hidden";
        confirmar.style.visibility = "hidden";

        palavra_oculta.textContent = palavra_aleatoria;
    };


    if (!palavra_oculta_array.includes("_")) {
        mensagem.style.visibility = "visible";
        mensagem.style.color = "green";
        mensagem.innerText = "Você venceu!";
        input_texto.style.visibility = "hidden";
        confirmar.style.visibility = "hidden";

    };

    input_texto.value = "";
});
