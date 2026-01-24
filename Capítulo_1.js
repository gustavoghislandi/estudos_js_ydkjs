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

/**/

/**/

/**/

/**/

/**/

/**/

/**/

/**/

/**/

/**/

/**/
