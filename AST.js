// A AST (Abstract Syntax Tree) é uma representação em árvore do código-fonte, focada na estrutura lógica, não nos detalhes de sintaxe literal.

// Cada nó da árvore representa um elemento do programa:

    // operadores (+, -)
    // variáveis (x, sum)
    // funções, loops, condicionais etc.

// “Abstract” porque ignora detalhes desnecessários, como espaços, comentários ou parênteses redundantes.

// Exemplo simples em JS:

    // let sum = a + b;

// A AST conceitual seria algo como:

    // VariableDeclaration
    //   ├─ Identifier: sum
    //   └─ BinaryExpression: +
    //        ├─ Identifier: a
    //        └─ Identifier: b

// Usos da AST:

    // Compiladores e interpretadores transformam o código em bytecode ou máquina.
    // Ferramentas de linting, minificação, formatação de código.
    // Otimizações e análise estática.