function reformatNumberForCommaArgumentSeparator(n){
  return n;
}
function reformatNumberForSemiColonArgumentSeparator(n){
  return n.replace(',', '.');
}
function isScientificNotationForCommaArgumentSeparator (token) {
  return /^[1-9]{1}(\.[0-9]+)?E{1}$/.test(token);
}
function isScientificNotationForSemiColonArgumentSeparator (token) {
  return /^[1-9]{1}(,[0-9]+)?E{1}$/.test(token);
}

const SEPARATOR_MAP = {
  ",": {
    verticalSeparator: '.',
    horizontalSeparator: ';',
    argumentSeparator: ';',
    reformatNumber: reformatNumberForSemiColonArgumentSeparator,
    isScientificNotation: isScientificNotationForSemiColonArgumentSeparator
  },
  ".": {
    verticalSeparator: ';',
    horizontalSeparator: ',',
    argumentSeparator: ',',
    reformatNumber: reformatNumberForCommaArgumentSeparator,
    isScientificNotation: isScientificNotationForCommaArgumentSeparator
  }
}

function getLanguageObjectFromLanguageAndSeparator(displayLanguage, decimalSeparator) {
  console.log("in getLang",displayLanguage,decimalSeparator)
  if (!SEPARATOR_MAP[decimalSeparator]) throw new Error("Invalid decimal separator");
  const isDELanguage = displayLanguage.match(/de\-/);
  const trueValue = isDELanguage ?  'WAHR' : "TRUE";
  const falseValue = isDELanguage ?  'FALSCH' : "FALSE";
  return {
    ...SEPARATOR_MAP[decimalSeparator],
    true: trueValue,
    false: falseValue,
    decimalSeparator,
  }
}

module.exports = { getLanguageObjectFromLanguageAndSeparator }