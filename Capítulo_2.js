// @ts-nocheck

// A melhor maneira de aprender JS é começar a escrever JS.

// Para fazer isso, você precisa saber como a linguagem funciona. O que será o foco aqui.

// Mesmo já tendo programado com outras linguagens, tenha certeza de praticar cada parte.

// Neste capítulo não terá todas as sintaxes de JS, nem será uma cartilha de introdução ao JS.

// Será sobre as principais áreas temáticas.

// É para você "sentir" o JS e se sentir confiante.

// "Take your time."

//CADA ARQUIVO É UM PROGRAMA

// É tentador pensar que a aplicação inteira é um programa. Mas com JS é diferente. Cada arquivo .js é um programa em separado.

// Isso importa principalmente por causa do tratamento de erros.

// "The reason this matters is primarily around error handling. Since JS treats files as programs, one file may fail (during parse/compile or execution) and that will not necessarily prevent the next file from being processed. Obviously, if your application depends on five .js files, and one of them fails, the overall application will probably only partially operate, at best. It's important to ensure that each file works properly, and that to whatever extent possible, they handle failure in other files as gracefully as possible."

// Da perspectiva de uso de uma aplicação, parece um grande programa. Isso porque a execução da aplicação permite esses programas cooperarem e agirem como um único programa.

// "NOTE: Many projects use build process tools that end up combining separate files from the project into a single file to be delivered to a web page. When this happens, JS treats this single combined file as the entire program."

// "The only way multiple standalone .js files act as a single program is by sharing their state (and access to their public functionality) via the "global scope." They mix together in this global scope namespace, so at runtime they act as as whole."

/*Mesmo sendo arquivos (programas) diferentes, eles usam o mesmo escopo global quando são carregados juntos.
Por isso, variáveis e funções globais de um arquivo podem ser usadas pelos outros. [ChatGPT]*/

// Desde o ES6, JS também oferece suporte a um formato de módulo, além do típico formato de programa JS autônomo.

// Módulos também são baseados em arquivos.

// If a file is loaded via module-loading mechanism such as an import statement or a <script type=module> tag, all its code is treated as a single module.

// Mesmo em módulo, JS ainda trata cada módulo (arquivo) como um programa em separado.

// Semelhante a como o "escopo global" permite que arquivos independentes se misturem em tempo de execução, importar um módulo para outro permite a interoperação em tempo de execução entre eles. [Traduzido via Google Tradutor]

// Independentemente de qual padrão de organização de código (e mecanismo de carregamento) é usado para um arquivo (autônomo ou módulo), você ainda deve pensar em cada arquivo como seu próprio (mini) programa, que pode então cooperar com outros (mini) programas para executar as funções de seu aplicativo geral. [Traduzido via Google Tradutor]

// VALORES

// A unidade de informaçã mais fundamental de um programa é um valor. Valores são dados. Eles são como um programa mantém estados.

// Em JS, valores vêm em duas formas: 
    // primitivos
    // objetos.

// Os valores são incorporados nos programas usando literais:

    greeting("My name is Kyle.");

// Nesse programa, o valor "Meu nome é Kyle." é uma string literal primitiva.

// Strings são cadeias ordenadas de caracteres.

// Poderia ter sido usado aspas simples ou duplas. O importante é escolher uma forma e manter a legibilidade e facilidade de manutenção, usando-a consistentemente.

// Aqui o autor falou da interpolação, que usa crase...

// A menos que você precise de interpolação, não use! Reserve a crase só para quando for usar interpolação [Isso não é por desempenho, é só por padronização que ele está falando]

// Falou de booleanos, e while, dando um exemplo assim:

    while (false) {
    console.log(3.141592);
}

// Esse loop nunca vai rodar, porque o valor é falso. Mas se fosse verdadeiro, entraria em loop infinito, então cuidado!

// Ele informou sobre o pi, que é preferível usar o valor predefinido de 

    Math.PI // 3.141592653589793

