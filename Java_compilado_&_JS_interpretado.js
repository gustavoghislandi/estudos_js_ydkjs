// O Java cria bytecode, mas por que ele é considerado compilado e JS não?

// A diferença não está em gerar bytecode ou não, mas em como ele é usado e como o desenvolvimento é estruturado.

// Java

    // O compilador (javac) transforma o código-fonte .java em bytecode .class antes da execução.
    // Esse bytecode é estável, padronizado e pode ser distribuído e executado em qualquer JVM sem depender do compilador de novo.
    // Por isso, Java é considerado linguagem compilada para bytecode (compilação ocorre antes da execução).

// JavaScript

    // Historicamente, JS era interpretado diretamente, sem passo de compilação estável.
    // O bytecode que engines modernas geram (V8, SpiderMonkey) é temporário, específico da engine e gerado em tempo de execução.
    // Ou seja, não existe um passo de compilação “pré-distribuição” como em Java.
    // Por isso JS é considerado linguagem interpretada, mesmo que hoje use JIT para gerar binário nativo em runtime.

// Resumindo: Java é compilado porque o bytecode é fixo e pré-existente, JS não é porque o bytecode só existe durante a execução, de forma dinâmica.

// Ou seja, e JS criasse um bytecode que pudesse ser executado em outra VM ele seria compilado.

/*
Se o JavaScript fosse compilado para um bytecode estável e portátil, que pudesse ser distribuído e rodado em qualquer VM sem depender do processo de JIT da engine, ele passaria a ser considerado compilado, igual ao Java.

O ponto-chave é: compilação = criar código intermediário ou binário antes da execução, fixo e reutilizável, não gerado dinamicamente durante o runtime.

Ou seja, não é o bytecode em si que define “compilado”, mas quando e como ele é gerado e usado.
*/