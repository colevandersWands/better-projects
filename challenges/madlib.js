function madlib(n, v, a) {
  if (n.length > v.length) {
    return a + ' ' + n + ' love to ' + v + ' in the summer';
  } else {
    return 'when the ' + a + ' rain falls, ' + n + ' begin to ' + v;
  }
}

console.assert(madlib('horses', 'walk', 'red') === 'red horses love to walk in the summer');
console.assert(madlib('toads', 'program', 'large') === 'when the large rain falls, toads begin to program');
console.assert(madlib('horses', 'walk', 'red') === 'red horses love to walk in the summer');
console.assert(madlib('horses', 'walk', 'red') === 'red horses love to walk in the summer');
console.assert(madlib('horses', 'walk', 'red') === 'red horses love to walk in the summer');


function madlibHandler() {
  // read user input
  const noun = prompt('enter a noun');
  const verb = prompt('enter a verb');
  const adjective = prompt('enter an adjective');

  // perform core logic
  const result = madlib(noun, verb, adjective);

  // report to user
  alert(result);

  // log for developer
  console.log('\n--- madlib ---');
  console.log('noun:', '(' + typeof noun + '),', noun);
  console.log('verb:', '(' + typeof verb + '),', verb);
  console.log('adjective:', '(' + typeof adjective + '),', adjective);
  console.log('result:', '(' + typeof result + '),', result);
}
