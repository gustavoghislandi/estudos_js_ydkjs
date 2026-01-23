// strict_mode.js

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
// "use strict";

// 2) Dentro de uma função (aplica só nela):
function teste() {
  "use strict";
  let y = 10;
}

// O strict mode é uma regra do JS ao rodar (no navegador ou Node),
// não da IDE. A IDE só mostra aviso porque entende a regra.