// Que eu printei e deu esse número de casas aí acima (15 casas depois da vírgula).

// Another variation on numbers is the 

//     bigint (big-integer) 
    
// primitive type, which is used for storing arbitrarily large numbers.

// Falou um pouco de arrays...

//"In addition to strings, numbers, and booleans, two other primitive values in JS programs are null and undefined. While there are differences between them (some historic and some contemporary), for the most part both values serve the purpose of indicating emptiness (or absence) of a value."

//"However, it's safest and best to use only undefined as the single empty value, even though null seems attractive in that it's shorter to type!"

// Basicamente, sinalizou preferência de uso de undefined sobre null.

/*
The final primitive value to be aware of is a symbol, which is a special-purpose value that behaves as a hidden unguessable value. Symbols are almost exclusively used as special keys on objects:*/

    hitchhikersGuide[ Symbol("meaning of life") ];
    // 42

/*You won't encounter direct usage of symbols very often in typical JS programs. They're mostly used in low-level code such as in libraries and frameworks.
*/

// Arrays e Objetos

// Arrays são um tipo especial de objeto
// composto por uma lista ordenada e indexada numericamente de dados.

// Em JavaScript, os Arrays podem armazenar qualquer tipo de valor, seja primitivo ou objeto (incluindo outros Arrays), inclusive funções.

// NOTA: Em JS, funções também são um tipo especial de objeto.

// Objetos são mais gerais: uma coleção não ordenada e indexada por chaves de vários valores. Em outras palavras, você acessa o elemento por um nome de localização em formato de string (também conhecido como "chave" ou "propriedade") em vez de sua posição numérica (como em arrays). [Traduzido via Google Tradutor]

// Objeto é uma coleção de valores, 
// organizados em pares chave-valor.

/*
Observações rápidas:

    As chaves são strings ou symbols
    Os valores podem ser qualquer tipo (inclusive funções e outros objetos)
*/

// sOutra opção de sintaxe que acessa informações em um objeto por sua propriedade/chave usa colchetes [ ], como em obj["propriedade1"].

// Determinação do Tipo de Valor (typeof)

// "For distinguishing values, the typeof operator tells you its built-in type, if primitive, or "object" otherwise:"

    typeof 42;                  // "number"
    typeof "abc";               // "string"
    typeof true;                // "boolean"
    typeof undefined;           // "undefined"
    typeof null;                // "object" -- oops, bug!
    typeof { "a": 1 };          // "object"
    typeof [1,2,3];             // "object"
    typeof function hello(){};  // "function"

// "WARNING:
    // 'typeof null' unfortunately returns 'object' instead of the expected 'null'. Also, 'typeof' returns the specific 'function' for functions, but not the expected 'array' for arrays."

// Converter um tipo para outro é chamado de 'coerção', em JS.


// Valores primitivos e valores de objetos se comportam de maneira diferente quando são atribuídos ou passados ​​como argumentos. [Traduzido via Google Tradutor]


// Declarando e Usando Variáveis

// Valores podem aparecer de forma literal ou em variáveis.

// Falou de var, let... e agora const, que tem que receber um valor quando é declarada e não pode ter o valor alterado [é de referência, por que objetos podem ser alterados].

// O autor não recomenda usar const pra objetos porque:

    const actors = [
        "Morgan Freeman", "Jennifer Aniston"
    ];

    actors[2] = "Tom Cruise";   // OK :(
    actors = [];                // Error!

    // Se fosse let (ou var) actors receberia o novo valor.

// É engraçado isso, porque em React, a recomendação é justamente usar const para os objetos.

// Do ponto de vista do autor:
    //Se você usar 'const' apenas com valores primitivos, evita qualquer confusão entre reatribuição (não permitida) e mutação (permitida)! Essa é a maneira mais segura e recomendada de usar 'const'.

//-----

    function hello(myName) {
        console.log(`Hello, ${ myName }.`);
    }

    hello("Kyle");
    // Hello, Kyle.

