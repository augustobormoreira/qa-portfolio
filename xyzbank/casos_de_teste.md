# Casos de Teste – GlobalSQA Banking Project

| *ID* | BP-CT-01 |
|---|---|
| *Título* | Login deve permitir acesso à conta do cliente selecionado |
| *Pré-condições* | Usuário estar na página de seleção de cliente |
| *Passos do teste* | 1. Selecionar o cliente Hermoine Granger no campo de seleção de usuário<br>2. Clicar no botão "Login"<br>3. Verificar os dados exibidos após o login |
| *Resultado esperado* | Sistema realiza o login e exibe as informações da conta do cliente Hermoine Granger |

---

| *ID* | BP-CT-02 |
|---|---|
| *Título* | Depósito válido deve exibir mensagem de sucesso |
| *Pré-condições* | Usuário estar logado em uma conta bancária |
| *Passos do teste* | 1. Clicar no botão "Deposit"<br>2. Preencher o campo de valor com 5000<br>3. Clicar no botão "Deposit" do formulário |
| *Resultado esperado* | Sistema realiza o depósito e exibe a mensagem "Deposit Successful" |

---

| *ID* | BP-CT-03 |
|---|---|
| *Título* | Saque válido deve exibir mensagem de sucesso |
| *Pré-condições* | Usuário estar logado em uma conta bancária com saldo suficiente |
| *Passos do teste* | 1. Acessar a opção "Deposit"<br>2. Depositar 10000 para garantir saldo suficiente<br>3. Acessar a opção "Withdrawl"<br>4. Preencher o campo de valor com 5000<br>5. Clicar no botão "Withdraw" |
| *Resultado esperado* | Sistema realiza o saque e exibe a mensagem "Transaction successful" |

---

| *ID* | BP-CT-04 |
|---|---|
| *Título* | Saque superior ao saldo disponível deve exibir mensagem de erro |
| *Pré-condições* | Usuário estar logado em uma conta bancária com saldo inferior ao valor solicitado |
| *Passos do teste* | 1. Acessar a opção "Withdrawl"<br>2. Preencher o campo de valor com 5000<br>3. Clicar no botão "Withdraw" |
| *Resultado esperado* | Sistema não realiza o saque e exibe uma mensagem de falha, contendo "Transaction Failed." |

---

| *ID* | BP-CT-05 |
|---|---|
| *Título* | Depósito deve funcionar em todas as contas disponíveis do cliente |
| *Pré-condições* | Usuário estar logado em um cliente que possua as contas 1001, 1002 e 1003 disponíveis |
| *Passos do teste* | 1. Acessar a opção "Deposit"<br>2. Depositar 1000 na primeira conta<br>3. Selecionar a conta 1002<br>4. Acessar novamente a opção "Deposit"<br>5. Depositar 1000 na conta 1002<br>6. Selecionar a conta 1003<br>7. Acessar novamente a opção "Deposit"<br>8. Depositar 1000 na conta 1003 |
| *Resultado esperado* | O sistema deve realizar o depósito corretamente nas três contas e exibir "Deposit Successful" após cada operação |

---

| *ID* | BP-CT-06 |
|---|---|
| *Título* | Saque deve funcionar em todas as contas disponíveis do cliente |
| *Pré-condições* | Usuário estar logado em um cliente que possua as contas 1001, 1002 e 1003 disponíveis |
| *Passos do teste* | 1. Acessar a opção "Withdrawl" na primeira conta<br>2. Realizar um saque de 1000<br>3. Verificar a mensagem "Transaction successful"<br>4. Selecionar a conta 1002<br>5. Acessar a opção "Deposit" e depositar 1000 para garantir saldo para o teste<br>6. Acessar a opção "Withdrawl"<br>7. Realizar um saque de 1000<br>8. Verificar a mensagem "Transaction successful"<br>9. Selecionar a conta 1003<br>10. Acessar a opção "Deposit" e depositar 1000 para garantir saldo para o teste<br>11. Acessar a opção "Withdrawl"<br>12. Realizar um saque de 1000<br>13. Verificar a mensagem "Transaction successful" |
| *Resultado esperado* | O sistema deve permitir o saque nas três contas e exibir "Transaction successful" após cada operação |
