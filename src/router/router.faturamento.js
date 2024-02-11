import { Router } from "express";
import { criarMes, mostraFatuaramentos,
     faturamentoMaior, faturamentoMedia, 
     faturamentoMenor, faturamentoDias} from "../controller/faturamento.controller.js";

    
const fatuaramentoRoute = Router()

fatuaramentoRoute.post("/cria-mes", (req, res) => {
    const {dia, faturamento} = req.body;
    const novoMes = criarMes(dia, faturamento);
    res.status(201).json({novoMes});
});

fatuaramentoRoute.get("/mostra-faturamentos", (req, res) => {
    const fatuaramentos = mostraFatuaramentos();
    res.status(201).json(fatuaramentos);
});
//• O menor valor de faturamento ocorrido em um dia do mês;
fatuaramentoRoute.get("/fatuaramento-Menor", (req, res) => {
    const fatuaramentoMeno = faturamentoMenor();
    res.status(201).json({fatuaramentoMeno});
});
//• O maior valor de faturamento ocorrido em um dia do mês;
fatuaramentoRoute.get("/fatuaramento-Maior", (req, res) => {
    const fatuaramentoMaio = faturamentoMaior();
    res.status(201).json({fatuaramentoMaio });
});
//• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
fatuaramentoRoute.get("/fatuaramento-Media", (req, res) => {
    const fatuaramentoMedio = faturamentoMedia();
    res.status(201).json({fatuaramentoMedio});
});
fatuaramentoRoute.get("/quatidade", (req, res) => {
    const quantidadeDiasMaiorMedia = faturamentoDias();
    res.status(201).json({quantidadeDiasMaiorMedia});
});

export {fatuaramentoRoute}