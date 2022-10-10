import { Fila } from './Fila.mjs';
import { NodoBrendoniano } from './NodoBrendoniano.mjs';

export class GrafoBrendoniano {

  nodes = []
  arestas = []

  constructor() {
    // node.custo = 0 //root para dijkstra
    // let node_id = this.nodes.push(node) - 1
    // node.setId(node_id)
  }

  /**
   * 
   * @param {nodo_id: <Number>} nodo_id
   * @param {[{weight: any,
   * node: <NodoBrendoniano>}]} children 
   * @returns number
   */
  addNode(node, parent_id, peso) {
    node.custo = this.nodes.length == 0 ? 0 : 999999
    node.ant = null
    let node_id = this.nodes.push(node) - 1
    node.setId(node_id)
    if (parent_id) {
      // console.log(this.nodes)
      this.addAresta(parent_id, node_id, peso)
      // this.nodes[parent_id].addFilho(node, peso)
    }
    return node_id
  }
  addNodeSemPai(node) {
    let node_id = this.nodes.push(node) - 1
    node.setId(node_id)
    return node_id
  }

  addAresta(de_id, para_id, peso) {
    // console.log(this.nodes.find(node => node.id == de_id))
    this.arestas.push({ de: de_id, para: para_id, peso })
    this.nodes.find(node => node.id == de_id).addFilho(this.nodes.find(node => node.id == para_id), peso)
  }

  printGrafo() {
    console.log(this.nodes);
  }

  getNode(node_id) {
    return this.node[node_id]
  }

  getMelhorCaminhoDijkstra(node_de, node_para) {
    return this.getDijkstra(node_de).find(node => node.id == node_para)
  }
  getDijkstra(node_de) {
    this.setAllNaoVisitado()
    this.setCustoInfinitoAll()
    let nodes = this.nodes
    nodes.find(node => node.id == node_de).custo = 0;
    nodes.find(node => node.id == node_de).closed = true;
    nodes = this._ordeneNodes(nodes)
    let menor = nodes[0]

    while (menor) {
      nodes.filter(node => node.closed).forEach(node_visitado => {
        node_visitado.filhos.filter(filho => !filho.node.closed).forEach(filho => {
          let soma = node_visitado.custo + filho.peso
          if (soma < filho.node.custo) {
            filho.node.custo = soma
            filho.node.ant = node_visitado
          }
        })
      })


      nodes = this._ordeneNodes(nodes)
      menor = nodes.filter(node => !node.closed)[0]
      if (menor) {
        nodes.filter(node => !node.closed)[0].closed = true
      }
    }
    return nodes
  }

  getKahn() {
    return this._getKahn(this.nodes)
  }
  _getKahn(nodes) {
    var ordenado = []
    let index = nodes.findIndex(node => node.pais.length == 0)
    if (index > -1) {
      var sem_pais = nodes.splice(index, 1)[0]
    }
    console.log(sem_pais)
    while (sem_pais) {
      sem_pais.filhos.forEach(filho => {
        // console.log(filho)
        index = filho.node.pais.findIndex(pai => pai.id == sem_pais.id)
        if (index > -1) {
          filho.node.pais.splice(index, 1)
        }
        // console.log(filho)
        // console.log("SEPARAÇÃOOOO")

      })
      ordenado.push(sem_pais)
      index = nodes.findIndex(node => node.pais.length == 0)
      if (index > -1) {
        sem_pais = nodes.splice(index, 1)[0]
      } else {
        sem_pais = false
      }
    }
    return ordenado
  }
  buscaProfundidade(chave, inicio_id) {
    this.setAllNaoVisitado()

    return this._buscaProfundidade(chave, this.nodes.find(node => node.id == inicio_id), { status: false, r: "não encontreado" }, 0)
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
    this.setAllNaoVisitado()

    let U = this.nodes.find(node => node.id == inicio_id)
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
          if (U.ant) {
            U.ant.filhos.map(V => {
              if (!V.closed) {
                fila.entraFila(V.node)
              }
            })
          } else {
            U.filhos.map(V => {
              if (!V.closed) {
                fila.entraFila(V.node)
              }
            })

          }
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

  getKruskal() {
    let _nodes = []
    let _arestas = []
    this.setAllNaoVisitado()

    this.nodes.map(node => {
      let _node = new NodoBrendoniano(null, null, node)
      _node.filhos = []
      _nodes.push({ node: _node })
    })

    _arestas = structuredClone(this.arestas.sort((a, b) => a.peso - b.peso))

    return this._getKruskal(_nodes, _arestas)
  }
  _getKruskal(grafo, arestas) {

    if (arestas.length > 0) {

      let aresta = arestas.splice(0, 1)[0]

      let node_para = grafo.find(node => node.node.id == aresta.para).node
      let node_de = grafo.find(node => node.node.id == aresta.de).node
      if (!this._buscaProfundidade(node_para, node_de, { status: false, r: "não encontreado" }, 0).status && aresta.de != aresta.para) {
        let a = typeof node_de
        node_de.addFilho(node_para, aresta.peso)
      }
      return this._getKruskal(grafo, arestas)
    }
    return grafo

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

  ordeneNodes() {
    this.nodes = this.nodes.sort((a, b) => {
      return a.custo - b.custo
    })
  }
  _ordeneNodes(nodes) {
    return nodes.sort((a, b) => {
      return a.custo - b.custo
    })
  }

  setCustoInfinitoAll() {
    this.nodes.forEach(node => {
      node.custo = 9999999
    })
  }


}