const SEPARATOR_MAP = {
  ",": {
    verticalSeparator: '.',
    horizontalSeparator: ';',
    argumentSeparator: ';',
    reformatNumberForJsParsing: (n) => n.replace(',', '.'),
    isScientificNotation: (token) => /^[1-9]{1}(,[0-9]+)?E{1}$/.test(token)
  },
  ".": {
    verticalSeparator: ';',
    horizontalSeparator: ',',
    argumentSeparator: ',',
    reformatNumberForJsParsing: (n) => n,
    isScientificNotation: (token) => /^[1-9]{1}(\.[0-9]+)?E{1}$/.test(token)
  }
};

function getLanguageObjectFromLanguageAndSeparator(displayLanguage, decimalSeparator) {
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
};

module.exports = { getLanguageObjectFromLanguageAndSeparator }