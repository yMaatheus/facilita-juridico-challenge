## ✏ Sobre o projeto
Sistema de gerenciamento de clientes para uma empresa que realiza limpeza em residências, onde além de cadastrar e listar os clientes é necessário calcular a rota de atendimento mais otimizada para visitação.

## 🎨 Layout
![Animação](customers-management-preview.gif)

## 🛠 Tecnologias
- [TypeScript](https://www.typescriptlang.org/) - ^5
- [Docker](https://www.docker.com/) - 25.0.3
- [React](https://react.dev/) - ^18
- [Next.js](https://nextjs.org/) - 14.1.3
- [Node.js](https://nodejs.org/en/) - 20.11.1
- [Fastify](https://fastify.dev/) - ^4.26.2
- [Postgres](https://www.postgresql.org/) - 16.2

## 🚀 Como executar o projeto
### Requisitos
- Necessário ter em sua maquina as ferramentas: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com/) (opcional);
- Baixar um editor de texto para executar os codigos como [VSCode](https://code.visualstudio.com/);
- Ter o banco de dados [Postgres](https://www.postgresql.org/) em seu computador **OBS: Esse passo não é necessário se você já tiver o [Docker](https://www.docker.com/)**;
- Após o editor de texto aberto rodar no console npm install para instalar todas as dependencias.

### 🎲 Rodando o Front End e o Back End
```bash
# Clone este repositório
$ git clone https://github.com/yMaatheus/facilita-juridico-challenge

# Instale as dependências
$ npm install dentro das pastas client e server

# Configure as variaveis de ambiente
$ Na pasta client crie um arquivo .env.local e defina a variável NEXT_PUBLIC_API_BASE_URL,
$ apontando para o URL do backend. O URL padrão é http://localhost:3333

$ Na pasta server crie um arquivo .env e defina a variável DATABASE_URL apontando para o banco de dados.
$ Caso use docker o padrão é: postgresql://postgres:docker@localhost:5432/customer_management

# Execute a aplicação backend
## Com docker:
$ Caso queira utilizar apenas o banco de dados dockerizado use: docker compose up -d postgres
$ docker compose up -d

## Sem docker:
$ npm run dev dentro da pasta server

# Execute a aplicação frontend
$ npm run dev dentro da pasta client

# Popule o banco de dados
$ Na pasta server execute: npm run db:seed para adicionar dados ao banco de dados

# O servidor Frontend inciará na porta:3000 - acesse http://localhost:3000
# O servidor Backend inciará na porta:3333
```
