import { Fila } from './Fila.mjs'
import {GrafoBrendoniano} from './GrafoBrendoniano.mjs'
import {NodoBrendoniano} from './NodoBrendoniano.mjs'

let root = new NodoBrendoniano(1, 'node0')
let grafo = new GrafoBrendoniano(root)
let filho = new NodoBrendoniano(1, 'node0')
let pai_id = grafo.addNode(filho, 0, 10)
filho = new NodoBrendoniano(1, 'node1')
pai_id = grafo.addNode(filho, pai_id, 10)
pai_id = grafo.addNode(root, pai_id, 10)
filho = new NodoBrendoniano(1, 'node2')
pai_id = grafo.addNode(filho, pai_id, 10)
filho = new NodoBrendoniano(1, 'node3')
pai_id = grafo.addNode(filho, pai_id, 10)
filho = new NodoBrendoniano(1, 'node4')
pai_id = grafo.addNode(filho, pai_id, 10)
pai_id = grafo.addNode(root, pai_id, 10)
filho = new NodoBrendoniano(1, 'node5')
pai_id = grafo.addNode(filho, pai_id, 10)
filho = new NodoBrendoniano(1, 'node6')
pai_id = grafo.addNode(filho, pai_id, 10)
let filho2 = new NodoBrendoniano(1, 'node7')
filho = new NodoBrendoniano(1, 'node8')
pai_id = grafo.addNode(filho, pai_id, 10)
pai_id = grafo.addNode(filho2, pai_id, 10)
pai_id = grafo.addNode(root, pai_id, 10)
filho2 = new NodoBrendoniano(1, 'node9')
pai_id = grafo.addNode(filho, pai_id, 10)
pai_id = grafo.addNode(filho2, pai_id, 10)
filho2 = new NodoBrendoniano(1, 'node10')
pai_id = grafo.addNode(filho2, pai_id, 10)


grafo.addAresta(15, 9)


// console.log(grafo.buscaLargura('node3', 13))
// grafo.setAllNaoVisitado()
// console.log(grafo.buscaProfundidade('node3', 13))

console.log(grafo.getMelhorCaminhoDijkstra(1, 8));