// Um polyfill é um pedaço de código que implementa funcionalidades novas do JavaScript em ambientes que não as suportam.

// polifilling pode ser traduzido como polipreenchimento.

// Exemplo:

    // Polyfill simples para Array.prototype.includes
    if (!Array.prototype.includes) {
    Array.prototype.includes = function(value) {
        return this.indexOf(value) !== -1;
    };
    }

    [1, 2, 3].includes(2); // true, mesmo em browsers antigos


/*Um exemplo de compatibilidade relatado no livro, que precisa de polyfill é a propriedade 'finally' da Promise, que só foi incluída no ES2019.*/

// "Transpilers like Babel typically detect which polyfills your code needs and provide them automatically for you. But occasionally you may need to include/define them explicitly".