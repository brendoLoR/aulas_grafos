class GrafoBrendoniano {
  constructor() {
    this.root = new NodoBrendoniano(0, 'root', [])
  }

  /**
   * 
   * @param {nodo_id: <Number>} nodo_id
   * @param {[{weight: any,
   * node: <NodoBrendoniano>}]} children 
   * @returns 
   */
  addNode(nodo_id, children) {
    root.getChildren().forEach(node => {
      if (node.id == nodo_id) {
        nodo.addChildren(children)
        return nodo;
      }
      this.addNode(nodo_id, nodo)
      return false;
    }
    )
  }

  printGrafo(root) {
    root.getChildren().map(nodo => {
      console.log(nodo);
      nodo.printGrafo(nodo)
      return false;
    }
    )
  }
}