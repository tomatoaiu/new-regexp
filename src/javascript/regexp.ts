export function rawtext (): string {
  const reg: RegExp = /foo/;

  return 'foobarbaz'.match(reg).pop();
}

export function lowerCaseOneAlphabet (): string {
  const reg: RegExp = /[a-z]/;

  return '123foo456'.match(reg).pop();
}

export function upperCaseOneAlphabet (): string {
  const reg: RegExp = /[A-Z]/;

  return '123fOo456'.match(reg).pop();
}

export function numberText (): string {
  const reg: RegExp = /[0-9]/;

  return '123fOo456'.match(reg).pop();
}
