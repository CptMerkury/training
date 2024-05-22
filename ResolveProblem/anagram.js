console.log(anagram('cat', 'cta'));
console.log(anagram('cat', 'tac'));
console.log(anagram('cat', 'act'));
console.log(anagram('cat', 'atc'));
console.log(anagram('cat', 'atca'));
console.log(anagram('cat', 'aca'));
console.log(anagram('tag', 'gat'));
console.log(anagram('', ''));

function anagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  if (!a.length || !b.length) {
    return false;
  }

  let bHash = new Set(b)
  for (let k of a) {
    if (!bHash.has(k)) {
      return false;
    }
  }
  return true
}