// "The identifier hello is created in the outer scope, and it's also automatically associated so that it references the function. But the named parameter myName is created only inside the function, and thus is only accessible inside that function's scope. hello and myName generally behave as var-declared."

//---

// "Another syntax that declares a variable is a catch clause:"

    try {
        someError();
    }
    catch (err) {
        console.log(err);
    }

// "The 'err' is a block-scoped variable that exists only inside the catch clause, as if it had been declared with let."

// Funções

// The word "function" has a variety of meanings in programming. For example, in the world of Functional Programming, "function" has a precise mathematical definition and implies a strict set of rules to abide by.

// In JS, we should consider "function" to take the broader meaning of another related term: "procedure." A procedure is a collection of statements that can be invoked one or more times, may be provided some inputs, and may give back one or more outputs. [De maneira diferente, eu aprendi que procedimentos não retornam nada, já funções retornam um valor. ChatGPT disse que eu aprendi a definição clássica (correta conceitualmente).]

// Em JS toda function sempre retorna algo, nem que seja undefined.

//---

    function awesomeFunction(coolThings) {
        // ..
        return amazingStuff;
    }

// "This is called a function declaration because it appears as a statement by itself, not as an expression in another statement. The association between the identifier 'awesomeFunction' and the function value happens during the compile phase of the code, before that code is executed."

// O nome 'awesomeFunction' é ligado à função antes do código rodar (fase de compilação).
// Por isso ela pode ser chamada antes de aparecer no arquivo.
// Isso é o famoso hoisting de funções.

// "JS functions are a special type of the object value type. Not all languages treat functions as values, but it's essential for a language to support the functional programming pattern, as JS does."

// Parâmetros agem como variáveis locais dentro da função.

// "You can only return a single value, but if you have more values to return, you can wrap them up into a single object/array."

// "Since functions are values, they can be assigned as properties on objects:"

    var whatToSay = {
        greeting() {
            console.log("Hello!");
        },
        question() {
            console.log("What's your name?");
        },
        answer() {
            console.log("My name is Kyle.");
        }
    };

    whatToSay.greeting();
    // Hello!

// Comparações

//Equality and Equivalence

    // The "triple-equals" === operator, also described as the "strict equality" operator. Or... not exactly.

    3 === 3.0;              // true
    "yes" === "yes";        // true
    null === null;          // true
    false === false;        // true

    42 === "42";            // false
    "hello" === "Hello";    // false
    true === 1;             // false
    0 === null;             // false
    "" === null;            // false
    null === undefined;     // false


// Another way ==='s equality comparison is often described is, "checking both the value and the type".

// Igualdade tripla checa tanto 'valor' quanto 'tipo'.

// Mas, em verdade 

// "All value comparisons in JS consider the type of the values being compared, not just the === operator. Specifically, === disallows any sort of type conversion (aka, "coercion") in its comparison, where other JS comparisons do allow coercion."

// Ou seja, TODAS as comparações em JS checam tipo. A diferença é que na tripla a'COERÇÃO' é desabilitada. Enquanto nas outras comparações elas são habilitadas.

// O operador === foi projetado para "mentir" em dois valores especiais: 'NaN' e '-0'. Considere:

    NaN === NaN;            // false
    0 === -0;               // true

/*In the case of NaN, the === operator lies and says that an occurrence of NaN is not equal to another NaN. In the case of -0 (yes, this is a real, distinct value you can use intentionally in your programs!), the === operator lies and says it's equal to the regular 0 value.*/

// Para esses dois casos use:

    Number.isNan()

    // e para o -0, use

    Object.is() // Este também pode ser usado para checar NaN.

    // Ambos não "mentem"

// É como se o  Object.is(...) fosse o "quadruple-equals" ====, "the really-really-strict comparison!"


/* "There are deeper historical and technical reasons for these lies, but that doesn't change the fact that === is not actually strictly exactly equal comparison, in the strictest sense.

The story gets even more complicated when we consider comparisons of object values (non-primitives). Consider:"
*/

    [ 1, 2, 3 ] === [ 1, 2, 3 ];    // false
    // { a: 42 } === { a: 42 };         // false
    (x => x * 2) === (x => x * 2);   // false

