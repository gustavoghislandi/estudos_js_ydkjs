/*
"Three main pillars around which the JS language is organized: 

    scope/closures, 
    prototypes/objects, 
    and types/coercion.
"
"All of JS is founded on these three foundational pillars."
*/

/*O nome foi uma jogada de marketing. Era Mocha ("When Brendan Eich first conceived of the language, he code-named it Mocha"), internamente chamavam de LiveScript, mas, por votação, JavaScript ganhou. Java era uma linguagem popular. Script era associoado a programas leves, à época. Então era para ser o 'Java da Web', só que leve.*/

/*""There are some superficial resemblances between JavaScript's code and Java code. Those similarities don't particularly come from shared development, but from both languages targeting developers with assumed syntax expectations from C (and to an extent, C++).""*/

/*Legalmente, JavaScript é uma marca registrada da Oracle (via Sun). "This trademark is almost never enforced, and likely couldn't be at this point." Esse é um dos motivos de alguns sugerire o uso de JS ao invés de JavaScript.*/

/*""Further distancing the language from the Oracle-owned trademark, the official name of the language specified by TC39 and formalized by the ECMA standards body is ECMAScript.""*/

/*Ou seja, o nome oficial mesmo é ECMAScript, desde 2016. E ela agora é nomeada com o sufixo do ano de revisão. No momento de escrita deste livro é ECMAScript 2019, ou, abreviando, ES2019.*/

/*""In other words, the JavaScript/JS that runs in your browser or in Node.js, is an implementation of the ES2019 standard.""*/

/*Ou seja, JS é a implementação do padrão ECMA (com o ano de revisão).*/

/*ChatGPT:
O padrão ECMA é um conjunto de especificações técnicas criado pela ECMA International para padronizar linguagens e tecnologias — por exemplo, o ECMAScript, que define como o JavaScript funciona.

Ele existe para padronizar: garantir que a mesma tecnologia funcione igual em diferentes sistemas e navegadores, evitando incompatibilidades e facilitando o desenvolvimento.

Antes do padrão, cada navegador implementava as tecnologias do seu jeito, o que causava incompatibilidades, bugs e retrabalho para os desenvolvedores.

Por exemplo: um script JavaScript funcionava no Internet Explorer, mas quebrava no Netscape ou no Firefox, porque cada um entendia comandos e comportamentos de forma diferente.

Havia diferenças na sintaxe (recursos que existiam num navegador e não em outro) e no interpretador (o mesmo código podia se comportar de forma diferente).
*/

/*"Don't use terms like "JS6" or "ES8" to refer to the language. Some do, but those terms only serve to perpetuate confusion. "ES20xx" or just "JS" are what you should stick to."*/

/*'"Java is to JavaScript as ham is to hamster." --Jeremy Keith, 2009'*/

/*"JS's syntax and behavior are defined in the ES specification."*/

/*"You have to get a TC39 member to champion a proposal for it to be considered "Stage 0" officially."*/

/*"Once a proposal reaches "Stage 4" status, it is eligible to be included in the next yearly revision of the language. It can take anywhere from several months to a few years for a proposal to work its way through these stages."*/

/*" All proposals are managed in the open, on TC39's Github repository: https://github.com/tc39/proposals "*/

/*"Anyone, whether on TC39 or not, is welcome to participate in these public discussions and the processes for working on the proposals. However, only TC39 members can attend meetings and vote on the proposals and changes. So in effect, the voice of a TC39 member carries a lot of weight in where JS will go."*/

/*
Quase que contrariando o ChatGPT acima:

"Contrary to some established and frustratingly perpetuated myth, there are not multiple versions of JavaScript in the wild. There's just one JS, the official standard as maintained by TC39 and ECMA.

Back in the early 2000s, when Microsoft maintained a forked and reverse-engineered (and not entirely compatible) version of JS called "JScript," there were legitimately "multiple versions" of JS. But those days are long gone. It's outdated and inaccurate to make such claims about JS today.

All major browsers and device makers have committed to keeping their JS implementations compliant with this one central specification. Of course, engines implement features at different times. But it should never be the case that the v8 engine (Chrome's JS engine) implements a specified feature differently or incompatibly as compared to the SpiderMonkey engine (Mozilla's JS engine).

That means you can learn one JS, and rely on that same JS everywhere."*/

