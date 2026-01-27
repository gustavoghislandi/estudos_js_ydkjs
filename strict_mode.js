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

// ================================
// RESUMO SOBRE STRICT MODE EM JS / REACT / REACT NATIVE
// ================================

// 1️⃣ "use strict" do JavaScript
// - É um modo estrito da engine JS que ativa erros para práticas inseguras e melhora otimizações.
// - Deve ser colocado no topo de um arquivo ou função: "use strict";
// - Funções normais em strict mode têm 'this = undefined' se chamadas sem contexto.
// - ES modules (import/export) já rodam em strict mode automaticamente.

// 2️⃣ React / React Native
// - O React possui também <React.StrictMode>, mas isso é diferente!
//     • <React.StrictMode> ativa apenas checagens de desenvolvimento do React.
//     • Não afeta desempenho ou regras do JS.
// - A transpilação via Babel / Metro geralmente insere "use strict" em módulos automaticamente.
// - Portanto, em projetos modernos, o código JS já roda em strict mode sem precisar escrever manualmente.

// 3️⃣ Teste rápido de strict mode
// - Podemos verificar assim:
function isStrictMode() {
  return (function () { return !this; })(); // retorna true se strict mode ativo
}

// 4️⃣ Como garantir strict mode
// - Colocando "use strict"; no topo do arquivo de entrada (index.js, App.js)
// - Em React Native, cada arquivo é tratado como módulo, então strict mode já é aplicado quase sempre.
// - <React.StrictMode> não substitui "use strict"; serve apenas para alertas de desenvolvimento do React.

// 5️⃣ Resumo rápido:
// - "use strict" = JS engine strict mode, afeta execução, previne erros silenciosos.
// - <React.StrictMode> = checagens de React, desenvolvimento apenas.
// - ES modules já estão em strict mode por padrão.
// - Babel/Metro geralmente já adicionam "use strict" nos arquivos transpilados.
// ================================
