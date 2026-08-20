# Login

| *ID* | BB-CT-01 |
|---|---|
| *Título* | Não preencher Login e Senha deve mostrar que os dois são campos obrigatórios |
| *Pré-Condições* | Usuário não estar logado e estar na página de login |
| *Passos do Teste* | 1. Não preencher campos de login e senha.<br>2. Clicar em Acessar |
| *Resultado Esperado* | Sistema informa que os campos Login e Senha são obrigatórios |

| *ID* | BB-CT-02 |
|---|---|
| *Título* | Tentativa de acesso sem preencher campos obrigatórios deve exibir a mensagem "Usuário e senha precisam ser preenchidos" |
| *Pré-condições* | Usuário não estar logado e na página inicial de login |
| *Passos do teste* | 1. Não preencher campos de senha e e-mail<br>2. Clicar em Acessar |
| *Resultado esperado* | Sistema deve exibir mensagem de erro "Usuário e Senha precisam ser preenchidos" |

| *ID* | BB-CT-03 |
|---|---|
| *Título* | Não deve autorizar o acesso para usuários inválidos ou não cadastrados |
| *Pré-condições* | Usuário não estar logado e na página inicial de login |
| *Passos do teste* | 1. Preencher campo com e-mail inválido ou e-mail não cadastrado<br>2. Preencher senha<br>3. Clicar em Acessar |
| *Resultado esperado* | Sistema deve exibir campo inválido para e-mail inválido e "Usuário ou senha inválido" para usuário não cadastrado |

| *ID* | BB-CT-04 |
|---|---|
| *Título* | Registro de novo usuário |
| *Pré-condições* | E-mail não estar cadastrado |
| *Passos do teste* | 1. Acessar a tela de registro<br>2. Preencher informações válidas<br>3. Clicar no botão de cadastrar |
| *Resultado esperado* | Sistema deve exibir cadastro com sucesso e redirecionar para a página home |

| *ID* | BB-CT-05 |
|---|---|
| *Título* | Acesso de Usuário existente |
| *Pré-condições* | Usuário já estar cadastrado no sistema |
| *Passos do teste* | 1. Acessar a tela de login<br>2. Preencher campos e-mail e senha com informações válidas<br>3. Clicar no botão de acessar |
| *Resultado esperado* | Sistema deve redirecionar para a página home |

# Cadastro

| *ID* | BB-CT-06 |
|---|---|
| *Título* | Campo de dados "E-mail" é obrigatório |
| *Pré-condições* | Usuário estar na página de registro |
| *Passos do teste* | 1. Acessar a tela de cadastro<br>2. Não preencher o campo e-mail<br>3. Clicar no botão de Cadastrar |
| *Resultado esperado* | Sistema deve informar "É campo obrigatório" abaixo do campo E-Mail |

| *ID* | BB-CT-07 |
|---|---|
| *Título* | Campo de dados "Nome" é obrigatório |
| *Pré-condições* | Usuário estar na página de registro |
| *Passos do teste* | 1. Acessar a tela de cadastro<br>2. Não preencher o campo nome<br>3. Clicar no botão de Cadastrar |
| *Resultado esperado* | Sistema deve informar "É campo obrigatório" abaixo do campo Nome |

| *ID* | BB-CT-08 |
|---|---|
| *Título* | Campo de dados "Senha" é obrigatório |
| *Pré-condições* | Usuário estar na página de registro |
| *Passos do teste* | 1. Acessar a tela de cadastro<br>2. Não preencher o campo Senha<br>3. Clicar no botão de Cadastrar |
| *Resultado esperado* | Sistema deve informar "É campo obrigatório" abaixo do campo Senha |

| *ID* | BB-CT-09 |
|---|---|
| *Título* | Campo de dados "Confirmar Senha" é obrigatório |
| *Pré-condições* | Usuário estar na página de registro |
| *Passos do teste* | 1. Acessar a tela de cadastro<br>2. Não preencher o campo Confirmar Senha<br>3. Clicar no botão de Cadastrar |
| *Resultado esperado* | Sistema deve informar "É campo obrigatório" abaixo do campo Confirmar Senha |

| *ID* | BB-CT-10 |
|---|---|
| *Título* | Tentativa de registro sem preencher apenas Nome deve exibir mensagem de erro |
| *Pré-condições* | Usuário estar na página de registro |
| *Passos do teste* | 1. Acessar a tela de cadastro<br>2. Deixar o campo nome vazio<br>3. Preencher todos os campos restantes com dados válidos<br>4. Clicar no botão de Cadastrar |
| *Resultado esperado* | Sistema deve informar mensagem de erro "Nome não pode ser vazio" |

