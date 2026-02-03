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