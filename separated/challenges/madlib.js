console.log('madlibs script has loaded');

// coding challenge
function madlib(n, v, a) {
  if (n.length > v.length) {
    return a + ' ' + n + ' love to ' + v + ' in the summer';
  } else {
    return 'when the ' + a + ' rain falls, ' + n + ' begin to ' + v;
  }
}

// in-line assertion tests
console.assert(madlib('horses', 'walk', 'red') === 'red horses love to walk in the summer', 'first assertion');
console.assert(madlib('toads', 'program', 'large') === 'when the large rain falls, toads begin to program', 'first assertion');
console.assert(madlib('horses', 'walk', 'red') === 'red horses love to walk in the summer', 'first assertion');
console.assert(madlib('horses', 'walk', 'red') === 'red horses love to walk in the summer', 'first assertion');
console.assert(madlib('horses', 'walk', 'red') === 'red horses love to walk in the summer', 'first assertion');

// a handler with clear stages
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

// this could be done with an inline html 'onclick='
// but I think if there are only click events, and the ids are consistently named challenge-button
//  it shouldn't be too hard and they'll learn a better practice sooner
document.getElementById('madlib-button').addEventListener('click', madlibHandler);
