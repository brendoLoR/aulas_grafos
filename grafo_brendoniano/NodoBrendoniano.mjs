export class NodoBrendoniano {
  filhos = []
  id = null


  /**
   * 
   * @param {*} id 
   * @param {*} name 
   */
  constructor(id, name) {
    this.name = name
    this.dist = 9999999
    this.ant = null
    this.closed = false
  }

  setId(id) {
    this.id = id
  }
  addFilho(node) {
    this.filhos.push({ id: node.id, node })
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