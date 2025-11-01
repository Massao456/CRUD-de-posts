# CRUD de Posts - API REST

Uma API REST simples para gerenciamento de posts, desenvolvida com Fastify e TypeScript.

## 🚀 Tecnologias Utilizadas

- **Fastify** - Framework web rápido e com baixa sobrecarga
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Node.js** - Ambiente de execução JavaScript
- **tsx** - Executor TypeScript para desenvolvimento
- **ts-node-dev** - Ferramenta de desenvolvimento para TypeScript

## 📋 Requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório (ou navegue até a pasta do projeto)
2. Instale as dependências:

```bash
npm install
```

## ▶️ Executar o Projeto

Para executar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

O servidor estará rodando em: `http://localhost:3000`

## 📚 Endpoints

Base URL: `http://localhost:3000/posts`

### 1. Listar Todos os Posts

- **Método:** `GET`
- **Endpoint:** `/posts`
- **Descrição:** Retorna uma lista com todos os posts cadastrados
- **Resposta de Sucesso (200):**
```json
[
  {
    "id": "uuid",
    "title": "Título do Post",
    "content": "Conteúdo do Post",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

---

### 2. Buscar Post por ID

- **Método:** `GET`
- **Endpoint:** `/posts/:id`
- **Parâmetros:** `id` (path parameter) - UUID do post
- **Descrição:** Retorna um post específico pelo ID
- **Resposta de Sucesso (200):**
```json
{
  "id": "uuid",
  "title": "Título do Post",
  "content": "Conteúdo do Post",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```
- **Resposta de Erro (404):**
```json
{
  "error": "Post não encontrado"
}
```

---

### 3. Criar Novo Post

- **Método:** `POST`
- **Endpoint:** `/posts`
- **Descrição:** Cria um novo post
- **Body (JSON):**
```json
{
  "title": "Título do Post",
  "content": "Conteúdo do Post"
}
```
- **Resposta de Sucesso (201):**
```json
{
  "id": "uuid",
  "title": "Título do Post",
  "content": "Conteúdo do Post",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

---

### 4. Atualizar Post

- **Método:** `PUT`
- **Endpoint:** `/posts/:id`
- **Parâmetros:** `id` (path parameter) - UUID do post
- **Descrição:** Atualiza um post existente
- **Body (JSON):**
```json
{
  "title": "Título Atualizado",
  "content": "Conteúdo Atualizado"
}
```
- **Resposta de Sucesso (200):**
```json
{
  "id": "uuid",
  "title": "Título Atualizado",
  "content": "Conteúdo Atualizado",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T12:00:00.000Z"
}
```
- **Resposta de Erro (404):**
```json
{
  "error": "Post não encontrado"
}
```

---

### 5. Deletar Post

- **Método:** `DELETE`
- **Endpoint:** `/posts/:id`
- **Parâmetros:** `id` (path parameter) - UUID do post
- **Descrição:** Remove um post do sistema
- **Resposta de Sucesso (204):** Sem conteúdo
- **Resposta de Erro (404):**
```json
{
  "error": "Post não encontrado"
}
```

---

## 📝 Estrutura do Projeto

```
fastify-posts/
├── node_modules/         
├── src/
│   ├── controllers/
│   │   └── postControllers.ts   
│   ├── routes/
│   │   └── posts.ts              
│   └── server.ts                 
├── package-lock.json       
├── package.json          
├── tsconfig.json        
└── README.md             
```

## 🔍 Observações Importantes

- Os dados são armazenados em memória (array). Ao reiniciar o servidor, todos os dados são perdidos.
- A API utiliza UUID para identificação única dos posts.
- Os campos `createdAt` e `updatedAt` são gerenciados automaticamente.


## 📄 Licença

Este projeto é apenas para fins educacionais.

