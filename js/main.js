// stampare numeri da 1 a 100
for (i = 1; i <= 100; i++) {
  // per i numeri che sono sia multipli di 3 che di 5 deve stampare FizzBuzz al posto del numero
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
  // per i multipli di 3 deve stampare “Fizz” al posto del numero
  else if (i % 3 == 0) {
    console.log("Fizz");
  }
  // per i multipli di 5 deve stampare "Buzz" al posto del numero
  else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}