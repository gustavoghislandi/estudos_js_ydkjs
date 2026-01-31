/**************************************************************
 * dispatch_em_runtime.js
 *
 * Tudo aqui é documentação + exemplos sobre dispatch em runtime,
 * separando claramente Java x JavaScript.
 **************************************************************/

/*
==============================================================
O que é dispatch em runtime?
==============================================================

Dispatch = decidir qual método será executado
Runtime  = durante a execução do programa

👉 Então dispatch em runtime é quando o programa só decide
qual método chamar NA HORA QUE ESTÁ RODANDO,
e não na compilação.

Isso acontece principalmente com polimorfismo.
*/

/*
==============================================================
EXEMPLO CLÁSSICO — JAVA (comentado, não é JS)
==============================================================

class Animal {
    void falar() {
        System.out.println("Animal faz som");
    }
}

class Cachorro extends Animal {
    @Override
    void falar() {
        System.out.println("Cachorro late");
    }
}

Uso:

Animal a = new Cachorro();
a.falar();

O que acontece?

Em compilação:
O compilador só sabe que 'a' é do tipo Animal

Em runtime:
A JVM vê que o objeto real é um Cachorro

✅ Chama Cachorro.falar()

👉 Isso é dispatch em runtime
Também chamado de dynamic dispatch ou late binding.
*/

/*
==============================================================
JAVA — DISPATCH EM COMPILE TIME (static)
==============================================================

class Animal {
    static void falar() {
        System.out.println("Animal fala");
    }
}

class Cachorro extends Animal {
    static void falar() {
        System.out.println("Cachorro fala");
    }
}

Uso:

Animal a = new Cachorro();
a.falar();

⚠️ Resultado:
Animal fala

Por quê?

Métodos static NÃO participam de polimorfismo
A decisão é feita em tempo de compilação
O tipo da referência (Animal) vence, não o objeto real

👉 Aqui NÃO existe dispatch em runtime.
*/

/*
==============================================================
JAVA — OVERLOAD (NÃO é runtime!)
==============================================================

void print(int x) {}
void print(double x) {}

print(10);   // escolhe em compilação

Mesmo com objeto, isso é compile-time dispatch.
*/

/*
==============================================================
JAVASCRIPT — COMPARAÇÃO COM JAVA
==============================================================

Em JavaScript (pra comparar):

class Animal {
  falar() { console.log("Animal"); }
}

class Cachorro extends Animal {
  falar() { console.log("Cachorro"); }
}

let a = new Cachorro();
a.falar(); // "Cachorro"

JS:

- é sempre runtime
- lookup no prototype chain
- dispatch totalmente dinâmico
*/

/*
==============================================================
RESUMINHO MENTAL 🧠
==============================================================

Situação                             | Dispatch
------------------------------------ | ----------
Método de instância + polimorfismo   | ✅ runtime
Método static                        | ❌ runtime (compile time)
Overload                             | ❌ runtime
JS (métodos normais)                 | ✅ runtime

📌 Frase-chave pra guardar:

Dispatch em runtime acontece quando o método é escolhido
com base no objeto real, não no tipo da variável.
*/

/*
==============================================================
JS — E SE O MÉTODO FOR STATIC?
==============================================================

Pergunta:
"Se o método de JS for static, igual no exemplo do Java,
o que acontece?"

Resposta:
Perfeito — agora 100% JS, sem analogia com Java.
*/

/*
==============================================================
EM JAVASCRIPT, O QUE É UM MÉTODO STATIC DE VERDADE?
==============================================================
*/

class User {
  static sayHi() {
    console.log("Oi");
  }

  sayBye() {
    console.log("Tchau");
  }
}

// Onde cada método fica?

// sayHi (static) → fica na própria função construtora User
// sayBye (instância) → fica em User.prototype

User.sayHi();          // ✅
const u = new User();
u.sayBye();            // ✅
// u.sayHi();          // ❌ TypeError

/*
📌 Diferente de Java:

- JS não permite chamar static via instância
- não existe esse “objeto ignorado”
*/

/*
==============================================================
O QUE ACONTECE "POR BAIXO DOS PANOS"?
==============================================================

Classes em JS são açúcar sintático para funções + protótipos.

Isso aqui:

class User {
  static sayHi() {}
}

É basicamente:
*/

function UserFake() {}
UserFake.sayHi = function () {};

/*
E método de instância:
*/

UserFake.prototype.sayBye = function () {};

/*
👉 Nenhum objeto é criado para chamar método static.
👉 É só uma função pendurada na função-construtora.
*/

/*
==============================================================
DISPATCH EM JS COM STATIC
==============================================================

static em JS:

❌ não usa prototype chain de instância
❌ não usa this de instância
❌ não tem polimorfismo via instância
*/

class A {
  static who() { console.log("A"); }
}

class B extends A {
  static who() { console.log("B"); }
}

B.who(); // "B"

/*
Aqui:

- lookup é direto na função B
- se não achar, sobe via __proto__ (herança de classes)

Mas isso NÃO é dispatch dinâmico por instância.
É só property lookup normal entre funções.
*/

/*
==============================================================
COMPARAÇÃO — MÉTODO NORMAL (INSTÂNCIA)
==============================================================
*/

class A2 {
  who() { console.log("A"); }
}

class B2 extends A2 {
  who() { console.log("B"); }
}

const x = new B2();
x.who(); // "B"

/*
Aqui:

- lookup acontece em runtime
- percorre: x → B2.prototype → A2.prototype

👉 isso SIM é dispatch dinâmico
*/

/*
==============================================================
DETALHE IMPORTANTE — this EM STATIC (JS)
==============================================================
*/

class A3 {
  static who() {
    console.log(this.name);
  }
}

class B3 extends A3 {}

A3.who(); // "A3"
B3.who(); // "B3"

/*
👀 Aqui:

- this é a classe (função construtora)
- NÃO é uma instância
*/

/*
==============================================================
RESUMO JS PURO 🧠
==============================================================

static em JS = método da função construtora

- não vive no prototype
- não pode ser chamado por instância
- não tem dispatch por objeto (o 'this' é a classe, não uma instância)
- herança funciona via __proto__ entre classes

📌 Frase final:

Em JS, método static é só uma função pendurada na classe —
nada de instância, nada de prototype.
*/
