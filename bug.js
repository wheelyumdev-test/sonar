// 2: Loops should not be infinite
for (;;) {
  // Noncompliant; end condition omitted
  // ...
}

var j = 0;
while (true) {
  // Noncompliant; constant end condition
  j++;
}

var k;
var b = true;
while (b) {
  // Noncompliant; constant end condition
  k++;
}
