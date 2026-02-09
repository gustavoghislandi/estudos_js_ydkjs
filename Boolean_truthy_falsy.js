// Em JavaScript, 'Boolean()' serve exatamente para isso: 'converter qualquer valor em 'true' ou 'false'', de acordo com se ele é *truthy* ou *falsy*.

// Exemplos rápidos:

    Boolean(1)        // true
    Boolean("oi")    // true
    Boolean([])      // true
    Boolean({})      // true

    Boolean(0)       // false
    Boolean("")      // false
    Boolean(null)    // false
    Boolean(undefined) // false
    Boolean(NaN)     // false


// Ou seja:

    // valores 'falsy' viram 'false'
    // todo o resto é 'truthy' e vira 'true'

// 💡 Dica prática:

    // Muita gente usa o atalho com '!!' (dupla negação), que faz a mesma coisa:


    !!"texto"   // true
    !!0         // false


// Funciona porque:

    // 1. '!valor' inverte
    // 2. '!(!valor)' converte pra boolean de vez

// Então sim — 'Boolean()' é basicamente um “detector oficial” de *truthy* e *falsy*.
