const computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = computers.every((x) => x.ram > 16)
var someComputersCanRunProgram = computers.some((x) => x.ram > 16)