| *ID* | BB-CT-11 |
|---|---|
| *Título* | Tentativa de registro sem preencher e-mail deve exibir mensagem de erro "Email não pode ser vazio" |
| *Pré-condições* | Usuário estar na página de registro |
| *Passos do teste* | 1. Não preencher o campo e-mail<br>2. Preencher os campos restantes com dados válidos<br>3. Clicar em registrar |
| *Resultado esperado* | Sistema exibe mensagem de erro "Email não pode ser vazio" abaixo do input de e-mail |

| *ID* | BB-CT-12 |
|---|---|
| *Título* | Tentativa de registro sem preencher senha deve exibir mensagem de erro "Senha não pode ser vazio" |
| *Pré-condições* | Usuário estar na página de registro |
| *Passos do teste* | 1. Não preencher o campo senha<br>2. Preencher os campos restantes com dados válidos<br>3. Clicar em registrar |
| *Resultado esperado* | Sistema exibe mensagem de erro "Senha não pode ser vazio" abaixo do input de senha |

| *ID* | BB-CT-13 |
|---|---|
| *Título* | Tentativa de registro sem preencher confirmar senha deve exibir mensagem de erro "Confirmar senha não pode ser vazio" |
| *Pré-condições* | Usuário estar na página de registro |
| *Passos do teste* | 1. Não preencher o campo confirmar senha<br>2. Preencher os campos restantes com dados válidos<br>3. Clicar em registrar |
| *Resultado esperado* | Sistema exibe mensagem de erro "Confirmar senha não pode ser vazio" abaixo do input de confirmar senha |

| *ID* | BB-CT-14 |
|---|---|
| *Título* | Deixar ativa a opção "Criar conta com saldo" deve criar conta com saldo R$ 1.000,00 |
| *Pré-condições* | Usuário estar na página de registro |
| *Passos do teste* | 1. Preencher os campos com dados válidos<br>2. Marcar a opção criar conta com saldo<br>3. Voltar para a área de login<br>4. Entrar com usuário registrado |
| *Resultado esperado* | Sistema deve exibir "Saldo em conta R$ 1.000,00" |

| *ID* | BB-CT-15 |
|---|---|
| *Título* | Não marcar a opção "Criar conta com saldo" deve criar conta com saldo R$ 0,00 |
| *Pré-condições* | Usuário estar na página de registro |
| *Passos do teste* | 1. Preencher os campos com dados válidos<br>2. Não marcar a opção criar conta com saldo<br>3. Voltar para a área de login<br>4. Entrar com usuário registrado |
| *Resultado esperado* | Sistema deve exibir "Saldo em conta R$ 0,00" |

| *ID* | BB-CT-16 |
|---|---|
| *Título* | Senhas diferentes deve exibir mensagem de erro "Senha e confirmação de senha precisam ser iguais" |
| *Pré-condições* | Usuário estar na página de registro |
| *Passos do teste* | 1. Preencher os campos com dados válidos<br>2. Preencher senha e confirmar senha com valores diferentes<br>3. Clicar em registrar |
| *Resultado esperado* | Sistema deve exibir mensagem de erro "Senha e confirmação de senha devem ser iguais" |

| *ID* | BB-CT-17 |
|---|---|
| *Título* | Cadastrar conta com sucesso deve exibir número da conta |
| *Pré-condições* | Usuário estar na página de registro |
| *Passos do teste* | 1. Preencher os campos com dados válidos<br>2. Clicar em registrar |
| *Resultado esperado* | Sistema deve exibir mensagem "A conta XXX-X foi criada com sucesso" |

# Transferência

| *ID* | BB-CT-18 |
|---|---|
| *Título* | Tentativa de transferência para conta inválida deve exibir mensagem de erro "Conta inválida ou inexistente" |
| *Pré-condições* | Usuário possuir registro e estar logado no sistema |
| *Passos do teste* | 1. Acessar a tela de transferência<br>2. Preencher campos "Número da conta" e "Dígito" com dados inválidos ou conta inexistente<br>3. Preencher campos restantes com dados válidos<br>4. Clicar em "Transferir agora" |
| *Resultado esperado* | Sistema deve exibir mensagem "Conta inválida ou inexistente" |

| *ID* | BB-CT-19 |
|---|---|
| *Título* | Tentativa de transferência com valor maior ao saldo disponível da conta não deve ser processada |
| *Pré-condições* | Usuário possuir registro e estar logado no sistema |
| *Passos do teste* | 1. Acessar a tela de transferência<br>2. Preencher campo "Valor da transferência" com valor maior que o saldo disponível da conta<br>3. Preencher campos restantes com dados válidos<br>4. Clicar em "Transferir


