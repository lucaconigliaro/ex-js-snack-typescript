// 🏆 Snack 1
let data: unknown;
if (typeof data === "string") {
  console.log(data.toUpperCase());
} else if (typeof data === "number") {
  console.log(data * 2);
} else if (typeof data === "boolean") {
  console.log(data ? "Si" : "No");
} else if ( data === null) {
  console.log("Il dato è vuoto");
} else if( Array.isArray(data)) {
  console.log(data.length);
} else if (data instanceof Promise) {
  data.then(v => console.log(v));
} else {
  console.log("Tipo non supportato");
};

// 🏆 Snack 2
type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "m" | "f",
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: "indeterminato" | "determinato" | "freelance"
};

// 🏆 Snack 3
type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior",
  linguaggi?: string[],
  certificazioni: string[]
};

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
};

type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget: number, 
  membri: [ProjectManager, Developer, ...Developer[]] 
};