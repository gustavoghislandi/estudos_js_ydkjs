// JIT (Just-In-Time) gera código de máquina nativo, específico do processador, em tempo de execução.

// JIT compila partes do código em tempo de execução para binário nativo, acelerando a execução ao evitar a VM sempre.

/*
O JIT (Just-In-Time) é uma técnica usada por linguagens que rodam em máquinas virtuais, 
como JavaScript (V8), Java (JVM) ou C# (CLR). 
A ideia central é: em vez de compilar todo o programa para código de máquina antes de rodar, 
a VM interpreta o bytecode e, ao mesmo tempo, identifica trechos “quentes” — partes do código que são executadas com frequência. 
Esses trechos são então compilados em código nativo do processador durante a execução, permitindo que rodem muito mais rápido.

Por exemplo, imagine um loop que soma números de 1 a 1 milhão em JS:
*/

let sum2 = 0;
for (let i = 1; i <= 1_000_000; i++) {
  sum2 += i;
}

/*
No começo, a engine pode interpretar esse código passo a passo (mais lento). 
Depois de notar que o loop é executado muitas vezes, o JIT compila esse trecho para binário nativo, e as próximas execuções usam esse código direto na CPU, acelerando enormemente.

Existem tipos diferentes de JIT:

    Baseline JIT: compila rápido, sem muitas otimizações.

    Optimizing JIT: compila com otimizações agressivas, baseado no perfil real de execução.

O ponto essencial é que o JIT combina interpretação e compilação dinâmica, equilibrando startup rápido (sem compilar tudo antes) e alta performance (convertendo trechos críticos em binário).
*/

//---------
// Exemplo:

// ===========================
// 1. Código-fonte JS
// ===========================

let sum = 0;
for (let i = 1; i <= 1_000_000; i++) {
  sum += i;
}
console.log(sum); // 500000500000

// ===========================
// 2. Bytecode gerado pela VM (conceitual)
// ===========================
// A VM traduz o JS em instruções intermediárias (bytecode) que ela entende.
// Exemplo simplificado:
//
// [LOAD_CONST 0]       // carrega 0
// [STORE_VAR sum]      // salva em 'sum'
// [LOAD_CONST 1]       // carrega 1
// [STORE_VAR i]        // salva em 'i'
// LOOP_START:
//   [LOAD_VAR sum]     
//   [LOAD_VAR i]       
//   [ADD]              
//   [STORE_VAR sum]    
//   [INCREMENT i]      
//   [COMPARE i <= 1_000_000]
//   [JUMP_IF_TRUE LOOP_START]

// ===========================
// 3. Interpretação inicial
// ===========================
// A VM executa o bytecode passo a passo.
// Funciona, mas é relativamente lento porque cada instrução passa pela VM.

// ===========================
// 4. JIT entra em ação
// ===========================
// A engine detecta que o loop é executado muitas vezes ("trecho quente").
// Ela então compila este trecho para **código de máquina nativo**.
// Conceito simplificado do resultado:
//
// mov rax, 0       ; sum = 0
// mov rcx, 1       ; i = 1
// loop_start:
//   add rax, rcx   ; sum += i
//   inc rcx        ; i++
//   cmp rcx, 1000001
//   jl loop_start
// Resultado agora roda direto na CPU, muito mais rápido.

// ===========================
// 5. Execução final
// ===========================
// Depois da compilação JIT, o código crítico roda **direto no processador**,
// enquanto outras partes do código podem continuar sendo interpretadas.


/* 
Fluxo do JIT em JavaScript:

Código-fonte JS
       |
       v
+----------------+
|  Compilador    |  (opcional: gera bytecode direto da fonte)
+----------------+
       |
       v
   Bytecode (intermediário, para a VM)
       |
       v
+----------------+          +-------------------+
|   Interpretador|--------->| Trechos quentes?  |
|    da VM       |          | (executados muito)|
+----------------+          +-------------------+
                                    |
                                    v
                           +-------------------+
                           |   JIT Compiler    |
                           | Compila para      |
                           | binário nativo    |
                           | do processador    |
                           +-------------------+
                                    |
                                    v
                          Código de máquina nativo
                                    |
                                    v
                               CPU executa rápido
*/


/* 
Fluxo de execução JS com JIT (compacto, mostrando partes lentas e rápidas):

JS Fonte
   |
   v
+----------------+    ← rápido de gerar, lento de executar
| Bytecode VM    |    // Código intermediário, interpretado pela VM
+----------------+
   |
   v
[Interpretador]  ← lento, passa cada instrução pelo motor
   |
   v
Trecho quente? ──> Sim ──> [JIT Compiler]  ← compila para código nativo
                                    |
                                    v
                        Código de máquina nativo  ← muito rápido!
                                    |
                                    v
                                  CPU executa
*/


/*

Se fosse uma linguagem puramente interpretada, como seria?

Seria assim, sem JIT e sem código nativo:


JS Fonte
   |
   v
Bytecode (ou direto AST)
   |
   v
Interpretador da VM  ← tudo roda passo a passo, mais lento
   |
   v
CPU executa instruções da VM



Ou seja, nada vira binário nativo, tudo depende da VM interpretar.

Python é assim:

Python padrão (CPython) é interpretado:

O código-fonte é compilado em bytecode Python (.pyc).

O interpretador (Python VM) executa esse bytecode passo a passo.

Não vira código nativo do processador, salvo se usar ferramentas como PyPy (tem JIT) ou Cython (compila pra C).

Ou seja, sem JIT, Python puro é mais lento que linguagens com JIT.
*/

// Então, antes do V8, JS era assim.

/*
Antes do V8 (e outras engines modernas com JIT), o JavaScript era interpretado puro:

O navegador pegava o código JS e o interpretava passo a passo.

Cada linha/expressão era executada pela VM, sem virar código nativo.

Resultado: performance bem menor, especialmente em loops pesados ou apps grandes.

O V8 mudou isso com JIT, compilando trechos quentes para binário nativo, acelerando muito a execução.
*/

/*
Aqui estão as datas/resumos importantes:

- V8 foi criado pelo Google e lançado em 2 de setembro de 2008, com JIT desde o início para compilar JS em código nativo e melhorar performance em navegadores e depois em Node.js.

- SpiderMonkey (engine do Firefox, original desde os anos 1990) começou a ter JIT com TraceMonkey em Firefox 3.5, lançado em 2009.
Depois disso, ele recebeu sucessores como JägerMonkey e IonMonkey (em 2011‑2012, com otimizações e JIT mais fortes).

Ou seja, V8 trouxe JIT intenso desde 2008, e SpiderMonkey também passou a usar JIT (TraceMonkey) por volta de 2009, evoluindo com versões posteriores do Firefox.
*/

/*

V8 costuma ter desempenho melhor na maioria dos benchmarks de JavaScript, mas a diferença depende do cenário:

V8 (Chrome, Node.js)

JIT agressivo, otimizações de inline cache, turbofan e sparkplug.

Excelente para loops pesados, apps grandes e Node.js.

SpiderMonkey (Firefox)

Também tem JIT moderno (baseline + IonMonkey + Warp) e boas otimizações.

Geralmente fica um pouco atrás do V8, mas em certos casos específicos (como manipulação de strings ou operações internas do navegador) pode ser competitivo.

Resumo rápido: V8 lidera performance geral, especialmente em Node.js e benchmarks JS padrão, enquanto SpiderMonkey é muito bom, mas um pouco mais lento em média.

*/