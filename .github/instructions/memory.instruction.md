---
applyTo: '**'
---

# Memory Bank: Análise de Uso Zephyr + Re.Pack

## Resumo da análise
- O projeto está usando corretamente o wrapper `withZephyr` na configuração do Rspack.
- O uso de `Repack.defineRspackConfig` está alinhado com as recomendações para ESM/TypeScript.
- O plugin `ModuleFederationPluginV2` está configurado corretamente, com `name`, `filename`, `dts`, `exposes` e `shared`.
- O método `getSharedDependencies()` está sendo utilizado para dependências compartilhadas, conforme boas práticas.
- O plugin principal do Re.Pack (`RepackPlugin`) está presente.
- O loader e regras de transformação JS/TSX estão corretos para React Native.

## Pontos avançados
- Para builds multiplataforma, pode-se usar placeholders como `${platform}` em URLs/remotes e `[platform]` em `resolve.extensions` ou `output.path`.
- O parâmetro `shared: getSharedDependencies()` pode aceitar opções como `{ eager: true }` ou `{ eager: STANDALONE }` dependendo do contexto (host/provider).

## Checklist de conformidade
- [x] Uso do wrapper `withZephyr` na configuração
- [x] Uso do `Repack.defineRspackConfig` para ESM/TS
- [x] Configuração correta do `ModuleFederationPluginV2`
- [x] Uso de `getSharedDependencies` para dependências compartilhadas
- [x] Plugins principais do Re.Pack presentes
- [x] Loader e regras de transformação JS/TSX corretos

## Referências
- [Re.Pack docs: Configuration](https://re-pack.dev/docs/guides/configuration)
- [Zephyr Repack Plugin na NPM](https://www.npmjs.com/package/zephyr-repack-plugin)
- [Zephyr docs: Re.Pack integration](https://docs.zephyr-cloud.io/bundlers/repack)

## Observação
Este memory-bank deve ser mantido presente no agente beastmode para futuras consultas e revisões de configuração.
