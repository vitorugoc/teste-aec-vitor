# Teste AeC

## Visão Geral

Este é um projeto React desenvolvido em TypeScript, empacotado em contêineres Docker e gerenciado pelo Docker Compose. Inclui também testes automatizados que podem ser executados usando `npm test`.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v14.0.0 ou superior)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuração do Ambiente de Desenvolvimento

1. **Clone o Repositório:**
   ```bash
   git clone git@github.com:vitorugoc/teste-aec-vitor.git
   cd teste-aec-vitor
   ```

2. **Instale as Dependências: (Esse passo pode ser ignorado caso queira executar apenas pelo Docker)** 
   ```bash
   npm install
   ```

## Desenvolvimento Local

Para iniciar o servidor de desenvolvimento local:

```bash
npm start
```

A aplicação estará acessível em [http://localhost:4000](http://localhost:4000).

## Docker e Docker Compose

Este projeto utiliza Docker para encapsular a aplicação. O Docker Compose é usado para orquestrar os contêineres.


### Iniciar os Contêineres

```bash
docker-compose up
```

A aplicação estará disponível em [http://localhost:4000](http://localhost:4000).

### Parar os Contêineres

```bash
docker-compose down
```

## Testes

Os testes automatizados são escritos utilizando [Jest](https://jestjs.io/) e [React Testing Library](https://testing-library.com/react/).

### Executar Testes

```bash
npm test
```

Isso iniciará a execução dos testes e exibirá os resultados no console.
