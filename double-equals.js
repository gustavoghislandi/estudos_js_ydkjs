
// == (igualdade abstrata)

    // Testa equivalência após coerção.
    // Ele tenta transformar os operandos até ficarem do mesmo tipo, seguindo regras formais (ToPrimitive, ToNumber, etc.), e só então compara.

/*
"Se valores comparados forem de tipos diferentes,
 o operador == difere do operador === por permitir a coerção antes da comparação.
 Em outras palavras, ambos comparam valores de tipos iguais,
 mas o operador == permite conversões de tipo primeiro
 e, uma vez que os tipos tenham sido convertidos para serem iguais em ambos os lados, o operador == faz o mesmo que o operador ===.
 
 Em vez de "igualdade flexível", o operador == deveria ser descrito como "igualdade coercitiva".[Traduzido]*/

    42 == "42";             // true
    1 == true;              // true

// Em ambos os casos, há, inicialmente, tipos diferentes.
// Então, o operador == converte ambos para número, para depois fazer a comparação.
// Ou seja "42" do tipo string vira 42 do tipo number; e true do tipo boolean vira 1 do tipo number.

// O operador == prefere comparações númericas primitivas.

// "Just being aware of this nature of == — that it prefers primitive numeric comparisons — helps you avoid most of the troublesome corner cases, such as staying away from a gotchas like 

    "" == 0     // [ true. Porque converte "" para númerico 0 e depois compara]

// or 

    0 == false  // [ true. Porque converte false para númerico 0 e depois compara]

// "

/*
You may be thinking, "Oh, well, I will just always avoid any coercive equality comparison (using === instead) to avoid those corner cases"! Eh, sorry, that's not quite as likely as you would hope.

There's a pretty good chance that you'll use relational comparison operators like <, > (and even <= and >=).

Just like ==, these operators will perform as if they're "strict" if the types being relationally compared already match, but they'll allow coercion first (generally, to numbers) if the types differ.
*/

/*
Consider:*/

    var arr = [ "1", "10", "100", "1000" ];
    for (let i = 0; i < arr.length && arr[i] < 500; i++) {
        // will run 3 times
    }

/*
The i < arr.length comparison is "safe" from coercion because i and arr.length are always numbers. The arr[i] < 500 invokes coercion, though, because the arr[i] values are all strings. Those comparisons thus become 1 < 500, 10 < 500, 100 < 500, and 1000 < 500. Since that fourth one is false, the loop stops after its third iteration.*/

// These relational operators typically use numeric comparisons, except in the case where both values being compared are already strings; in this case, they use alphabetical (dictionary-like) comparison of the strings:

    var x = "10";
    var y = "9";

    x < y;      // true, watch out!


// Ou seja, esses operadores preferem comparações numéricas, EXCETO QUANDO AMBOS FOREM STRING, nesses casos será uma COMPARAÇÃO ALFABÉTICA ("a" sendo "menor" que "b"...)

//-----------------------------------------------------

// Qual a ordem das regras do == ?

// Ordem conceitual das regras do == (bem direto, mas fiel à spec):

    // Mesmo tipo → compara como ===.
    // null e undefined → são iguais entre si e só.
    // Boolean → vira Number (true → 1, false → 0).
    // String ↔ Number → String vira Number.
    // Object ↔ Primitive → Object vira Primitive (valueOf → toString). [Ou seja, "Objeto, você consegue virar um primitivo?"]
    // Depois das coerções → compara os valores resultantes.

    // Se nada disso tornar os valores comparáveis → false.

// Regra mental útil:

    // == coage até cansar, depois compara.

// "Object ↔ Primitive → Object vira Primitive (valueOf → toString)". Um exemplo:

// “Se um lado é Object e o outro é Primitive, converta o Object em Primitive.”

    const a = {
        valueOf() {
            return 1
        }
    }

    a == 1   // true


// O que acontece:

    // a é Object, 1 é Number
    // Regra Object ↔ Primitive entra em ação
    // JS chama a.valueOf() → retorna 1 (primitivo)
    // Fica 1 == 1
    // Resultado: true

// Se valueOf não retornar primitivo, ele tenta toString:

    const b = {
        toString() {
            return "42"
        }
    }

    b == 42   // true

// Passo a passo do que está acontecendo na comparação b == 42, seguindo exatamente as regras do == :

// Tipos diferentes

    // b é Object, 42 é **Number`.

// Regra Object ↔ Primitive

    // JS aplica ToPrimitive(b).

// Tentativa de conversão

    // chama b.valueOf() → retorna o próprio objeto (não é primitivo)
    // chama b.toString() → retorna "42" ✅

// Nova comparação

    // A expressão vira:
        
        // "42" == 42


// Regra String ↔ Number

    // String vira Number:

        // Number("42") → 42


// Mesmo tipo

    // 42 == 42


// Resultado

    // true

// Resumo em uma frase:

    // 👉 o objeto vira string, a string vira número, os números batem.