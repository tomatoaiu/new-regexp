import {
  lowerCaseOneAlphabet,
  rawtext,
  upperCaseOneAlphabet
} from '../../src/javascript/regexp'

describe('javascript regexp', () => {
  test('rawtext', () => {
    expect(rawtext()).toBe('foo');
  });

  test('lowerCaseOneAlphabet', () => {
    expect(lowerCaseOneAlphabet()).toBe('f');
  });

  test('upperCaseOneAlphabet', () => {
    expect(upperCaseOneAlphabet()).toBe('O');
  });
});
