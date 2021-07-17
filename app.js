const quiz = [
  {
    question: '母の日に送る花で有名な「カーネーション」。さて、黄色のカーネーションの花言葉は次のうちどれ？',
    answers: [
      '家族愛',
      '感謝',
      '嫉妬',
      '軽蔑'
    ],
    correct: '軽蔑'
  }, {
    question: '「マジ」という言葉は、一体いつからあったでしょう？',
    answers: [
      '江戸時代',
      '明治時代',
      '昭和',
      '平成'
    ],
    correct: '江戸時代'
  }, {
    question: '次のうち、実際に北海道に存在する川はどれ？',
    answers: [
      'イトオシイ川',
      'クルオシイ川',
      'ヤリキレナイ川',
      'チョウシデナイ川'
    ],
    correct: 'ヤリキレナイ川'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了！！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

