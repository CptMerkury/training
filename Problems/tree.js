const obj = {
  value: 'foo',
  children: [
    {
      value: 'bar'
    },

    {
      value: 'bla',
      children: [{value: 'baz'}]
    }
  ]
};

console.log(maxDepth(obj)); // 2