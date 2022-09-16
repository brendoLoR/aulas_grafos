class NodoBrendoniano {
  /**
   * 
   * @param {*} id 
   * @param {*} name 
   */
  children = []

  constructor(id, name) {
    this.id = id
    this.name = name
    this.dist = 9999999
    this.ant = null
    this.closed = false
  }

  /**
   * 
   * @param {[{weight: any,
   * node: <NodoBrendoniano>}]} children 
   * @returns 
   */
  addChildren(children) {
    if (typeof children === Array) {
      children.map(element => {
        if (typeof element.node != NodoBrendoniano) {
          return false;
        }
        this.children.push(element)
      });
      return true
    }
    if (typeof children.node != NodoBrendoniano) {
      return false
    }
    this.children.push(children)
    return true
  }

  getChildren(){
    return this.children
  }

}