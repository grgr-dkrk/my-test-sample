interface ResolveType {
  data: string;
}

// Promise
const fetchData = (): Promise<ResolveType> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: 'foo',
      });
    }, 1000);
  });
};

const rejected = (): Promise<never> => {
  return Promise.reject(new Error('error'));
};

it('dataからfooが取得できているか', () => {
  return expect(fetchData()).resolves.toEqual({ data: 'foo' });
});

it('rejectされるか', () => {
  return expect(rejected()).rejects.toThrow('error');
});
