let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;

let valorTotal = sp + rj + mg + es + outros;

console.log(valorTotal);

let percentualSP = sp * 100 / valorTotal;
let percentSP = percentualSP.toFixed(2).replace(".",",");

let percentualRJ = rj * 100 / valorTotal;
let percentRJ = percentualRJ.toFixed(2).replace(".",",");

let percentualMG = mg * 100 / valorTotal;
let percentMG = percentualMG.toFixed(2).replace(".",",");

let percentualES = es * 100 / valorTotal;
let percentES = percentualES.toFixed(2).replace(".",",");

let percentualOutros = outros * 100 / valorTotal;
let percentOutros = percentualOutros.toFixed(2).replace(".",",");

alert('O valor total de faturamento mensal é: R$' + valorTotal);
alert('Representação Percentual por estado\n' + 'SP: ' + percentSP + '%\nRJ: ' + percentRJ + '%\nMG: ' + percentMG + '%\nES: ' + percentES + '%\nOutros: ' + percentOutros + "%");