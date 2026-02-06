// A semelhança entre classes e prototypes é mais conceitual do que estrutural.

  // Classes: herança → "B é uma A"
  // Protótipos: delegação → "B pergunta para A se não souber"

  // Em classes, o comportamento vem de uma estrutura pré-definida.
  
  // Em protótipos, o comportamento vem de uma cadeia de delegação entre objetos existentes.

      // “Objetos existentes" enfatiza que a delegação é dinâmica — qualquer alteração no objeto A depois que B já existe será vista por B.

      // “Objetos instanciados” sugere algo mais estático, como se fossem cópias fixas de A, o que não reflete bem a flexibilidade do protótipo.

// ==============================
// Classes (herança)
// ==============================

// Classes trabalham com modelo → instância e hierarquia fixa.
//
// - A Classe A é definida primeiro
// - A Classe B herda de A
// - B copia/encadeia o comportamento de A via herança
// - A relação é declarada antes dos objetos existirem

class A {
  falar() {
    return "Olá da A";
  }
}

class B extends A {
  andar() {
    return "Andando";
  }
}

const b = new B();
b.falar(); // vem da A

// Ideia-chave: B é um tipo de A
// A herança é estrutural e estática



// ==============================
// Protótipos (delegação)
// ==============================

// Protótipos trabalham com objeto → objeto e delegação dinâmica.
//
// - O objeto A já existe
// - O objeto B também existe por si só
// - B não copia nada
// - Quando B não tem algo, ele delega a busca para A

  // NOTA: Em protótipos, nada impede que A exista depois de B, contanto que a delegação seja posterior.

const A = {
  falar() {
    return "Olá do A";
  }
};

const B = Object.create(A);
B.andar = () => "Andando";

B.falar(); // delegado para A

// Ideia-chave: B usa A como fallback
// A relação é dinâmica e flexível



// ==============================
// Síntese direta
// ==============================

  // Classes: herança → "B é uma A"
  // Protótipos: delegação → "B pergunta para A se não souber"

// Em classes, o comportamento vem de uma estrutura pré-definida.
// Em protótipos, o comportamento vem de uma cadeia de delegação
// entre objetos vivos.


// ---------------------------------------------------------
// Em protótipos, nada impede que A exista depois de B, contanto que a delegação seja posterior.

// Exato — e esse é um ponto fundamental que realmente separa protótipos de classes
// Dá pra dizer que isso não existe no modelo clássico de classes.

// Aqui vai a formulação sucinta, bem amarrada, com exemplos curtos:

// Classes (herança)

  // A relação é temporal e hierárquica.
  // A Classe A precisa existir antes
  // A Classe B nasce herdando A
  // A ligação é definida na criação da classe

  // Não muda depois

// ➡️ Herança exige anterioridade
// ➡️ A estrutura vem antes dos objetos

// ---------------------------------------------------------

// Protótipos (delegação)

  // A relação é posterior e dinâmica.
  // B pode existir sozinho
  // A pode surgir depois
  // A delegação pode ser criada ou alterada a qualquer momento
  // Não há hierarquia fixa

// ➡️ Delegação não exige anterioridade
// ➡️ Objetos vêm antes, relações depois

// ---------------------------------------------------------

// Herança é estrutural. Delegação é relacional.