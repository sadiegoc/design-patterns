/**
 * Interfaces
 */
interface Observable {
  subscribe(...observer: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

/**
 * Concrete classes
 */
class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.observers.includes(observer)) this.observers.push(observer);
    });
  }

  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);

    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}

class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: InputObservable): void {
    this.element.innerText = observable.element.value;
  }
}

/**
 * Client code
 */
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);

  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const p = document.createElement('p');
  document.body.appendChild(p);

  return p;
}

const observable = new InputObservable(makeInput());

let observers = [];

for (let i = 0; i < 2; i++) {
  observers.push(new ParagraphObserver(makeParagraph()));
}

observable.subscribe(...observers);

observable.element.addEventListener('keyup', function () {
  observable.notify();
});
