# AskMe – Plataforma de Perguntas e Respostas
AskMe é uma aplicação web simples e funcional desenvolvida com Node.js, Express, Sequelize, MySQL e EJS.
O objetivo do projeto é permitir que usuários façam perguntas e outras pessoas respondam de forma rápida e direta — semelhante ao formato do Yahoo Respostas ou Ask.fm.

## 🚀 Tecnologias Utilizadas
Node.js
Express
Sequelize
MySQL
EJS (Embedded JavaScript Templates)
Bootstrap 5
CSS / JS estático


## 🧠 Como o Projeto Funciona
✔ Criar Perguntas
Usuários podem enviar uma pergunta através do formulário principal.
As perguntas são salvas no banco via Sequelize.

✔ Visualizar Pergunta
Ao clicar em uma pergunta, o usuário é redirecionado para uma página exclusiva (ask.ejs).

✔ Enviar Respostas
Cada pergunta pode receber várias respostas, enviadas por meio de um formulário simples.

✔ Salvamento no Banco

## 🛠 Como Rodar o Projeto Localmente
1️⃣ Clonar o repositório git clone https://github.com/seu-usuario/askme.git

2️⃣ Instalar dependências npm install

3️⃣ Configurar o MySQL

Edite o arquivo database/database.js:

const connection = new Sequelize('dbname', 'user', 'password', { host: 'localhost', dialect: 'mysql' });

4️⃣ Rodar o servidor node index.js

O servidor iniciará em: 👉 http://localhost:8080


## 🙋 Sobre o Projeto

Este projeto foi criado com foco em aprendizado, portfólio e demonstração de backend utilizando Node.js + Sequelize.

## 🧑‍💻 Autor
Leandro Bezerra
LinkedIn: https://www.linkedin.com/in/leandro-bezerra-santos/
