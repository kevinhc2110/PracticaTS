const fibonacci = (): void => {
  let a: number = 0;
  let b: number = 1;
  let c: number;

  console.log(a);

  for (let i = 0; i <= 50; i++) {
    console.log(b);

    c = a + b;
    a = b;
    b = c;
  }
};

fibonacci();
