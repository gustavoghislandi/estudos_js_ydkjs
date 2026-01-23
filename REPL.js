
// REPL (Read-Evaluate-Print-Loop)

// É um ambiente interativo onde você digita código,
// o sistema executa e mostra o resultado imediatamente.

// ATENÇÃO: Ele não é JS puro. É um ambiente para a DX (Developer Experience). É conveniência. Então, não confie que a saída será 100% compatível, não assuma que será JS! Não é o propósito desse tipo de ferramenta.

// Ciclo do REPL:
// 1. Read  -> lê o que você digitou
// 2. Evaluate -> executa o código
// 3. Print -> mostra o resultado
// 4. Loop -> repete

// Exemplo em JavaScript (Node.js ou console do navegador):
// > 2 + 3
// 5
// > let x = 10
// > x
// 10

// Serve para:
// - testar código rapidamente
// - aprender a linguagem
// - depurar erros
// - experimentar funções e APIs

// Como abrir o REPL do Node.js:
// 1. Instale o Node.js (https://nodejs.org)
// 2. Abra o terminal e digite: node
// 3. Pronto, o REPL está aberto

// Para sair:
// - .exit
// ou
// - Ctrl + C (duas vezes)

// Também funciona no console do navegador (F12 -> Console)


//-------------
// Exemplo resumido de diferentes usos do comando 'node' e comportamentos respectivos:

// node arquivo.js

    // - executa o arquivo como um programa completo
    // - cada arquivo tem escopo próprio (módulo)
    // - variáveis ficam dentro do arquivo
    // - não mostra resultados automaticamente (precisa console.log)
    // - importa módulos normalmente

// node (REPL) e colar o código

    // - executa linha por linha
    // - variáveis ficam no escopo do REPL (mais global)
    // - mostra automaticamente o resultado de expressões
    // - this e escopo podem ser diferentes
    // - import/require podem se comportar diferente

// Conclusão:

    // Mesmo com o mesmo código, a saída pode ser diferente
    // porque o REPL e o arquivo têm contexto e escopo diferentes.
