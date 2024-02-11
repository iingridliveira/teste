import { Mes} from "../model/dias.mes.js";
export let faturamentoMes = []
 function criarMes(dia,faturamento){
        const novoDia = new Mes(dia, faturamento);
        faturamentoMes.push(novoDia);
        return novoDia;
    }
    function mostraFatuaramentos(){
        return faturamentoMes ;
    }
function faturamentoMaior(){
    if (faturamentoMes.length === 0) {
        console.log("O array de faturamentoMes está vazio.");
        return;
    }
    let maiorfaturamento = faturamentoMes[0].faturamento;  
   for (let i = 1; i < faturamentoMes.length; i++) {
    let atual = faturamentoMes[i];
    if (atual > maiorfaturamento) {
        maiorfaturamento = atual;
    }
return "O maior faturamento é:", maiorfaturamento 
}
}
function faturamentoMenor(){
    if (faturamentoMes.length === 0) {
        console.log("O array de faturamentoMes está vazio.");
        return;
    }
    let menorfaturamento = faturamentoMes[0].faturamento;  
for (let i = 1; i < faturamentoMes.length; i++) {
    let atual = faturamentoMes[i];
    if (atual < menorfaturamento) {
        menorfaturamento = atual;
    }
     
    return "O menor faturamento é:", menorfaturamento
}

}
function faturamentoMedia(){
    if (faturamentoMes.length === 0) {
        console.log("O array de faturamentoMes está vazio.");
        return;
    }   
    let soma = 0;
   for (let i = 0; i < faturamentoMes.length; i++) {
      soma += faturamentoMes[i].faturamento;
    }
    const media = soma / faturamentoMes.length;
    console.log("A média dos elementos é:", media);
    return media;
}

function faturamentoDias() {
    if (faturamentoMes.length === 0) {
        console.log("O array de faturamentoMes está vazio.");
        return;
    }

    let contador = 0;
    const media = faturamentoMedia();

    for (let i = 0; i < faturamentoMes.length; i++) {
        if (faturamentoMes[i].faturamento > media) {
            contador++;
        }
    }

    return  contador ,": número de dias no mês em que o valor  de faturamento diário foi superior à média mensal" 
     
}
export{criarMes,
       mostraFatuaramentos,
       faturamentoMaior,
       faturamentoMenor,
       faturamentoMedia,
       faturamentoDias
}