/* "What's going on here?

It may seem reasonable to assume that an equality check considers the nature or contents of the value; after all, 42 === 42 considers the actual 42 value and compares it. But when it comes to objects, a content-aware comparison is generally referred to as "structural equality."

JS does not define === as structural equality for object values. Instead, === uses identity equality for object values."*/

// JS não define === como igualdade estrutural, mas como como igualdade de identidade. 
// Ou seja, PARA OBJETOS, o === checa IGUALDADE DE REFERÊNCIA. Eles têm que ser a mesma instância na memória.

// Em JavaScript, todos os valores de objetos são mantidos por referência (veja "Valores vs. Referências" no Apêndice A),
// são atribuídos e passados ​​por cópia de referência e,
// para a nossa discussão atual, são comparados por igualdade de referência (identidade). [Traduzido via Google Tradutor]
// Considere:

    var x = [ 1, 2, 3 ];

    // A atribuição é feita por cópia por referência, então
    // y referencia o *mesmo* array que x,
    // não outra cópia dele.
    var y = x;

    y === x;              // true
    y === [ 1, 2, 3 ];    // false
    x === [ 1, 2, 3 ];    // false

/*
"In this snippet, y === x is true because both variables hold a reference to the same initial array. But the === [1,2,3] comparisons both fail because y and x, respectively, are being compared to new different arrays [1,2,3]. The array structure and contents don't matter in this comparison, only the reference identity"
*/

// O JavaScript não fornece um mecanismo para comparação de igualdade estrutural de valores de objetos, apenas comparação de identidade de referência. Para realizar a comparação de igualdade estrutural, você precisará implementar as verificações por conta própria. [Traduzido via Google Tradutor]

/*
But beware, it's more complicated than you'll assume. 

For example, how might you determine if two function references are "structurally equivalent"? Even stringifying to compare their source code text wouldn't take into account things like closure. 

JS doesn't provide structural equality comparison because it's almost intractable to handle all the corner cases!
*/

// Comparações Coercitivas (Será mais discutivo mais no capítulo 4 e não é algo opcional a ser evitado. É um dos pilares do JS)

/* 
    Coerção significa a conversão de
    um valor com um tipo
    para sua respectiva representação em outro tipo (na medida do possível). 
    
    [Traduzido - troquei 'de' por 'com']
*/

/*
"But where coercion meets comparison operators (like equality), confusion and frustration unfortunately crop up more often than not.

Few JS features draw more ire in the broader JS community than the == operator, generally referred to as the "loose equality" operator. The majority of all writing and public discourse on JS condemns this operator as poorly designed and dangerous/bug-ridden when used in JS programs. Even the creator of the language himself, Brendan Eich, has lamented how it was designed as a big mistake.

From what I can tell, most of this frustration comes from a pretty short list of confusing corner cases, 

but a deeper problem is the extremely widespread misconception that it performs its comparisons without considering the types of its compared values."*/

/*
"The == operator performs an equality comparison similarly to how the === performs it. In fact, both operators consider the type of the values being compared. And if the comparison is between the same value type, both == and === do exactly the same thing, no difference whatsoever."*/

// Ou seja, ambos == e === checam tipos, então se for para comparar tipos, dá na mesma.

//ATENÇÃO AQUI
/*
"Se valores comparados forem de tipos diferentes,
 o operador == difere do operador === por permitir a coerção antes da comparação.
 Em outras palavras, ambos comparam valores de tipos iguais,
 mas o operador == permite conversões de tipo primeiro
 e, uma vez que os tipos tenham sido convertidos para serem iguais em ambos os lados, o operador == faz o mesmo que o operador ===.
 
 Em vez de "igualdade flexível", o operador == deveria ser descrito como "igualdade coercitiva".[Traduzido]*/

    42 == "42";             // true
    1 == true;              // true

