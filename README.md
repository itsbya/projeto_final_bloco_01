# 🎮 Geek.com – Sistema de Gerenciamento de Produtos

Projeto desenvolvido em **TypeScript**, utilizando **Programação Orientada a Objetos (POO)**, com foco em herança, polimorfismo, encapsulamento e organização em camadas (Model, Controller e Util).

O sistema simula o gerenciamento de produtos de uma loja geek, permitindo o cadastro e controle de **Jogos Físicos** e **Jogos Digitais** por meio de um menu interativo no terminal.

---

## 🚀 Funcionalidades

- Criar produtos (Jogo Físico ou Jogo Digital)
- Listar todos os produtos cadastrados
- Buscar produto por ID
- Atualizar dados de um produto
- Apagar um produto
- Menu interativo via terminal
- Formatação de valores monetários
- Uso de cores no terminal para melhor experiência do usuário

---

## 🧠 Conceitos aplicados

- Programação Orientada a Objetos (POO)
  - Classes e objetos
  - Herança
  - Polimorfismo
  - Encapsulamento
- TypeScript
- Organização em camadas
- Controlde fluxo com `switch`
- Entrada de dados pelo terminal
- Boas práticas de código


## 🗂️ Estrutura do Projeto

src
├── controller
│ └── ProdutoController.ts
│
├── model
│ ├── Produto.ts
│ ├── JogoFisico.ts
│ └── JogoDigital.ts
│
├── util
│ ├── Input.ts
│ ├── Colors.ts
│ └── Currency.ts
│
└── main.ts


---

## 📦 Tipos de Produtos

### 🕹️ Jogo Físico
- Plataforma (PS5, Xbox, Switch, etc.)
- Classificação etária
- Preço

### 💾 Jogo Digital
- Tamanho em GB
- Classificação etária
- Preço

---

## ▶️ Como executar o projeto

### Pré-requisitos
- Node.js
- TypeScript
- ts-node (opcional)

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/itsbya/nome-do-repositorio.git

Acesse a pasta do projeto:

cd nome-do-repositorio


Instale as dependências (se houver):

npm install


Execute o projeto:

ts-node src/main.ts


ou compile:

tsc
node dist/main.js

```

🖥️ Menu do Sistema
1 - Criar Produto
2 - Listar todos os Produtos
3 - Buscar produto por ID
4 - Atualizar Produto
5 - Apagar Produto
0 - Sair

👩‍💻 Autora

Ana Beatriz Carvalho Esmaile

💼 Desenvolvedora em formação

📧 Email: anabeatrizcarvalhoesmaile@gmail.com

🔗 GitHub: https://github.com/itsbya

🔗 LinkedIn: https://linkedin.com/in/ana-beatriz-carvalho-esmaile

