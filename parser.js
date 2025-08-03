let symbolTable = {};

function parse(tokens) {
  let i = 0;

  function peek() {
    return tokens[i];
  }

  function consume() {
    return tokens[i++];
  }

  function parsePrimary() {
    const token = peek();

    if (token === '(') {
      consume();
      const expr = parseExpression();
      if (consume() !== ')') {
        throw new Error('Brak zamykającego nawiasu )');
      }
      return expr;
    }

    if (!isNaN(Number(token))) {
      consume();
      return Number(token);
    }

    if (token in symbolTable) {
      consume();
      return { type: 'Variable', name: token };
    }

    throw new Error('Nieznany token: ' + token);
  }

  function parseMultiplicative() {
    let node = parsePrimary();
    while (peek() === '*' || peek() === '/') {
      const op = consume();
      const right = parsePrimary();
      node = {
        type: op === '*' ? 'Mul' : 'Div',
        left: node,
        right: right
      };
    }
    return node;
  }

  function parseExpression() {
    let node = parseMultiplicative();
    while (peek() === '+' || peek() === '-') {
      const op = consume();
      const right = parseMultiplicative();
      node = {
        type: op === '+' ? 'Add' : 'Sub',
        left: node,
        right: right
      };
    }
    return node;
  }

  // główne instrukcje języka:
  // deklaracja zmiennej
  if (tokens[0] === 'liczba_całkowita') {
    const name = tokens[1];
    if (tokens[2] !== '=') throw new Error('Oczekiwano "=" w deklaracji');
    i = 3;
    const value = parseExpression();
    symbolTable[name] = value;
    return { type: 'Declare', name, value };
  }

  // funkcja pisz('coś')
  if (tokens[0].startsWith('pisz')) {
    const textMatch = /pisz\(['"](.+?)['"]\)/.exec(tokens.join(' '));
    if (!textMatch) throw new Error('Niepoprawna składnia funkcji pisz()');
    return { type: 'Print', value: textMatch[1] };
  }

  // wyrażenie ogólne (np. 2 + 3 * 4 lub x + 1)
  return parseExpression();
}
