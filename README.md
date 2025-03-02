### MY-TOYS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://graphql.com/graphql-dot-com.jpg" width="500" alt="Brain-ag logo" /></a>
</p>

---

### Descrição

MY-TOYS é um projeto simples que criei para estudar a linguagem de consulta GraphQL, explorando ao máximo suas principais diferenças em relação ao padrão de arquitetura REST.

Para isso, desenvolvi um e-commerce de brinquedos, onde clientes podem se cadastrar e realizar compras dos produtos disponíveis na loja.

### Fluxo do Sistema
- Cadastro de Clientes 👤
  - O cliente realiza seu cadastro no sistema para poder acessar a loja.
  
- Consulta de Produtos 🏷️
  - Os clientes podem visualizar os brinquedos disponíveis no catálogo.

- Realização de Compras 🛒
    - O cliente seleciona um ou mais brinquedos e finaliza a compra.
    - A compra é registrada no sistema.
- Atualização de Estoque 📦
    - Após a finalização da compra, o estoque do produto é atualizado automaticamente.

- Consulta de Dados via GraphQL 🔍
    - O cliente pode consultar suas compras e obter detalhes sobre os produtos adquiridos de forma otimizada, aproveitando a flexibilidade do GraphQ


### Tecnologias usadas

- Node.js
- Nest.js
- Postgres
- Prisma
- Docker
- Typescript
- Apollo Server
- Graphql

### Estrutura do Projeto

<pre style="overflow-x: auto; max-width: 1000px; white-space: pre;">
src/
│── domain/entities/             # Definição das entidades do domínio
│   ├── credit-card.ts
│   ├── customer.ts
│   ├── product.ts
│   ├── purchase.ts
│   ├── stock.ts
│
│── external/repositories/       # Repositórios de acesso ao banco de dados
│   ├── prisma-credit-card-repository.ts
│   ├── prisma-customer-repository.ts
│   ├── prisma-product-repository.ts
│   ├── prisma-purchase-repository.ts
│   ├── prisma-stock-repository.ts
│
│── infra/                       # Infraestrutura do sistema
│   ├── prisma/                  # Configuração do Prisma
│   ├── schema.gql               # Definição do esquema GraphQL
│
│── modules/                     # Módulos da aplicação
│   ├── customer/                # Módulo de clientes
│   │   ├── dto/                 # Data Transfer Objects (DTOs)
│   │   ├── port/                # Interfaces e portas de entrada/saída
│   │   ├── providers/           # Provedores de dependências
│   │   ├── services/            # Regras de negócio e serviços
│   │   ├── utils/               # Utilitários do módulo
│   │   ├── customer.module.ts   # Módulo do cliente
│   │   ├── customer.resolver.ts # Resolver GraphQL do cliente
│   ├── product/                 # Módulo de produtos
│   ├── purchase/                # Módulo de compras
│
│── app.module.ts                # Módulo raiz da aplicação
│── main.ts                      # Ponto de entrada da aplicação
</pre>
