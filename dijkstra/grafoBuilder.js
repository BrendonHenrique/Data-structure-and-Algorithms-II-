function randomNumGenerator(min,max){
    return Math.random() * (max - min) + min
}

function arestaRepetida(ligacoes, novaLigacao){
    let existeRepeticao = false 
    ligacoes.map( ligacao => {
        if(ligacao.id == `v${novaLigacao}`){
            existeRepeticao = true     
        }
    })
    return existeRepeticao
}

// exportando a função de criação do grafo recebendo como parametro a quantidade de vértices que quero criar
// o construtor garante pelo menos 1 aresta em cada vértice , distâncias positivas.
// e já inicia todos os vértices com a estimativa = Inifity , aberto = true   
module.exports = function buildGrafo(qtdDeVertices){
    let grafoAux = []

    // criação dos vértices
    for (let index = 0; index < qtdDeVertices; index++) {
        let ligacoesDeAdjacencia = []
        // criação das arestas
        for (let index2 = 0; index2 < parseInt((randomNumGenerator(index,index2)).toFixed(0)); index2++) {
            let idAdjacente = parseInt((randomNumGenerator(index2,qtdDeVertices)).toFixed(0))
            if(idAdjacente != index && !arestaRepetida(ligacoesDeAdjacencia, idAdjacente)){
                let nodoAdjacente = {
                    id: `v${ idAdjacente }`,
                    distancia: parseInt( (randomNumGenerator(0,30)).toFixed(0) )
                }
                ligacoesDeAdjacencia.push(nodoAdjacente)
            }
        }

        // Se após na tentativa de criação não tiver gerado nenhuma aresta então adiciono pelo menos 1
        if(ligacoesDeAdjacencia.length == 0 ){
            idAdjacente = index + parseInt((randomNumGenerator(1,2)).toFixed(0))
            if(idAdjacente != index && !arestaRepetida(ligacoesDeAdjacencia, idAdjacente && idAdjacente < qtdDeVertices)){
                let nodoAdjacente = {
                    id: `v${ idAdjacente }`,
                    distancia: parseInt( (randomNumGenerator(0,30)).toFixed(0) )
                }
                ligacoesDeAdjacencia.push(nodoAdjacente)
            }
        }

        let vertice = { 
            id:`v${index}`,
            estimativa: Infinity,
            predecessor: null,    
            aberto: true,
            ligacoes:ligacoesDeAdjacencia
        }
        grafoAux.push(vertice)
    }
    return grafoAux
}
