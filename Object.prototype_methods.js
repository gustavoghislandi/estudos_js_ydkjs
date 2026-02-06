// Em JavaScript, 'Object.prototype' é o protótipo base de todos os objetos que não possuem um protótipo diferente. Ele fornece métodos que todos os objetos herdam, a menos que sejam sobrescritos. Vou listar os métodos nativos mais comuns de 'Object.prototype':

    hasOwnProperty(prop)

// Verifica se o objeto possui a propriedade prop como própria, não herdada.

// Exemplo:

    const obj = { a: 1 };
    obj.hasOwnProperty('a'); // true
    obj.hasOwnProperty('toString'); // false

//--------------------

    isPrototypeOf(obj)

// Verifica se o objeto atual existe na cadeia de protótipos de obj.

// Exemplo:

    const obj2 = {};
    Object.prototype.isPrototypeOf(obj2); // true

//--------------------

    propertyIsEnumerable(prop)

// Retorna true se a propriedade prop do objeto é enumerável.

// Exemplo:

    const obj3 = { a: 1 };
    obj3.propertyIsEnumerable('a'); // true
    obj3.propertyIsEnumerable('toString'); // false

//--------------------

    toLocaleString()

// Retorna uma string representando o objeto, geralmente sobrescrito em objetos derivados.

// Exemplo:

    const obj4 = {};
    obj4.toLocaleString(); // "[object Object]"

//--------------------

    toString()

// Retorna uma string representando o objeto.

// Exemplo:

    const obj5 = {};
    obj5.toString(); // "[object Object]"

//--------------------

    valueOf()

    // Retorna o valor primitivo do objeto, usado implicitamente em operações.

// Exemplo:

    const obj6 = {};
    obj6.valueOf(); // retorna o próprio objeto

//--------------------

__defineGetter__(prop, func) // (obsoleto, mas ainda presente em alguns motores)

    // Define um getter para a propriedade prop.

__defineSetter__(prop, func) // (obsoleto, mas ainda presente em alguns motores)

    // Define um setter para a propriedade prop.

__lookupGetter__(prop) // (obsoleto)

    // Retorna o getter de uma propriedade, se existir.

__lookupSetter__(prop) // (obsoleto)

    // Retorna o setter de uma propriedade, se existir.

// 💡 Resumo: Os métodos principais, padronizados e ainda recomendados são:

//     hasOwnProperty [A propriedade é própria dele?]

//     isPrototypeOf [É protótipo de objeto fulano?]

//     propertyIsEnumerable 

//     toLocaleString

//     toString

//     valueOf [retorna o próprio objeto]

// Os métodos com __ são históricos e não recomendados para uso moderno.

//------------------------------------------------------

// OBSERVAÇÕES IMPORTANTES:

// O 'constructor' é tecnicamente uma propriedade, mas pode ser chamado como método para criar instâncias.

// Qualquer outro método ou propriedade “extra” que apareça em 'Object.prototype' geralmente é extensão do ambiente (polyfills, frameworks ou motores antigos) e não faz parte do padrão ECMAScript.

// Em navegadores modernos, a lista completa padrão da ECMAScript é a tabela acima. Se você fizer:

    console.log(Object.getOwnPropertyNames(Object.prototype));

// Vai retornar algo como:

    ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__", "__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "toLocaleString"]
