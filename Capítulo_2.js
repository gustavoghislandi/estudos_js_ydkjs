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