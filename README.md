# CompreFácil - Serviço de Pagamento para E-Commerce

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Logo NestJS" />
</p>

## Visão Geral

O CompreFácil é uma arquitetura de serviços distribuídos desenvolvida para gerenciar pagamentos em ambientes de e-commerce. Utiliza **NestJS**, **PostgreSQL**, **RabbitMQ** e **Docker** para criar um sistema de pagamentos escalável e eficiente, capaz de gerenciar transações e notificações entre diferentes serviços. Este sistema demonstra como a arquitetura de microsserviços pode otimizar o uso de recursos, permitindo a escalabilidade independente de cada serviço conforme a demanda.

## Funcionalidades

- **Processamento de Pagamentos**: Gerencia transações de pagamento de forma assíncrona.
- **Serviço de Notificações**: Notifica os usuários sobre o status das transações.
- **Arquitetura de Microsserviços**: Serviços independentes para pagamento e notificações, garantindo escalabilidade.
- **PostgreSQL**: Banco de dados para gerenciamento dos dados das transações.
- **RabbitMQ**: Sistema de mensageria para comunicação entre os serviços.
- **Docker**: Serviços containerizados para facilitar o deploy e a gestão.

## Tecnologias Utilizadas

- **NestJS**: Framework para construção de aplicações server-side escaláveis e eficientes.
- **PostgreSQL**: Banco de dados relacional open-source confiável para armazenar dados de transações.
- **RabbitMQ**: Broker de mensagens para comunicação entre os microsserviços de pagamento e notificação.
- **Docker**: Usado para containerizar os serviços como PostgreSQL e RabbitMQ, garantindo consistência entre ambientes.
- **TypeScript**: Utilizado para escrever código escalável e com tipagem estática.

## Pré-requisitos

- Node.js v16+
- Docker instalado
- PostgreSQL e RabbitMQ (via Docker)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/AlexandreLiberatto/CompreFacil.git
    cd CompreFacil
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:
   Copie o arquivo `.env.example` para `.env` e ajuste as variáveis conforme necessário.

## Executando a Aplicação

### Passo 1: Iniciar PostgreSQL e RabbitMQ usando Docker

Para iniciar o PostgreSQL e o RabbitMQ, utilize o Docker Compose:

```bash
docker-compose -f docker/docker-postgres.yml up -d
docker-compose -f docker/docker-rabbitmq.yml up -d
```
Após iniciar os serviços, você pode acessar a interface do RabbitMQ em `http://localhost:15672` usando as credenciais padrão (usuário: `admin`, senha: `123456`).

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

- Autor: Alexandre Liberatto
- E-mail: alexandreliberatto@gmail.com
