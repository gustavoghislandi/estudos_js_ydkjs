// 1. Statement (instrução)
// É uma unidade completa de execução.
// O programa executa um statement como um passo.

    // Exemplos:
    x = 10;
    if (x > 5) {
        printf("maior");
    }
    return x;

// 👉 Normalmente termina com `;` (em linguagens como C, Java, JS).
// 👉 Controla o fluxo ou realiza uma ação.

// Tradução mais comum: instrução.

// --------------------------------------------------

// 2. Expression (expressão)
// É algo que produz um valor.

    // Exemplos:
    x + 2
    x > 5
    funcao(3)

// 👉 Pode ser usada dentro de um statement.
// 👉 Nem sempre é executável sozinha.

// Exemplo:
x = x + 2;   // `x + 2` é uma expression

// Tradução: expressão.

// --------------------------------------------------

// 3. Declaration (declaração)
// Serve para introduzir algo novo no programa: variável, função, tipo etc.

    // // Exemplos:
    // int x;
    // int soma(int a, int b);
    // class Pessoa {}

// 👉 Diz o que existe, não o que acontece.

// Tradução: declaração.

// --------------------------------------------------

    // // Comparando tudo
    // int x = 5;

    // - `int x` → declaration
    // - `5` → expression
    // - `int x = 5;` → statement (em muitas linguagens)

// --------------------------------------------------

// Dica importante
    // Em algumas linguagens (como Python), a diferença entre statement e expression é bem mais rígida.
    // Já em JavaScript, quase tudo vira expressão 😅

// Se quiser, me diz qual linguagem você está estudando que eu explico com exemplos bem específicos dela.

//------------------------------------------------------------------

// Versão adaptada para JavaScript

// --------------------------------------------------
// 1. Statement (instrução)
// É uma unidade completa de execução.
// O JavaScript executa um statement como um passo.

    // Exemplos:
    let x = 10;

    if (x > 5) {
        console.log("maior");
    }

    x++;

// 👉 Normalmente termina com `;` (opcional em JS, mas comum).
// 👉 Controla o fluxo ou realiza uma ação.

// Tradução mais comum: instrução.

// --------------------------------------------------
// 2. Expression (expressão)
// É algo que produz um valor.

    // Exemplos:
    x + 2
    x > 5
    Math.max(3, 7)
    x = 20

// 👉 Pode ser usada dentro de um statement.
// 👉 Em JavaScript, muitas coisas que parecem statement também são expression.

    // Exemplo:
    let y = x + 2;   // `x + 2` é uma expression

    // 👉 Em JS, até atribuição é expression:
    let z = (x = 30);

// Tradução: expressão.

// --------------------------------------------------
// 3. Declaration (declaração)
// Serve para introduzir algo novo no programa: variável, função, classe etc.

    // Exemplos:
    let a;
    const b = 10;

    function soma(n1, n2) {
        return n1 + n2;
    }

    class Pessoa {
        constructor(nome) {
            this.nome = nome;
        }
    }

// 👉 Diz o que existe no programa.
// 👉 Não descreve diretamente uma ação.

// Tradução: declaração.

// --------------------------------------------------
// Comparando tudo em JavaScript

    let numero = 5;

// - `let numero` → declaration
// - `5` → expression
// - `let numero = 5;` → statement

// --------------------------------------------------
// Dica importante

// JAVASCRIPT É UMA LINGUAGEM EXPRESSION-ORIENTED. 
// Por isso, muitas construções retornam valor.

    // Exemplo clássico:
    let resultado2 = (x > 10) ? "maior" : "menor";

// 👉 O operador ternário é uma expression.
// 👉 Ele retorna um valor e pode ser usado em atribuições.

// --------------------------------------------------
// Resumo mental rápido

// statement → algo que o JS executa
// expression → algo que o JS avalia e retorna valor
// declaration → algo que o JS registra no escopo

//----------------------------------------------------------

