# API Sistema Ubiquos
> Implementação de uma API para uma aplicação que tem como objetivo o monitoramento em tempo real de qualquer rede de sensores implementada.

# Motivação

Este projeto foi desenvolvido em 2019.2 para a disciplina de Sistemas Ubiquos oferecido pela Universidade Federal de Santa Catarina (UFSC).

O projeto teve como tema o desenvolvimento de uma aplicação para o monitoramento em tempo real do Rio Araranguá, podendo assim que o sistema pudesse ser utilizado por agricultores da região auxiliando-os nos seus cultivos. 

Tendo o tema em mente, foi implementado um sistema genérico para monitoramento em tempo real de qualquer projeto (sistema) que os administradores desejasse.

O projeto também foi separado em duas frentes, [Backend](https://github.com/eduvianna/sistema-ubiquos-api) e [Frontend](https://github.com/eduvianna/sistema-ubiquos-frontend), sendo que o backend refere-se a implementação de uma API para ser consumido pelo Frontend e também pelo Hardware de monitoramento.

# Build Status

[![Build Status][travis-image]][travis-url]

## Instalação e Configuração Rapida

Para rodar este projeto de maneira prática e rapida, deve-se seguir os passos abaixo:

Antes de mais nada você deve ter instalado em sua maquina as seguintes ferramentas: 

- [NodeJS](https://nodejs.org/en/) **(obrigatório)**
- [Yarn](https://yarnpkg.com/lang/en/) (opcional)
- [Docker](https://www.docker.com/) **(obrigatório)**
- [Docker-Compose](https://docs.docker.com/compose/install/). **(obrigatório)**
  
> *Em cada link acima você encontrará um tutorial especifico de como instalar a ferramenta depedendo do seu S.O*

A primeira etapa após a instalação das ferramentas obrigatórias é a a clonagem do repositório para a sua maquina bem como a instalação das dependência do projeto.

```shell
git clone https://github.com/eduvianna/sistema-ubiquos-api.git
cd sistema-ubiquos-api/
yarn
```

Finializado com sucesso as instalações das dependências, vamos inicializar os containers necessários para rodar esta aplicação, sendo estes containers  referentes ao banco de dados *PostgreSQL* e a própria aplicação. (Lembrando que você deve rodar o comando a seguir dentro da pasta do repositório.)

```shell
docker-compose up -d
```

PRONTO! Agora se não houve nenum problema seu servidor está pronto e rodando na porta **3000**.


1 - Instale as depedências
2 - Clone este repositório
3 - Rode o comando yarn
4 - Rode o comando docker-compose up -d
5 - Pronto, seu servidor esta rodando na porta 3000.

## Contribuição

1. Faça o **fork** do projeto (<https://github.com/eduvianna/sistema-ubiquos-api/>)
2. Crie uma **branch** para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o **commit** (`git commit -am 'Add some fooBar'`)
4. **Push** (`git push origin feature/fooBar`)
5. Crie um novo **Pull Request**

Para utilizar este projeto você deve possuir na sua maquina 


[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki
