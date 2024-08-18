async function menuPrincipal() {
  while (true) {
    const opc = Number(
      prompt(
        "Welcome Potterhead, what do you want to do?\n1.See students\n2.See Teachers\n3.See Spells\n4.See character house\n5.Filter search\n0.I don't want to see more "
      )
    );
    if (opc === 1) {
      await menuEstudiante()
    } else if (opc === 2) {
      await menuProfes()
    } else if (opc === 3) {
      await menuHechizos()
    } else if (opc === 4) {
      await menuCasa()
    } else if (opc === 5) {
      await menuBusqueda()
    } else if (opc === 0) {
      console.log("See you later Potterhead, come back soon");
      break
    } else {
      console.log("Oops an error occurred");
    }
  }
}
async function menuEstudiante() {
  while (true) {
    const opc1 = Number(
      prompt(
        "Hello again Potterhead, do you want to see students by: \n1.Female Gender\n2.Male Gender\n3.See cast students\n4.Dead Students\n5.All\n0.Back"
      ));
    if (opc1 === 1) {
      await verPersonajesFemeninos(urlEstudiantes);
    } else if (opc1 === 2) {
      await verPersonajesMasculinos(urlEstudiantes);
    } else if (opc1 === 3) {
      await verActor(urlEstudiantes);
    } else if (opc1 === 4) {
      await verPersonajesMuertos(urlEstudiantes);
    } else if (opc1 === 5) {
      await verPersonajes(urlEstudiantes)
    } else if (opc1 === 0) {
      console.log("...Going back...")
      break
    } else {
      console.log("Oops an error occurred")
    };
  }
}
async function menuProfes() {
  while (true) {
    const opc1 = Number(
      prompt(
        "Hello again Potterhead, do you want to see teachers by: \n1.Female Gender\n2.Male Gender\n3.See cast teachers\n4.Dead teachers\n5.All\n0.Back"
      ));
    if (opc1 === 1) {
      await verPersonajesFemeninos(urlProfes);
    } else if (opc1 === 2) {
      await verPersonajesMasculinos(urlProfes);
    } else if (opc1 === 3) {
      await verActor(urlProfes);
    } else if (opc1 === 4) {
      await verPersonajesMuertos(urlProfes);
    } else if (opc1 === 5) {
      await verPersonajes(urlProfes)
    } else if (opc1 === 0) {
      console.log("...Going back...")
      break
    } else {
      console.log("Oops an error occurred")
    };
  }
}
async function menuHechizos() {
  while (true) {
    const opc3 = Number(
      prompt(
        "Hello again Potterhead, what spells do you want to see?:\n1.All\n2.Unforgivable Curses\n0.Back"
      ));
    if (opc3 === 1) {
      await verHechizos(urlHechizos);
    } else if (opc3 === 2) {
      await verMaldiciones(urlHechizos);
    } else if (opc3 === 0) {
      console.log("...Going back...");
      break
    } else {
      console.log("Oops an error occurred");
    };
  }
}
async function menuCasa() {
  while (true){
    const opc4 = Number(
      prompt(
        "Hello again Potterhead, which house do you want to see?:\n1.Gryffindor\n2.Hufflepuff\n3.Slytherin\n4.Ravenclaw\n0.Back"
      )
    );
    if (opc4 === 1) {
      await verCasa(casaGryffindor);

    } else if (opc4 === 2) {
      await verCasa(casaHufflepuff);

    } else if (opc4 === 3) {
      await verCasa(casaSyltherin);

    } else if (opc4 === 4) {
      await verCasa(casaRavenClaw);

    } else if (opc4 === 0) {
      console.log("...Going back...");
      break
    } else {
      console.log("Oops an error occurred");
    }  
}
}
async function menuBusqueda() {
  while (true){
    const opc4 = Number(
      prompt(
        "Hello again Potterhead, how do you want to filter your search?:\n1.Eye Color\n2.Hair Color\n3.Date of birth\n4.Wand wood\n0.Back"
      )
    );
    if (opc4 === 1) {
      console.log("Eye color Students")
      console.log("------------------------------------------------------------------------")
      await colorOjos(urlEstudiantes)
      console.log("Eye color Teachers")
      console.log("------------------------------------------------------------------------")
      await colorOjos(urlProfes)
    } else if (opc4 === 2) {
      console.log("Hair color Students")
      console.log("------------------------------------------------------------------------")
      await colorCabello(urlEstudiantes)
      console.log("Hair color Teachers")
      console.log("------------------------------------------------------------------------")
      await colorCabello(urlProfes)
    } else if (opc4 === 3) {
      console.log("Date of birth Students")
      console.log("------------------------------------------------------------------------")
      await fechaCumple(urlEstudiantes)
      console.log("Date of birth Teachers")
      console.log("------------------------------------------------------------------------")
      await fechaCumple(urlProfes)
    } else if (opc4 === 4) {
      console.log("Wand of Students")
      console.log("------------------------------------------------------------------------")
      await verBarita(urlEstudiantes)
      console.log("Wand of Teachers")
      console.log("------------------------------------------------------------------------")
      await verBarita(urlProfes)
    } else if (opc4 === 0) {
      console.log("...Going back...");
      break
    } else {
      console.log("Oops an error occurred");
    }
  }
  
}
const cabeceras = new Headers();
cabeceras.set("Content-Type", "application/json");
cabeceras.set("Content-Encoding", "br");

var urlEstudiantes = "https://hp-api.onrender.com/api/characters/students";
var urlProfes = "https://hp-api.onrender.com/api/characters/staff";
var urlHechizos = "https://hp-api.onrender.com/api/spells";
var casaGryffindor ="https://hp-api.onrender.com/api/characters/house/gryffindor";
var casaSyltherin ="https://hp-api.onrender.com/api/characters/house/slytherin";
var casaRavenClaw ="https://hp-api.onrender.com/api/characters/house/ravenclaw";
var casaHufflepuff ="https://hp-api.onrender.com/api/characters/house/hufflepuff";

