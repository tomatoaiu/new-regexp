import {
  lowerCaseOneAlphabet,
  rawtext
} from '../../src/javascript/regexp'

describe('javascript regexp', () => {
  test('rawtext', () => {
    expect(rawtext()).toBe('foo');
  });

  test('lowerCaseOneAlphabet', () => {
    expect(lowerCaseOneAlphabet()).toBe('f');
  });
});
