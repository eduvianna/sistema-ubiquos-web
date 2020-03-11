# API Sistema Ubiquos
> Implementação de uma API para uma aplicação que tem como objetivo o monitoramento em tempo real de qualquer rede de sensores implementada.

# Motivação

Este projeto foi desenvolvido em 2019.2 para a disciplina de Sistemas Ubiquos oferecido pela Universidade Federal de Santa Catarina (UFSC).

O projeto teve como tema o desenvolvimento de uma aplicação para o monitoramento em tempo real do Rio Araranguá, podendo assim que o sistema pudesse ser utilizado por agricultores da região auxiliando-os nos seus cultivos. 

Tendo o tema em mente, foi implementado um sistema genérico para monitoramento em tempo real de qualquer projeto (sistema) que os administradores desejasse.

O projeto também foi separado em duas frentes, [Backend](https://github.com/eduvianna/sistema-ubiquos-api) e [Frontend](https://github.com/eduvianna/sistema-ubiquos-frontend), sendo que o backend refere-se a implementação de uma API para ser consumido pelo Frontend e também pelo Hardware de monitoramento.

# Build Status

[![Build Status][travis-image]][travis-url]

## Contribuição

1. Faça o *fork* do projeto (<https://github.com/eduvianna/sistema-ubiquos-api/>)
2. Crie uma *branch* para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o *commit* (`git commit -am 'Add some fooBar'`)
4. *Push* (`git push origin feature/fooBar`)
5. Crie um novo *Pull Request*

Para utilizar este projeto você deve possuir na sua maquina [NodeJS](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/lang/en/), [Docker](https://www.docker.com/) e [Docker-Compose](https://docs.docker.com/compose/install/).

## Instalação

Para rodar este projeto, siga estes passos:
1 - Instale as depedências
2 - Clone este repositório
3 - Rode o comando yarn
4 - Rode o comando docker-compose up -d
5 - Pronto, seu servidor esta rodando na porta 3000.

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki
