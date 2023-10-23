
# React Store - Back End

O Backend da aplicação foi construido como uma API Restfull em NodeJs e com o Fastify para a criação do servidor web.

## Iniciando o projeto

Para iniciar esse projeto, é preciso instalar todas as dependencias que o projeto possui, para isso deve-se executar o script abaixo: 

```bash
  npm init -y

  npm i
```

Após instalação das dependencias, é possivel rodar o projeto com:
```bash
  npm start
```
## Descritivo da aplicação

O react store em sua essencia é uma loja virtual onde clientes podem realizar cadastros na aplicação, realizar compras a produtos persistidos em nossa base de dados e fornecer informações ao cliente sobre seus dados pessoais e compras anteriores. Foi tambem implementado operações para criação de produtos em estoque e de atualização de produtos, para usuarios que são administradores.

Podemos listar como requesitos do nosso sistema:

| Requesito   |  Descrição                |
| :---------- | :------------------------ |
| `Cadastrar um novo usuario` | `Todos os componentes React utilizados na aplicação estão inseridos aqui` |
| `Logar o usuario na aplicação` | `Nesta aplicação foi utilizado apenas um contexto para prover autenticação a toda aplicação` |
| `Listar os dados do usuario` | `Funcionalidade de realizar requisições GET para o backend` |  
| `Listar compras de um usuario` | `Na aplicação existem 2 principais rotas: Admin e Padrão, aqui estão os layouts para cada rota filha se basear` |  
| `Realizar uma compra de produto` | `Configurações de dependecias do Axios e do Supabase (servidor de imagens)` |  
| `Listar produtos` | `Todas as paginas .TSX estão inseridos aqui` |  
| `Exibir detalhes de algum produto` | `Todas as paginas .TSX estão inseridos aqui` |  
| `Criar novo produto` | `Todas as paginas .TSX estão inseridos aqui` | 
| `Atualizar informações do produto` | `Todas as paginas .TSX estão inseridos aqui` | 
| `Deletar produto` | `Todas as paginas .TSX estão inseridos aqui` | 

## Documentação da API
Com as informações de requisitos funcionais de nossa aplicação em mente, os endpoints e controllers criados no backend seguem a seguinte estrutura:

| Rota   |  Descrição                |
| :---------- | :------------------------ |
| `GET  /products` | `Todos os componentes React utilizados na aplicação estão inseridos aqui` |
| `POST /product` | `Nesta aplicação foi utilizado apenas um contexto para prover autenticação a toda aplicação` |
| `PUT  /product/:id` | `Funcionalidade de realizar requisições GET para o backend` |  
| `DELETE /product/:id` | `Na aplicação existem 2 principais rotas: Admin e Padrão, aqui estão os layouts para cada rota filha se basear` |  
| `POST /register` | `Configurações de dependecias do Axios e do Supabase (servidor de imagens)` |  
| `POST /login` | `Todas as paginas .TSX estão inseridos aqui` |  
| `POST /buy` | `Todas as paginas .TSX estão inseridos aqui` |  
| `POST /user/recover` | `Todas as paginas .TSX estão inseridos aqui` | 
| `GET /user/:id/profile` | `Todas as paginas .TSX estão inseridos aqui` | 
| `GET /user/:id/requests` | `Todas as paginas .TSX estão inseridos aqui` | 
## Stack utilizada

**Back-end:** Node, SQLite, Typescript

**Demais tecnologias:** Prisma ORM, Autenticação JWT, bcrypt, Fastify

