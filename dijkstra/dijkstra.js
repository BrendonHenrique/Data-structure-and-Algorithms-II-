let grafo 

// Usar grafo est?tico
grafo = require('./staticGraph')
// Para gerar o gr?fico de forma din?mica utilizando grafoBuilder.js descomente as duas linhas abaixo  e comente a de cima
//const buildGrafo = require('./grafoBuilder.js')
// grafo = buildGrafo(20)

const getNodosAbertos = (graph) => graph.filter( nodo => nodo.aberto)

const existeNodoAberto = (graph) =>  getNodosAbertos(graph).length > 0 ? true : false

const fecharNodo = (nodo) =>  nodo.aberto = false

const setNodoInicial = (graph, idNodoInicial) => {
    graph.map(nodo => {
        if(nodo.id == idNodoInicial){
            nodo.estimativa = 0
        }
    })
} 

const getNodeById  = (graph, idNodo) => {
    let encontrado = graph.filter( nodo => nodo.id == idNodo)
    if(encontrado) return encontrado[0] 
}

const getNodoComMenorEstimativa = (graph) => {
    let nodosAbertos = getNodosAbertos(graph)
    let nodosOrdenados  = nodosAbertos.sort( (num1,num2) => {
        return num1.estimativa - num2.estimativa
    })
    return nodosOrdenados[0]
}

const dijkstra = (graph,start,goal) => {
    console.log(`\nVertice inicial ${start} vertice objetivo ${goal}`)
    let path = []
    setNodoInicial(graph, start)
    while(existeNodoAberto(graph)){
        let minNodeId = null 
        var nodoComMenorEstimativa
        graph.map( (node, index, graph) => {
            minNodeId = getNodoComMenorEstimativa(graph).id
            fecharNodo(getNodeById(graph, minNodeId))
            nodoComMenorEstimativa = getNodeById(graph, minNodeId)
            nodoComMenorEstimativa.ligacoes.map( (ligacao) => {
                const { id, distancia } = ligacao
                let nodoAdjacente = getNodeById(graph, id)
                if(nodoAdjacente){
                    if(distancia + nodoComMenorEstimativa.estimativa <  nodoAdjacente.estimativa){
                        nodoAdjacente.estimativa =  distancia + nodoComMenorEstimativa.estimativa
                        nodoAdjacente.predecessor = nodoComMenorEstimativa.id
                    }
                }
            })
        })
    }

    try{
        let nodoAtual = getNodeById(graph, goal)
        while (nodoAtual.id != start){
            path.push(nodoAtual.id)
            nodoAtual = getNodeById(graph, nodoAtual.predecessor)
        }
        path.push(start)
        return path.reverse()
    }catch( error ){
        return 'Caminho n?o encontrado'
    }
}

grafo.map( vertice => console.log(`\n${JSON.stringify(vertice)}`))
console.log(`\nCaminho encontrado ${dijkstra(grafo, 'v0', 'v4')}`)
console.log(`\nMenor distancia ${getNodeById(grafo, 'v4').estimativa}`)