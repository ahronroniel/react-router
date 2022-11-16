function factori(num) {
  let text = 1;
  for (let i = 1; i <= num; i++) {
    text *= i;
  }
  console.log(text);
}

factori(process.argv[2]);
