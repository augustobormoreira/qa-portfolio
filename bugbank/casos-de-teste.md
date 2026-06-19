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

## CT-010 — Tentativa de Registro sem preencher apenas Nome deve exibir mensagem de erro

| Campo | Valor |
|---|---|
| **Funcionalidade** | Registro |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
Usuário estar na página de registro.

### Passos para executar
1. Acessar a tela de cadastro.
2. Deixar o campo nome vazio.
3. Preencher todos os campos restantes com dados válidos.
3. Clicar no botão de Cadastrar.

### Resultado esperado
Sistema deve informar mensagem de erro: "Nome não pode ser vazio".

### Resultado obtido
Sistema informa mensagem de erro: "Nome não pode ser vazio".

## CT-011 — Tentativa de Registro sem preencher e-mail deve exibir mensagem de erro "Email não pode ser vazio"

| Campo | Valor |
|---|---|
| **Funcionalidade** | Registro |
| **Tipo** | Negativo |
| **Status** | ❌ Falhou |
| **Bug relacionado** | [BUG-007](https://github.com/augustobormoreira/qa-portfolio/issues/12) |

### Pré-condições
Usuário estar na página de registro.

### Passos para executar
1. Não preencher o campo e-mail.
2. Preencher os campos restantes com dados válidos.
2. Clicar em registrar.

### Resultado esperado
Sistema exibe mensagem de erro "Email não pode ser vazio." abaixo do input de nome.

### Resultado obtido
A mensagem de erro "Email não pode ser vazio." não é exibida.

## CT-012 — Tentativa de Registro sem preencher senha deve exibir mensagem de erro "Senha não pode ser vazio"

| Campo | Valor |
|---|---|
| **Funcionalidade** | Registro |
| **Tipo** | Negativo |
| **Status** | ❌ Falhou |
| **Bug relacionado** | [BUG-008](https://github.com/augustobormoreira/qa-portfolio/issues/13) |

### Pré-condições
Usuário estar na página de registro.

### Passos para executar
1. Não preencher o campo senha.
2. Preencher os campos restantes com dados válidos.
2. Clicar em registrar.

### Resultado esperado
Sistema exibe mensagem de erro "Senha não pode ser vazio." abaixo do input de nome.

### Resultado obtido
A mensagem de erro "Senha não pode ser vazio." não é exibida.

## CT-013 — Tentativa de Registro sem preencher confirmar senha deve exibir mensagem de erro "Confirmar senha não pode ser vazio"

| Campo | Valor |
|---|---|
| **Funcionalidade** | Registro |
| **Tipo** | Negativo |
| **Status** | ❌ Falhou |
| **Bug relacionado** | [BUG-009](https://github.com/augustobormoreira/qa-portfolio/issues/14) |

### Pré-condições
Usuário estar na página de registro.

### Passos para executar
1. Não preencher o campo confirmar senha.
2. Preencher os campos restantes com dados válidos.
2. Clicar em registrar.

### Resultado esperado
Sistema exibe mensagem de erro "Confirmar senha não pode ser vazio." abaixo do input de nome.

### Resultado obtido
A mensagem de erro "Confirmar senha não pode ser vazio." não é exibida.

## CT-014 — Deixar ativa a opção "Criar conta com saldo" deve criar conta com saldo R$ 1.000,00

| Campo | Valor |
|---|---|
| **Funcionalidade** | Registro |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
Usuário estar na página de registro.

### Passos para executar
1. Preencher os campos com dados válidos.
2. Marcar a opção criar conta com saldo.
3. Voltar para a área de login.
4. Entrar com usuário registrado.

### Resultado esperado
Sistema deve exibir "Saldo em conta R$ 1.000,00".

### Resultado obtido
Sistema exibe "Saldo em conta R$ 1.000,00".

## CT-015 — Deixar ativa a opção "Criar conta com saldo" deve criar conta com saldo R$ 1.000,00

| Campo | Valor |
|---|---|
| **Funcionalidade** | Registro |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
Usuário estar na página de registro.

### Passos para executar
1. Preencher os campos com dados válidos.
2. Não marcar a opção criar conta com saldo.
3. Voltar para a área de login.
4. Entrar com usuário registrado.

### Resultado esperado
Sistema deve exibir "Saldo em conta R$ 0,00".

### Resultado obtido
Sistema exibe "Saldo em conta R$ 0,00".

## CT-016 — Senhas diferentes deve exibir mensagem de erro "Senha e confirmação de senha precisam ser iguais"

| Campo | Valor |
|---|---|
| **Funcionalidade** | Registro |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
Usuário estar na página de registro.

### Passos para executar
1. Preencher os campos com dados válidos.
2. Preencher senha e confirmar senha com valores diferentes.
3. Clicar em registrar.

### Resultado esperado
Sistema deve exibir mensagem de erro "Senha e confirmação de senha devem ser iguais".

### Resultado obtido
Sistema exibe mensagem de erro "Senha e confirmação de senha devem ser iguais".

## CT-017 — Cadastrar conta com sucesso deve exibir número da conta

| Campo | Valor |
|---|---|
| **Funcionalidade** | Registro |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
Usuário estar na página de registro.

### Passos para executar
1. Preencher os campos com dados válidos.
2. Clicar em registrar.

### Resultado esperado
Sistema deve exibir mensagem "A conta XXX-X foi criada com sucesso".

### Resultado obtido
Sistema exibe mensagem "A conta XXX-X foi criada com sucesso".

# Transferência

## CT-018 — Tentativa de transferência para conta inválida deve exibir mensagem de erro "Conta inválida ou inexistente"

| Campo | Valor |
|---|---|
| **Funcionalidade** | Transferência |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
1. Usuário possuir registro e estar logado no sistema.

### Passos para executar
1. Acessar a tela de transferência.
2. Preencher campos "Número da conta" e "Dígito" com dados inválidos ou conta inexistente.
3. Preencher campos restantes com dados válidos.
4. Clicar em "Transferir agora".

### Resultado esperado
Sistema deve exibir mensagem "Conta inválida ou inexistente".

### Resultado obtido
Sistema exibe mensagem "Conta inválida ou inexistente".

## CT-019 — Tentativa de transferência com valor maior ao saldo disponível da conta não deve ser processada

| Campo | Valor |
|---|---|
| **Funcionalidade** | Transferência |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
1. Usuário possuir registro e estar logado no sistema.

### Passos para executar
1. Acessar a tela de transferência.
2. Preencher campo "Valor da transferência" com valor maior que o saldo disponível da conta.
3. Preencher campos restantes com dados válidos.
4. Clicar em "Transferir agora".

### Resultado esperado
Sistema deve exibir mensagem "Você não tem saldo o suficiente para essa transação".

### Resultado obtido
Sistema exibe mensagem "Você não tem saldo o suficiente para essa transação".

## CT-020 — Tentativa de transferência sem campo obrigatório "Descrição" não deve ser processada

| Campo | Valor |
|---|---|
| **Funcionalidade** | Transferência |
| **Tipo** | Negativo |
| **Status** | ❌ Falhou |
| **Bug relacionado** | [BUG-010](https://github.com/augustobormoreira/qa-portfolio/issues/16) |

### Pré-condições
1. Usuário possuir registro e estar logado no sistema.

### Passos para executar
1. Acessar a página de transferência.
2. Preencher campos com dados válidos.
3. Deixar o campo "Descrição" em branco.
4. Clicar em "Transferir agora".

### Resultado esperado
Sistema exibe mensagem de erro "Campo descrição não pode ser vazio" e não processa transação.

### Resultado obtido
Sistema não exibe mensagem de erro "Campo descrição não pode ser vazio" e processa transação com sucesso.

## CT-021 — Tentativa de transferência com número menor ou igual a zero deve informar mensagem de erro

| Campo | Valor |
|---|---|
| **Funcionalidade** | Transferência |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
1. Usuário possuir registro e estar logado no sistema.

### Passos para executar
1. Acessar a página de transferência.
2. Preencher campos com dados válidos.
3. Preencher campo "Valor da transferência" com valor menor ou igual a zero.
4. Clicar em "Transferir agora".

### Resultado esperado
Sistema exibe mensagem de erro "Valor da transferência não pode ser 0 ou negativo".

### Resultado obtido
Sistema exibe mensagem de erro "Valor da transferência não pode ser 0 ou negativo".

## CT-022 — Ao realizar transferência válida valor deve ser debitado corretamente

| Campo | Valor |
|---|---|
| **Funcionalidade** | Transferência |
| **Tipo** | Positivo |
| **Status** | ✅ Passou |

### Pré-condições
1. Usuário possuir registro e estar logado no sistema.

### Passos para executar
1. Acessar a página de transferência.
2. Preencher campos com dados válidos.
3. Clicar em "Transferir agora".

### Resultado esperado
Sistema atualiza saldo com saldo anterior menos valor debitado.

### Resultado obtido
Sistema atualizou saldo com saldo anterior menos valor debitado.

## CT-023 — Ao realizar transferência válida valor o usuário deve ser redirecionado para a página de extrato

| Campo | Valor |
|---|---|
| **Funcionalidade** | Transferência |
| **Tipo** | Negativo |
| **Status** | ❌ Falhou |

### Pré-condições
1. Usuário possuir registro e estar logado no sistema.

### Passos para executar
1. Acessar a página de transferência.
2. Preencher campos com dados válidos.
3. Clicar em "Transferir agora".

### Resultado esperado
Sistema redireciona usuário para a página de extrato.

### Resultado obtido
Sistema mantém o usuário na página de transferência.