// Em ambos os casos, há, inicialmente, tipos diferentes.
// Então, o operador == converte ambos para número, para depois fazer a comparação.
// Ou seja "42" do tipo string vira 42 do tipo number; e true do tipo boolean vira 1 do tipo number.

// O operador == prefere comparações númericas primitivas.

// "Just being aware of this nature of == — that it prefers primitive numeric comparisons — helps you avoid most of the troublesome corner cases, such as staying away from a gotchas like 

    "" == 0     // [ true. Porque converte "" para númerico 0 e depois compara]

// or 

    0 == false  // [ true. Porque converte false para númerico 0 e depois compara]

// "

// FIQUE ATENTO
// Operadores como <, >, <= e >= usam coerção da mesma forma que ==.

/*
Consider:*/

    var arr = [ "1", "10", "100", "1000" ];
    for (let i = 0; i < arr.length && arr[i] < 500; i++) {
        // will run 3 times
    }

/*
The i < arr.length comparison is "safe" from coercion because i and arr.length are always numbers. The arr[i] < 500 invokes coercion, though, because the arr[i] values are all strings. Those comparisons thus become 1 < 500, 10 < 500, 100 < 500, and 1000 < 500. Since that fourth one is false, the loop stops after its third iteration.*/

// These relational operators typically use numeric comparisons, except in the case where both values being compared are already strings; in this case, they use alphabetical (dictionary-like) comparison of the strings:

    var x = "10";
    var y = "9";

    x < y;      // true, watch out!

// Ou seja, esses operadores preferem comparações numéricas, EXCETO QUANDO AMBOS FOREM STRING, nesses casos será uma COMPARAÇÃO ALFABÉTICA ("a" sendo "menor" que "b"...)

/*"Não há como fazer com que esses operadores relacionais evitem a coerção, a não ser nunca usar tipos incompatíveis nas comparações. Isso talvez seja admirável como objetivo, mas ainda é bem provável que você encontre um caso em que os tipos sejam diferentes.

A abordagem mais sensata não é evitar comparações coercitivas, mas sim aceitá-las e aprender seus detalhes.

Comparações coercitivas aparecem em outros lugares em JavaScript, como em condicionais (if, etc.), que revisitaremos no Apêndice A, 'Comparação Condicional Coercitiva'.[Traduzido via Google Tradutor]*/

/*
Bem curto, mas no fundo da coisa:

=== (igualdade estrita)

    Testa identidade sem coerção.
    Primitivos → mesmo tipo e mesmo valor
    Objetos → mesma referência (mesma instância)

== (igualdade abstrata)

    Testa equivalência após coerção.
    Ele tenta transformar os operandos até ficarem do mesmo tipo, seguindo regras formais (ToPrimitive, ToNumber, etc.), e só então compara.
*/

// How We Organize in JS

// Dois padrões principais para organizar código (dados e comportamento) são amplamente usados em JavaScript: classes e módulos.

// Ser proficiente em JS significa compreender quando ambos esses padrões são apropriados (e quando não).

// Classes

/*
A class in a program is a definition of a "type" of custom data structure that includes both data and behaviors that operate on that data.
Classes define how such a data structure works, but classes are not themselves concrete values. 
To get a concrete value that you can use in the program, a class must be instantiated (with the new keyword) one or more times.
*/

    class Page {
        constructor(text) {
            this.text = text;
        }

        print() {
            console.log(this.text);
        }
    }

    class Notebook {
        constructor() {
            this.pages = [];
        }

        addPage(text) {
            var page = new Page(text);
            this.pages.push(page);
        }

        print() {
            for (let page of this.pages) {
                page.print();
            }
        }
    }

    var mathNotes = new Notebook();
    mathNotes.addPage("Arithmetic: + - * / ...");
    mathNotes.addPage("Trigonometry: sin cos tan ...");

    mathNotes.print();

