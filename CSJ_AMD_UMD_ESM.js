/* 
==========================
Módulos JS: CJS, AMD, UMD, ESM
==========================
Super resumo:

    // Negócio é usar só 'import' e 'export' mesmo.

Resumo rápido:
- CommonJS (CJS): usado no Node.js antigo, síncrono, usa require/module.exports.
- AMD: usado em browsers antigos, assíncrono, define/require (ex.: RequireJS).
- UMD: Universal, compatível com Node e browser, detecta ambiente.
- ESM: padrão moderno, import/export, singleton por padrão.
Cada módulo tem sua sintaxe e comportamento. Para projetos novos, prefira ESM.
*/

/* ==========================
1️⃣ CommonJS (CJS) – Node.js
========================== */
// math.js
function add(a, b) { return a + b; }
module.exports = { add };

// main.js
const math = require('./math');
console.log(math.add(2,3)); // 5

/* ==========================
2️⃣ AMD – Browser (RequireJS)
========================== */
define([], function() {
    return {
        add: (a,b) => a+b
    };
});

require(['math'], function(math){
    console.log(math.add(2,3)); // 5
});

/* ==========================
3️⃣ UMD – Universal (Node + Browser)
========================== */
(function(root, factory){
    if(typeof define === 'function' && define.amd) {
        define([], factory); // AMD
    } else if(typeof module === 'object' && module.exports) {
        module.exports = factory(); // CommonJS
    } else {
        root.math = factory(); // Browser global
    }
}(this, function(){
    return { add: (a,b) => a+b };
}));

// Uso: funciona em Node, AMD ou browser
console.log(typeof module !== 'undefined' ? module.exports.add(2,3) : math.add(2,3));

/* ==========================
4️⃣ ES Module (ESM) – moderno
========================== */
// math.js
export function add(a,b){ return a+b; }

// main.js
import { add } from './math.js';
console.log(add(2,3)); // 5

/* ==========================
Dica prática:
- Node moderno / browser moderno → ESM
- Node antigo → CJS
- Browser antigo → AMD
- Biblioteca universal → UMD
*/

//------------

// Hoje, para qualquer projeto novo — Node moderno, navegador moderno ou biblioteca atual — o jeito é usar ES Modules, ou seja, import e export.

    // É o padrão oficial do JavaScript.
    // Funciona nativamente em browsers modernos e no Node.js atual.
    // Singleton por padrão, mas você pode criar múltiplas instâncias com factory functions ou classes dentro do módulo.
    // Nada mais de require ou module.exports, nem AMD/UMD complicando.

//-------------------------------------------------------

// Negócio é usar só 'import' e 'export' mesmo.