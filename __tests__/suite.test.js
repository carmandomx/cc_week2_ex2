const { substrGen } = require('../exercise');

test('Testing the substrGen exercise', () => { 
    expect(substrGen('abcabcbb')).toBeDefined();
    expect(substrGen('abcabcbb')).toEqual([
        'a',      'ab',     'abc',     'abca',
        'abcab',  'abcabc', 'abcabcb', 'abcabcbb',
        'b',      'bc',     'bca',     'bcab',
        'bcabc',  'bcabcb', 'bcabcbb', 'c',
        'ca',     'cab',    'cabc',    'cabcb',
        'cabcbb', 'a',      'ab',      'abc',
        'abcb',   'abcbb',  'b',       'bc',
        'bcb',    'bcbb',   'c',       'cb',
        'cbb',    'b',      'bb',      'b'
      ]);
    expect(substrGen('abc')).toEqual([ 'a', 'ab', 'abc', 'b', 'bc', 'c' ])
    expect(substrGen('lagann')).toEqual([
        'l',    'la',    'lag',
        'laga', 'lagan', 'lagann',
        'a',    'ag',    'aga',
        'agan', 'agann', 'g',
        'ga',   'gan',   'gann',
        'a',    'an',    'ann',
        'n',    'nn',    'n'
      ])
 })