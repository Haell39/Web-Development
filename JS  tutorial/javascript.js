<!DOCTYPE html>
<html>
<head>
  <title>Fundamentos da Linguagem JavaScript</title>
</head>
<body>
  <h1>JavaScript Fundamentals</h1>
  <script>
    // Variáveis
    let name = 'John Doe';
    console.log(name);

    // Tipos de dados
    let age = 30;
    let isAdmin = true;
    let isAdminString = isAdmin.toString();
    console.log(age);
    console.log(isAdmin);
    console.log(isAdminString);

    // Operadores
    let x = 5;
    let y = 3;
    let sum = x + y;
    let difference = x - y;
    let product = x * y;
    let quotient = x / y;
    console.log(sum);
    console.log(difference);
    console.log(product);
    console.log(quotient);

    // Condicionais
    let temperature = 25;
    if (temperature > 20) {
      console.log('It\'s warm outside!');
    } else {
      console.log('It\'s cold outside!');
    }

    // Laços de repetição
    for (let i = 0; i < 5; i++) {
      console.log(`Iteration ${i}`);
    }

    // Funções
    function greet(name) {
      console.log(`Hello, ${name}!`);
    }
    greet('Alice');

    // Objetos
    let person = {
      name: 'Bob',
      age: 35,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
      }
    };
    console.log(person.name);
    console.log(person.address.street);

    // Arrays
    let colors = ['red', 'green', 'blue'];
    console.log(colors[0]);
    console.log(colors[1]);

    // Eventos
    document.getElementById('button').addEventListener('click', function() {
      console.log('Button clicked!');
    });
  </script>
  <button id="button">Click me!</button>
</body>
</html>