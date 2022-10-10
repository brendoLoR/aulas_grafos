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
import { Matrizes } from './Matrizes.mjs'
import { NodoBrendoniano } from './NodoBrendoniano.mjs'


var _grafo = new GrafoBrendoniano()
var matriz = []
var matrizes = new Matrizes()
export const grafo = {
    get_grafo() {
        return _grafo
    },
    add_nodo(nomeNodo, idNodoPai, pesoNodo) {
        let nodo = new NodoBrendoniano(1, nomeNodo)
        _grafo.addNode(nodo, idNodoPai, pesoNodo)
        console.log(_grafo);
        return _grafo
    },
    add_aresta(de_id, para_id, peso) {
        _grafo.addAresta(de_id, para_id, peso)
        console.log(_grafo);
        return _grafo
    },
    busca_largura(chave) {
        let nodo = _grafo.buscaLargura(chave, 0)
        console.log(nodo);
        return nodo
    },
    busca_profundidade(chave) {
        let nodo = _grafo.buscaProfundidade(chave, 0)
        console.log(nodo);
        return nodo
    },
    get_dijkstra(de_id, para_id) {
        let grafo = _grafo.getMelhorCaminhoDijkstra(de_id, para_id)
        console.log(grafo);
        return grafo
    },
    get_kahn() {
        let grafo = _grafo.getKahn()
        console.log(grafo);
        return grafo
    },
    get_kruskal() {
        let grafo = _grafo.getKruskal()
        console.log(grafo);
        return grafo
    },

    cria_grafo_aleatorio(labels = []) {
        let tamanho = labels.length
        for (let i = 0; i < tamanho; i++) {
            _grafo.addNode(new NodoBrendoniano(0, labels[i] + _grafo.nodes.length))
        }
        for (let i = 1; i < _grafo.nodes.length; i++) {
            for (let j = 0; j < 4; j++) {
                _grafo.addAresta(Math.floor(Math.random() * _grafo.nodes.length), i, parseInt(Math.random() * 100));
                // _grafo.addAresta(Math.floor(Math.random() * _grafo.nodes.length), Math.floor(Math.random() * _grafo.nodes.length), parseInt(Math.random() * 100));
                sleep(1000)
            }
        }
        return _grafo
    },



    cria_matrix_incidencia(numNodos) {
        matriz = []
        for (let i = 0; i < numNodos; i++) {
            matriz[i] = []
        }
        return matriz
    },
    add_aresta_m(de_id, para_id) {
        matriz = matrizes.addArestaM(matriz, de_id, para_id)
        return matriz
    },
    get_acentencia(){
        let asc_matriz = matrizes.trasnposta(matriz)
        console.table(asc_matriz)
        asc_matriz = matrizes.incidence_to_adjacence(asc_matriz)
        return asc_matriz
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// grafo.cria_grafo_aleatorio(['a', 'b', 'c', 'd'])
// _grafo.getKruskal()
// // _grafo.get_grafo()
// _grafo.getKruskal()

// let graf = [
//     [],
//     [],
//     [],
//     [],
//   ]

// let graf = grafo.cria_matrix_incidencia(3)
// graf = matrizes.addArestaM(graf, 0, 2)
// graf = matrizes.addArestaM(graf, 1, 2)
// graf = matrizes.addArestaM(graf, 2, 1)
// graf = matrizes.addArestaM(graf, 2, 0)
// graf = matrizes.addArestaM(graf, 1, 0)



// let graf_t = matrizes.trasnposta(graf)

// console.table(matrizes.incidence_to_adjacence(graf_t))
