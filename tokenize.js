function tokenize(input) {
  const regex = /"[^"]*"|'[^']*'|[+\-*/=()]|[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ_][\wąćęłńóśźżĄĆĘŁŃÓŚŹŻ_]*|\d+|\S/g;
  return input.match(regex);
}
