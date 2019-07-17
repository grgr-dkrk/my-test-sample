const foo = 3;
const bar = 4;
const baz = 3;
const hoge = null;
const fuga = undefined;
const text = 'テスト';
const text2 = '';
const array = [0, 1, 2];
const item1 = { apple: 300 };
const item2 = { apple: 300 };
const item3 = { pen: 150 };
const sum = (x: number, y: number) => x + y;

it('fooは3か', () => {
  expect(foo).toBe(3);
});

it('fooはbarより小さいか', () => {
  expect(foo).toBeLessThan(bar);
});

it('barはfooより大きいか', () => {
  expect(bar).toBeGreaterThan(foo);
});

it('fooとbazは等しいか', () => {
  expect(bar).toBeGreaterThan(foo);
});

it('hogeはNullか', () => {
  expect(hoge).toBeNull();
});

it('fugaはUndefinedか', () => {
  expect(fuga).toBeUndefined();
});

it('textに「テスト」というテキストが入っているか', () => {
  expect(text).toBe('テスト');
});

it('text2は空か', () => {
  expect(text2).toBeFalsy();
});

it('arrayのlengthは3か', () => {
  expect(array).toHaveLength(3);
});

it('item1とitem2のデータは等しいか', () => {
  expect(item1).toEqual(item2);
});

// 'not'を挟むと否定になる
it('item1とitem3のデータは等しくないか', () => {
  expect(item1).not.toEqual(item3);
});

it('fooとbarをsum関数に渡すと7が返るか', () => {
  expect(sum(foo, bar)).toBe(7);
});
