let listaNombre = [];

function obtenerNombreInput() {
  const input = document.getElementById("nombre");
  return input.value.trim();
}

function guardarNombre(nuevoNombre) {
  listaNombre.push(nuevoNombre);
}

function ordenarNombres() {
  listaNombre.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
}

function actualizarAreaTexto() {
  const area = document.getElementById("listaNombre");
  area.value = listaNombre.join("\n");
}

function resetearInput() {
  const input = document.getElementById("nombre");
  input.value = "";
  input.focus();
}

function agregarNombre() {
  const nombre = obtenerNombreInput();

  if (nombre !== "") {
    guardarNombre(nombre);
    ordenarNombres();
    actualizarAreaTexto();
    resetearInput();
  }
}

function limpiarTodo() {
  listaNombre = [];
  actualizarAreaTexto();
  resetearInput();
}