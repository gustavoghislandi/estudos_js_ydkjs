// JS só usa escopo léxico.

// Escopo léxico (estático)

// 👉 Depende de onde a função foi definida.

// Exemplo:

    let x = 10;

    function foo() {
        console.log(x);
    }

    function bar() {
        let x = 20;
        foo();
    }

    bar(); // 10


    // foo foi definida no escopo onde x = 10.
    // Mesmo sendo chamada dentro de bar, ela ignora o x = 20.

// Escopo por chamada (dinâmico)

// 👉 Dependeria de onde a função é chamada.

// Exemplo (hipotético em JS):

    let y = 10;

    function foo() {
        console.log(y);
    }

    function bar() {
        let y = 20;
        foo();
    }

    bar(); // 20 (se fosse escopo dinâmico)


// Aqui foo pegaria o y do lugar de onde foi chamada (bar).

// ⚠️ JavaScript NÃO funciona assim — isso é só para comparação.
// Algumas linguagens antigas ou específicas usam escopo dinâmico.

// Resumo em uma frase

    // Escopo léxico: olha para onde a função nasceu
    // Escopo dinâmico: olharia para onde a função foi chamada