class Person {
  constructor(name) {
    this.name = name;
    
    this.tree = [];
  }

  toString() {
    return this.name;
  }

  story(triggers, script) {
    if (!(triggers instanceof Array))
      triggers = [triggers];
    
    let node = {
      person: this,
      
      type: "story",
      triggers, script,
      
      redirects: [],
      then: function(node, trigger = 0) {
        if (node instanceof Array)
          return node.map(pair => this.then(...pair));
        
        this.redirects.push({
          node,
          trigger
        });
        return node;
      }
    };
    
    this.tree.push(node);

    return node;
  }

  puzzle(triggers, scriptBefore, puzzle, scriptAfter) {
    if (!(triggers instanceof Array))
      triggers = [triggers];
    
    let node = {
      person: this,
      
      type: "puzzle",
      triggers, scriptBefore, puzzle, scriptAfter,
      
      redirects: [],
      then: function(node, trigger = 0) {
        if (node instanceof Array)
          return node.map(pair => this.then(...pair));
        
        this.redirects.push({
          node,
          trigger
        });
        return node;
      }
    };
    
    this.tree.push(node);

    return node;
  }

  get summary() {
    let out = [];
    for (let ind in this.tree) {
      let node = this.tree[ind];

      switch (node.type) {
        case "story":
          out.push(
            `Q: "${node.triggers.join(`" or "`)}"` +
            "\n  " +
            `A: "${node.script}"`
          );
          break;

        case "puzzle":
          out.push(
            `Q: "${node.triggers.join(`" or "`)}"` +
            "\n  " +
            `A: "${node.scriptBefore}"` +
            "\n     " +
            `[${node.puzzle}]` +
            "\n     " +
            `"${node.scriptAfter}"`
          );
          break;
      }
    }
    return "-- " + this.name + " --\n  " + out.join("\n\n  ");
  }
}

const events      = new Person("[Event]"        ),
      matriarch   = new Person("The Matriarch"  ),
      queen       = new Person("The Queen"      ),
      jester      = new Person("The Jesters"    ),
      wizard      = new Person("The Wizard"     ),
      general     = new Person("The General"    ),
      steward     = new Person("The Steward"    ),
      butler      = new Person("The Butler"     ),
      executioner = new Person("The Executioner"),
      cupbearer   = new Person("The Cupbearer"  );

const people = [
  events,
  matriarch,
  queen,
  jester,
  wizard,
  general,
  steward,
  butler,
  executioner,
  cupbearer
]