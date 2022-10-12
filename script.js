
window.addEventListener('DOMContentLoaded', () => {
  
  let limit = 4;
  // total nyawa = total limit, yaitu 4
  let heart = limit;
  let play = true;
  
  // ucapan selamat datang 
  alert(`selamat datang di game matematika sederhana. anda diberikan nyawa sebanyak ${limit} kali. jika anda gagal menjawab sebanyak ${limit} kali, anda dinyatakan kalah!`)
  
  function startGame() {
    let number1 = getRandomNumber(1, 10);
    let number2 = getRandomNumber(1, 10);
    // untuk menentukan memakai operator apa
    let operator = setOperator(getRandomNumber(1, 4));
    // untuk mendapatkan hasil akhir
    let result = getResult(number1, number2, operator);
    while ( play ) {
      // sebuah soal untuk player
      let answer = prompt(`berapakah hasil dari soal ini? ${number1} ${operator} ${number2}`);
      // berikan validasi terlebih dahulu!
      if (validate(answer) == true) {
        // bandingkan jawaban dengan hasil sebenarnya
        let final = compare(answer.trim(), result);
        // jika menghasilkan boolean false, tampilkan alert
        if (final == false) alert(`nyawamu tersisa ${heart}x lagi!`);
        // jika nyawa tersisa 0, tampilkan alert
        if (heart == 0) {
          alert('nyawamu sudah habis!');
          playAgain();
        }
      }
    }
  }
  
  startGame();
  
  alert('terima kasih sudah bermain!');
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function setOperator(number) {
    switch (number) {
      case 1 : return '+';
      case 2 : return '×';
      case 3 : return '-';
      case 4 : return '÷';
      default : return 'error to set operator!';
    }
  }
  
  function getResult(number1, number2, operator) {
    switch (operator) {
      case '+' : return number1 + number2;
      case '-' : return number1 - number2;
      case '×' : return number1 * number2;
      case '÷' : return number1 / number2;
      default : return 'error to get result!';
    }
  }
  
  function validate(param) {
    if (param == '') return alert('isi terlebih dahulu!');
    if (param.match(/[a-zA-Z]/gmi)) return alert('hanya boleh berisikan angka saja!');
    return true;
  }
  
  function compare(answer, result) {
    if (answer == result) {
      alert(`benar! jawaban yang benar adalah ${answer}`);
      playAgain();
    } else {
      alert('jawaban kamu salah!');
      heart--;
      return false;
    }
  }
  
  function playAgain() {
    let ask = confirm('mau bermain lagi?');
    if ( ask == true ) {
      clear();
      startGame();
    } else {
      play = false;
    }
  }
  
  function clear() {
    heart = limit;
    play = true;
  }
  
});