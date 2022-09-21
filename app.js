// textbox内の文字数をカウントする
// 文字を表示する
// alert(textbox);


window.addEventListener('DOMContentLoaded', function () {
  // input要素を取得
  let textbox = document.getElementById("textbox");

  // イベントリスナーでイベント「input」を登録
  textbox.addEventListener("input", function () {
    // console.log("Input action");
    let count = this.value;
    let countNumber = count.length;
    // 数字を出力する
    countNumOutput = document.getElementById("countNumOutput");
    countNumOutput.innerHTML = countNumber;
  });
});
