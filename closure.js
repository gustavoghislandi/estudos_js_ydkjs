// Meu entendimento e definição:

    // "Closure é a função que fecha dentro dela mesma as variáveis e funções do escopo onde nasceu, preservando apenas o que ela usa desse escopo.” 

    // (O verbo “fechar” (to close) vem do conceito em inglês: “a function closes over the variables it uses from the surrounding scope”. Ou seja, ela "captura" dentro dela, ela "closes over", e por isso o nome "closure", fecha (closes) dentro de si o escopo onde foi criada - claro que só o escopo que ela usa, o resto o Garbage Collector recolhe.)

//------------------------------------------------------------------------------------------


// Um closure só mantém estado persistente se 'a função que fecha sobre o escopo externo' (a 'função interna') for acessível fora desse escopo — normalmente retornando-a.

// Quando a função é declarada, ela guarda uma referência às variáveis do escopo externo.

// Quando ela é executada depois, mesmo em outro lugar do código, esse escopo ainda está acessível.

// Isso é o que chamamos de closure. Exemplo:

    function externa() {
        let contador = 0;

        function interna() {
            contador++;
            return contador;
        }

        return interna;
    }

    const fn = externa();

    fn(); // 1
    fn(); // 2


    // A função interna:

        // Foi definida dentro de externa
        // Continua acessando contador
        // Mesmo depois de externa já ter terminado de executar

    // Isso só funciona porque interna fechou sobre o escopo de externa.

// Closure é quando uma função mantém acesso às variáveis do escopo léxico em que foi definida, mesmo quando é executada fora desse escopo.

//-----
// Quem “salvou” o valor não foi exatamente a função interna sozinha, e sim o closure formado entre a função interna + o escopo externo.

// Pensando passo a passo

    // A variável (contador) pertence ao escopo da função externa
    // A função interna mantém uma referência a esse escopo (porque está acessando a variável, fazendo uso dela)
    // Enquanto a função interna existir, o escopo externo não é destruído
    // Por isso o valor continua lá, “vivo”

// Então:

    // ❌ Não é uma cópia do valor
    // ❌ Não é a função interna guardando um número numa caixinha
    // ✅ É o ambiente de execução sendo preservado porque alguém ainda precisa dele

//--------------------------

// Closures permitem criar variáveis privadas, porque elas só podem ser acessadas pelas funções que fecharam sobre aquele escopo.

// Exemplo direto:

    function criaContador() {
        let contador = 0; // 👈 variável "privada"

        return function () {
            contador++;
            return contador;
        };
    }

    const c = criaContador();

    c(); // 1
    c(); // 2
    // c.contador ❌ inacessível


// 🔹 contador:

    // Não é global
    // Não é acessível de fora
    // Só existe dentro do closure

// Mas atenção ao detalhe importante ⚠️

    // Closure não foi criado só para privacidade.

// Ele também serve para:

    // Manter estado entre chamadas
    // Criar funções especializadas
    // Implementar fábricas de funções
    // Evitar variáveis globais

// Frase redonda pra prova / entrevista

// Closures permitem encapsular estado e criar variáveis privadas ao preservar o escopo léxico da função.

//--------------------------

// IMPORTANTE PRA ENTENDER:
    // A 'função interna' SAIR do 'escopo de função' da 'função externa' é o que faz com que o estado permaneça, porque ela leva junto com ela o 'escopo léxico'.

    // Por isso, retornar a 'função interna' é crucial se você quer que o closure sobreviva depois que a 'função externa' termina.

        // Sem retornar: a função interna é chamada apenas dentro da externa; o escopo léxico só existe durante a execução. Depois que a externa termina, tudo some.

        // Retornando a interna: você permite que a função saia do escopo da externa, levando consigo o escopo léxico. É isso que mantém o estado “vivo” entre chamadas.

// Resumindo em uma linha de ouro:

    // Um closure só mantém estado persistente se 'a função que fecha sobre o escopo externo' (a 'função interna') for acessível fora desse escopo — normalmente retornando-a.

// Exemplo mais visível:

// 1️⃣ Só criar a função interna (sem retornar)

    function externa() {
        let contador = 0;

        function interna() {
            contador++;
            console.log(contador);
        }

        interna(); // chama aqui mesmo
    }

    externa(); // 1
    externa(); // 1 de novo


    // Aqui:

        // interna ainda acessa contador (closure existe durante a execução)
        // Mas não podemos usar contador depois, porque a função interna não saiu de externa
        // Cada chamada de externa() cria um novo contador

// 2️⃣ Retornando a função interna

    function externa() {
        let contador = 0;

        return function interna() {
            contador++;
            console.log(contador);
        };
    }

    const cont = externa();

    cont(); // 1
    cont(); // 2


// Aqui:

    // interna sai de externa e mantém referência ao contador
    // O closure sobrevive entre chamadas
    // Permite criar variáveis privadas que persistem

// Resumindo:

    // Não retornar: closure existe só durante a execução
    // Retornar: closure sobrevive e pode ser usado fora do escopo original

//-----------------------------------------------------------------------------

// Closure também preserva funções, não somente variáveis.

// Exemplo:

    function externa() {
        let x = 10;

        function interna() {
            return x + outra();
        }

        function outra() {
            return 5;
        }

        return interna;
    }

    const func = externa();
    console.log(func()); // 15

// Aqui:

    // 'interna' acessa x e a função outra
    // O closure preserva tanto a variável x quanto a função outra
    // Mesmo depois que externa terminou, func() consegue usar ambos

// Em outras palavras:

    // Não são só variáveis simples (números, strings, objetos) que o closure preserva — funções também fazem parte do escopo e são preservadas se forem usadas pela função interna.

// Por que isso acontece?

    // Tudo que pertence ao escopo léxico usado pela função interna é mantido.
    // Isso inclui outras funções, PORQUE FUNÇÕES EM JS SÃO "OBJETOS DE PRIMEIRA CLASSE", OU SEJA, PODEM SER ATRIBUÍDAS, PASSADAS E CHAMADAS.
    // O Garbage Collector não limpa nada que ainda é acessível pelo closure, seja variável ou função.


