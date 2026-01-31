// Métodos static pertencem à classe e não dependem de instâncias. Mesmo quando chamados através de um objeto, a chamada é resolvida como sendo da classe, e o objeto não é utilizado.

// Quando static faz sentido

    // Use static quando o método:

        // ❌ não depende de estado de instância
        // ❌ não faz parte do “comportamento de um objeto”
        // ✅ é utilitário ou conceitualmente da classe

// Regra prática:

    // Se o método “faz algo com um objeto específico”, não deveria ser static.

// Diferença importante em JS

    // Chamadas são dinâmicas
    // this pode mudar dependendo de como você chama
    // Performance não é argumento pra static em JS também
        // Engines modernas (V8, SpiderMonkey):
            // otimizam tudo agressivamente
            // diferença é irrelevante fora de micro-benchmarks artificiais