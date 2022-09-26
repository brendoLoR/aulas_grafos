import { Fila } from './Fila.mjs';
import { NodoBrendoniano } from './NodoBrendoniano.mjs';

export class GrafoBrendoniano {

  nodes = []
  arestas = []

  constructor(node) {
    let node_id = this.nodes.push(node) - 1
    node.setId(node_id)
  }

  /**
   * 
   * @param {nodo_id: <Number>} nodo_id
   * @param {[{weight: any,
   * node: <NodoBrendoniano>}]} children 
   * @returns number
   */
  addNode(node, parent_id, peso) {
    let node_id = this.nodes.push(node) - 1
    node.ant = this.nodes[parent_id]
    node.setId(node_id)
    this.nodes[parent_id].addFilho(node)
    return node_id
  }
  addNodeSemPai(node) {
    let node_id = this.nodes.push(node) - 1
    node.setId(node_id)
    return node_id
  }

  addAresta(de_id, para_id) {
    this.nodes[de_id].addFilho(this.nodes[para_id])
  }

  printGrafo() {
    console.log(this.nodes);
  }

  getNode(node_id) {
    return this.node[node_id]
  }

  buscaProfundidade(chave, inicio_id) {
    return this._buscaProfundidade(chave, this.nodes[inicio_id], { status: false, r: "não encontreado" }, 0)
  }

  _buscaProfundidade(chave, node, resultado, camada) {
    if (!node.closed) {
      node.closed = true
      if (node.name == chave) {
        resultado = { status: true, r: node, camada: camada }
      } else if (!resultado.status) {
        camada++
        node.filhos.map(filho => {
          resultado = this._buscaProfundidade(chave, filho.node, resultado, camada)
        })
      }
    }
    return resultado
  }

  buscaLargura(chave, inicio_id) {
    let U = this.nodes[inicio_id]
    let fila = new Fila()
    fila.entraFila(U)
    return this._buscaLargura(chave, fila, { status: false, r: "não encontreado" }, 0)
  }

  _buscaLargura(chave, fila, resultado, camada) {

    if (!fila.isEmpty) {

      let U = fila.saiFila()

      if (!U.closed) {
        U.closed = true
        if (U.name == chave) {
          return { status: true, r: U, camada: camada }
        }
        if (!resultado.status) {
          // console.log(U.ant.filhos);
          U.ant.filhos.map(V => {
            if (!V.closed) {
              fila.entraFila(V.node)
            }
          })
          camada++

          resultado = this._buscaLargura(chave, fila, resultado, camada)
        }
      }
    }

    if (resultado.status) {
      return resultado
    }

    let node = this.getNaoVisitado()
    if (node) {
      fila.entraFila(node)
      resultado = this._buscaLargura(chave, fila, resultado, camada)
    }

    return resultado
  }

  getNaoVisitado() {
    for (var i = 0; i < this.nodes.length; i++) {
      if (!this.nodes[i].closed) {
        return this.nodes[i]
      }
    }
    return false
  }

  setAllNaoVisitado() {
    this.nodes.forEach(node => {
      node.closed = false;
    })
  }

}