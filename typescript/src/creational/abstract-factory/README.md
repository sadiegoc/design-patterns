# Definição:

- Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas;
- Visa agrupar famílias de produtos compatíveis criando uma fábrica concreta por grupo de objetos compatíveis;
- Separa o código que cria do código que usa os objetos (SRP);
- Permite fácil implementação de novas famílias de objetos (OCP);
- Toda a programação fica focada nas interfaces e não em implementações;

# Diagrama:

      Abstract Factory

Concrete Factory 1 | Concrete Factory 2
createProdutctA(): ProductA
createProdutctB(): ProductB

      Product A

Product A1 | Product A2

      Product B

Product B1 | Product B2

- regra:
  Product A1 <-> Product B1
  Product A2 <-> Product B2

- nunca:
  Product A1 <x> Product B2
  Product A2 <x> Product B1

- Concrete Factory 1 => Product A1 | Product B1
- Concrete Factory 2 => Product A2 | Product B2
