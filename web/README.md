
# React Store - Front End

Essa aplicação foi construida com react e vite, aqui nesta pasta encontra-se todos os componentes, paginas, contextos e hooks usados no frontend da aplicação React Store.

## Iniciando o projeto

Para iniciar esse projeto, é preciso instalar todas as dependencias que o projeto possui, para isso deve-se executar o script abaixo: 

```bash
  npm init -y

  npm i
```

Após instalação das dependencias, é possivel rodar o projeto com:
```bash
  npm run dev
```
## Estrutura da aplicação

Ao construir essa aplicação, o modelo usado para estruturar arquivos e seguir um padrão foi apostar em um modelo que segrega por pastas arquivos puramente por seu objetivo

| Parâmetro   |  Descrição                |
| :---------- | :------------------------ |
| `Components` | `Todos os componentes React utilizados na aplicação estão inseridos aqui` |
| `Contexts` | `Nesta aplicação foi utilizado apenas um contexto para prover autenticação a toda aplicação` |
| `Hooks` | `Funcionalidade de realizar requisições GET para o backend` |  
| `Layout` | `Na aplicação existem 2 principais rotas: Admin e Padrão, aqui estão os layouts para cada rota filha se basear` |  
| `Lib` | `Configurações de dependecias do Axios e do Supabase (servidor de imagens)` |  
| `Pages` | `Todas as paginas .TSX estão inseridos aqui` |  


## Stack utilizada

**Front-end:** React, React-Router DOM, Typescript

**Demais tecnologias:** Axios, Supabase, Lucide React 

