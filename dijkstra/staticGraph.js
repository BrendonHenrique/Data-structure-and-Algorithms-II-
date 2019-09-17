module.exports = [
    {
        id: 'v0', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v1',
            distancia:10
        },
        {
            id:'v2',
            distancia:8
        }]
    },
    {
        id: 'v1', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v2',
            distancia:5
        },
        {
            id:'v3',
            distancia:10
        },
        {
            id:'v4',
            distancia:6
        }]   
    },
    {
        id: 'v2', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v4',
            distancia:7
        }] 
    },
    {
        id: 'v3', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v0',
            distancia:15
        }] 
    },
    {
        id: 'v4', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v5',
            distancia:12
        }] 
    },
    {
        id: 'v5', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v2',
            distancia:11
        },
        {
            id:'v3',
            distancia:16
        },
    ]},
    {
        id: 'v6', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v1',
            distancia:10
        },
        {
            id:'v0',
            distancia:6
        },
        {
            id:'v4',
            distancia:4
        },
    ]},
    {
        id: 'v7', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v5',
            distancia:12
        },
        {
            id:'v2',
            distancia:14
        },
    ]},
    {
        id: 'v8', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v1',
            distancia:1
        },
        {
            id:'v2',
            distancia:11
        },
        {
            id:'v3',
            distancia:18
        },
        {
            id:'v6',
            distancia:22
        },
    ]},
    {
        id: 'v9', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v6',
            distancia:12
        },
    ]},
    {
        id: 'v10', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v2',
            distancia:3
        },
        {
            id:'v2',
            distancia:19
        },
        {
            id:'v3',
            distancia:2
        },
    ]},
    {
        id: 'v11', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v2',
            distancia:2
        },
        {
            id:'v4',
            distancia:5
        },
        {
            id:'v7',
            distancia:7
        },
    ]},
    {
        id: 'v12', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v0',
            distancia:4
        },
        {
            id:'v1',
            distancia:6
        },
        {
            id:'v3',
            distancia:12
        },
        {
            id:'v5',
            distancia:19
        },
        {
            id:'v3',
            distancia:2
        },
    ]},
    {
        id: 'v13', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v12',
            distancia:3
        },
        {
            id:'v4',
            distancia:9
        },
        {
            id:'v7',
            distancia:2
        },
    ]},
    {
        id: 'v14', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v13',
            distancia:3
        },
        {
            id:'v11',
            distancia:1
        },
        {
            id:'v3',
            distancia:2
        },
    ]},
    {
        id: 'v15', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v13',
            distancia:9
        },
        {
            id:'v12',
            distancia:12
        },
    ]},
    {
        id: 'v16', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v11',
            distancia:3
        },
        {
            id:'v12',
            distancia:19
        },
        {
            id:'v15',
            distancia:2
        },
    ]},
    {
        id: 'v17', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v13',
            distancia:20
        },
    ]},
    {
        id: 'v18', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v11',
            distancia:13
        },
        {
            id:'v13',
            distancia:12
        },
        {
            id:'v8',
            distancia:8
        },
    ]},
    {
        id: 'v19', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v1',
            distancia:19
        },
        {
            id:'v13',
            distancia:17
        },
        {
            id:'v12',
            distancia:12
        },
        {
            id:'v15',
            distancia:15
        },
    ]},
    {
        id: 'v20', 
        estimativa: Infinity,
        predecessor: null,
        aberto: true,
        ligacoes: [
        {
            id:'v1',
            distancia:7
        },
        {
            id:'v17',
            distancia:6
        },
        {
            id:'v15',
            distancia:1
        },
    ]}
]