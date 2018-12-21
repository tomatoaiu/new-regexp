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

  test('number text2', () => {
    expect(reg.numberText2()).toBe('1');
  });

  test('not text', () => {
    expect(reg.notText()).toBe('f');
  });
});
