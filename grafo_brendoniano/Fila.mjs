/**
 * creditos para: https://www.javascripttutorial.net/javascript-queue/
 */


export class Fila {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    entraFila(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    saiFila() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    primeiro() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }