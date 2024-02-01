const obj = {
  value: 'foo',
  children: [
    {
      value: 'bar',
      children: [
        {
          value: 'flo'
        },
        {
          value: 'bla',
          children: [
            {
              value: 'baz',
              children: [
                {
                  value: 'bro',
                  children: [
                    {
                      value: 'baz',
                      children: [
                        {
                          value: 'bro'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    {
      value: 'bla',
      children: [
        {
          value: 'baz',
          children: [
            {
              value: 'bro'
            }
          ]
        }
      ]
    }
  ]
};

console.log(maxDepth(obj)); // 6

function maxDepth(tree) {
  let max = 0;

  (function checkDepth(node, depth = 0) {
    node.children?.forEach(child => {
      const deep = checkDepth(child, depth + 1)
      max = Math.max(max, deep)
    })
    return depth;
  })(tree)

  return max;
}