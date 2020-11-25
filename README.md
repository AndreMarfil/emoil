# Indice

- [Sobre](#-sobre)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)

## Emoil

## 🔖&nbsp; Sobre

O projeto consiste em uma aplicação web feita para postos de gasolina, onde nela é possível cadastrar a troca de óleo que os clientes efetuaram em seus carros.
Para a realização da troca de óleo é necessário saber quem é o cliente que está trocando o óleo e logo após o cadastro da troca de óleo, esta informação fica guardada para que seja usada futuramente.
No dia do "vencimento" do óleo um e-mail será enviado automaticamente para o cliente, com uma mensagem de aviso que a validade do óleo está perto de vencer seguido por um convite para que retorne ao posto e faça a troca do óleo. Para atrair o cliente ao estabelecimento será oferecido um desconto especial.
Importante ressaltar que a ideia é baseada no conceito de Customer Relationship Management que é uma série de funcões que podem ser automatizadas por um sistema.

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [React](https://pt-br.reactjs.org/)
- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)

---

## 🗂 Como baixar o projeto

```bash

    # Clonar o repositório
    $ git clone https://github.com/AndreMarfil/emoil.git

    # Entrar no diretório
    $ cd emoil

    # Instalar as dependências
    $ yarn install
```

## 🐱‍🏍 Rodando o Projeto (Backend)

É necessário modificar o arquivo "ormconfig.json", utilizando as credencias do ambiente de desenvolvimento.
```
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "docker",
    "database": "emoil",

```

Após isso é necessário criar o banco de dados com o nome dado no arquivo. Neste exemplo foi criado o banco com o nome "emoil".
E então rodar o comando ``` yarn dev:server``` para que seja inicializado o servidor.


## 🐱‍🏍 Rodando o Projeto (Frontend)

Necessário somente rodar o comando ``` yarn start ``` e está pronto para o uso. 

---

Desenvolvido por Andre Marfil Marins e Leonardo Gabriel Sanches.✔