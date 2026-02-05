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