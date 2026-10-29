const nodeRadius = 30;
const boxApothem = nodeRadius * Math.sqrt(0.5);

function drawArrow(start, end) {
  stroke(255);
  fill(255);
  
  let vec = end.copy().sub(start);
  let dif = nodeRadius / vec.mag();
  
  start = start.copy().add(vec.copy().mult(dif));
  vec.mult(1 - 2*dif);
  
  push();
  
  translate(start.x, start.y);
  line(0, 0, vec.x, vec.y);
  
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  
  pop();
}

class DisplayNode {
  constructor(node) {
    this.pos = createVector(
      2*random() - 1,
      2*random() - 1
    );
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.node = node;
  }

  update(dt) {
    this.vel.add(this.acc       .mult(dt));
    this.pos.add(this.vel.copy().mult(dt));
    this.acc.mult(0);
  }

  display(pos) {
    stroke(255);
    noFill();
    ellipse(pos.x, pos.y, 2*nodeRadius);
    
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    text(
      this.node.person.name,
      pos.x - boxApothem,
      pos.y - boxApothem,
      2*boxApothem,
      2*boxApothem
    );
  }
}

class DisplayGraph {
  constructor(people) {
    this.nodes = [];
    for (let person of people) {
      for (let node of person.tree) {
        this.nodes.push(new DisplayNode(node));
      }
    }

    this.edges = [];
    for (let i = 0; i < this.nodes.length; i++) {
      let node = this.nodes[i].node;
      
      for (let redirect of node.redirects) {
        let otherNode = redirect.node;

        let j = 0;
        while (this.nodes[j].node != otherNode) {
          j++;
        }

        this.edges.push([i, j]);
      }
    }
  }

  update(dt) {
    for (let edge of this.edges) {
      let node0 = this.nodes[edge[0]];
      let node1 = this.nodes[edge[1]];

      let r = p5.Vector.sub(node0.pos, node1.pos);
      let a = r.mult(-1);

      node0.acc.add(a);
      node1.acc.sub(a);
    }

    for (let i = 0; i < this.nodes.length; i++) {
      let node0 = this.nodes[i];

      for (let j = 0; j < this.nodes.length; j++) {
        let node1 = this.nodes[j];

        let r = p5.Vector.sub(node0.pos, node1.pos);
        let a = r.mult(1/(0.001+pow(r.magSq(), 1.5)));
  
        node0.acc.add(a);
        node1.acc.sub(a);
      }
    }

    for (let node of this.nodes) {
      node.acc.add(node.vel.copy().mult(-2));
    }

    for (let node of this.nodes) {
      node.update(dt);
    }
  }

  display() {
    let center = createVector(0, 0);
    for (let node of this.nodes) {
      center.add(node.pos);
    }
    center.div(this.nodes.length);
    
    let radius = 0;
    for (let node of this.nodes) {
      radius = max(
        radius,
        p5.Vector.dist(node.pos, center)
      );
    }

    let shift = createVector(width, height).mult(0.5);
    let scale = 0.8 * max(width, height) / (2 * radius);

    let posList = this.nodes.map(
      node =>
        node.pos.copy()
          .sub(center)
          .mult(scale)
          .add(shift)
    );

    for (let edge of this.edges) {
      drawArrow(
        posList[edge[0]],
        posList[edge[1]]
      );
    }

    for (let i in this.nodes) {
      this.nodes[i].display(posList[i]);
    }
  }
}