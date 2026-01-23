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

/**/

/**/

/**/

/**/

/**/