// "Behavior (methods) can only be called on instances (not the classes themselves), such as mathNotes.addPage(..) and page.print()." [Não se o método for 'static', aí a classe pode usar o método]

// "The same program could have been built without any class definitions, but it would likely have been much less organized, harder to read and reason about, and more susceptible to bugs and subpar maintenance."

// Class Inheritance (Herança de Classes)

// "Another aspect inherent to traditional 'class-oriented' design, though a bit less commonly used in JS, is 'inheritance' (and 'polymorphism'). Consider:"

class Publication {
    constructor(title,author,pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`
            Title: ${ this.title }
            By: ${ this.author }
            ${ this.pubDate }
        `);
    }
}

// "This Publication class defines a set of common behavior that any publication might need."

// "Now let's consider more specific types of publication, like Book and BlogPost:"

class Book extends Publication {
    constructor(bookDetails) {
        super(
            bookDetails.title,
            bookDetails.author,
            bookDetails.publishedOn
        );
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }

    print() {
        super.print();
        console.log(`
            Publisher: ${ this.publisher }
            ISBN: ${ this.ISBN }
        `);
    }
}

class BlogPost extends Publication {
    constructor(title,author,pubDate,URL) {
        super(title,author,pubDate);
        this.URL = URL;
    }

    print() {
        super.print();
        console.log(this.URL);
    }
}

// "Both Book and BlogPost use the extends clause to extend the general definition of Publication to include additional behavior. The super(..) call in each constructor delegates to the parent Publication class's constructor for its initialization work, and then they do more specific things according to their respective publication type (aka, 'sub-class' or 'child class')."

// "Now consider using these child classes:"

var YDKJS = new Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789"
});

YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly
// ISBN: 123456-789

var forAgainstLet = new BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let

// "Notice that both child class instances have a print() method, which was an override of the inherited print() method from the parent Publication class. Each of those overridden child class print() methods call super.print() to invoke the inherited version of the print() method."

// "The fact that both the inherited and overridden methods can have the same name and co-exist is called POLYMORPHISM."

// "Inheritance is a powerful tool for organizing data/behavior in separate logical units (classes), but allowing the child class to cooperate with the parent by accessing/using its behavior and data."

// Módulos

// "The module pattern has essentially the same goal as the class pattern, which is to group data and behavior together into logical units. Also like classes, modules can "include" or "access" the data and behaviors of other modules, for cooperation sake."

// "But modules have some important differences from classes. Most notably, the syntax is entirely different."

// Classic Modules

// "ES6 added a module syntax form to native JS syntax, which we'll look at in a moment. But from the early days of JS, modules was an important and common pattern that was leveraged in countless JS programs, even without a dedicated syntax."

// "The key hallmarks of a classic module are an outer function (that runs at least once), which returns an 'instance' of the module with one or more functions exposed that can operate on the module instance's internal (hidden) data."

// "Because a module of this form is just a function, and calling it produces an 'instance' of the module, another description for these functions is 'MODULE FACTORIES'."

// "Consider the classic module form of the earlier Publication, Book, and BlogPost classes:"

    function Publication(title, author, pubDate) {
        var publicAPI = {
            print() {
                console.log(`
                    Title: ${title}
                    By: ${author}
                    ${pubDate}
                `);
            }
        };

        return publicAPI;
    }

    function Book(bookDetails) {
        var pub = Publication(
            bookDetails.title,
            bookDetails.author,
            bookDetails.publishedOn
        );

        var publicAPI = {
            print() {
                pub.print();
                console.log(`
                    Publisher: ${bookDetails.publisher}
                    ISBN: ${bookDetails.ISBN}
                `);
            }
        };

        return publicAPI;
    }

    function BlogPost(title, author, pubDate, URL) {
        var pub = Publication(title, author, pubDate);

        var publicAPI = {
            print() {
                pub.print();
                console.log(URL);
            }
        };

        return publicAPI;
    }

// "Comparing these forms to the class forms, there are more similarities than differences."

