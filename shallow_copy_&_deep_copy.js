// Shallow copy (...)

    const b = [...a]

    // cria novo array/objeto
    // primitivos são copiados
    // objetos internos continuam mesma referência

    a !== b        // true
    a[0] === b[0]  // true


    // Serve pra mudar só a camada externa, rápido e barato.
    // React/Redux usam isso pra detectar mudanças por referência.

// Deep copy

    const c = structuredClone(a)

    // cria novas referências pra tudo, recursivamente

    a !== c
    a[0] !== c[0]

    // Usado quando precisa isolamento total.

// Ideia-chave

    // Shallow: novo contêiner, mesmo conteúdo
    // Deep: tudo novo

// Shallow existe porque performance + controle.
// Deep por padrão seria desperdício.

//-----------------------------------
// Em React/Redux

// Shallow copy

    // Cria novo objeto/array só na 1ª camada
    // Objetos internos continuam mesma referência
    // É rápida e econômica

// React / Redux:

    setState(prev => ({
    ...prev,
    user: { ...prev.user, name: "Ana" }
    }))

    // Só state e user ganham nova referência.
    // O resto permanece igual → re-render eficiente.

// Deep copy

    // Cria novas referências pra tudo
    // É mais lenta e gasta mais memória
    // Usada quando você precisa isolamento total

const newState = structuredClone(state)

// Ideia-chave

    // Shallow: mudar só onde precisa
    // Deep: copiar tudo (quase nunca necessário)

// É por isso que shallow copy é o padrão em React/Redux.

//-----------------------------------

// Por que shallow copy existe?

// 1️⃣ É rápida e barata

    // Deep copy é caro (tempo + memória).
    // Na maioria dos casos, você não quer duplicar tudo.

// 2️⃣ Imutabilidade só onde importa

    // Em React/Redux, por exemplo:

        setState(prev => ({ ...prev, count: prev.count + 1 }))

    // Você só muda a camada externa.
    // As partes internas continuam iguais de propósito.

// 3️⃣ Referência = sinal de mudança

    // Frameworks comparam referências:

    // mudou a referência → algo mudou
    // mesma referência → pode reaproveitar

// Shallow copy permite:

    // “isso mudou”
    // “isso não mudou”

// 4️⃣ Controle

    // Você escolhe o que copiar profundo e o que compartilhar.

// Resumo mental:

    // Shallow: “quero um novo contêiner, não novos dados”
    // Deep: “quero tudo isolado”