## Raw
```typescript
function rawtext (): string {
  const reg: RegExp = /foo/;

  return 'foobarbaz'.match(reg).pop(); // foo
}
```

## Lower Case One Alphabet
```typescript
function lowerCaseOneAlphabet (): string {
  const reg: RegExp = /[a-z]/;

  return '123foo456'.match(reg).pop(); // f
}
```

## Upper Case One Alphabet
```typescript
function lowerCaseOneAlphabet (): string {
  const reg: RegExp = /[a-z]/;

  return '123fOo456'.match(reg).pop(); // O
}
```