/*" sometimes the JS engines will refuse to conform to a specification-dictated change because it would break that web content.

In these cases, often TC39 will backtrack and simply choose to conform the specification to the reality of the web. "*/

/*"For example, TC39 planned to add a contains(..) method for Arrays, but it was found that this name conflicted with old JS frameworks still in use on some sites, so they changed the name to a non-conflicting includes(..). The same happened with a comedic/tragic JS community crisis dubbed "smooshgate," where the planned flatten(..) method was eventually renamed flat(..).

But occasionally, TC39 will decide the specification should stick firm on some point even though it is unlikely that browser-based JS engines will ever conform."*/

/*"The solution? Appendix B, "Additional ECMAScript Features for Web Browsers".[^specApB] The JS specification includes this appendix to detail out any known mismatches between the official JS specification and the reality of JS on the web. In other words, these are exceptions that are allowed only for web JS; other JS environments must stick to the letter of the law."*/

/*Perceba, então, que pode haver sintaxe conflitante entre JS web (em navegadores) e JS em outros ambientes.*/

/*"Section B.1 and B.2 cover additions to JS (syntax and APIs) that web JS includes, again for historical reasons, but which TC39 does not plan to formally specify in the core of JS. Examples include 0-prefixed octal literals, the global escape(..) / unescape(..) utilities, String "helpers" like anchor(..) and blink(), and the RegExp compile(..) method"*/

/*"Section B.3 includes some conflicts where code may run in both web and non-web JS engines, but where the behavior could be observably different, resulting in different outcomes. Most of the listed changes involve situations that are labeled as early errors when code is running in strict mode."*/

/*"Appendix B gotchas aren't encountered very often, but it's still a good idea to avoid these constructs to be future safe. Wherever possible, adhere to the JS specification and don't rely on behavior that's only applicable in certain JS engine environments.
"*/

/*
Estou de cara com isso aqui...

Is this code a JS program?

alert("Hello, JS!");

Depends on how you look at things. The alert(..) function shown here is not included in the JS specification, but it is in all web JS environments. Yet, you won't find it in Appendix B, so what gives?

Various JS environments (like browser JS engines, Node.js, etc.) add APIs into the global scope of your JS programs that give you environment-specific capabilities, like being able to pop an alert-style box in the user's browser.

In fact, a wide range of JS-looking APIs, like fetch(..), getCurrentLocation(..), and getUserMedia(..), are all web APIs that look like JS. In Node.js, we can access hundreds of API methods from various built-in modules, like fs.write(..).

Another common example is console.log(..) (and all the other console.* methods!). These are not specified in JS, but because of their universal utility are defined by pretty much every JS environment, according to a roughly agreed consensus.

So alert(..) and console.log(..) are not defined by JS. But they look like JS. They are functions and object methods and they obey JS syntax rules. The behaviors behind them are controlled by the environment running the JS engine, but on the surface they definitely have to abide by JS to be able to play in the JS playground.

Most of the cross-browser differences people complain about with "JS is so inconsistent!" claims are actually due to differences in how those environment behaviors work, not in how the JS itself works.

So an alert(..) call is JS, but alert itself is really just a guest, not part of the official JS specification."
*/

/*"The term "paradigm" in programming language context refers to a broad (almost universal) mindset and approach to structuring code. "*/

/*Paradigmas comuns: Procedural (ou Procedimental ou Processual), Orientado a Objetos (paradigma de classes) e Funcional.*/

/*Procedural é de cima para baixo, com operações que quando são agrupadas são chamadas de procedimentos. */

/*OO organiza o código coletando lógica e dados juntos em unidades chamadas classes [as classes são a fôrma dos objetos, será que não seria mais certo falar de usar objetos? Porque eu posso criar objetos sem classes. Enfim, as OO baseadas em classes são as OO clássicas (as famosas), Java, C++, C#].

ChatGPT: OO não exige classes; exige objetos. Classes são uma estratégia, não uma regra.
*/

