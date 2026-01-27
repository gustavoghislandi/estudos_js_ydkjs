// OBS: Este arquivo foi salvo com a extensão .ts porque AssemblyScript também usa ela, mas não é TypeScript. Contudo, no VS Code, selecionei WebAssembly Text Format.


// um exemplo simples de AssemblyScript, parecido com TypeScript, compilado para WebAssembly:

// example.ts (AssemblyScript)

export function soma(a: i32, b: i32): i32 {
  return a + b;
}

export function fatorial(n: i32): i32 {
  let resultado: i32 = 1;

  for (let i: i32 = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}


// Mas ele não é TS?

// Boa pergunta — e sim e não 😄

// AssemblyScript parece TypeScript, mas não é TypeScript de verdade.

// O que ele é

// AssemblyScript é uma linguagem própria

// A sintaxe é inspirada em TypeScript

// Foi criada para compilar para WebAssembly (Wasm)

// Por que parece TS?

// Porque você vai ver coisas como:

let x: i32 = 10;
function soma(a: i32, b: i32): i32 {
  return a + b;
}

// Mas aí começam as diferenças importantes 👇

// Principais diferenças para TypeScript

  // ❌ Não existe number
  // 👉 você usa i32, i64, f32, f64
  // ❌ Não roda em Node ou navegador diretamente
  // 👉 precisa ser compilado para WebAssembly
  // ❌ Sem APIs JS (DOM, fetch, console.log nativo)
  // ⚠️ Gerenciamento de memória explícito em vários casos
  // ⚠️ Apenas um subconjunto do TS é suportado

// Forma correta de pensar

  // AssemblyScript é para WebAssembly o que o C é para código nativo
  // Ele só empresta a aparência do TypeScript para ser mais amigável.

// Resumindo em uma frase

  // 👉 AssemblyScript não é TypeScript, só usa uma sintaxe parecida.

// Detalhe importante ⚠️

  // Nem todo arquivo .ts é TypeScript “normal”
  // 👉 O compilador que importa é o assemblyscript (asc), não o tsc.

  //--------------------------

// Como AssemblyScript vira WebAssembly?

  // Você escreve código em .ts (AssemblyScript)
  // O compilador asc transforma isso em .wasm
  // O .wasm é carregado por JavaScript, Node, navegador, ou outro runtime

// Exemplo:

      // asc index.ts -b index.wasm

// Quando faz sentido usar AssemblyScript

// ✅ Use quando:

  // Precisa de performance alta
  // Faz cálculos pesados (math, crypto, compressão, parsing)
  // Quer WebAssembly sem escrever C/C++

// ❌ Não use quando:

  // Precisa de DOM, fetch, APIs JS
  // Código é simples ou I/O-bound
  // TypeScript/JavaScript já resolve bem

// Regra prática

  // 👉 AssemblyScript = CPU quente
  // 👉 TypeScript = lógica de app

//-------------------------------------------

Extensões certas (sem confusão)

  .ts → código AssemblyScript (fonte)

  .wasm → WebAssembly binário (gerado pelo compilador)

  .wat → WebAssembly Text Format (texto de baixo nível, tipo “assembly do Wasm”)

//-----

WAT parece com isso:

      (func $soma (param i32 i32) (result i32)
        local.get 0
        local.get 1
        i32.add)

//----------

Fluxo correto

    example.ts   (AssemblyScript)
      ↓ asc
    example.wasm (WebAssembly binário)


Opcional:

    example.wasm → wasm2wat → example.wat