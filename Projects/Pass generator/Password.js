let passLength = document.querySelector(".password-length input");
let options = document.querySelectorAll(".checkboxes-box div input");
let generateBtn = document.querySelector(".generate-btn");
let password = document.querySelector(".password");
let copyBtn = document.querySelector("#copy-btn");
let copiedMsg = document.querySelector(".container .copy-btn span");
let copiedIcon = document.querySelector(".container .copy-btn i");

let getPassLengthValue = () => {
  document.querySelector(".length-value").innerText = passLength.value;
};

const characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
};

let getPassword = () => {
  let availableChars = "";
  let passwordArray = [];
  let passWordLength = parseInt(passLength.value);

  // Adiciona um caractere de cada tipo selecionado
  options.forEach((option) => {
    if (option.checked) {
      let charSet = characters[option.id];
      availableChars += charSet;
      // Adiciona pelo menos um caractere de cada tipo selecionado
      passwordArray.push(charSet[Math.floor(Math.random() * charSet.length)]);
    }
  });

  // Verifica se há pelo menos uma opção selecionada
  if (availableChars.length === 0) {
    password.innerText = "Selecione ao menos uma opção!";
    return; // Não gera senha se nenhuma opção estiver marcada
  }

  // Preenche o restante da senha até atingir o comprimento desejado
  for (let i = passwordArray.length; i < passWordLength; i++) {
    passwordArray.push(
      availableChars[Math.floor(Math.random() * availableChars.length)]
    );
  }

  // Embaralha os caracteres para garantir que os primeiros não sejam previsíveis
  passwordArray = passwordArray.sort(() => Math.random() - 0.5);

  // Converte o array em string e exibe a senha
  password.innerText = passwordArray.join("");
};

let copyPassword = () => {
  navigator.clipboard.writeText(password.textContent);
  copiedIcon.style.display = "none";
  copiedMsg.style.display = "block";
  setTimeout(() => {
    copiedIcon.style.display = "block";
    copiedMsg.style.display = "none";
  }, 1000);
};

copyBtn.addEventListener("click", copyPassword);
generateBtn.addEventListener("click", getPassword);
