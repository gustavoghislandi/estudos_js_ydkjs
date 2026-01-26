// Bytecode é código intermediário:

//     não é texto (como JS)
//     não é código de máquina
//     é um formato binário feito para uma máquina virtual executar

// Serve para ficar entre “escrever o código” e “rodar no hardware”.

    // Portanto, é zeros e uns sim — mas não para o CPU.

    // Bytecode é binário para uma VM
    // Enquanto código de máquina é binário para o processador
    // Ambos são 0 e 1; o que muda é quem entende.

//-----

// Linguagens compiladas entregam binário ao invés de bytecode?

// Depende.
    // Compiladas clássicas (C, C++) → geram binário nativo (código de máquina).
    // Bytecode (Java, C#, JS) → geram bytecode para uma VM.
    // Híbridas → podem gerar bytecode e depois virar binário via JIT.

        // JIT (Just-In-Time) gera código de máquina nativo, específico do processador, em tempo de execução.

// Resumo:
    // binário roda direto no CPU; bytecode roda numa VM.

// O que é bytecode?

//-----

// Bytecode “puro”: formato mais padronizado e estável (ex.: JVM), feito para uma VM bem definida.

// Bytecode da VM do JS: interno e específico de cada engine (V8, SpiderMonkey etc.), muda com versões e serve só para otimizar a execução do JS.

// Ou seja: o do JS é customizado, temporário e não padronizado.

        // Customizado: feito sob medida para cada engine de JS (V8, SpiderMonkey etc.).

        // Temporário: existe só durante a execução, pode nem ser salvo.

        // Não padronizado: não há um formato oficial único como na JVM.

    // Isso quer dizer que a engine pode gerar bytecode diferente a cada execução, mesmo com o mesmo código-fonte, dependendo de otimizações, perfil de uso, versão da VM etc.

    // Enquanto em compiladas clássicas, o mesmo fonte (com mesmo compilador e flags) gera o mesmo binário. Diferenças só aparecem se mudar compilador, versão, otimizações ou ambiente.