function getLanguageObjectFromLanguageAndSeparator(displayLanguage, decimalSeparator, argumentSeparator) {
  if (decimalSeparator !== "," && decimalSeparator !== ".") throw new Error(`Invalid decimal separator: ${decimalSeparator}`);
  const isDELanguage = displayLanguage.match(/de\-/);
  const trueValue = isDELanguage ?  'WAHR' : "TRUE";
  const falseValue = isDELanguage ?  'FALSCH' : "FALSE";
  const isCommaSeparated = argumentSeparator === ",";
  const reformatNumberForJsParsing = isCommaSeparated ?
    (n) => n :
    (n) => n.replace(',', '.')
  const isScientificNotation = isCommaSeparated ?
    (token) => /^[1-9]{1}(\.[0-9]+)?E{1}$/.test(token) :
    (token) => /^[1-9]{1}(,[0-9]+)?E{1}$/.test(token)
  return {
    true: trueValue,
    false: falseValue,
    decimalSeparator,
    argumentSeparator,
    horizontalSeparator: argumentSeparator,
    verticalSeparator: isCommaSeparated ? ";" : ".",
    reformatNumberForJsParsing,
    isScientificNotation,
  }
};

module.exports = { getLanguageObjectFromLanguageAndSeparator }