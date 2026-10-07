# Portal TBSA pronto para publicar

## 1. Inserir o Power BI
1. Publique o relatório no Power BI Service.
2. No relatório, acesse **Arquivo > Inserir relatório > Site ou portal**.
3. Copie o link seguro de incorporação.
4. Abra `config.js` e cole o link no campo `url` da página desejada.
5. Não use **Publicar na Web** para informações internas ou confidenciais.

Exemplo:
```js
{ id: "diesel", title: "Diesel", url: "https://app.powerbi.com/reportEmbed?..." }
```

## 2. Publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Abra **Settings > Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main`, pasta `/ (root)` e salve.

## Segurança
- Este portal não contém banco de dados nem senhas.
- O link seguro do Power BI exige autenticação e respeita as permissões configuradas no Power BI.
- O site do GitHub Pages é público, mas o relatório continua protegido quando é usado o link seguro.
