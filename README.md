# Feed de cometários

Este é um aplicativo de comentários simples desenvolvido com React. Ele permite que os usuários enviem comentários com seu email e texto, que são então exibidos na tela.

## Funcionalidades

- Enviar um comentário com email e texto
- Exibir a lista de comentários enviados

## Tecnologias Utilizadas

- React
- CSS para estilização

## Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/comentarios-app.git
   cd comentarios-app
   ```

2. **Instale as dependências:**

   Certifique-se de ter o Node.js e o npm instalados. Em seguida, execute:

   ```bash
   npm install
   ```

3. **Execute o projeto:**

   ```bash
   npm start
   ```

4. **Acesse a aplicação:**

   Abra seu navegador e vá para `http://localhost:5173`.

## Estrutura do Projeto

```plaintext
comentarios-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── Comment.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

### `App.js`

O componente principal que gerencia o estado dos comentários, captura as entradas do usuário e exibe os comentários submetidos.

### `Comment.js`

Um componente de apresentação que exibe um único comentário.

### `App.css`

Arquivo de estilo que contém as classes CSS utilizadas para estilizar a aplicação.

## Estilização

O projeto utiliza a fonte [Roboto](https://fonts.google.com/specimen/Roboto) do Google Fonts e algumas classes CSS para criar um layout visualmente agradável.
