# API de Produtos

Esta é uma API capaz de criar, ler, atualizar e apagar registros de produtos e informações sobre nome, preço e código de barras do produto.

## Configurando:

Para inicio do projeto, é necessário ter Node.Js e MongoDB instalados na sua máquina.

### Clone o Repositório:

```
git clone git@github.com:luanMarvin/product-db-api-restful.git
```

### Navegue até o diretório do projeto:

```
cd product-db-api-restful
```

### Instale as dependências:

```
npm install
```

### Inicie o aplicativo:

```
npm start
```

a API estará disponivel em `http://localhost:8024`.

## Informações Adicionais

Por padrão da aplicação, a rota está configurada para 8024, mas é apta a receber mudanças por meio da variável de ambiente encontrada no arquivo **.env**, que deve ser criado pelo usuário se achar necessário mudar a porta padrão.

A porta padrão também se aplica ao mongoDB (27010), e a comunicação do aplicativo será feito pelo endereço `mongodb://localhost:27017/`.

## Rotas

### GET /itens/:id?

Obtém os produtos do DB, é possivel especificar o id especifico de cada produto para obter as informações sobre ele ou obter informações sobre todos os produtos.

### POST /itens

Registra um novo produto.

```
{
  "name": "Nome Do Produto",
  "codebar": "987654321",
  "price": 14.99
}
```

### PUT /itens/:id

Atualiza as informações do produto.

```
{
  "name": "Novo Nome DO Produto",
  "codebar": "12345678",
  "price": 29.99
}
```

### DELETE /itens/:id

Deleta um produto do DB, é necessário especificar o id cada produto. 
