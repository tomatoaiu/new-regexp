import * as reg from '../../src/javascript/regexp'

describe('javascript regexp', () => {
  test('rawtext', () => {
    expect(reg.rawtext()).toBe('foo');
  });

  test('lowerCaseOneAlphabet', () => {
    expect(reg.lowerCaseOneAlphabet()).toBe('f');
  });

  test('upperCaseOneAlphabet', () => {
    expect(reg.upperCaseOneAlphabet()).toBe('O');
  });

  test('number text', () => {
    expect(reg.numberText()).toBe('1');
  });
});
