## QA Playground

# Dynamic Table (qaplayground.dev)

| *ID* | QP-CT-01 |
|---|---|
| *Título* | Buscar herói "Spider-Man" na tabela dinâmica deve retornar o nome real "Peter Parker" |
| *Pré-Condições* | Usuário estar na página https://qaplayground.dev/apps/dynamic-table/ |
| *Passos do Teste* | 1. Localizar a linha da tabela que contenha "Spider-Man"<br>2. Obter o texto da última coluna dessa linha (nome real) |
| *Resultado Esperado* | O nome real exibido deve ser "Peter Parker", mesmo com a ordem das linhas da tabela sendo embaralhada a cada carregamento da página |

# Verify Account (qaplayground.dev)

| *ID* | QP-CT-02 |
|---|---|
| *Título* | Preencher corretamente o código de verificação exibido deve autenticar a conta com sucesso |
| *Pré-Condições* | Usuário estar na página https://qaplayground.dev/apps/verify-account/ |
| *Passos do Teste* | 1. Ler o código de verificação exibido no texto informativo da página<br>2. Separar o código em seus dígitos/partes<br>3. Preencher cada campo de código com a parte correspondente, na ordem |
| *Resultado Esperado* | Sistema deve exibir a mensagem "Success" após o preenchimento correto do código |

# Tags Input Box (qaplayground.dev)

| *ID* | QP-CT-03 |
|---|---|
| *Título* | Adicionar múltiplas tags separadas por vírgula e Enter deve criar uma tag para cada valor informado |
| *Pré-Condições* | Usuário estar na página https://qaplayground.dev/apps/tags-input-box/ |
| *Passos do Teste* | 1. No campo de input de tags, digitar "Java," "TypeScript," ".NET," "Cypress" seguido de Enter<br>2. Contar os itens (`<li>`) exibidos na lista de tags |
| *Resultado Esperado* | A lista deve conter 6 itens no total (as 4 tags digitadas somadas aos itens já existentes/padrão do componente) |

# Movie Input Fields (qaplayground.com)

| *ID* | QP-CT-04 |
|---|---|
| *Título* | Digitar "Interstellar" no campo de nome do filme e confirmar deve exibir "Interstellar" no span de resultado |
| *Pré-Condições* | Usuário estar na página https://qaplayground.com/practice/input-fields |
| *Passos do Teste* | 1. Limpar o campo de input do nome do filme<br>2. Digitar "Interstellar"<br>3. Clicar no botão de submeter |
| *Resultado Esperado* | O span de resultado (result-s01) deve conter o texto "Interstellar" |

| *ID* | QP-CT-05 |
|---|---|
| *Título* | Digitar qualquer nome de filme válido e confirmar deve exibir esse mesmo nome no span de resultado |
| *Pré-Condições* | Usuário estar na página https://qaplayground.com/practice/input-fields |
| *Passos do Teste* | 1. Limpar o campo de input do nome do filme<br>2. Digitar "The Immitation Game"<br>3. Clicar no botão de submeter |
| *Resultado Esperado* | O span de resultado (result-s01) deve conter o texto "The Immitation Game" |

| *ID* | QP-CT-06 |
|---|---|
| *Título* | Preencher o campo de nome do filme com um valor deve ocultar o placeholder do input |
| *Pré-Condições* | Usuário estar na página https://qaplayground.com/practice/input-fields |
| *Passos do Teste* | 1. Limpar o campo de input do nome do filme<br>2. Digitar "The Immitation Game" (sem submeter) |
| *Resultado Esperado* | O atributo `placeholder` do input deve estar vazio ("") enquanto o campo tiver valor preenchido |