/*Funcional:
ChatGPT:

    Em programação funcional, funções são valores de primeira classe:

        podem ser passadas como argumentos,
        retornadas por outras funções,
        armazenadas em variáveis.

    Você passa “o que fazer” junto com os dados. Esse é um dos pilares do estilo funcional.
*/

/*"Paradigms are neither right nor wrong. They're orientations that guide and mold how programmers approach problems and solutions, how they structure and maintain their code."*/

/*"Some languages are heavily slanted toward one paradigm—C is procedural, Java/C++ are almost entirely class oriented, and Haskell is FP through and through."*/

/*Muitas linguagens são multi-paradigma.*/

/*JavaScript é multi-paradigma. Você pode escrever código Procedural, OO ou Funcional, misturando, linha por linha, sem ser forçado a um dos paradigmas.*/

// BACKWARDS COMPATIBILITY

/*"One of the most foundational principles that guides JavaScript is preservation of backwards compatibility. "*/

/*"Backwards compatibility means that once something is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid JS"*/

/*Isso significa que ódigo escrito em 1995, não importando se limitado ou primitivo, ainda deve funcionar hoje em dia.*/

/*"As TC39 members often proclaim, 'we don't break the web!'"*/

/*"The idea is that JS developers can write code with confidence that their code won't stop working unpredictably because a browser update is released. This makes the decision to choose JS for a program a more wise and safe investment, for years into the future."*/

/*Dificilmente se encontrará em computação tamanho esforço pela retrocompatibilidade.*/

/*"The costs of sticking to this principle should not be casually dismissed. It necessarily creates a very high bar to including changing or extending the language; any decision becomes effectively permanent, mistakes and all. Once it's in JS, it can't be taken out because it might break programs, even if we'd really, really like to remove it!"*/

// HÁ EXCEÇÕES

/*"There are some small exceptions to this rule. JS has had some backwards-incompatible changes, but TC39 is extremely cautious in doing so. They study existing code on the web (via browser data gathering) to estimate the impact of such breakage, and browsers ultimately decide and vote on whether they're willing to take the heat from users for a very small-scale breakage weighed against the benefits of fixing or improving some aspect of the language for many more sites (and users)."*/

/*Conforme o parágrafo acima, há pequenas exceções, em que se coleta dados da internet e tenta-se estimar o impacto de custo-benefício, sem quebrar a internet, óbvio, para fazer aquela pequena correção ou melhoria. Mas é algo raro, coisa que não afetaria muitos sites [não sei qual o juízo que fazem].*/

// FORWARDS COMPATIBILITY (WHICH JS IS NOT)

/*"Compare backwards compatibility to its counterpart, forwards compatibility. Being forwards-compatible means that including a new addition to the language in a program would not cause that program to break if it were run in an older JS engine. JS is not forwards-compatible, despite many wishing such, and even incorrectly believing the myth that it is."*/

/*JavaScript não é compatível com versões futura. O motor roda programas antigos (retrocompatibilidade), mas motores antigos não rodam programas futuros (compatibilidade futura).*/

/*"HTML and CSS, by contrast, are forwards-compatible but not backwards-compatible. If you dug up some HTML or CSS written back in 1995, it's entirely possible it would not work (or work the same) today. But, if you use a new feature from 2019 in a browser from 2010, the page isn't "broken" -- the unrecognized CSS/HTML is skipped over, while the rest of the CSS/HTML would be processed accordingly." [Digamos que é uma compatibilidade futura, mas nem tanto. A menos que consideremos isso a partir de HTML5 e CSS3. Aí faz mais sentido.]*/

/*"It may seem desirable for forwards-compatibility to be included in programming language design, but it's generally impractical to do so. Markup (HTML) or styling (CSS) are declarative in nature, so it's much easier to "skip over" unrecognized declarations with minimal impact to other recognized declarations."*/

/*Ou seja, em linguagens declarativas é mais fácil fazer compatibilidade futura. Enquanto fica menos difícil fazer retrocompatibilidade em linguagem imperativa.*/

/*"But chaos and non-determinism would ensue if a programming language engine selectively skipped statements (or even expressions!) that it didn't understand, as it's impossible to ensure that a subsequent part of the program wasn't expecting the skipped-over part to have been processed."*/

