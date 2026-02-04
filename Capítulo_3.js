// Chapter 3: Digging to the Roots of JS

// [...]"This chapter should begin to answer some of the "Why?" questions that may be cropping up as you explore JS. However, this material is still not an exhaustive exposition of the language; that's what the rest of the book series is for!"[...]

// Iteration

/* "The iterator pattern defines a data structure called an 'iterator' that has a reference to an underlying data source (like the query result rows), which exposes a method like next(). Calling next() returns the next piece of data (i.e., a 'record' or 'row' from a database query)."

"You don't always know how many pieces of data that you will need to iterate through, so the pattern typically indicates completion by some special value or exception once you iterate through the entire set and go past the end."

"The protocol defines a next() method whose return is an object called an iterator result; the object has value and done properties, where done is a boolean that is false until the iteration over the underlying data source is complete.
#" */

// Consuming Iterators

// /* for...of é uma das estruturas iteráveis. [Já estudei isso, aqui vai mais rápido]

// One such mechanism is the for..of loop:

// given an iterator of some data source:*/

    // var it = /* .. */;

    // loop over its results one at a time
    for (let val of it) {
        console.log(`Iterator value: ${ val }`);
    }
    // Iterator value: ..
    // Iterator value: ..
    // ..


// Aqui ele falou do operador '...' (que pode ser 'spread' ou 'rest'), que já estudei mais afundo em outro momento, então como a explicação foi mais superficial aqui, vou deixar passar.

// Iterables

// "The iterator-consumption protocol is technically defined for consuming iterables; an iterable is a value that can be iterated over."

// The protocol automatically creates an iterator instance from an iterable, and consumes just that iterator instance to its completion. This means a single iterable could be consumed more than once; each time, a new iterator instance would be created and used.

// A cada consumo do iterador, uma nova instância de iterador é criada.

// "ES6 defined the basic data structure/collection types in JS as iterables. This includes strings, arrays, maps, sets, and others."

// Deu um exemplo de array, um de shallow-copy com spread.

// Since arrays are iterables, we can shallow-copy an array using iterator consumption via the ... spread operator:

    var arrCopy = [ ...arr ]; // Vai copiar mudar a referência externa, mas manter as interiores (se objetos/arrays).

/* "A Map data structure uses objects as keys, associating a value (of any type) with that object. Maps have a different default iteration than seen here, in that the iteration is not just over the map's values but instead its entries. An entry is a tuple (2-element array) including both a key and a value.

Consider:

// given two DOM elements, `btn1` and `btn2` */

    var buttonNames = new Map();
    buttonNames.set(btn1, "Button 1");
    buttonNames.set(btn2, "Button 2");

    for (let [btn, btnName] of buttonNames) {
        btn.addEventListener("click", function onClick() {
            console.log(`Clicked ${btnName}`);
        });
    }

// In the for..of loop over the default map iteration, we use the [btn,btnName] syntax (called 'array destructuring') to break down each consumed tuple into the respective key/value pairs (btn1 / 'Button 1' and btn2 / 'Button 2')."

// "Each of the built-in iterables in JS expose a default iteration, one which likely matches your intuition. But you can also choose a more specific iteration if necessary. For example, if we want to consume only the values of the above buttonNames map, we can call values() to get a values-only iterator:

    for (let btnName of buttonNames.values()) {
        console.log(btnName);
    }
    // Button 1
    // Button 2

// Or if we want the index and value in an array iteration, we can make an entries iterator with the entries() method:"

    var arr = [ 10, 20, 30 ];

    for (let [idx,val] of arr.entries()) {
        console.log(`[${ idx }]: ${ val }`);
    }
    // [0]: 10
    // [1]: 20
    // [2]: 30

// Na maioria dos casos, todos os iteráveis ​​nativos do JavaScript possuem três formas de iterador disponíveis: somente chaves (keys()), somente valores (values()) e entradas (entries()). [Traduzido via Google Tradutor]

// "Beyond just using built-in iterables, you can also ensure your own data structures adhere to the iteration protocol; doing so means you opt into the ability to consume your data with for..of loops and the ... operator. 'Standardizing' on this protocol means code that is overall more readily recognizable and readable."

// "[...] an iterator is just an iterable of itself! When creating an iterator instance from an existing iterator, the iterator itself is returned."

// Closure

// "We need to be able to recognize where closure is used in programs, as the presence or lack of closure is sometimes the cause of bugs (or even the cause of performance issues)."

/* "So let's define closure in a pragmatic and concrete way:

     Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope."*/

// "We see two definitional characteristics here. First, closure is part of the nature of a function. Objects don't get closures, functions do. Second, to observe a closure, you must execute a function in a different scope than where that function was originally defined.

