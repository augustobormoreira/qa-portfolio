## CT-001 — Transferência sem informar conta de destino

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

## CT-002 — Cadastro de nova conta com e-mail já existente

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