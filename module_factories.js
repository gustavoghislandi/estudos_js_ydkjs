// Module Factories em JavaScript

// Um module factory é basicamente uma função que cria e retorna um módulo. Em vez de definir o módulo como um objeto fixo, a factory permite gerar instâncias diferentes do módulo com base em parâmetros, estados ou configurações passadas. É muito usado em padrões de design como Factory Pattern e também em sistemas de módulos como AMD ou CommonJS.

// Características principais:

    // Retorna um objeto ou função que representa o módulo.
    // Permite encapsular estado privado.
    // Pode receber parâmetros para configurar o módulo na criação.

// Exemplo simples:

    function createCounter(initialValue = 0) {
        let count = initialValue; // estado privado

        return {
            increment() {
                count++;
                return count;
            },
            decrement() {
                count--;
                return count;
            },
            getValue() {
                return count;
            }
        };
    }

// Criando instâncias do módulo

    const counterA = createCounter(5);
    const counterB = createCounter();

    console.log(counterA.increment()); // 6
    console.log(counterB.increment()); // 1
    console.log(counterA.getValue());  // 6
    console.log(counterB.getValue());  // 1

// Explicação rápida:

    // createCounter é a module factory.
    // Cada chamada gera um módulo com estado próprio (count).
    // Podemos ter várias instâncias independentes do mesmo "tipo" de módulo.

//---------------

// Vamos ver como module factories podem ser implementadas usando ES Modules modernos (export/import).

// Exemplo com ES Modules
    
    // counterFactory.js

// Module factory usando ES Modules

    export function createCounter(initialValue = 0) {
        let count = initialValue; // estado privado

        return {
            increment() {
                count++;
                return count;
            },
            decrement() {
                count--;
                return count;
            },
            getValue() {
                return count;
            }
        };
    }

// main.js

    import { createCounter } from './counterFactory.js';

// Criando instâncias do módulo

    const counterA2 = createCounter(10);
    const counterB2 = createCounter();

    console.log(counterA2.increment()); // 11
    console.log(counterB2.increment()); // 1
    console.log(counterA2.getValue());  // 11
    console.log(counterB2.getValue());  // 1

// O que mudou com ES Modules

    // A factory (createCounter) é exportada no arquivo do módulo.
    // Podemos importá-la em qualquer outro arquivo.
    // Cada chamada ainda gera uma instância independente com seu próprio estado.
    // Mantemos encapsulamento, sem expor variáveis internas.
