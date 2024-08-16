function menuPrincipal() {
  while (true) {
    const opc = Number(
      prompt(
        "Bienvenido virgen, que quieres hacer\n1.Ver personajes \n2.Ver Profesores\n3.Ver Hechizo\n4.Ver casa de personajes\n0.Adiosito"
      )
    );
    if (opc === 1) {
      verPersonajes(urlEstudiantes);
      break;
    } else if (opc === 2) {
      verPersonajes(urlProfes);
      break;
    } else if (opc === 3) {
      verPociones(urlPociones);
      break;
    } else if (opc === 4) {
      const opc1 = Number(
        prompt(
          "Hola de nuevo virgen, que casa quieres ver?\n1.Gryffindor\n2.Hufflepuff\n3.Slytherin\n4.Ravenclaw\n0.Saliendo tas tas"
        )
      );
      if (opc1 === 1) {
        verKasa(kasaGryffindor);
        break;
      } else if (opc1 === 2) {
        verKasa(kasaHufflepuff);
        break;
      } else if (opc1 === 3) {
        verKasa(kasaSyltherin);
        break;
      } else if (opc1 === 4) {
        verKasa(kasaRavenClaw);
        break;
      } else if (opc1 === 5) {
        console.log("retrocediendo jms");
      } else {
        console.log("Ponga bien imbecil");
      }
    } else if (opc === 0) {
      console.log("vmz mugrienta, chao con adios");
      break;
    } else {
      console.log("Ponga bien imbecil");
    }
  }
}

const cabeceras = new Headers();
cabeceras.set("Content-Type", "application/json");
cabeceras.set("Content-Encoding", "br");

var urlEstudiantes = "https://hp-api.onrender.com/api/characters/students";
var urlProfes = "https://hp-api.onrender.com/api/characters/staff";
var urlPociones = "https://hp-api.onrender.com/api/spells";
var kasaGryffindor =
  "https://hp-api.onrender.com/api/characters/house/gryffindor";
var kasaSyltherin =
  "https://hp-api.onrender.com/api/characters/house/slytherin";
var kasaRavenClaw =
  "https://hp-api.onrender.com/api/characters/house/ravenclaw";
var kasaHufflepuff =
  "https://hp-api.onrender.com/api/characters/house/hufflepuff";

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
    console.log(element.name);
  });
}

async function verPociones(url) {
  const categorias = await peticion(url);
  categorias.forEach((element) => {
    console.log(element.name);
  });
}

async function verKasa(url) {
  const categorias = await peticion(url);
  categorias.forEach((element) => {
    console.log(`Nombre: ${element.name} ---> ${element.house}`);
  });
}
menuPrincipal();
