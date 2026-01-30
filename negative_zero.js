/*
=====================================================
NEGATIVE ZERO (-0) NO JAVASCRIPT — GUIA DEFINITIVO
=====================================================

JS usa IEEE-754 (double precision).
Nesse padrão existem DOIS zeros:
  +0  e  -0

Eles são matematicamente iguais,
mas carregam sinal internamente.

Isso preserva informação em cálculos contínuos,
limites e operações numéricas sensíveis.
*/

/* --------------------------------------------------
1) COMPARAÇÃO: IGUAIS, MAS NÃO IGUAIS
-------------------------------------------------- */

0 === -0;               // true (comparação comum)
Object.is(0, -0);       // false (comparação precisa)

Object.is(NaN, NaN);    // true (outro detalhe do Object.is)

/* --------------------------------------------------
2) COMO O -0 ENTREGA A SI MESMO
-------------------------------------------------- */

1 / 0;    // Infinity
1 / -0;   // -Infinity  <-- diferença observável

/* --------------------------------------------------
3) COMO O -0 É GERADO
-------------------------------------------------- */

-1 * 0;               // -0
Math.atan2(-0, 1);    // -0
Math.sign(-0);        // -0 (sim, sério)
0 * -1;               // -0

/* --------------------------------------------------
4) DETECTANDO -0
-------------------------------------------------- */

// Forma correta
function isNegativeZero(x) {
  return Object.is(x, -0);
}

// Forma matemática
function isNegativeZeroAlt(x) {
  return x === 0 && 1 / x === -Infinity;
}

/* --------------------------------------------------
5) NORMALIZANDO (ELIMINANDO -0)
-------------------------------------------------- */

// Forma simples (recomendada)
function normalizeZero(x) {
  return x === 0 ? 0 : x;
}

// Forma explícita
function normalizeZeroStrict(x) {
  return Object.is(x, -0) ? 0 : x;
}

/* --------------------------------------------------
6) Math.sign É PEGADINHA
-------------------------------------------------- */

Math.sign(0);    // 0
Math.sign(-0);   // -0  <-- quase ninguém espera isso

// Normalização segura
function safeSign(x) {
  const s = Math.sign(x);
  return Object.is(s, -0) ? 0 : s;
}

/* --------------------------------------------------
7) BUGS REAIS / POTENCIAIS NO REACT
-------------------------------------------------- */

/*
BUG 1 — useEffect não dispara como esperado
-------------------------------------------
React usa Object.is para comparar dependências.
*/

const value = -0;
// depois vira +0

// React vê mudança:
Object.is(-0, 0); // false

/*
Resultado:
- useEffect dispara
- re-render inesperado
- estado "igual" visualmente, mas diferente internamente
*/

/*
BUG 2 — keys em listas
---------------------
*/

const items = [-0, 0];

items.map(x => ({
  key: x, // keys diferentes internamente!
}));

/*
Pode causar:
- remount desnecessário
- perda de estado em componentes
*/

/*
BUG 3 — memo / useMemo / useCallback
------------------------------------
*/

Object.is(-0, 0); // false

/*
Resultado:
- cache quebrado
- recomputações inesperadas
*/

/*
BUG 4 — CSS-in-JS / styled-components
-------------------------------------
*/

const translateX = -0;

/*
Pode gerar:
transform: translateX(-0px);
Que pode quebrar comparação de strings ou snapshots.
*/

/* --------------------------------------------------
8) BOAS PRÁTICAS NO REACT
-------------------------------------------------- */

// Sempre normalize antes de:
//
// - setState
// - dependências de hooks
// - keys
// - props numéricas críticas

function safeStateSetter(x) {
  return normalizeZero(x);
}

/* --------------------------------------------------
9) KATAS (EXERCÍCIOS)
-------------------------------------------------- */

/*
KATA 1 — Detector
Implemente isNegativeZero sem Object.is
*/

function kata1(x) {
  return x === 0 && 1 / x === -Infinity;
}

/*
KATA 2 — Normalizador de Arrays
Remova -0 de qualquer array numérico
*/

function kata2(arr) {
  return arr.map(n => (n === 0 ? 0 : n));
}

/*
KATA 3 — Comparação Segura
Compare números tratando +0 e -0 como iguais
*/

function kata3(a, b) {
  if (a === 0 && b === 0) return true;
  return Object.is(a, b);
}

/*
KATA 4 — Hook Safe (conceitual)
Sempre normalize dependências numéricas
*/

// useEffect(() => {}, [normalizeZero(value)]);

/*
KATA 5 — Sanitizador Universal
Remove -0 recursivamente de objetos
*/

function sanitize(obj) {
  if (typeof obj === 'number') {
    return normalizeZero(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map(sanitize);
  }
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, sanitize(v)])
    );
  }
  return obj;
}

/* --------------------------------------------------
10) RESUMO FINAL (EM UMA FRASE)
--------------------------------------------------

-0 existe por causa do IEEE-754
JS respeita isso
Object.is revela a diferença
React usa Object.is
Normalize sempre que números viram estado, props ou keys

Fim. Sem medo do -0 😎
*/
