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
    add_nodo(nomeNodo, idNodoPai, pesoNodo) {
        let nodo = new NodoBrendoniano(1, nomeNodo)
        _grafo.addNode(nodo, idNodoPai, pesoNodo)
        console.log(_grafo);
        return _grafo
    }
}


