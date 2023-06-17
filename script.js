var total = 0;
var j = 0;
var resp = 0;
let titulo = document.querySelector('#titulo');
let alternativas = document.querySelectorAll('.answers .alts');
let numero = document.querySelector('#question h1');
let img = document.querySelector('img');
let fundo = document.querySelector('.mainBG');
let simbolos = document.querySelectorAll('.symbols');
let answers = document.querySelectorAll('.answers');

const symbols = [];
const respostas = [];
const perguntas = [];

//Criador de perguntas.
function pergunta(titulo,A,B,C,D,E,fundo,dica) {
    perguntas.push([titulo,A,B,C,D,E,false,fundo,dica]);
}

//Criador de respostas.
function resposta(r1,r2,r3,r4,r5) {
    let grupo = [r1,r2,r3,r4,r5];
    let simbolos = [];
    for (let i = 0; i < 5; i++) {
        if (grupo[i] == 0) {
            grupo[i] = wrong;
            simbolos[i] = "✗";
        }
        else {
            grupo[i] = correct;
            simbolos[i] = "✓";
        }

    }
    respostas.push(grupo);
    symbols.push(simbolos);
}

pergunta('Qual é o nome do protagonista de "Attack on Titan"?',
        'Mikasa Ackerman',
        'Levi Ackerman',
        'Eren Yeager',
        'Armin Arlet',
        'Eren Kruger',
        'imgs/P1_fundo.jpg',
        'imgs/Eren.jpg');

resposta(0,0,1,0,0);

pergunta(
        'Quais são os nomes dos três muros que protegem as cidades?',
        'Muro Maria, Muro Rose, Muro Sina',
        'Muro Shiganshina, Muro Trost, Muro Wall Sina',
        'Muro Rose, Muro Sina, Muro Shiganshina',
        'Muro Maria, Muro Trost, Muro Rose',
        'Muro Shiganshina, Muro Sina, Muro Rose',
        'imgs/Eren1.jpg',
        'imgs/Maria_Rose_Sina.jpg');

resposta(1,0,0,0,0);        

pergunta(
        'Qual é o nome da tropa de elite especializada em matar Titãs?',
        'Polícia Militar',
        'Tropa de Exploração',
        'Tropas Estacionárias',
        'Tropa de Defesa',
        'Tropa de Ataque',
        'imgs/Levi.jpg',
        'imgs/asas_da_liberdade.jpg');

resposta(0,1,0,0,0);

pergunta(
        'Qual era a dupla que se revelou como titã colossal e blindado?',
        'Annie Leonhart e Reiner Braun',
        'Annie Leonhart e Bertolt Hoover',
        'Bertolt Hoover e Reiner Braun',
        'Armin Arlet e Annie Leonhart',
        'Zeke Yeager e Bertolt Hoover',
        'imgs/Wallpaper.png',
        'imgs/Col_Enco.png');

resposta(0,0,1,0,0);

pergunta(
        'Quem era a titã fêmea?',
        'Annie Leonhart',
        'Mikasa Ackerman',
        'Ymir',
        'Historia Reiss',
        'Sasha Braus',
        'imgs/Sculture.jpg',
        'imgs/Pose.jpg');

resposta(1,0,0,0,0);

pergunta(
        'Quem foi o primeiro titã?',
        'Eren Yeager',
        'Zeke Yeager',
        'Grisha Yeager',
        'Ymir Fritz',
        'Ymir',
        'imgs/Past.png',
        'imgs/Ymir_Fritz.jpg');

resposta(0,0,0,1,0);

pergunta(
        'Quem é o personagem famoso por gritar a frase "SHINZOU WO SASAGEYO"?',
        'Levi Ackerman',
        'Armin Arlert',
        'Hange Zoe',
        'Jean Kirsten',
        'Erwin Smith',
        'imgs/Guerra.png',
        'imgs/Erwin.jpg');

resposta(0,0,0,0,1);        

pergunta(
        'Quem foi o responsável pelo plano de captura do Titã Colossal?',
        'Erwin Smith',
        'Eren Yeager',
        'Armin Arlert',
        'Mikasa Ackerman',
        'Levi Ackerman',
        'imgs/Eren3.jpg',
        'imgs/Carbonizado.jpg');

resposta(0,0,1,0,0);

pergunta(
        'Qual personagem após um evento traumatico ficou com trauma dissociativo de identidade?',
        'Mikasa Ackerman',
        'Eren Yeager',
        'Reiner Braum',
        'Annie Leonheart',
        'Hange Zoe',
        'imgs/Attack_titan.jpg',
        'imgs/Criança.jpg');

