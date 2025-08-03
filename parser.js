    function parse(tokens) {
      if (tokens[0] === 'liczba_całkowita') {
        const name = tokens[1];
        if (tokens[2] !== '=' || isNaN(Number(tokens[3]))) {
          throw new Error('Błąd składni w deklaracji liczby_całkowitej');
        }
        symbolTable[name] = Number(tokens[3]);
        return { type: 'Declare', name, value: symbolTable[name] };
      }
      if (tokens[0] === 'dodaj') {
        const left = isNaN(Number(tokens[1])) ? symbolTable[tokens[1]] : Number(tokens[1]);
        const right = isNaN(Number(tokens[2])) ? symbolTable[tokens[2]] : Number(tokens[2]);
        return { type: 'Add', left, right };
      }
      throw new Error('Nieznane polecenie: ' + tokens[0]);
    }