# Definição:
  - Bridge é um padrão de projeto estrutural que tem a intenção de desacoplar uma abstração da sua implementação, de modo que as duas possam variar e evoluir independentemente.

# Diferenças entre Bridge e Adapter:
  - A diferença chave entre esses padrões está nas suas intenções... O padrão Adapter faz as coisas funcionarem APÓS elas terem sido projetadas; o Bridge as faz funcionar ANTES que existam...

# Aplicabilidade:
  - Você souber que sua estrutura terá abstrações (código de alto nível) e implementações dessa abstração (detalhes) que possam variar de maneira independente.
  - Você souber que o Adapter poderia ser aplicado naquela estrutura (você já conhece a estrutura).
  - Você quiser ividir uma classe que possa ter diversas variantes (como em produtos e suas variações de cores: CanetaAzul, CanetaVermelha, CamisetaAzul, CamisetaVermelha, etc...).
  - Você quer trocar as implementações em tempo de execução.
