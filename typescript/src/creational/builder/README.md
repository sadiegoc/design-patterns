# Definição:
  - O padrão sugere a separação entre a construção de um objeto e a utilização deste.
  - Trata da criação de objetos complexos (construtor com muitos parametros, composição de vários objetos, algoritmo de criação de objeto)

# Componentes:
  - Builder (interface/protocolo): define os passor que podem ser executados na construção;
  - Concrete Builders: implementam a interface e sabem como montar cada parte do produto;
  - Director (opcional): orquestra a ordem de chamadas dos builders para criar construções pré-definidas;
  - Product: o objeto final que está sendo construído;
