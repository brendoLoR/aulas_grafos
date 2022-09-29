/**
 * 
 * Algoritimo criado para atender demanda apresntada na disciplina de teoria dos grafos
 * 
 * Criado pelo aluno Brendo Jackson Leite da Silva.
 * 
 * 
 * o passo a passo é bem simples:
 * 1º deve ser criados os Nós com a lable que voce quiser e com um id qualquer
 * 2º crie um grafo adicionando um nó raiz a ele
 * 3º adcione os demais nós fazendo suas ligações atravez do Id do seu nó pai
 * 
 * caso seja necesario mais alguma aresta use o metodo addAresta(id_de, id_para)
 * 
 * OBS.: tenha plena certeza de que se for copiado eu irei saber.
 */

import { Fila } from './Fila.mjs'
import { GrafoBrendoniano } from './GrafoBrendoniano.mjs'
import { NodoBrendoniano } from './NodoBrendoniano.mjs'

let A = new NodoBrendoniano(1, 'A')
let grafo = new GrafoBrendoniano(A)
let B = new NodoBrendoniano(1, 'B')
let C = new NodoBrendoniano(1, 'C')
let D = new NodoBrendoniano(1, 'D')
let E = new NodoBrendoniano(1, 'E')
let F = new NodoBrendoniano(1, 'F')
let G = new NodoBrendoniano(1, 'G')

let A_id = 0;

let B_id = grafo.addNode(B, A_id, 1)
let C_id = grafo.addNode(C, B_id, 1)
let D_id = grafo.addNode(D, C_id, 4)
grafo.addAresta(D_id, A_id, 3)
let E_id = grafo.addNode(E, C_id, 1)
grafo.addAresta(E_id, A_id, 2)
grafo.addAresta(A_id, E_id, 1)
grafo.addAresta(B_id, D_id, 2)
grafo.addAresta(E_id, D_id, 1)
let G_id = grafo.addNode(G, null, null)




let caminho = grafo.getMelhorCaminhoDijkstra(A_id, D_id)

function printCaminho(caminho) {
    console.log(caminho);
    // if (caminho.ant)
    //     printCaminho(caminho.ant)
}

printCaminho(caminho)

console.log("GRAFO:::::::");
// grafo.nodes.map(node => {
//     console.log(node);
//     console.log("FILHOS: ");
//     console.table(node.filhos);
// })

// console.log(grafo.nodes);