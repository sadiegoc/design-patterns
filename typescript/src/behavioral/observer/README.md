# Definição:

- Define uma dependência um para muitos entre objetos, de modo que, quando um objeto muda de estado, todos os seus dependentes são automaticamente notificados e atualizados.

# Sobre:

- Implementado com dois tipos de objetos: objetos observáveis (Observable) e objetos observadores (Observer);
- Objetos observáveis (Observable) têm uma referência para todos os seus observadores. isso torna possível adicionar, remover e notificar todos observadores quando seu estado muda;
- Objetos observadores (Observer) devem ter meios de receber notificação de seus observáveis. Geralmente isso é feito com apenas um método;

# Aplicabilidade:

- Você precisa notificar vários objetos sobre a mudança de estado de outro objeto;

# Consequências:

## Bom:

- Usa o SRP e OCP;
- Facilita a comunicação entre objetos em tempo de execução;

## Ruim:

- Pode ser complexo ou impossível manter a ordem em que as notificações são enviadas;
