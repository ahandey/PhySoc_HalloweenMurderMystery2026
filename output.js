// -- Summary --
console.log(people.map(person => person.summary).join("\n\n"))

// -- Graph --
var graph;
function setup() {
  createCanvas(windowWidth, windowHeight);

  graph = new DisplayGraph(people);
}

function draw() {
  clear();
  
  graph.update(0.01);
  graph.display();
}