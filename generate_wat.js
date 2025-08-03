function generateWAT(ast) {
      if (ast.type === 'Add') {
        return `(module
  (func $main (export "main") (result i32)
    i32.const ${ast.left}
    i32.const ${ast.right}
    i32.add
  )
)`;
      }
      return null;
    }