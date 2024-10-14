```markdown
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Descrição

Aplicação de pagamento para comércio eletrônico.

O comércio eletrônico já é uma realidade estabelecida em nossa sociedade, onde um grande volume de negociações é realizado na internet, por meio de plataformas ou sistemas web, nos quais as lojas, comércio e indústria disponibilizam seus produtos e serviços. Para atender a essa demanda cada vez maior, a tecnologia desempenha um papel crucial, pois a partir dela são disponibilizados os recursos e meios para viabilizar esse cenário.

Porém, os custos para manter grandes estruturas computacionais sempre operacionais, independentemente dos picos de volumes de transações e negociações no comércio eletrônico, têm sido um problema, por serem valores muito elevados. Dessa forma, é preciso buscar soluções que possibilitem manter a disponibilidade dessas plataformas e sistemas web para o comércio, mas buscando reduzir os custos operacionais.

Para propor uma solução, é importante conhecer todo o processo e características de funcionamento do comércio eletrônico. Sendo assim, observou-se que existem momentos específicos em que o volume de transações é maior e que, também, há partes do processamento computacional dessas transações que demandam mais recursos. Por isso, concebeu-se que, se houvesse uma possibilidade de separar as responsabilidades desses sistemas em serviços independentes, em que cada serviço pudesse ser escalonado também de forma independente, conforme a demanda, seria possível otimizar esses recursos computacionais, pois tais recursos não ficariam ociosos e seus custos seriam proporcionais ao seu uso, aumentando com as demandas por novas transações.

Diante desse contexto, a empresa CompreFácil, que possui grande parcela de suas vendas em seu e-commerce, resolveu reestruturar sua plataforma, para reduzir custos operacionais e também garantir alta disponibilidade e uma melhor experiência para seus clientes. Para atender a essa necessidade, o time de TI da empresa foi encarregado de realizar uma análise e implementar alguns serviços distribuídos para esse sistema, por meio dos conceitos da arquitetura de microsserviços, criando inicialmente dois serviços independentes: um para processar os pagamentos e outro para notificar os usuários sobre a realização da compra e confirmação de pagamento.

## Funcionalidades

O sistema inclui as seguintes funcionalidades:

1. Criar um novo projeto via NodeJS para prover interfaces de comunicação (REST e AMQP) para sistema de pagamento;
2. Usar docker-compose para criar estruturas de banco de dados (Postgres) e sistema de mensageria (RabbitMQ);
3. Criar um novo projeto via NodeJS para prover interfaces de comunicação (REST e AMQP) para sistema de notificação;
4. Implementar fluxo de comunicação.
5. Receber no serviço de pagamento a solicitação de transação (fluxo assíncrono):
   - O sistema de pagamento armazena dados da transação com status pendente;
   - O sistema de pagamento publica mensagem na fila para o sistema de notificação informar sobre o recebimento da solicitação de transação;
   - O sistema de notificação lê a mensagem na fila e envia notificação ao usuário sobre o recebimento da solicitação de transação;
   - O sistema de pagamento confirma a transação e atualiza o status para sucesso;
   - O sistema de pagamento publica mensagem na fila para o sistema de notificação informar sobre a confirmação da transação;
   - O sistema de notificação lê a mensagem na fila e envia notificação ao usuário sobre a confirmação da transação.

## Configuração do Projeto

Para instalar as dependências do projeto, utilize o seguinte comando:

```bash
npm install

```

## Iniciando o PostgreSQL e RabbitMQ

### PostgreSQL

Para iniciar o PostgreSQL, execute o seguinte comando:

```bash
docker-compose -f docker/docker-postgres.yml up -d
```

### RabbitMQ

Para iniciar o RabbitMQ, utilize o comando:

```bash
docker-compose -f docker/docker-rabbitmq.yml up -d
```

Após iniciar os serviços, você pode acessar a interface do RabbitMQ em `http://localhost:15672` usando as credenciais padrão (usuário: `guest`, senha: `guest`).

## Execução do Projeto

Para iniciar o projeto, use o comando:

```bash
npm run start:dev
```

Isso iniciará o servidor em modo de desenvolvimento, permitindo que você veja as alterações em tempo real.

## Compilar e Executar o Projeto

Para compilar e executar o projeto, utilize os seguintes comandos:

```bash
# Modo desenvolvimento
npm run start

# Modo assistido (watch mode)
npm run start:dev

# Modo produção
npm run start:prod
```

## Executar Testes

Para executar os testes, utilize os comandos abaixo:

```bash
# Testes unitários
npm run test

# Testes end-to-end
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## Recursos

Confira alguns recursos que podem ser úteis ao trabalhar com NestJS:

- Visite a [Documentação do NestJS](https://docs.nestjs.com) para aprender mais sobre o framework.
- Para perguntas e suporte, visite nosso [canal no Discord](https://discord.gg/G7Qnnhy).
- Para aprofundar e obter mais experiência prática, confira nossos cursos de vídeo oficiais [aqui](https://courses.nestjs.com/).
- Visualize seu gráfico de aplicação e interaja com a aplicação NestJS em tempo real usando [NestJS Devtools](https://devtools.nestjs.com).
- Precisa de ajuda com seu projeto (de meio período a tempo integral)? Confira nosso [suporte empresarial oficial](https://enterprise.nestjs.com).
- Para ficar atualizado e receber notícias, siga-nos no [Twitter](https://twitter.com/nestframework) e no [LinkedIn](https://linkedin.com/company/nestjs).
- Está procurando emprego ou tem uma vaga para oferecer? Confira nosso [painel de empregos oficial](https://jobs.nestjs.com).

## Suporte

O Nest é um projeto de código aberto licenciado sob a MIT. Ele pode crescer graças aos patrocinadores e ao apoio dos incríveis apoiadores. Se você gostaria de se juntar a eles, por favor, [leia mais aqui](https://docs.nestjs.com/support).

## Contato

- Autor - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Licença

Nest é [licenciado sob a MIT](

LICENSE).
```