/*"Though JS isn't, and can't be, forwards-compatible, it's critical to recognize JS's backwards compatibility, including the enduring benefits to the web and the constraints and difficulties it places on JS as a result."*/

/*"Since JS is not forwards-compatible, it means that there is always the potential for a gap between code that you can write that's valid JS, and the oldest engine that your site or application needs to support. If you run a program that uses an ES2019 feature in an engine from 2016, you're very likely to see the program break and crash."*/

/*"If the feature is a new syntax, the program will in general completely fail to compile and run, usually throwing a syntax error. If the feature is an API (such as ES6's Object.is(..)), the program may run up to a point but then throw a runtime exception and stop once it encounters the reference to the unknown API.

Does this mean JS developers should always lag behind the pace of progress, using only code that is on the trailing edge of the oldest JS engine environments they need to support? No!

But it does mean that JS developers need to take special care to address this gap."*/

/*"For new and incompatible syntax, the solution is transpiling. Transpiling is a contrived and community-invented term to describe using a tool to convert the source code of a program from one form to another (but still as textual source code). Typically, forwards-compatibility problems related to syntax are solved by using a transpiler (the most common one being Babel (https://babeljs.io)) to convert from that newer JS syntax version to an equivalent older syntax."*/

/*"For example, a developer may write a snippet of code like:*/

if (something) {
    let x = 3;
    console.log(x);
}
else {
    let x = 4;
    console.log(x);
}

/*
"This is how the code would look in the source code tree for that application. But when producing the file(s) to deploy to the public website, the Babel transpiler might convert that code to look like this:""
*/

var x$0, x$1;
if (something) {
    x$0 = 3;
    console.log(x$0);
}
else {
    x$1 = 4;
    console.log(x$1);
}

/*"The original snippet relied on let to create block-scoped x variables in both the if and else clauses which did not interfere with each other. An equivalent program (with minimal re-working) that Babel can produce just chooses to name two different variables with unique names, producing the same non-interference outcome."*/

// Em JS antigo (ES5), não existe escopo de bloco, só escopo de função (var).
// O $ é só um caractere válido em nomes de variáveis JS, e Babel usa ele como marcador interno para gerar nomes únicos sem risco de colisão.

/*
ChatGPT:

x → nome original

$0, $1 → sufixos gerados automaticamente

$ é escolhido porque:
    é válido em JS
    quase ninguém usa $0 manualmente
    reduz chance de conflito
    é fácil para o compilador identificar

Por que não x1, x2?

    Poderia, mas:
        x1 é comum em código humano
        maior chance de colisão
        $ funciona como "isso foi gerado pelo compilador"
*/

/*
Os engines antigos geralmente estão em:

1. Browsers antigos (o caso clássico)
        Exemplos:
            Internet Explorer 11 (não suporta let direito)
            IE10, IE9, etc.
            Browsers antigos de Android
            Browsers embutidos em TVs, consoles, carros, etc.

Se o seu site precisava rodar nesses ambientes, Babel era essencial.

2. Ambientes corporativos “congelados”

    Muito comum em empresas grandes:

        Máquinas presas a:
            Windows antigo
            IE11
            versões antigas de Chrome/Edge
            Sistemas internos que não podem atualizar o browser

Esses ambientes ainda existiam bastante até ~2020 (e alguns ainda hoje).

3. Engines JS fora do browser

    Não é só browser que roda JS:

        Node.js antigo
            Ex: Node 6, 8, 10
        Engines embutidas
        Electron antigo
        WebViews antigos
        Sistemas embarcados

Se o runtime for antigo, ele também não entende ES6+.*/

/*"You may wonder: why go to the trouble of using a tool to convert from a newer syntax version to an older one? Couldn't we just write the two variables and skip using the let keyword? The reason is, it's strongly recommended that developers use the latest version of JS so that their code is clean and communicates its ideas most effectively."*/

/*Como dito acima, é fortemente recomendado usar a última versão de JavaScript (acho que ele se refere ao ES6, que foi uma grande mudança), para que o código fique mais limpo e os devs comuniquem ideias (via código) de maneira mais efetiva.

Os devs tem que se preocupar em escrever código limpo. As forward-compatibility devem ser gerenciadas pelas ferramentas, não pelos devs.
*/

/*Um exemplo de compatibilidade relatado no livro, que precisa de polyfill é a propriedade 'finally' da Promise, que só foi incluída no ES2019.

E aí ele fala que, ao usar o 'if (!Promise.prototype.finally)', isso faz com que em ambientes antigos isso seja adicionado, e nos novos isso seja sutilmente pulado ("quietly skipped").
*/

// "Transpilers like Babel typically detect which polyfills your code needs and provide them automatically for you. But occasionally you may need to include/define them explicitly".

/*"Always write code using the most appropriate features to communicate its ideas and intent effectively. In general, this means using the most recent stable JS version. Avoid negatively impacting the code's readability by trying to manually adjust for the syntax/API gaps. That's what tools are for!"

Ou seja (traduzido):

IMPORTANTE:
Sempre escreva o código utilizando os recursos mais apropriados para comunicar suas ideias e intenções de forma eficaz. Em geral, isso significa usar a versão estável mais recente do JavaScript. Evite prejudicar a legibilidade do código tentando ajustar manualmente as lacunas de sintaxe/API. Para isso que existem ferramentas!

*/

/*"Transpilation and polyfilling are two highly effective techniques for addressing that gap between code that uses the latest stable features in the language and the old environments a site or application needs to still support. Since JS isn't going to stop improving, the gap will never go away. Both techniques should be embraced as a standard part of every JS project's production chain going forward.
"

Basicamente, transpilação e polipreenchimento sempre irão existir, porque o JS provavelmente sempre irá evoluir. 

Então, ambas as técnicas devem ser acolhidas como protocolo padrão da cadeia de produção de projetos JS.
*/

/*Sobre o JS ser interpretado (ou não):

    No passado, muitos olhavam linguagens interpretadas (de script) como inferiores, por perceberem que há uma falta de otimização de performance e por não gostarem de certas características dessas linguagens, como tipagem dinâmica, diferentemente do que ocorre nas "linguagens mais maduras" estaticamente tipadas.

    Linguagens tidas como "compiladas" geralmente produzem um programa binário que servirá para execução.
    Como o JS não faz isso, muitos consideram que isso o desqualifica da categoria.
    Na realidade, isso tem ficado cada vez menos relevante nas últimas décadas, pois o "executável" de um programa tem acontecido em formatos mais variados.

    Essas alegações desinformadas e críticas devem ser deixadas de lado.

    O verdadeiro motivo a ser levado em conta para saber se JS é interpretado ou compilado é:

        A FORMA COMO OS ERROS SÃO TRATADOS (ERROR HANDLING).

    Historicamente, linguagens de script ou interpretadas eram executadas geralmente de cima para baixo e linha por linha; normalmente não havia uma passagem inicial pelo programa para processá-lo antes do início da execução.

    Nas linguagens interpretadas um erro na linha 5 não será descoberto até as linhas de 1 a 4 já term sido executadas.

    Todas as linguagens compiladas são "parsed" (sofrem análise sintática). Ou seja, leem/analisam o código antes de executá-lo. Então, um erro na linha 5 faria com que o programa inteiro não fosse executado. Para erros de sintaxe é bom pegá-los antes de qualquer execução fadada ao fracasso.

    Na teoria clássica de compilação, a última etapa após a análise sintática é a geração de código: produzir uma forma executável.

    "Once any source program has been fully parsed, it's very common that its subsequent execution will, in some form or fashion, include a translation from the parsed form of the program—usually called an Abstract Syntax Tree (AST) [Árvore de Sintaxe Abstrata] —to that executable form."

    "In other words, parsed languages usually also perform code generation before execution, so it's not that much of a stretch to say that, in spirit, they're compiled languages." 

    "JS source code is parsed before it is executed.
    
    The specification requires as much, because it calls for "early errors"—statically determined errors in code, such as a duplicate parameter name—to be reported before the code starts executing. Those errors cannot be recognized without the code having been parsed."

    "So JS is a parsed language, but is it compiled? The answer is closer to yes than no.
    
    The answer is closer to yes than no. The parsed JS is converted to an optimized (binary) form, and that "code" is subsequently executed (Figure 2); the engine does not commonly switch back into line-by-line execution (like Figure 1) mode after it has finished all the hard work of parsing—most languages/engines wouldn't, because that would be highly inefficient.

    To be specific, this "compilation" produces a binary byte code (of sorts), which is then handed to the "JS virtual machine" to execute. Some like to say this VM is "interpreting" the byte code. But then that means Java, and a dozen other JVM-driven languages, for that matter, are interpreted rather than compiled. Of course, that contradicts the typical assertion that Java/etc are compiled languages.
    "
*/

