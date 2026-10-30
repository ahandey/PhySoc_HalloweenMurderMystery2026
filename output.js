// -- Summary --
console.log(people.map(person => person.summary).join("\n\n"))

// -- Graph --
var graph;
function setup() {
  createCanvas(windowWidth, windowHeight);

  graph = new DisplayGraph(people);
}

function draw() {
  background(28);
  
  graph.update(0.01);
  graph.display();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}