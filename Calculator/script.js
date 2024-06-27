let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let buttonText = e.target.innerHTML.trim();

    if (buttonText == '=') {
      try {
        string = eval(string);
        document.querySelector('#screen').value = string;
      } catch (error) {
        document.querySelector('#screen').value = "Error";
        string = "";
      }
    } else if (buttonText == 'AC') {
      string = "";
      document.querySelector('#screen').value = string;
    } else if (buttonText == 'DEL') {
      string = string.substring(0, string.length - 1);
      document.querySelector('#screen').value = string;
    } 
    // else if (buttonText == 'X') {
    //   buttonText = '*';
    //   string += buttonText;
    //   document.querySelector('input').value = string;
    // } else if (buttonText == '÷') {
    //   buttonText = '/';
    //   string += buttonText;
    //   document.querySelector('input').value = string;
    // } 
    else {
      string += buttonText;
      document.querySelector('#screen').value = string;
    }
  });
});




//  TO do : make +/-, X , ÷  functioning 







