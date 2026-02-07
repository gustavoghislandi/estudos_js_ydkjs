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

// One of JS's most powerful mechanisms is also one of its most misunderstood: the 'this' keyword. One common misconception is that a function's 'this' refers to the function itself. Because of how 'this' works in other languages, another misconception is that 'this' points the instance that a method belongs to. Both are incorrect.

// As discussed previously, when a function is defined, it is attached to its enclosing scope via closure. 
// Scope is the set of rules that controls how references to variables are resolved.

// But functions also have another characteristic besides their scope that influences what they can access. This characteristic is best described as an EXECUTION CONTEXT, and it's exposed to the function via its this keyword.

// Scope is static and contains a fixed set of variables available at the moment and location you define a function, but a function's execution context is dynamic, entirely dependent on HOW IT IS CALLED(regardless of where it is defined or even called from).

// this is not a fixed characteristic of a function based on the function's definition, but rather a dynamic characteristic that's determined each time the function is called.

// 'this' IS A DYNAMIC CHARACTERISTIC THAT'S DETERMINED EACH TIME THE FUNCTION IS CALLED.

// One way to think about the execution context is that it's a tangible object whose properties are made available to a function while it executes. 

    // Compare that to scope, which can also be thought of as an object; except, the scope object is hidden inside the JS engine, it's always the same for that function, and its properties take the form of identifier variables available inside the function.

    function classroom(teacher) {
        return function study() {
            console.log(
                `${teacher} says to study ${this.topic}`
            );
        };
    }
    var assignment = classroom("Kyle");

// The outer classroom(..) function makes no reference to a this keyword, so it's just like any other function we've seen so far. But the inner study() function does reference this, which makes it a this-aware function. In other words, it's a function that is dependent on its execution context.

    // NOTE: study() is also closed over the teacher variable from its outer scope.

// The inner study() function returned by classroom("Kyle") is assigned to a variable called assignment. So how can assignment() (aka study() ) be called?

    assignment();
    // Kyle says to study undefined  -- Oops :(

    // In this snippet, we call assignment() as a plain, normal function, without providing it any execution context.

    // Since this program is not in strict mode (see Chapter 1, "Strictly Speaking"), context-aware functions that are called without any context specified default the context to the global object (window in the browser). 
    // As there is no global variable named 'topic' (and thus no such property on the global object), 'this.topic' resolves to undefined.

// Now consider:

    var homework = {
        topic: "JS",
        assignment: assignment
    };

    homework.assignment();
    // Kyle says to study JS

// A copy of the assignment function reference is set as a property on the homework object, and then it's called as homework.assignment(). That means the this for that function call will be the homework object. Hence, this.topic resolves to "JS".

// Ou seja, agora assignment() tem um CONTEXTO DE EXECUÇÃO.

// Lastly:

    var otherHomework = {
        topic: "Math"
    };

    assignment.call(otherHomework);
    // Kyle says to study Math

// A third way to invoke a function is with the call(..) method, which takes an object (otherHomework here) to use for setting the this reference for the function call. The property reference this.topic resolves to "Math".

// The same context-aware function invoked three different ways, gives different answers each time for what object this will reference.

// The benefit of this-aware functions—and their dynamic context—is the ability to more flexibly re-use a single function with data from different objects.

// A function that closes over a scope can never reference a different scope or set of variables.

// But a function that has dynamic this context awareness can be quite helpful for certain tasks.

// Uma função que fecha um escopo nunca pode referenciar um escopo ou conjunto de variáveis ​​diferente.

// Mas uma função que reconhece o contexto dinâmico 'this' pode ser bastante útil para certas tarefas.

// Prototypes

// Enquanto isso é uma característica da execução de uma função, um protótipo é uma característica de um objeto, e especificamente da resolução do acesso a uma propriedade. [Traduzido via Google Tradutor]

// Think about a prototype as a linkage between two objects; the linkage is hidden behind the scenes, though there are ways to expose and observe it. This prototype linkage occurs when an object is created; it's linked to another object that already exists. [Muito bom]

// A series of objects linked together via prototypes is called the "prototype chain."

// The purpose of this prototype linkage (i.e., from an object B to another object A) is so that accesses against B for properties/methods that B does not have, are delegated to A to handle. [Efeito bem semelhate a herança por classes]

// Delegation of property/method access allows two (or more!) objects to cooperate with each other to perform a task.

// Consider defining an object as a normal literal:

    var homework = {
        topic: "JS"
    };

// The homework object only has a single property on it: topic. However, its default prototype linkage connects to the 'Object.prototype' object, which has common built-in methods on it like 'toString()' and 'valueOf()', among others.

