// Code Smell
// 1: Function returns should not be invariant
function foo(a) {
  // Noncompliant
  let b = 12;
  if (a) {
    return b;
  }
  return b;
}
