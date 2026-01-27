// strict_mode.js

// Serve para melhor desempenho, é código escrito da maneira que "deveria" ser escrito.

// Abaixo você verá as formas de ativação, que são no início do arquivo ou por escopo de função. Nunca os dois no mesmo arquivo!

// Todo código transpilado já vai pro modo estrito. Então, transpilar o código já torna a execução do código mais eficiente.

// Versão ChatGPT:

// O strict mode é um modo do JavaScript que torna o código mais rígido,
// evitando práticas perigosas e lançando erros quando algo está errado.
// Ele não é igual ao TypeScript: não adiciona tipagem nem corrige nada automaticamente.
// Ele apenas impede comportamentos ruins e exige correção manual.

// Exemplo sem strict mode:
x = 10; // cria uma variável global sem aviso
console.log(x); // 10

// Exemplo com strict mode:
"use strict";
x = 10; // Erro: x is not defined

// Correção correta no strict mode:
"use strict";
let x = 10; // ok

// Onde usar:
// 1) No topo do arquivo (aplica no arquivo inteiro):
  "use strict";

// 2) Dentro de uma função (aplica só nela):
function teste() {
  "use strict";
  let y = 10;
}

// O strict mode é uma regra do JS ao rodar (no navegador ou Node),
// não da IDE. A IDE só mostra aviso porque entende a regra.

// Versão com partes do livro:

// Maneira de entrar no modo estrito:

/*

"Strict mode is switched on per file with a special pragma (nothing allowed before it except comments/whitespace):"*/

    // only whitespace and comments are allowed
    // before the use-strict pragma
    "use strict";
    // the rest of the file runs in strict mode

/*"WARNING:
Something to be aware of is that even a stray ; all by itself appearing before the strict mode pragma will render the pragma useless; no errors are thrown because it's valid JS to have a string literal expression in a statement position, but it also will silently not turn on strict mode!"*/

// Também é possível colocar o modo estrito em escopo de função:

/*Strict mode can alternatively be turned on per-function scope, with exactly the same rules about its surroundings:*/

function someOperations() {
    // whitespace and comments are fine here
    "use strict";

    // all this code will run in strict mode
}


/*"Interestingly, if a file has strict mode turned on, the function-level strict mode pragmas are disallowed. So you have to pick one or the other."*/

// Ou seja, você precisa escolher um modo estrito no arquivo ou no escopo de função.