// Pegadinhas de entrevista em JavaScript
// Foco: statement vs expression, coerção e comportamento inesperado

// --------------------------------------------------
// 1. `if` NÃO é uma expression em JavaScript
// Você não pode usar `if` onde um valor é esperado.

// ❌ Isso dá erro de sintaxe:
// let resultado = if (x > 10) { "maior" } else { "menor" };

// ✅ O jeito correto é usar o operador ternário:
let t = 15;
let resultado = t > 10 ? "maior" : "menor";

// 👉 Em entrevistas, isso testa se você sabe que `if` é statement,
// 👉 enquanto o ternário é expression.

// --------------------------------------------------
// 2. Atribuição é expression (e retorna valor)

let c;
let d;

c = d = 10;

// 👉 `d = 10` retorna 10
// 👉 `c = 10` recebe esse valor
// 👉 Isso costuma confundir quem vem de linguagens mais rígidas

// --------------------------------------------------
// 3. `const` não torna o valor imutável

const obj = { nome: "Ana" };
obj.nome = "Maria";

// 👉 Isso funciona
// 👉 `const` impede reatribuição, não mutação

// ❌ Isso sim dá erro:
// obj = { nome: "João" };

// --------------------------------------------------
// 4. `==` vs `===` (clássica, mas sempre cai)

0 == false      // true
0 === false     // false

"" == false     // true
"" === false    // false

null == undefined   // true
null === undefined  // false

// 👉 `==` faz coerção de tipo
// 👉 `===` compara valor E tipo
// 👉 Resposta esperada em entrevista: "use ==="

// --------------------------------------------------
// 5. `typeof null`

typeof null     // "object"

// 👉 Bug histórico da linguagem
// 👉 Pergunta comum pra ver se você realmente conhece JS

// --------------------------------------------------
// 6. Funções são objetos

function teste() {}
teste.x = 10;

// 👉 Funções podem ter propriedades
// 👉 Em JS, funções são objetos de primeira classe

// --------------------------------------------------
// 7. Hoisting com `var`

console.log(valor); // undefined
var valor = 10;

// 👉 A declaração sobe (hoisting)
// 👉 A atribuição não

// ❌ Com `let` e `const`, isso daria erro

// --------------------------------------------------
// 8. Temporal Dead Zone (TDZ)

{
    // console.log(tdz); // ReferenceError
    let tdz = 5;
}

// 👉 `let` e `const` existem antes da declaração,
// 👉 mas não podem ser acessadas (TDZ)

// --------------------------------------------------
// 9. Arrow function vs function normal

const pessoa = {
    nome: "Carlos",
    falar: function () {
        return this.nome;
    },
    falarArrow: () => {
        return this.nome;
    }
};

pessoa.falar();       // "Carlos"
pessoa.falarArrow();  // undefined (ou window.nome)

// 👉 Arrow function NÃO tem seu próprio `this`

// --------------------------------------------------
// 10. Tudo que não é falsy é truthy

if ("0") {
    // entra aqui
}

if ([]) {
    // entra aqui
}

if ({}) {
    // entra aqui
}

// 👉 falsy: false, 0, "", null, undefined, NaN
// 👉 o resto é truthy

// --------------------------------------------------
// 11. `delete` retorna boolean

const user = { nome: "Ana" };
delete user.nome;   // true

// 👉 `delete` é uma expression
// 👉 retorna true ou false

// --------------------------------------------------
// 12. `forEach` NÃO retorna array

const nums = [1, 2, 3];

const r1 = nums.forEach(n => n * 2); // undefined
const r2 = nums.map(n => n * 2);     // [2, 4, 6]

// 👉 forEach é statement-like (efeito colateral)
// 👉 map é expression (retorna valor)

// --------------------------------------------------
// Resumo de ouro pra entrevista
// if / for / while → statements
// ternário / map / atribuição → expressions
// declaration cria nomes no escopo
