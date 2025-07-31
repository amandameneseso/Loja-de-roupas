# Sobre o projeto - Loja Marô

Este é um projeto completo de uma loja online. Este projeto demonstra a construção de uma aplicação web moderna com frontend em React e backend em Node.js com banco de dados no MongoDB, integrando diversas funcionalidades essenciais para uma loja virtual. Ele permite que usuários explorem e comprem produtos com variantes de tamanho, façam pedidos com pagamento online via Stripe, e conta com um painel de administração para gerenciamento de produtos e pedidos.

## Funcionalidades

### Usuário
- **Autenticação de usuários**: Cadastro e login de usuários com segurança (hash de senhas e JWT).
- **Catálogo de Produtos**: Exibição de produtos com detalhes, filtros por categoria/subcategoria e ordenação por preço.
- **Gestão de carrinho de compras**:
    - Adicionar/remover itens e ajustar quantidades.
    - Persistência do carrinho para usuários autenticados (no banco de dados) e não autenticados (no localStorage).
- **Processo de Checkout**: Formulário de informações de entrega.
- **Opções de pagamento**:
    - Integração com Stripe Checkout para pagamentos com cartão.
    - Pagamento na entrega.
- **Página de pedidos**: Visualização dos pedidos realizados pelo usuário logado.
- **Design responsivo**: Interface adaptável para diferentes tamanhos de tela (mobile, tablet, desktop).
- **Notificações**: Uso de toasts para feedback ao usuário.

### Administrador
- **Autenticação de administrador**: Login de administrador para gerenciamento da loja.
- **Adicionar novos produtos**: Com upload de múltiplas imagens para o Cloudinary.
- **Gerenciamento de produtos**: Adicionar, editar e excluir produtos.
- **Gerenciamento de pedidos**:  Visualizar e atualizar status dos pedidos feitos.

## Tecnologias Utilizadas

### Frontend
- **React JS**: Biblioteca JavaScript para construção da interface de usuário e painel de administração.
- **Vite**: Ferramenta de build rápido para projetos web.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **Axios**: Cliente HTTP para fazer requisições à API.
- **React Toastify**: Para notificações de sucesso/erro.

### Backend
- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework web para construir a API RESTful.
- **MongoDB**: Banco de dados para armazenamento de dados de produtos, usuários e pedidos.
- **Mongoose**: ODM (Object Data Modeling) para Node.js e MongoDB.
- **JWT (JSON Web Tokens)**: Para autenticação e autorização.
- **Bcrypt**: Para hash seguro de senhas.
- **Validator**: Para validação de strings (e-mail, etc.).
- **Cloudinary**: Serviço de gerenciamento de mídia para upload e entrega de imagens.
- **Stripe**: Gateway de pagamento para processamento de transações.
- **Dotenv**: Para carregar variáveis de ambiente de arquivos .env.
- **Multer**: Middleware para lidar com upload de arquivos.
- **CORS**: Middleware para habilitar requisições cross-origin.
- **Nodemon**: Para reiniciar o servidor automaticamente durante o desenvolvimento.

### Autenticação
- Criptografia de senhas com bcrypt.
- Validação de dados com validator.
- Gerenciamento de sessão com JSON Web Tokens (JWT).

### Hospedagem
- **Vercel**