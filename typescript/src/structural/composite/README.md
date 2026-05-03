# Definição:
  - Compor objetos em estruturas de árvore para representar hierarquias parte/todo.
  - Composite permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.

# Estrutura:
  - Composite: são objetos que não fazem o trabalho real, na verdade delegam sua responsabilidade para seus filhos
  através de recursividade.
  - Leaf: são os nós externos, as pontas da árvore e os objetos que realmente realizam o trabalho.