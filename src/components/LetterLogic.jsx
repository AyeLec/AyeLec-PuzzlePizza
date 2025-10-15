
const MAP_BASE = {
  A:'A',
  B:'N',
  D:'H',
  E:'D',
  G:'U',
  H:'J',
  I:'G',
  L:'P',
  M:'M',
  N:'L',
  O:'S',   
  R:'O',
  S:'Ñ',   
  T:'T',
  U:'F',
  Y:'T'
};

export const transformar = (texto) =>
  texto.split('').map(ch => {
    const nfd = ch.normalize('NFD');
    const [base = '', ...marksArr] = [...nfd];
    const marks = marksArr.join('');

    if (!/[A-Za-z]/.test(base)) return ch;

    const isUpper = base === base.toUpperCase();
    const upperBase = base.toUpperCase();

    const hasTilde = marks.includes('\u0303'); 

    if (upperBase === 'N' && hasTilde) {
      const out = isUpper ? 'Ñ' : 'ñ';
      return out; 
    }

    let mappedUpper = MAP_BASE[upperBase] ?? upperBase;

    let extraMarks = '';
    if (mappedUpper === 'Ñ') {
      mappedUpper = 'N';
      extraMarks = '\u0303'; 
    }

    let mapped = isUpper ? mappedUpper : mappedUpper.toLowerCase();

    const recomposed = (mapped + marks + extraMarks).normalize('NFC');
    return recomposed;
  }).join('');
