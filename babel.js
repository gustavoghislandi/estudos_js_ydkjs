// Babel serve para retrocompatibilidade (transpila) e compatibilidade futura (polyfill).

// Babel transpila código JS mais recente para rodar em um motor mais antigo.

// Um exemplo é converter variáveis let em var únicas. E para deixá-las únicas ele usa o símbolo $ no nome da variável.

// "Transpilers like Babel typically detect which polyfills your code needs and provide them automatically for you. But occasionally you may need to include/define them explicitly".

//---

// Babel serve para compatibilidade passada e futura, mas com papéis diferentes:

// Transpilar (retrocompatibilidade): Babel converte sintaxe moderna (ES6+) para sintaxe mais antiga → funciona em browsers antigos.

// Polyfill (funcionalidade futura): Babel não polyfilla sozinho; ele precisa de polyfills (ex: core-js) para adicionar APIs que o browser não tem.

// Resumo: "Babel = sintaxe, polyfill = APIs". Juntos, cobrem quase toda compatibilidade.