/*"Another wrinkle is that JS engines can employ multiple passes of JIT (Just-In-Time) processing/optimization on the generated code (post parsing), which again could reasonably be labeled either "compilation" or "interpretation" depending on perspective."*/

/*"[...]The entire flow of a JS source program:

    After a program leaves a developer's editor, it gets transpiled by Babel, then packed by Webpack (and perhaps half a dozen other build processes), then it gets delivered in that very different form to a JS engine.

    The JS engine parses the code to an AST.

    Then the engine converts that AST to a kind-of byte code, a binary intermediate representation (IR), which is then refined/converted even further by the optimizing JIT compiler.

    Finally, the JS VM executes the program.""
    
    No livro tem o desenho "Fig. 3: Parsing, Compiling, and Executing JS".


    */

/*"Is JS handled more like an interpreted, line-by-line script, as in Figure 1, or is it handled more like a compiled language that's processed in one-to-several passes first, before execution (as in Figures 2 and 3)?

I think it's clear that in spirit, if not in practice, JS is a compiled language.

And again, the reason that matters is, since JS is compiled, we are informed of static errors (such as malformed syntax) before our code is executed. That is a substantively different interaction model than we get with traditional "scripting" programs, and arguably more helpful!"

    Como é possível notar, o autor considera JS UMA LINGUAGEM COMPILADA, porque o JS é capaz de encontrar erros (como de sintaxe mal formada) antes de executar o código, o que é bem diferente de 'linguagens de script'.

    Particularmente, considero o ponto de vista que o ChatGPT trouxe e coloquei no arquivo 'Java_compilado_&_JS_interpretado.js'

    Aqui, abaixo, um ponto de vista do ChatGPT comparando os dois pontos de vista e dando o dele:

        Vamos separar bem:

        Erros detectados antes da execução:

            JS faz parsing e encontra certos erros “estáticos” antes de rodar (como sintaxe inválida ou parâmetros duplicados).

            Mas isso não significa que ele seja compilado no sentido clássico. Mesmo compiladores “reais” também detectam apenas erros que podem ser verificados estaticamente. Outras falhas (tipo undefined em runtime) só aparecem durante a execução.

            Então, a detecção de erros não é o critério definitivo de compilação.

        Código gerado (bytecode):

        Em JS, o bytecode é dinâmico e específico da engine, gerado durante a execução pelo JIT.

        Em linguagens compiladas “tradicionais” como Java, o bytecode é fixo, distribuível e reutilizável, criado antes da execução.

        Esse é o ponto-chave: se você precisa de um passo de pré-compilação estável para considerar a linguagem “compilada”, JS não se encaixa.

        ✅ Resumo do meu ponto de vista:
        JS não é compilado no sentido clássico, apesar de internamente passar por parsing e gerar bytecode, porque esse bytecode é temporário e específico da engine. A detecção de erros antes de rodar é uma consequência do parsing, não prova de compilação “real”. Ele é melhor descrito como uma linguagem interpretada com otimizações JIT.


        --- Eu: Então você não considera que parsing é igual a compilar

            Exato — eu não considero parsing igual a compilar.

            O parsing é uma etapa dentro do processo de compilação, mas por si só não produz código executável reutilizável nem “finalizado” — ele só transforma o código-fonte em uma estrutura intermediária (geralmente a AST) que a engine pode analisar.

            Para que seja compilação de fato, precisa existir:

            Geração de código intermediário ou binário que possa ser executado (bytecode ou nativo).

            Esse código ser estável ou reutilizável, não algo temporário criado dinamicamente apenas durante a execução.

            JS moderno faz parsing e até gera bytecode JIT, mas:

            O bytecode não é fixo nem distribuível.

            Ele existe apenas dentro do runtime e é descartado quando a execução termina.

            Então, parsing é uma parte do caminho para a compilação, mas não é compilação por si só.

"*/

