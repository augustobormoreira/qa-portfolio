# Login

## CT-001 — Não preencher Login e Senha deve mostrar que os dois são campos obrigatórios

| Campo | Valor |
|---|---|
| **Funcionalidade** | Login |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
Usuário não estar logado e estar na página de login.

### Passos para executar
1. Não preencher campos de login e senha.

### Resultado esperado
Sistema informa que os campos Login e Senha são obrigatórios.

### Resultado obtido
Sistema informa que os campos Login e Senha são obrigatórios.

## CT-002 — Tentativa de acesso sem preencher campos obrigatórios deve exibir a mensagem "Usuário e senha precisam ser preenchidos".

| Campo | Valor |
|---|---|
| **Funcionalidade** | Login |
| **Tipo** | Negativo |
| **Status** | ❌ Falhou |
| **Bug relacionado** | [BUG-004](https://github.com/augustobormoreira/qa-portfolio/issues/8) |

### Pré-condições
Usuário não estar logado e na página inicial de login.

### Passos para executar
1. Não preencher campos de senha e e-mail.
2. Clicar em Acessar.

### Resultado esperado
Sistema deve exibir mensagem de erro "Usuário e Senha precisam ser preenchidos".

### Resultado obtido
Sistema não informa mensagem de erro "Usuário e Senha precisam ser preenchidos".

## CT-003 — Não deve autorizar o acesso para usuários inválidos ou não cadastrados.

| Campo | Valor |
|---|---|
| **Funcionalidade** | Login |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
Usuário não estar logado e na página inicial de login.

### Passos para executar
1. Preencher campo com e-mail inválido ou e-mail não cadastrado.
2. Preencher senha.
3. X. Clicar em Acessar.

### Resultado esperado
Sistema deve exibir campo inválido para e-mail inválido e "Usuário ou senha inválido" para usuário não cadastrado.

### Resultado obtido
Sistema exibe campo inválido para e-mail inválido e "Usuário ou senha inválido" para usuário não cadastrado.

## CT-004 — Registro de novo usuário

| Campo | Valor |
|---|---|
| **Funcionalidade** | Registro de Usuário |
| **Tipo** | Negativo |
| **Status** | ❌ Falhou |
| **Bug relacionado** | [BUG-005](https://github.com/augustobormoreira/qa-portfolio/issues/9) |

### Pré-condições
E-mail não estar cadastrado.

### Passos para executar
1. Acessar a tela de registro.
2. Preencher informações válidas.
3. Clicar no botão de cadastrar.

### Resultado esperado
Sistema deve exibir cadastro com sucesso e redirecionar para a página home.

### Resultado obtido
Sistema realiza cadastro com sucesso porém redireciona para a página de login.

## CT-005 — Acesso de Usuário existente

| Campo | Valor |
|---|---|
| **Funcionalidade** | Login |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
Usuário já estar cadastrado no sistema.

### Passos para executar
1. Acessar a tela de login.
2. Preencher campos e-mail e senha com informações válidas.
3. Clicar no botão de acessar.

### Resultado esperado
Sistema deve redirecionar para a página home.

### Resultado obtido
Sistema redireciona para a página home.

# Cadastro

## CT-006 — Campo de dados "E-mail" é obrigatório

| Campo | Valor |
|---|---|
| **Funcionalidade** | Cadastro |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
Usuário estar na página de registro.

### Passos para executar
1. Acessar a tela de cadastro.
2. Não preencher o campo e-mail.
3. Clicar no botão de Cadastrar.

### Resultado esperado
Sistema deve informar "É campo obrigatório" abaixo do campo E-Mail.

### Resultado obtido
Sistema informa "É campo obrigatório" abaixo do campo E-Mail.

## CT-007 — Campo de dados "Nome" é obrigatório

| Campo | Valor |
|---|---|
| **Funcionalidade** | Registro |
| **Tipo** | Negativo |
| **Status** | ❌ Falhou |
| **Bug relacionado** | [BUG-006](https://github.com/augustobormoreira/qa-portfolio/issues/10) |

### Pré-condições
Usuário estar na página de registro.

### Passos para executar
1. Acessar a tela de cadastro.
2. Não preencher o campo nome.
3. Clicar no botão de Cadastrar.

### Resultado esperado
Sistema deve informar "É campo obrigatório" abaixo do campo Nome.

### Resultado obtido
Sistema não informa "É campo obrigatório" abaixo do campo Nome.


## CT-008 — Campo de dados Senha é obrigatório

| Campo | Valor |
|---|---|
| **Funcionalidade** | Cadastro |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
Usuário estar na página de registro.

### Passos para executar
1. Acessar a tela de cadastro.
2. Não preencher o campo Senha.
3. Clicar no botão de Cadastrar.

### Resultado esperado
Sistema deve informar "É campo obrigatório" abaixo do campo Senha.

### Resultado obtido
Sistema informa "É campo obrigatório" abaixo do campo Senha.

## CT-009 — Campo de dados Senha é obrigatório

| Campo | Valor |
|---|---|
| **Funcionalidade** | Cadastro |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
Usuário estar na página de registro.

### Passos para executar
1. Acessar a tela de cadastro.
2. Não preencher o campo Confirmar Senha.
3. Clicar no botão de Cadastrar.

### Resultado esperado
Sistema deve informar "É campo obrigatório" abaixo do campo Confirmar Senha.

### Resultado obtido
Sistema informa "É campo obrigatório" abaixo do campo Confirmar Senha.














## CT-00X — Transferência sem informar conta de destino

| Campo | Valor |
|---|---|
| **Funcionalidade** | Transferência Bancária |
| **Tipo** | Exploratório |
| **Status** | ❌ Falhou |
| **Bug relacionado** | [BUG-001](https://github.com/augustobormoreira/qa-portfolio/issues/2) |

### Pré-condições
Usuário logado com saldo disponível

### Passos para executar
1. Logar no sistema.
2. Acessar tela de transferência.
3. Preencher valor e deixar campo de conta vazio.

### Resultado esperado
O sistema deve exibir mensagem "Campo de conta não pode ser vazio".

### Resultado obtido
O sistema informa que não pode fazer transferência para a mesma conta de destino.

## CT-00X — Cadastro de nova conta com e-mail já existente

| Campo | Valor |
|---|---|
| **Funcionalidade** | Cadastro de usuário |
| **Tipo** | Exploratório |
| **Status** | ❌ Falhou |
| **Bug relacionado** | [BUG-002](https://github.com/augustobormoreira/qa-portfolio/issues/3) |

### Pré-condições
Usuário já cadastrado com e-mail teste@gmail.com

### Passos para executar
1. Acessar tela de cadastro
2. Preencher com e-mail já existente
3. Preencher demais campos
4. Clicar em Cadastrar

### Resultado esperado
Sistema exibe mensagem "Conta com e-mail já cadastrada!"

### Resultado obtido
Sistema sobrescreve conta existente com novos dados sem exibir erro.

## CT-003 — Transferência sem preencher o campo descrição

| Campo | Valor |
|---|---|
| **Funcionalidade** | Transferência Bancária |
| **Tipo** | Negativo |
| **Status** | ❌ Falhou |
| **Bug relacionado** | [BUG-003](https://github.com/augustobormoreira/qa-portfolio/issues/6) |

### Pré-condições
Usuário logado com saldo disponível

### Passos para executar
1. Acessar a tela de transferência.
2. Preencher todos os campos menos o de descrição.
3. Realizar a transferência.

### Resultado esperado
Sistema deve exibir mensagem de erro pois a descrição é um campo obrigatório conforme os requisitos da aplicação.

### Resultado obtido
Transferência realizada com sucesso sem preencher a descrição.