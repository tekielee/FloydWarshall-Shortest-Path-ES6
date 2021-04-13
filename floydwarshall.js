let totalVertices = 5;
let graph = [
	[],
	[],
	[],
	[],
	[]
];

for(let i = 0; i < totalVertices; i++) {
	for(let j = 0; j < totalVertices; j++) {
		graph[i][j] = i == j ? 0 : Number.MAX_SAFE_INTEGER;
	}
}

graph[0][1] = graph[1][0] = 10;
graph[2][1] = graph[1][2] = 5;
graph[0][3] = graph[3][0] = 5;
graph[3][1] = graph[1][3] = 5;
graph[4][1] = graph[1][4] = 10;
graph[3][4] = graph[4][3] = 20;

function floydWarshall(graph) {
	let dist = [];
	dist = graph;
	let size = dist.length;
	
	for(let k = 0; k < size; k++) {
		for(let i = 0; i < size; i++) {
			for(let j = 0; j < size; j++) {
				dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
			}
		}
	}
	return dist;
}

let distance = floydWarshall(graph);
console.log('Shortest distance between A to E is: ' + distance[0][4]);
console.log('Shortest distance between D to C is: ' + distance[3][2]);