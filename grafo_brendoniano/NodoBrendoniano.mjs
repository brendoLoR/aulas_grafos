export class NodoBrendoniano {
  filhos = []
  pais = []
  id = null


  /**
   * 
   * @param {*} id 
   * @param {*} name 
   */
  constructor(id, name, old = false) {
    if (!old) {
      this.name = name
      this.custo = 9999999
      this.ant = null
      this.closed = false
    }else{
      this.id = old.id
      this.name = old.name
      this.custo = old.custo
      this.ant = old.ant
      this.closed = old.closed
      this.pais = old.pais
    }
  }

  setId(id) {
    this.id = id
  }
  addFilho(node, peso) {
    this.filhos.push({ id: node.id, node, peso })
    node.pais.push(this)
  }

  printSelf(node) {
    console.log(node);

  }
  printAll() {

    if (!this.closed) {
      this.closed = true
      this.printSelf(this)
      this.filhos.map(filho => {
        filho.node.printAll()
      })
    }
    return 0
  }
  printAllIds() {
    if (!this.closed) {
      this.closed = true
      console.log(this.id)
      console.log('---¬')
      this.filhos.map(filho => {
        filho.node.printAllIds()
      })
    }
    return 0
  }

  

  
}