/* A forma de classe armazena métodos e dados em uma instância de objeto, que deve ser acessada com o prefixo 'this.'. 
Com módulos, os métodos e dados são acessados ​​como variáveis ​​identificadoras no escopo, sem nenhum prefixo 'this.'.

Com classes, a "API" de uma instância é implícita na definição da classe — além disso, todos os dados e métodos são públicos. Com a função de fábrica do módulo, você cria e retorna explicitamente um objeto com quaisquer métodos expostos publicamente, e quaisquer dados ou outros métodos não referenciados permanecem privados dentro da função de fábrica.

[Traduzido via Google Tradutor] */

// Em outras palavras:

// Com classes, tudo que você define com 'this' é público. Para criar algo privado, precisa de truques (como #privateField ou closures).

// Com factory modules, qualquer variável ou função dentro da função que não for retornada fica automaticamente privada, acessível apenas pelos métodos expostos.

// Um exemplo com os campos privados em cada caso:

// --- Classe com private ---
class SecretClass {
    #privateCount = 0;    // campo privado nativo
    publicCount = 0;      // público

    increment() {
        this.publicCount++;
        this.#privateCount++;      // usamos o privado aqui
        console.log(
            `public: ${this.publicCount}, private: ${this.#privateCount}`
        );
    }
}

const sc = new SecretClass();
sc.increment(); // public: 1, private: 1
sc.increment(); // public: 2, private: 2
// console.log(sc.#privateCount); // ❌ erro, não acessível fora

// --- Factory Module ---
function SecretModule() {
    let privateCount = 0;   // privado
    let publicCount = 0;    // só porque retornamos, vira público
    return {
        increment() {
            publicCount++;
            privateCount++;    // usamos o privado aqui
            console.log(
                `public: ${publicCount}, private: ${privateCount}`
            );
        }
    };
}

const sm = SecretModule();
sm.increment(); // public: 1, private: 1
sm.increment(); // public: 2, private: 2
// console.log(sm.privateCount); // undefined → privado


// Resumo da diferença no privado:

    // Classe: precisa de # ou closures para privado; campos 'this'. são públicos.

    // Factory: qualquer variável não retornada fica privada automaticamente.

//------- feito com ChatGPT

// Aqui não vai focar em explicar sobre as propriedades privadas, mas sobre a questão de ser objeto que chama o método e precisar ou não de 'this'.

// Vamos resumir isso com um mini-comparativo:

// --- Classe ---
class CounterClass {
    constructor() {
        this.count = 0;       // "this" guarda o estado na instância
    }
    increment() {
        this.count++;          // "this" acessa o estado
        console.log(this.count);
    }
}

const c1 = new CounterClass();
c1.increment(); // 1
c1.increment(); // 2

// --- Módulo ---
function CounterModule() {
    let count = 0;            // variável no escopo do módulo
    return {
        increment() {
            count++;           // acessa a variável diretamente
            console.log(count);
        }
    };
}

const m1 = CounterModule();
m1.increment(); // 1
m1.increment(); // 2


// ✅ Diferença chave:

// Classe → this.count → precisa da instância (new) para guardar estado.

// Módulo → count → variável fechada no escopo do módulo (closure), não usa this.

    // Ah, porque o this é o objeto. Ele que usa o método. É isso? Já no factorie module não existe objeto, então é uma variável(método que vai encadear outro). É isso?

        // “O this é o objeto. Ele que usa o método.” → Sim.

            // Em classes, cada instância é um objeto e this aponta para ele, permitindo acessar/alterar o estado.

        // “Já no factory module não existe objeto, então é uma variável (método que vai encadear outro).” → Quase certo.

            // O factory retorna um objeto literal com métodos, mas o estado real fica em variáveis fechadas na closure, não em this.

        // Demonstração do literal do factory:

            const m1 = CounterModule();
            console.log(m1);

            /* Saída (literal do objeto retornado):
            {
                increment: function() { ... }   // só o método exposto
            }
            */

        // ✅ Resumo  diferença:

            // Classe → this.count → estado dentro do objeto/instância.
            // Factory → let count → estado fechado na closure, objeto só expõe métodos.