// We can observe this prototype linkage delegation from homework to Object.prototype:

    homework.toString();    // [object Object]

// homework.toString() works even though homework doesn't have a toString() method defined; the delegation invokes Object.prototype.toString() instead.

// Object Linkage

// "To define an object prototype linkage, you can create the object using the Object.create(..) utility:

    var homework = {
        topic: "JS"
    };

    var otherHomework = Object.create(homework);

    otherHomework.topic;   // "JS"

// The first argument to Object.create(..) specifies an object to link the newly created object to, and then returns the newly created (and linked!) object."


// Se você criar no objeto uma propriedade de nome igual a uma propriedade que esteja no protótipo, ela sofrerá algo parecido com um override. Ou seja, vale a propriedade do objeto acima da do protótipo. Porém, o nome dado a esse comportamento é shadowing.

    homework.topic;
    // "JS"

    otherHomework.topic;
    // "JS"

    otherHomework.topic = "Math";
    otherHomework.topic;
    // "Math"

    homework.topic;
    // "JS" -- not "Math"

// É mais correto pensar em shadowing (sombreamento), não override.

// "The topic on otherHomework is 'shadowing' the property of the same name on the homework object in the chain."


// Em JS, quando você acessa uma propriedade:

    otherHomework.topic

    // O motor faz isso:

        // Procura topic no próprio objeto (otherHomework)
        // Se não achar, sobe na cadeia de protótipos
        // Para na primeira ocorrência

// Por que NÃO é override?

//     Override implica:

//         Substituir comportamento herdado
//         Normalmente envolve classes
//         Geralmente afeta chamadas polimórficas

//     Em JS com protótipos:

//         Você não substitui
//         Você oculta
//         O lookup apenas para antes de chegar no protótipo

// "NOTE:
// Another frankly more convoluted but perhaps still more common way of creating an object with a prototype linkage is using the "prototypal class" pattern, from before class (see Chapter 2, "Classes") was added in ES6. We'll cover this topic in more detail in Appendix A, "Prototypal 'Classes'"."

// 'this' Revisited

// "We covered the this keyword earlier, but its true importance shines when considering how it powers prototype-delegated function calls. Indeed, one of the main reasons this supports dynamic context based on how the function is called is so that method calls on objects which delegate through the prototype chain still maintain the expected this."

// "Consider:

    var homework = {
        study() {
            console.log(`Please study ${this.topic}`);
        }
    };

    var jsHomework = Object.create(homework);
    jsHomework.topic = "JS";
    jsHomework.study();
    // Please study JS

    var mathHomework = Object.create(homework);
    mathHomework.topic = "Math";
    mathHomework.study();
    // Please study Math

// "The two objects jsHomework and mathHomework each prototype link to the single homework object, which has the study() function. jsHomework and mathHomework are each given their own topic propert

// jsHomework.study() delegates to homework.study(), but its this (this.topic) for that execution resolves to jsHomework because of how the function is called, so this.topic is "JS". Similarly for mathHomework.study() delegating to homework.study() but still resolving this to mathHomework, and thus this.topic as "Math".

// The preceding code snippet would be far less useful if this was resolved to homework. 

// Unlike many other languages, JS's this being dynamic is a critical component of allowing prototype delegation, and indeed class, to work as expected!

// Em Java / C#:

    // Método é parte da classe
    // this é ligado à instância no momento da chamada
    // Você não separa facilmente método e objeto

// Em JavaScript:

    // Funções são independentes
    // Objetos delegam comportamento via prototype
    // this é decidido puramente pela forma da chamada

    jsHomework.study();

    // Aqui, o JS faz algo como:

        // “Quem está à esquerda do ponto? Então esse é o this.”

        // Mesmo que a função esteja em outro objeto no prototype chain.

// Em linguagens OO clássicas, mesmo que o método seja definido na classe base, o this sempre aponta para a instância concreta em runtime, não para a classe/base onde o método foi escrito.

// Resumão mental 🧠

//     ❌ Java não faria this.topic virar o topic da classe base
//     ✅ Java também resolve this dinamicamente para a instância real
//     🔥 JS vai além: permite reutilizar funções entre objetos sem relação de classe, graças ao this dinâmico + prototype

//---------------
// "As you are getting started learning and knowing JS more closely, one of the most important skills you can practice and bolster is curiosity, and the art of asking "Why?" when you encounter something in the language.

// Even though this chapter has gone quite deep on some of the topics, many details have still been entirely skimmed over. There's much more to learn here, and the path to that starts with you asking the right questions of your code. Asking the right questions is a critical skill of becoming a better developer."