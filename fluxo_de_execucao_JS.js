// Fluxo do JavaScript moderno:

// Parser → AST

    // O motor lê o código-fonte e monta a árvore de sintaxe abstrata (AST), que representa a estrutura lógica do programa.
    // Só lê o código, nenhum código é executado ainda.

// AST → Bytecode/IR

    // O motor converte a AST em bytecode ou IR (intermediate representation), que a VM consegue interpretar ou compilar.

// Interpretador da VM

    // É aqui que a execução começa de verdade.
    // O bytecode é lido passo a passo, interpretado e executado.
    // O JIT ainda não entrou em ação, só observando o código.

// JIT

    // Detecta trechos quentes durante a interpretação.
    // Compila esses trechos para código nativo, acelerando a execução subsequente.

// Resumindo:

    // Execução começa no interpretador, não no JIT.
    // JIT só otimiza partes que valem a pena, depois que a interpretação já começou.