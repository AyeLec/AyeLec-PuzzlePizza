
const ABC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const MAP = {
  A:'A', B:'N', D:'H', E:'D', G:'U', H:'J', I:'G',
  L:'P', M:'M', N:'L', O:'S', R:'O', S:'Ñ', U:'F', Y:'T'
};

export const transformar = (texto) =>
  texto.split('').map(ch => {
    const up = ch.toUpperCase();
    if (!ABC.includes(up)) return ch;               
    const sub = MAP[up] ?? up;                      
    return ch === up ? sub : sub.toLowerCase();     
  }).join('');