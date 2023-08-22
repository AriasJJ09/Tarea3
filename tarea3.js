let videojuegos = [
  {
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Acción y aventura",
    desarrollador: {
      nombre: "Nintendo",
      pais: "Japón"
    },
    lanzamiento: 2017,
    plataformas: ["Nintendo Switch", "Wii U"],
    duracionHoras: 80,
    calificacion: 9.7
  },
  {
    titulo: "The Witcher 3: Wild Hunt",
    genero: "RPG",
    desarrollador: {
      nombre: "CD Projekt",
      pais: "Polonia"
    },
    lanzamiento: 2015,
    plataformas: ["PlayStation 4", "Xbox One", "PC"],
    duracionHoras: 100,
    calificacion: 9.8
  }
];

videojuegos.forEach((juego) => {
  console.log(
    `${juego.titulo} es un juego de ${juego.genero}. Fue lanzado en ${juego.lanzamiento}.`
  );
  console.log(
    `Desarrollado por ${juego.desarrollador.nombre} en ${juego.desarrollador.pais}.`
  );
});

let duraciones = videojuegos.map((juego) => juego.duracionHoras);
console.log("Duraciones de juego (horas):", duraciones);

let juegoCalificado = videojuegos.find((juego) => juego.calificacion >= 9.7);
console.log("Juego con alta calificación:", juegoCalificado);
