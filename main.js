// main.js

// StarUML app global object
const app = global.app;

// Function to create a simple UML diagram
function createSampleDiagram() {
  const factory = app.repository.createModelFactory();
  const diagram = factory.createDiagram("UMLClassDiagram");
  
  const umlClass = factory.createElement("UMLClass");
  umlClass.name = "SampleClass";

  const method = factory.createElement("UMLOperation");
  method.name = "exampleMethod";
  umlClass.ownedOperations.add(method);

  diagram.ownedElements.add(umlClass);

  app.repository.doTransaction(() => {
    app.repository.insert(diagram);
  });

  app.toast.info("Sample UML Diagram Created!");
}

// Export activate function
exports.activate = function () {
  app.commands.register("generateDiagram", createSampleDiagram);
};
