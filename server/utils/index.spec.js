const { someEmpty } = require('./index');
console.log(someEmpty);

describe('server utils', () => {
  it('returns true if one of the values is empty', () => {
    const values = [1, '', '21'];
    const valuesWithUndifiend = [1, undefined, '21'];
    const valuesWithNull = [1, null, '21'];
    expect(someEmpty(...values)).toBeTruthy();
    expect(someEmpty(...valuesWithUndifiend)).toBeTruthy();
    expect(someEmpty(...valuesWithNull)).toBeTruthy();
  });

  it('returns false if all of the values are NOT empty', () => {
    const values = [1, '1', '21'];
    const valuesWithZero = [1, 0, '21'];
    expect(someEmpty(...values)).toBeFalsy();
    expect(someEmpty(...valuesWithZero)).toBeFalsy();
  });
});
