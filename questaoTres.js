//3) Dado um vetor que guarda o valor de faturamento diário de uma 
//distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
//• O menor valor de faturamento ocorrido em um dia do mês;
//• O maior valor de faturamento ocorrido em um dia do mês;
//• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
import express from "express";
import { fatuaramentoRoute} from "./src/router/router.faturamento.js";
const app = express();
const port = 3028;
app.use(express.json());
app.use(fatuaramentoRoute);
app.listen(port, ()=> {
    console.log("Server run🚀")
})
 