//------- fim do feito com ChatGPT

/* "There are other variations to this factory function form that are quite common across JS, even in 2020; you may run across these forms in different JS programs: AMD (Asynchronous Module Definition), UMD (Universal Module Definition), and CommonJS (classic Node.js-style modules). The variations are minor (not quite compatible). However, all of these forms rely on the same basic principles.

Consider also the usage (aka, "instantiation") of these module factory functions:"
*/

var YDKJS = Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789"
});

YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly
// ISBN: 123456-789

var forAgainstLet = BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let

/* "The only observable difference here is the lack of using new, calling the module factories as normal functions."*/

// ES Modules (ESM - ECMAScript Modules)

/* "Primeiro, não existe uma função de encapsulamento para definir um módulo. O contexto de encapsulamento é um arquivo. Os ESMs são sempre baseados em arquivos; um arquivo, um módulo.

Segundo, você não interage explicitamente com a 'API' de um módulo, mas sim usa a palavra-chave 'export' para adicionar uma variável ou método à sua definição de API pública. Se algo for definido em um módulo, mas não exportado, permanecerá oculto (assim como nos módulos clássicos).

Terceiro, e talvez a diferença mais notável em relação aos padrões discutidos anteriormente, você não 'instancia' um módulo ES, você apenas o importa para usar sua única instância.

Os ESMs são, na prática, 'singletons', pois existe apenas uma instância criada na primeira importação em seu programa, e todas as outras importações recebem apenas uma referência a essa mesma instância.

Se o seu módulo precisar suportar múltiplas instanciações, você terá que fornecer uma função de fábrica no estilo clássico de módulos em sua definição de ESM para essa finalidade.

" [Traduzido via Google Tradutor]
*/

// Perceba que:

// "existe apenas uma instância criada na primeira importação em seu programa"

// Ou seja

    // A instância surge com o 'import'.

    // O módulo só é executado uma vez, na primeira importação; o 'export' apenas disponibiliza referências aos valores já criados.

    // O 'export' não cria instância, só compartilha a que foi criada quando o módulo rodou na primeira importação.

// "In our running example, we do assume multiple-instantiation, so these following snippets will mix both ESM and classic modules."

// "Consider the file publication.js:"

    function printDetails(title, author, pubDate) {
        console.log(`
            Title: ${title}
            By: ${author}
            ${pubDate}
        `);
    }

    export function create(title, author, pubDate) {
        var publicAPI = { // objeto com métodos
            print() { // método do objeto
                printDetails(title, author, pubDate); // usa os dados "privados" da função create
            }
        };

        return publicAPI; // retorna o objeto com os métodos que podem ser chamados externamente (tornando-o, portanto, público)
        // ex.: let pub = create(...); pub.print();
}

// "To import and use this module, from another ES module like blogpost.js:"

    import { create as createPub } from "publication.js";

    function printDetails(pub, URL) {
        pub.print();
        console.log(URL);
    }

    export function create(title, author, pubDate, URL) {
        var pub = createPub(title, author, pubDate);

        var publicAPI = {
            print() {
                printDetails(pub, URL);
            }
        };

        return publicAPI;
    }

// "And finally, to use this module, we import into another ES module like main.js:"

    import { create as newBlogPost } from "blogpost.js";

    var forAgainstLet = newBlogPost(
        "For and against let",
        "Kyle Simpson",
        "October 27, 2014",
        "https://davidwalsh.name/for-and-against-let"
    );

    forAgainstLet.print();
    // Title: For and against let
    // By: Kyle Simpson
    // October 27, 2014
    // https://davidwalsh.name/for-and-against-let


// Se você precisa de várias instâncias de um módulo, use uma factory (função create) ou um módulo clássico interno.

// Se só precisa de uma instância única, pode exportar os métodos diretamente do ES module, sem criar factories ou classes.