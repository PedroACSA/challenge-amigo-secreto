
# Amigo Secreto

Este projeto implementa as seguintes funcionalidades para gerenciar e sortear amigos:

## Funcionalidades

1. **Adicionar amigos**:
   - Captura o nome inserido pelo usuário em um campo de texto.
   - Valida se o nome não está vazio, exibindo uma mensagem de erro caso esteja.
   - Adiciona o nome ao array que armazena os amigos.
   - Limpa o campo de texto após a inserção.

2. **Atualizar a lista de amigos**:
   - Limpa a lista existente no HTML para evitar duplicados.
   - Percorre o array de amigos e cria elementos de lista (`<li>`) para exibir os nomes inseridos.

3. **Sortear amigos**:
   - Verifica se há amigos disponíveis no array antes de realizar o sorteio.
   - Gera um índice aleatório para selecionar um amigo.
   - Exibe o resultado do sorteio na interface do usuário.

## Como utilizar

1. Insira um nome no campo de texto e clique em "Adicionar".
2. Os nomes adicionados serão exibidos em uma lista.
3. Clique no botão "Sortear amigo" para selecionar um nome aleatoriamente.
