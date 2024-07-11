# CRUD de Usuários

Este é um simples aplicativo CRUD (Create, Read, Update, Delete) para gerenciamento de usuários. O aplicativo permite adicionar, editar e excluir usuários, bem como armazenar os dados no Local Storage do navegador.

## Funcionalidades

- Adicionar novo usuário com nome, número de telefone e e-mail.
- Editar informações de um usuário existente.
- Excluir um usuário.
- Validação de formato de número de telefone (DDD) 9XXXX-XXXX.
- Validação de e-mail (contendo "@" e ".com").

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Estrutura do Projeto

.
├── index.html
├── style.css
└── script.js


### index.html

Este arquivo contém a estrutura HTML básica do aplicativo, incluindo o modal para adicionar/editar usuários e a tabela para exibir os usuários.

### style.css

Este arquivo contém os estilos CSS para o layout do aplicativo e para o modal.

### script.js

Este arquivo contém a lógica JavaScript para adicionar, editar, excluir e validar os usuários, além de manipular o Local Storage.

## Como Usar

1. Clone este repositório para sua máquina local:

   ```sh
   [git clone https://github.com/seu-usuario/crud-usuarios.git](https://github.com/Caio13Vinni/Cadastro-de-Usu-rio/tree/main)

Abra o arquivo index.html em seu navegador.

Use o botão "Adicionar" para abrir o modal e adicionar um novo usuário.

Clique nos ícones de editar e excluir para gerenciar os usuários existentes.

Validação de Formulários

Número de Telefone: Deve seguir o formato (DDD) 9XXXX-XXXX. O campo será formatado automaticamente enquanto o usuário digita.
E-mail: Deve conter "@" e ".com".
