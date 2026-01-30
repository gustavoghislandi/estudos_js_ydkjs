// @ts-nocheck

// === (igualdade estrita)

    // Testa identidade sem coerção.
    // Primitivos → mesmo tipo e mesmo valor
    // Objetos → mesma referência (mesma instância)

//---------

// O triple-equals costuma checar 'valor' e 'tipo'. Por tal motivo, ele é considerado mais estrito.

// Porém, PARA OBJETOS, ele FAZ UMA CHECAGEM DE REFERÊNCIA e não de valor. [Lembre também que ARRAYS são objetos em JS]

// Por isso que dará falso nessas comparações:

    [ 1, 2, 3 ] === [ 1, 2, 3 ];    // false
    // { a: 42 } === { a: 42 };         // false
    (x => x * 2) === (x => x * 2);   // false

// Considere:

    var x = [ 1, 2, 3 ];

    // A atribuição é feita por cópia por referência, então
    // y referencia o mesmo array que x,
    // não outra cópia dele.

    var y = x; // Y referência O MESMO array(objeto) que x

    y === x;              // true
    y === [ 1, 2, 3 ];    // false
    x === [ 1, 2, 3 ];    // false

//---------

// Aqui é tipo e valor, tudo tranquilo:


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

//---------

// Mas para NaN e -0 já muda:

    NaN === NaN;            // false
    0 === -0;               // true

// Para esses dois casos use:

    Number.isNan()

    // e para o -0, use

    Object.is() // Este também pode ser usado para checar NaN.

    // É como se o  Object.is(...) fosse o "quadruple-equals" ====, o que realmente faz uma comparação estrita.

//---------

// O JavaScript não fornece um mecanismo para comparação de igualdade estrutural de valores de objetos, apenas comparação de identidade de referência. Para realizar a comparação de igualdade estrutural, você precisará implementar as verificações por conta própria. [Traduzido via Google Tradutor]

/*
But beware, it's more complicated than you'll assume. 

For example, how might you determine if two function references are "structurally equivalent"? Even stringifying to compare their source code text wouldn't take into account things like closure. 

JS doesn't provide structural equality comparison because it's almost intractable to handle all the corner cases!
*/