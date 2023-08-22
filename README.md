## O que foi feito:

- Desenvolvido 22 scripts de teste
- Podem ser executados em ambos os navegadores do runner do cypress (Electron ou Edge)

## Arquitetura do Projeto - Cypress

- Interpretador Js - [Node.js - 20.5.1](https://nodejs.org/en/download)

- Ambiente de desenvolvimento - [Visual Studio Code](https://code.visualstudio.com)

- Linguagem de desenvolvimento - [JavaScript](https://www.javascript.com)

- Ferramenta de testes automatizados - [Cypress - 12.17.4](http://cypress.io)

## Como executar o projeto

 1. Instalar o Node JS
 2. Instalar Cypress 12.17.4 (npm install cypress@12.17.4), na publicação desse projeto 12.17.4 era a última versão do cypress disponível.
 3. Instalar VSCode
 4. Navegar no terminal até a pasta do projeto

#### 1ª Forma de execução: Atraves do runner do Cypress

```
npx cypress open
```

- Irá abrir a interface do runner
- Clicar em E2E Testing
- Selecionar o navegador (Edge ou Electron)
- Clicar em Start E2E Testing

Clicar no spec que deseja executar e aguardar a execução

#### 2º Forma - Através do Terminal

```
npx cypress run --spec "cypress/e2e/**/*.js"
```

- Irá executar todos os testes da pasta e2e, gerar os vídeos da execução na pasta /support/videos e dar um report de execução no terminal.

Obs.: Nas versões mais antigas do cypress na tela interativa do runner havia a opção "Run all specs" porém aparentemente foi removida da versão atual sendo possível executar todos de uma vez somente pelo comando acima.
    
## Arquitetura:

-  `e2e:` Local onde ficam os testes que foram realizados.
-  `support:` Local onde ficam as  `pages` com os mapeamentos dos elementos e métodos.
-  `videos:` Local onde são salvos os vídeos dos testes executados.
-  `cypress.config.js:` Arquivo onde fica a URL base para ser utilizada nos testes.
- `constants.js:` Local onde ficam as constantes (usuários, senhas, etc).
-  `package-lock.json:` Arquivo que estão informações detalhadas sobre as dependências utilizadas no projeto.
-  `package.json:` Arquivo que armazena informações, configurações e scripts de execuções do projeto
  
## Configurando propriedades importantes para execução dos testes funcionais:

- Alterar arquivo cypress.config.js com a url base da aplicação testada, no nosso caso

```
baseUrl: 'https://www.saucedemo.com/v1/'
```

- Ajustar arquivo constants.js caso o username ou password de algum usuário for modificado após a publicação desse projeto.

