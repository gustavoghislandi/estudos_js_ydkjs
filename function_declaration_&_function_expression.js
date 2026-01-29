// Function declaration

    // 👉 declara uma função como uma instrução completa da linguagem

        function foo() {}


// Function expression

    // 👉 a função é apenas um valor dentro de uma expressão maior

        const foo = function() {}

// Por que essa é expression?

// Porque o que manda na linha é a atribuição (const foo = ...).

// A função não “se apresenta sozinha”.
// Ela é só um valor que está sendo atribuído a uma variável.

// Regra mental simples 🧠

    // Se a linha começa com function → function declaration

    // Se function aparece depois de =, (, return, etc. → function expression

// Exemplos de function expression:

    const a = function() {}
    setTimeout(function() {}, 1000)
    return function() {}


// Todas são funções, mas nenhuma declara — só produzem um valor função.

//--

    const foo = function bar() {}

    // Ainda é function expression.
    // O bar só existe dentro da própria função.

// Em uma frase final

    // Function declaration declara.
    // Function expression produz um valor.

//-----------

// Isso significa que não é armazenado o valor?

// Ah, aí precisamos diferenciar como a função é tratada na memória e como ela é associada a um nome. Vamos com calma:

// 1️⃣ Function Declaration

        function foo() {}

    // O que acontece: 
        // Durante a fase de compilação, o JavaScript cria o valor da função e já associa ao nome 'foo'.

    // Resultado: 'foo' já “aponta” para a função antes de qualquer linha de código ser executada.

    // Hoisting: Você pode chamar foo() antes mesmo dela aparecer no arquivo.

    // Ou seja, o valor da função está armazenado na memória e ligado ao nome automaticamente.

// 2️⃣ Function Expression

        const bar1 = function() {};

    // O que acontece:
        // Primeiro, o JS declara a variável bar (fase de compilação), mas não coloca o valor da função ainda.
        // O valor da função só é criado quando a linha de código é executada.

    // Consequência:

    bar(); // ❌ erro: bar ainda é undefined
    const bar = function() {};

    // Você não pode usar antes, porque o valor ainda não foi atribuído.

// ✅ Resumindo

    // Declaration: o valor da função é criado e ligado ao nome antes da execução → hoisting.

    // Expression: o valor da função só existe na hora da execução da linha → sem hoisting completo.

    // Então, mesmo na declaration, o valor da função é armazenado, só que o JS faz isso automaticamente no momento da compilação.

//-----------

// Function Declaration = substantivo

    // Ela existe sozinha, nome + valor já prontos.

    // Ex.: function foo() {} → “o objeto foo já está pronto antes de você usar.”

// Function Expression = verbo

    // Ela faz algo dentro de outra coisa, só ganha valor quando a linha roda.

    // Ex.: const foo = function() {} → “só cria a função quando chega nessa linha.”

// 💡 Substantivo declara, verbo produz.