// Consider:

    function greeting(msg) {
        return function who(name) {
            console.log(`${msg}, ${name}!`);
        };
    }

    var hello = greeting("Hello"); // Criada uma instância da função interior (who) com msg = "Hello".
    var howdy = greeting("Howdy"); // Criada uma nova instância da função interior (who) com msg = "Howdy".

    hello("Kyle");
    // Hello, Kyle!

    hello("Sarah");
    // Hello, Sarah!

    howdy("Grant");
    // Howdy, Grant!

// First, the greeting(..) outer function is executed, creating an instance of the inner function who(..); that function closes over the variable msg, which is the parameter from the outer scope of greeting(..). When that inner function is returned, its reference is assigned to the hello variable in the outer scope. Then we call greeting(..) a second time, creating a new inner function instance, with a new closure over a new msg, and return that reference to be assigned to howdy."

// "When the greeting(..) function finishes running, normally we would expect all of its variables to be garbage collected (removed from memory). We'd expect each msg to go away, but they don't. The reason is closure. Since the inner function instances are still alive (assigned to hello and howdy, respectively), their closures are still preserving the msg variables.

// These closures are not a snapshot of the msg variable's value; they are a direct link and preservation of the variable itself. That means closure can actually observe (or make!) updates to these variables over time.

    function counter(step = 1) {
        var count = 0;
        return function increaseCount() {
            count = count + step;
            return count;
        };
    }

    var incBy1 = counter(1); // Uma instância
    var incBy3 = counter(3); // Outra instância. Cada uma com seus valores de 'count' e 'step'.

    incBy1();       // 1
    incBy1();       // 2

    incBy3();       // 3
    incBy3();       // 6
    incBy3();       // 9

// Each instance of the inner increaseCount() function is closed over both the count and step variables from its outer counter(..) function's scope. step remains the same over time, but count is updated on each invocation of that inner function. Since closure is over the variables and not just snapshots of the values, these updates are preserved."

// "Closure is most common when working with asynchronous code, such as with callbacks. Consider:

    function getSomeData(url) {
        ajax(url, function onResponse(resp) {
            console.log(
                `Response (from ${url}): ${resp}`
            );
        });
    }

getSomeData("https://some.url/wherever");
// Response (from https://some.url/wherever): ...

// The inner function onResponse(..) is closed over url, and thus preserves and remembers it until the Ajax call returns and executes onResponse(..). Even though getSomeData(..) finishes right away, the url parameter variable is kept alive in the closure for as long as needed."

// Não é necessário que o escopo externo seja uma função — geralmente é, mas nem sempre — basta que haja pelo menos uma variável em um escopo externo acessada a partir de uma função interna: [Traduzido via Google Tradutor]

    for (let [idx,btn] of buttons.entries()) {
        btn.addEventListener("click",function onClick(){
        console.log(`Clicked on button (${ idx })!`);
        });
    }

// O for (let [idx, btn] of buttons.entries()) percorre os botões.
// idx é o índice
// btn é o botão em si
// Para cada botão, você adiciona um addEventListener.
// A função onClick usa idx, que foi criada fora dela.
    // 👉 Isso é um closure.

// Mesmo depois do for terminar, cada função “lembra” do seu próprio idx.

// O let é crucial:

    // ele cria um idx novo a cada iteração
    // se fosse var, todos os cliques mostrariam o mesmo índice (o último).

// Resumo: a função interna acessa uma variável do escopo externo → isso é closure, e o let garante que funcione do jeito certo.

//-----------

//     idx não é o botão, é só o número
//     btn é o botão, o objeto DOM

// E o addEventListener fica no valor porque:

//     quem reage a clique é o elemento DOM
//     o índice é só um número, não “escuta” eventos

// Resumo seco:

//     chave/índice = referência lógica
//     valor = objeto real (botão)
//     evento só faz sentido no objeto real

//------------------------

// "Because this loop is using let declarations, each iteration gets new block-scoped (aka, local) idx and btn variables; the loop also creates a new inner onClick(..) function each time. That inner function closes over idx, preserving it for as long as the click handler is set on the btn. So when each button is clicked, its handler can print its associated index value, because the handler remembers its respective idx variable."

// o idx fica preservado até:

    // o botão ser removido do DOM e
    // o event listener ser removido (removeEventListener) ou
    // a página ser descarregada (refresh, navegação)

// Quando não houver mais nenhuma referência à função:

    // o garbage collector pode liberar a função
    // junto com ela, o closure
    // e o idx some

//-----

/* "Remember: this closure is not over the value (like 1 or 3), but over the variable idx itself.

Closure is one of the most prevalent and important programming patterns in any language. But that's especially true of JS; it's hard to imagine doing anything useful without leveraging closure in one way or another.

If you're still feeling unclear or shaky about closure, the majority of Book 2, Scope & Closures is focused on the topic." */

// 'this' Keyword
