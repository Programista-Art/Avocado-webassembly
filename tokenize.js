function tokenize(input) {
  return input
    .replace(/([+\-*/=()])/g, ' $1 ') // dodaj spacje wokół operatorów
    .trim()
    .split(/\s+/);
}
