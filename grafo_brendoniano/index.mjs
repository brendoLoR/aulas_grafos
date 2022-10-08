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


var _grafo = new GrafoBrendoniano()
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

    cria_grafo_aleatorio(labels = []) {
        let tamanho = labels.length
        for (let i = 0; i < tamanho; i++) {
            _grafo.addNode(new NodoBrendoniano(0, labels[i]+_grafo.nodes.length))
        }
        for (let i = 1; i < _grafo.nodes.length; i++) {
            for (let j = 0; j < 4; j++) {
                _grafo.addAresta(Math.floor(Math.random() * _grafo.nodes.length), i, parseInt(Math.random() * 100));
                // _grafo.addAresta(Math.floor(Math.random() * _grafo.nodes.length), Math.floor(Math.random() * _grafo.nodes.length), parseInt(Math.random() * 100));
                sleep(1000)
            }
        }
        return _grafo
    }

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// function cria_grafo_aleatorio(tamanho = 0) {
//     for (let i = 0; i <= tamanho; i++) {
//         _grafo.addNode(new NodoBrendoniano(0, Math.random() * tamanho))
//     }
//     for (let i = 0; i < tamanho; i++) {
//         for (let i = 0; i < 3; i++) {
//             _grafo.addAresta(Math.floor(Math.random() * _grafo.nodes.length),Math.floor(Math.random() * _grafo.nodes.length), Math.random()*100);
//         }
//     }
// }
// cria_grafo_aleatorio(10)
// let nodo = new NodoBrendoniano(1, "a")
// _grafo.addNode(nodo)
// _grafo.addNode(new NodoBrendoniano(0, 'b'), null, null)
// _grafo.addNode(new NodoBrendoniano(0, 'c'), null, null)
// _grafo.addNode(new NodoBrendoniano(0, 'd'), null, null)
// _grafo.addNode(new NodoBrendoniano(0, 'e'), null, null)


// _grafo.addAresta(0, 1, null)
// _grafo.addAresta(0, 2, null)
// _grafo.addAresta(2, 1, null)
// _grafo.addAresta(2, 3, null)
// _grafo.addAresta(1, 3, null)
// _grafo.addAresta(4, 0, null)
// _grafo.addAresta(3, 4, null)
// _grafo.addAresta(1, 3, null)

// let resultado = _grafo.buscaLargura("c", 0)
// console.log(resultado);
// resultado = _grafo.buscaProfundidade("c", 0)
// console.log(resultado);