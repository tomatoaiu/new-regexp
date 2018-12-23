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
  const reg: RegExp = /[A-Z]/;

  return '123fOo456'.match(reg).pop(); // O
}
```

# Number
```typescript
function numberText (): string {
  const reg: RegExp = /[0-9]/;

  return '123fOo456'.match(reg).pop(); // 1
}
```

# Number 2
```typescript
function numberText (): string {
  const reg: RegExp = /\d/;

  return '123fOo456'.match(reg).pop(); // 1
}
```

# Not
```typescript
function notText (): string {
  const reg: RegExp = /[^0-9]/;

  return '123fOo456'.match(reg).pop(); // f
}
```

# Not
```typescript
function notNumber (): string {
  const reg: RegExp = /\D/;

  return '123fOo456'.match(reg).pop(); // f
}
```

# Or
```typescript
function orText (): string {
  const reg: RegExp = /1|f/;

  return '123fOo456'.match(reg).pop(); // f
}
```
