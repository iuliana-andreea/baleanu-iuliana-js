var i;

// for (i = 1; i < 100; i++) {
//   console.log(i);
//   if (i === 50) {
//     break;
//   }
// }

for (i = 1; i < 100; i++) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}