// Web Assembly (WASM)

/*Desempenho sempre foi uma preocupação com JS.

Em 2013, engenheiros da Mozilla Firefox fizeram uma adaptação do motor de jogo do jogo Unreal 3, de C para JS. Rodou a 60fps. Isso funcionou porque o código do motor do Unreal usava um estilo de código que favorecia um subconjunto da linguagem JS, nomeado de 'ASM.js'.

Isso era uma das maneiras de tentar melhorar a performance do Runtime do JS.

Nunca foi intenção que os devs codassem assim, isso é um ferramental, a ideia era colocar como ferramental de transpilação para melhorar desempenho.

Anos depois, outro grupo de engenheiros, inicialmente da Mozilla, lançaram o Web Assembly (WASM).
*/

/*"WASM is similar to ASM.js in that its original intent was to provide a path for non-JS programs (C, etc.) to be converted to a form that could run in the JS engine. Unlike ASM.js, WASM chose to additionally get around some of the inherent delays in JS parsing/compilation before a program can execute, by representing the program in a form that is entirely unlike JS."*/

/*"WASM is a representation format more akin to Assembly (hence, its name) that can be processed by a JS engine by skipping the parsing/compilation that the JS engine normally does. The parsing/compilation of a WASM-targeted program happen ahead of time (AOT); what's distributed is a binary-packed program ready for the JS engine to execute with very minimal processing."*/

/*"WASM is additionally motivated by the desire to bring more parity for non-JS languages to the web platform. For example, if a language like Go supports threaded programming, but JS (the language) does not, WASM offers the potential for such a Go program to be converted to a form the JS engine can understand, without needing a threads feature in the JS language itself."*/

/*"In other words, WASM relieves the pressure to add features to JS that are mostly/exclusively intended to be used by transpiled programs from other languages. That means JS feature development can be judged (by TC39) without being skewed by interests/demands in other language ecosystems, while still letting those languages have a viable path onto the web."*/

// O WASM está evoluindo para se tornar semelhante a uma VM, que onde os programamas compilados poderiam rodar em diversos ambientes.

/*"WASM is evolving to become a cross-platform virtual machine (VM) of sorts, where programs can be compiled once and run in a variety of different system environments."*/

// Olha que interessante, o WASM não roda em JS porque precisa de linguagem de tipagem estática, mas mesmo o TS não serve para os propósitos. A variante de JS, AssemblyScript, está tentando ocupar esse lugar:

/*"So, WASM isn't only for the web, and WASM also isn't JS. Ironically, even though WASM runs in the JS engine, the JS language is one of the least suitable languages to source WASM programs with, because WASM relies heavily on static typing information. Even TypeScript (TS)—ostensibly, JS + static types—is not quite suitable (as it stands) to transpile to WASM, though language variants like AssemblyScript are attempting to bridge the gap between JS/TS and WASM."*/

/*"This book isn't about WASM, so I won't spend much more time discussing it, except to make one final point. Some folks have suggested WASM points to a future where JS is excised from, or minimized in, the web. These folks often harbor ill feelings about JS, and want some other language—any other language!—to replace it. Since WASM lets other languages run in the JS engine, on its face this isn't an entirely fanciful fairytale.

But let me just state simply: WASM will not replace JS. WASM significantly augments what the web (including JS) can accomplish. That's a great thing, entirely orthogonal to whether some people will use it as an escape hatch from having to write JS.
#
"*/

// WASM não veio para substituir o JavaScript, mas para expandir o que a web pode fazer junto com ele.
// Ele permite usar outras linguagens por performance ou necessidade, sem tirar o JS do centro da web.

// Strict-mode

