// function generateJS(ast) {
//   switch (ast.type) {
//     case 'Declare':
//       return `let ${ast.name} = ${ast.value};`;
//     case 'Add':
//       return `console.log(${ast.left} + ${ast.right});`;
//     case 'Sub':
//       return `console.log(${ast.left} - ${ast.right});`;
//     case 'Mul':
//       return `console.log(${ast.left} * ${ast.right});`;
//     case 'Div':
//       return `console.log(${ast.left} / ${ast.right});`;
//     default:
//       throw new Error('Nieobsługiwany typ AST: ' + ast.type);
//   }
// }
    function generateJS(ast) {
      if (ast.type === 'Declare') {
        return `let ${ast.name} = ${ast.value};`;
      }
      if (ast.type === 'Add') {
        return `console.log(${ast.left} + ${ast.right});`;
      }
        if (ast.type === 'Sub') {
        return `console.log(${ast.left} - ${ast.right});`;
      }
       if (ast.type === 'Mul') {
        return `console.log(${ast.left} * ${ast.right});`;
      }
        if (ast.type === 'Div') {
        return `console.log(${ast.left} / ${ast.right});`;
      }
        if (ast.type === 'Print') {
        return `console.log(${JSON.stringify(ast.value)});`;
      }
    }