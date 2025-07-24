function stripAccents() {
  const input = document.getElementById("input").value;
  const stripped = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  document.getElementById("output").value = stripped;
}