// A ideia é ter um guia para uma forma de codar que vise o melhor desempenho de otimização ao rodar o código JS. Não para restringir o que pode ser feito.

/*"Most strict mode controls are in the form of early errors, meaning errors that aren't strictly syntax errors but are still thrown at compile time (before the code is run). For example, strict mode disallows naming two function parameters the same, and results in an early error. Some other strict mode controls are only observable at runtime, such as how this defaults to undefined instead of the global object."*/

/*"strict mode is like a linter reminding you how JS should be written to have the highest quality and best chance at performance."*/

/*" If you find yourself feeling handcuffed, trying to work around strict mode, that should be a blaring red warning flag that you need to back up and rethink the whole approach"*/

// Maneira de entrar no modo estrito:

/*

"Strict mode is switched on per file with a special pragma (nothing allowed before it except comments/whitespace):"

    // only whitespace and comments are allowed
    // before the use-strict pragma
    "use strict";
    // the rest of the file runs in strict mode


*/

/*"WARNING:
Something to be aware of is that even a stray ; all by itself appearing before the strict mode pragma will render the pragma useless; no errors are thrown because it's valid JS to have a string literal expression in a statement position, but it also will silently not turn on strict mode!"*/

// Também é possível colocar o modo estrito em escopo de função:

/*Strict mode can alternatively be turned on per-function scope, with exactly the same rules about its surroundings:

function someOperations() {
    // whitespace and comments are fine here
    "use strict";

    // all this code will run in strict mode
}
*/

/*"Interestingly, if a file has strict mode turned on, the function-level strict mode pragmas are disallowed. So you have to pick one or the other."*/

// Ou seja, você precisa escolher um modo estrito no arquivo ou no escopo de função.

/*"The only valid reason to use a per-function approach to strict mode is when you are converting an existing non-strict mode program file and need to make the changes little by little over time. Otherwise, it's vastly better to simply turn strict mode on for the entire file/program."*/

/*"Many have wondered if there would ever be a time when JS made strict mode the default? The answer is, almost certainly not. As we discussed earlier around backwards compatibility, if a JS engine update started assuming code was strict mode even if it's not marked as such, it's possible that this code would break as a result of strict mode's controls."*/

// Por conta da backwards compatibility, modo strito provavelmente nunca será o padrão.

// Entretanto, todo código transpilado acaba ficando em modo estrito.

/*"Moreover, a wide shift is happening toward more/most new JS code being written using the ES6 module format. ES6 modules assume strict mode, so all code in such files is automatically defaulted to strict mode."*/

// Acaba, então, que o modo estrito é o padrão de fato, apesar de tecnicamente não ser o padrão oficial.

/*RESUMO DO CAPÍTULO 1 [Traduzido pelo Google Tradutor]:

JavaScript é uma implementação do padrão ECMAScript (versão ES2019 na data desta publicação), que é guiado pelo comitê TC39 e hospedado pela ECMA. Ele roda em navegadores e outros ambientes JavaScript, como o Node.js.

JavaScript é uma linguagem multiparadigma, o que significa que sua sintaxe e recursos permitem que um desenvolvedor combine (e adapte!) conceitos de vários paradigmas principais, como procedural, orientado a objetos (OO/classes) e funcional (FP).

JavaScript é uma linguagem compilada, o que significa que as ferramentas (incluindo o mecanismo JavaScript) processam e verificam um programa (relatando quaisquer erros!) antes de sua execução.

Com nossa linguagem agora definida, vamos começar a conhecer seus detalhes.

[^specApB]: Especificação da Linguagem ECMAScript 2019, Apêndice B: Recursos Adicionais do ECMAScript para Navegadores Web, https://www.ecma-international.org/ecma-262/10.0/#sec-additional-ecmascript-features-for-web-browsers (versão mais recente até a data desta publicação, janeiro de 2020)
*/

// A parte da compilação pode ser questionada, sendo o JS uma linguagem interpretada porque compilada implicaria que o executável rodasse em qualquer outro motor, mas não, ele não é 'transportável' nesse sentido, como visto acima e outros arquivos que escrevi aqui como em Java_compilado_&_JS_interpretado.js