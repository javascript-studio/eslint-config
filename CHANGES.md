# Changes

## 1.1.0

- Allow early use of functions (Morgan Roderick)
    >
    > Function declarations are hoisted, so early use of functions (before
    > they're declared) is safe.
    >
    > This allows organisation of code to read like a newspaper article, i.e.
    > from higher to lower abstraction level, which is recommended by people
    > like Robert C. Martin (Clean Code) and Kent C. Dodds.
    >
    > See:
    >   * https://eslint.org/docs/rules/no-use-before-define#options
    >   * https://books.google.es/books?id=_i6bDeoCQzsC&pg=PA136&lpg=PA136&dq=code+read+like+a+newspaper+article&source=bl&ots=epaNGi4a19&sig=ACfU3U1J0a7UzLLelJBJVgfENXgKxfNalw&hl=en&sa=X&ved=2ahUKEwjTkOfsv5LoAhWiyoUKHdlgAeEQ6AEwAnoECAoQAQ#v=onepage&q=code%20read%20like%20a%20newspaper%20article&f=false
    >   * https://kentcdodds.com/blog/newspaper-code-structure
    >

## 1.0.2

- Define indentation rule for wrapped function parameters

## 1.0.1

- Add MIT license
- Add [changes][] to version script for `npm version` releases

[changes]: https://www.npmjs.com/package/@studio/changes

## 1.0.0

Inception.
