export class Matrizes {

    constructor(){

    }

    addArestaM(incidence = [], de_id, para_id) {
        for (let i = 0; i < incidence.length; i++) {
            incidence[i].push(i == de_id ? 1 : i == para_id ? -1 : 0)
        }
        return incidence
    }

    trasnposta(array) {
        var result = []
        for (let i in array[0]) {
            result.push(array.map(function (e, j) { return e[i] }));
        }
        return result
    }

    incidence_to_adjacence(incidence) {

        var adjacence = []
        incidence[0].map(item => {
            adjacence.push(new Array(incidence[0].length).fill(0))
        })
        for (let coluna = 0; coluna < incidence.length; coluna++) {

            let linha_m_id = incidence[coluna].findIndex(linha => linha == -1)
            let linha_id = incidence[coluna].findIndex(linha => linha == 1)

            adjacence[linha_id][linha_m_id] = 1
            // console.table(adjacence[linha_id])
            // graf_2[linha_id][linha_id] = graf[coluna].find(linha => linha == 1)
        }
        return adjacence
    }
}