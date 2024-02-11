//questão 4
     let SP = 67836.43 
     let RJ =  36678.66
     let MG = 29229.88
     let ES = 27165.48
     let Outros= 19849.53 

    let total = SP+RJ+MG+ES+Outros
    let percentualSp = (SP/total)*100
    let percentualRj = (RJ/total)*100
    let percentualMg = (MG/total)*100
    let percentualEs = (ES/total)*100
    let percentualOutros= (Outros/total)*100
console.log(`O percentual de SP é ${percentualSp}%
             O percentual de RJ é ${percentualRj}%
             O percentual de MG é ${percentualMg}%
             O percentual de ES é ${percentualEs}%
             O percentual de Outros é ${percentualOutros}%`)