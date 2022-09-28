let incidence_matirx = [
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
]


const transform = (incidence_matirx) => {
    console.table(incidence_matirx.length);
    let adjacent_matrix = Array(incidence_matirx.length).fill(Array(incidence_matirx.length).fill(0)) 
    for (let i = 0; i < adjacent_matrix.length; i++) {
        for (let j = 0; j < adjacent_matrix.length; j++) {
            let count = 0
            for(let line = 0; incidence_matirx.length; line++){
                count = incidence_matirx[line][i] == ;
            }            

        }
    }

    console.table(adjacent_matrix);
}

transform(incidence_matirx);