async function peticion(url) {
  const respuesta = await fetch(url);
  if (respuesta.ok) {
    const info = await respuesta.json();
    return info;
  } else {
    console.log("");
    return [];
  }
}
async function verPersonajes(url) {
  const categorias = await peticion(url);
  console.log(categorias);
  categorias.forEach((element) => {
    let other = element.alternate_names
    if (other.length === 0) {
      console.log(`Name: ${element.name}\n Alternate Names: Not found`);
      console.log("************************************************************************")
    } else {
      console.log(`Name: ${element.name}\n Alternate Names: ${other}`);
      console.log("************************************************************************")
    }
  });
}
async function verHechizos(url) {
  const categorias = await peticion(url);
  console.log("--------------------------------------------------------------------------")
  console.log("See the full list of spells:")
  categorias.forEach((element) => {
    console.log(`Name: ${element.name}\n Description: ${element.description}`);
    console.log("************************************************************************")
  });
}
async function verPersonajesFemeninos(url) {
  const categorias = await peticion(url);
  console.log("--------------------------------------------------------------------------")
  console.log("The females are:");
  categorias.forEach((element) => {
    const genero = element.gender
    if (genero === "female") {
      console.log(`Name: ${element.name}\nGender: ${element.gender}`);
      console.log("************************************************************************")
    }
  });
}
async function verPersonajesMasculinos(url) {
  const categorias = await peticion(url);
  console.log("--------------------------------------------------------------------------")
  console.log("The males are:");
  categorias.forEach((element) => {
    const genero = element.gender
    if (genero === "male") {
      console.log(`Name: ${element.name}\nGender: ${element.gender}`);
      console.log("************************************************************************")
    }
  });
}
async function verPersonajesMuertos(url) {
  const categorias = await peticion(url);
  console.log("--------------------------------------------------------------------------")
  console.log("Those who died are:");
  categorias.forEach((element) => {
    const respirar = element.alive
    if (respirar === false) {
      console.log(`Name: ${element.name}`)
      console.log("************************************************************************")
    }
  });
}
async function verMaldiciones(url) {
  const categorias = await peticion(url);
  console.log("--------------------------------------------------------------------------")
  console.log("The unforgivable curses are:");
  categorias.forEach((element) => {
    const maldicion = element.name
    if (maldicion === "Avada Kedavra") {
      console.log(`Name: ${element.name}\n Description: ${element.description}`);
      console.log("************************************************************************")
    } else if (maldicion === "Crucio") {
      console.log(`Name: ${element.name}\n Description: ${element.description}`);
      console.log("************************************************************************")
    } else if (maldicion === "Imperio") {
      console.log(`Name: ${element.name}\n Description: ${element.description}`);
      console.log("************************************************************************")
    }
  });
}
async function verCasa(url) {
  const categorias = await peticion(url);
  console.log("--------------------------------------------------------------------------")
  console.log("The students who belong to this house are:");
  categorias.forEach((element) => {
    console.log(`Name: ${element.name}\nHouse: ${element.house}`);
    console.log("************************************************************************")
  });
}
async function colorOjos(url) {
  const categorias = await peticion(url);
  console.log("--------------------------------------------------------------------------")
  console.log("Look the Eyes color:")
  categorias.forEach((element) => {
    let other = element.eyeColour
    if (other.length === 0) {
      console.log(`Name: ${element.name}\nEyes color: Not found`);
      console.log("************************************************************************")
    } else {
      console.log(`Name: ${element.name}\nEyes color: ${other}`);
      console.log("************************************************************************")
    }
  });
}
async function colorCabello(url) {
  const categorias = await peticion(url);
  console.log("--------------------------------------------------------------------------")
  console.log("Look the Hair color:")
  categorias.forEach((element) => {
    let other = element.hairColour
    if (other.length === 0) {
      console.log(`Name: ${element.name}\nHair color: Not found`);
      console.log("************************************************************************")
    } else {
      console.log(`Name: ${element.name}\nHair color: ${other}`);
      console.log("************************************************************************")
    }
  });
}
async function fechaCumple(url) {
  const categorias = await peticion(url);
  console.log("--------------------------------------------------------------------------")
  console.log("Look the date of birth:")
  categorias.forEach((element) => {
    let other = element.dateOfBirth
    if (other === null) {
      console.log(`Name: ${element.name}\nDate of birth: Not found`);
      console.log("************************************************************************")
    } else {
      console.log(`Name: ${element.name}\nDate of birth: ${other}`);
      console.log("************************************************************************")
    }
  });
}
async function verActor(url) {
  const categorias = await peticion(url);
  console.log("--------------------------------------------------------------------------")
  console.log("The cast is:");
  categorias.forEach((element) => {
    let other = element.actor
    if (other.length === 0) {
      console.log(`The actor of: ${element.name}\n is called: Not found`);
      console.log("************************************************************************")
    } else {
      console.log(`The actor of: ${element.name}\n is called: ${other}`);
      console.log("************************************************************************")
    }
  });
}
async function verBarita(url) {
  const categorias = await peticion(url);
  console.log("--------------------------------------------------------------------------")
  console.log("Look the wand wood:")
  categorias.forEach((element) => {
    let other = element.wand.wood
    if (other === "") {
      console.log(`Name: ${element.name}\nWand: Not found`);
      console.log("************************************************************************")
    } else {
      console.log(`Name: ${element.name}\nWand Wood: ${other}`);
      console.log("************************************************************************")
    }
  });
}

menuPrincipal();

