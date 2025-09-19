const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];

// Tu código aqui

// 1. Buscar a la persona con nombre "Luis"
const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log(personaLuis); 

// 2. Imprimir el nombre y la edad de cada persona
personas.forEach(persona => console.log(persona.nombre+" tiene "+persona.edad+ " años."));

// 3. Sumar todas las edades
const totalEdades = personas.reduce((acc, persona) => acc + persona.edad, 0);
console.log(totalEdades);