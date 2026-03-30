# Definição:
  - Agregar responsabilidades adicionaris a um objeto dinamicamente. Os Decorators fornecem uma alternativa flexível ao uso de subclasses para extensão de funcionalidades.
  - Usa a composição ao invés da herança (sempre prefira composição ao invés de herança).
  - É muito parecido com o "Composite" porém tem a intenção diferente.
  - É usado para adicionar funcionalidades a objetos em tempo de execução.
  - Finge ser o objeto sendo decorado, porém repassa chamdas de métodos para o mesmo.
  - Pode executar ações antes e depois das chamadas dos métodos do objeto decorado.
  - Pode manipular dados antes do retorno.