resposta(0,0,1,0,0); 

pergunta(
        'Qual nome da titã que come a mãe do eren no primeiro episodio?',
        'Pieck Finger',
        'Carla Yeager',
        'Hitch Dreyse',
        'Dina Fritz',
        'Rico Brzenska',
        'imgs/attack.jpg',
        'imgs/Titã_Sorridente.jpg');

resposta(0,0,0,1,0); 


for (let i = 0; i < 5; i++ ) {
     answers[i].onclick = respostas[j][i];
 }

//Cria a div após as 10 perguntas.
function createFinal() {
    const mainBg = document.querySelector(".mainBG");
        mainBg.style.backgroundImage = `url('imgs/Guri.jpg')`;
        const main = document.querySelectorAll(".mainBG div");
        const mainh1 = document.querySelector(".mainBG h1");
        mainh1.style.opacity = "0%";
        for (let i = 0; i < main.length; i++) {
            main[i].style.opacity = "0%";
        }

        const final = document.createElement("div");
        final.setAttribute('id', 'final');
        final.style.cursor = "pointer";
        document.querySelector('.mainBG').appendChild(final);
        const h1 = document.createElement("h1");
        if (resp != 10) {
            h1.innerText = 'Você ainda não terminou todas as questões clique em anterior para voltar';
            h1.style.textAlign = "center";
            final.appendChild(h1);
        }
        else {
            h1.innerText = `Parabéns você acertou ${total} questões`;
            final.appendChild(h1);
            const restart = document.createElement("button");
            restart.setAttribute('id', 'restart');
            restart.innerText = "Recomeçar o Quiz";
            restart.onclick = refresh;
            final.appendChild(restart);
        }
        const buttonNext = document.querySelector('#next');
        buttonNext.style.display = "none";
}

//Altera as perguntas após apertar em Anterior ou Proxima.
function setNextPrevious() {
    for (let i = 0; i < 5; i++ ) {
        alternativas[i].innerText = perguntas[j][i+1];
        simbolos[i].innerText = '';
        answers[i].onclick = respostas[j][i];
    }
    titulo.innerText = perguntas[j][0];
    numero.innerText = j + 1;
    img.src = `${perguntas[j][8]}`;
    fundo.style.backgroundImage = `url('${perguntas[j][7]}')`;
    //Verifica se a pergunta ja foi respondida.
    if (perguntas[j][6]) {
        for (let i = 0; i < 5; i++ ) {
            simbolos[i].innerText = symbols[j][i];
        }
    }
}

//Cria o botão para ir para a proxima pergunta.
function next() {
    if (j < perguntas.length-1) {
        j++;
        setNextPrevious();
    }
    else if (j == perguntas.length-1) {
        j++;
        createFinal();
    }
    
}

//Cria o botão para ir para a pergunta anterior.
function previous() {
    if (j > 0) {
        j--;
        setNextPrevious();

        const main = document.querySelectorAll(".mainBG div");
        const mainh1 = document.querySelector(".mainBG h1");
        mainh1.style.opacity = "100%";
        for (let i = 0; i < main.length; i++) {
            main[i].style.opacity = "100%";
        }
        if (j <= perguntas.length-1) {
            final.remove();
            const buttonNext = document.querySelector('#next');
            buttonNext.style.display = "inherit";
        }
    }
}

//Verifica se a alternativa estava correta.
function correct() {
    for (let i = 0; i < 5; i++ ) {
        simbolos[i].innerText = symbols[j][i];
    }
    if (!perguntas[j][6]) {
        total++;
        resp++;
        perguntas[j][6] = true;
    }
}

//Verifica se a alternativa estava errada,
function wrong() {
    for (let i = 0; i < 5; i++ ) {
        simbolos[i].innerText = symbols[j][i];
    }
    if (!perguntas[j][6]) {
        resp++;
        perguntas[j][6] = true;
    }
}

function refresh() {
    location.reload();
}

function appear() {
    let image = document.querySelector("#img");
    let dica = document.querySelector("#img h2");
    let photo = document.querySelector("#photo");
    photo.style.filter = "blur(0)";
    dica.style.opacity = "0%";
    image.style.cursor = "pointer"

}

function hide() {
    let image = document.querySelector("#img");
    let photo = document.querySelector("#photo");
    let dica = document.querySelector("#img h2");
    photo.style.filter = "blur(20px)";
    dica.style.opacity = "100%";
    image.style.cursor = "pointer"
}
