# Síntese rápida

## BACKWARDS COMPATIBILITY (Retrocompatibilidade)

- Um motor futuro consegue rodar código antigo.
- É mais compatível com linguagens imperativas, em que você diz como algo deve ser feito, você diz os caminhos.  
  Ainda assim, o JS sendo imperativo, por conta do esforço do TC39, acaba tendo retrocompatibilidade.

## FORWARDS COMPATIBILITY (Compatibilidade futura)

- Um motor antigo consegue rodar código futuro.
- É mais compatível com linguagens declarativas, em que você diz o que deve ser feito, mas o motor decide como atuar.
- Funciona para linguagem interpretada. Não funciona para compiladores, porque quebraria ao tentar rodar código desconhecido.  
  Já o interpretador consegue "ignorar" algo assim.

---

**Backward compatibility:** o código antigo funciona em motores novos, geralmente porque nada da base da linguagem mudou.

**Forward compatibility:** o código novo funciona em motores antigos apenas se o motor puder ignorar ou adaptar instruções desconhecidas.  
  Linguagens declarativas tolerantes (HTML/CSS) conseguem isso; linguagens compiladas típicas não.

---

## Tabela de comparação

| Linguagem / Tipo      | Interpretada / Compilada                     | Backward Compatibility                             | Forward Compatibility                                           | Observações                                                                                                                    |
| --------------------- | -------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| JavaScript            | Interpretada (motor: V8, SpiderMonkey, etc.) | ✅ Um motor moderno roda código antigo              | ❌ Um motor antigo não entende recursos novos                    | Backward funciona porque motores modernos mantêm suporte a código antigo. Forward falha se o motor não conhece recursos novos. |
| HTML / CSS            | Interpretada por browser                     | ✅ Navegadores modernos interpretam páginas antigas | ✅ Navegadores antigos ignoram tags/propriedades desconhecidas   | Funciona bem como exemplo de forward compatibility tolerante; motor interpreta o que conhece e ignora o resto.                 |
| C (compilada)         | Compilada                                    | ✅ Compiladores novos compilam código antigo        | ❌ Compiladores antigos não compilam código novo                 | Forward falha porque o compilador precisa conhecer toda a sintaxe/regras antes de gerar código.                                |
| SQL (declarativa)     | Interpretada / engine de query               | ✅ Engines modernas processam queries antigas       | ❌ Engines antigas podem não suportar funções ou cláusulas novas | Forward falha se o engine não conhece recursos novos, mas backward funciona porque queries antigas ainda são válidas.          |
