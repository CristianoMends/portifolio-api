<h1 align="center">Portifolio API</h1>

### **Introdução**

Este repositório contém o código-fonte da API REST desenvolvida para gerenciar informações do portfólio. Essa API permite a criação, leitura e exclusão de dados relacionados a projetos, habilidades, experiências e outras informações relevantes.

<div align="center">
    <a href="#tech">Tecnologias</a> ◽ 
    <a href="#func">Funcionalidades</a> ◽ 
    <a href="#obj">Objetivo</a> ◽ 
    <a href="#how">Como rodar</a>
</div>

<h2 id="tech"> Tecnologias Utilizadas </h2>

* **Node.js:** Ambiente de execução JavaScript.
* **NestJS:** Framework para construir aplicações Node.js escaláveis.
* **TypeORM:** ORM para TypeScript e JavaScript.
* **VercelBlob:** Storage para armazenamento de imagens.
* **PostgreSQL:** Banco de dados relacional.
  
<h2 id="func"> Funcionalidades </h2>

* **Projetos:** Crie e delete seus projetos, incluindo informações como nome, descrição, tecnologias utilizadas e links para repositórios.
* **Habilidades:** Liste suas habilidades técnicas e suas respectivas proficiências.
* **Repositórios:** faça buscas aos seus repositorios do Github.
* **Certificações:** Armazene informações sobre suas certificações.
* **Analises:** Armazene informações sobre os acessos.
* **Sobre Mim:** Crie uma seção "Sobre Mim" personalizada.

<h2 id="obj"> Objetivo </h2>

O sistema oferece uma experiência dinâmica para gerenciar portfólios, permitindo adição e remoção de informações sem a necessidade de redeploy. Isso facilita a manutenção e garante que o portfólio esteja sempre atualizado.

<h2 id="how"> Como Rodar o Projeto </h2>

### Pré-requisitos

- Token do GitHub
- Token do Vercel Blob
- URL de conexão com banco PostgreSQL

### Passos para Executar

1. Clone o repositório:
```bash
git clone https://github.com/CristianoMends/portifolio-api
cd portifolio-api
```
2. Configure as variaveis de ambiente

Crie um arquivo .env no diretório raiz do projeto e adicione as seguintes variáveis:
```properties
BLOB_READ_WRITE_TOKEN=token_do_vercel_blob
DATABASE_URL=jdbc:postgresql://host:port/database
GITHUB_TOKEN=seu_token_github
GITHUB_USER=seu_usuario_github
ALLOWED_DOMAIN=http://localhost:4200 # Dominio permitido para requisições
ALLOWED_IP=192.168.1.100 # IP permitido para requisições
ALLOWED_TOKEN=defina_uma_senha_para_requisicoes
```
3. Inicie a aplicação:

```bash
npm install
npm run start
```
4. Acesse a aplicação:
```bash
http://localhost:3000
```

5. Acesse a documetação do swagger:
```bash
http://localhost:3000/api
```

