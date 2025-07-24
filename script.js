function stripAccents() {
  const input = document.getElementById("input").value;

  // Normalize typical accents
  let output = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Manually replace special characters that don't decompose
  const manualMap = {
    'Ø': 'O', 'ø': 'o',
    'Æ': 'AE', 'æ': 'ae',
    'Œ': 'OE', 'œ': 'oe',
    'Ð': 'D',  'ð': 'd',
    'Þ': 'Th', 'þ': 'th',
    'Ł': 'L',  'ł': 'l',
    'ß': 'ss'
    // Add more if needed
  };

  output = output.replace(/[^A-Za-z0-9]/g, char => manualMap[char] || char);

  document.getElementById("output").value = output;
}
