const esPrimo = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0 && i % 3 != 0) {
      console.log(i);
    }
  }
};

esPrimo();
