import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""; //初期化

  cleateIncompleteList(inputText);
};
//未完了リストから指定の要素を削除する関数
const deleteFromImcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//完了リストから未完了リストへ追加する関数
const cleateIncompleteList = (text) => {
  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text; //liにテキスト内容を追加している

  //完了ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ボタン押すと、親要素divタグ全体を削除する
    deleteFromImcompleteList(completeButton.parentNode);
    //完了ボタンに追加する要素
    const addTarget = completeButton.parentNode;
    //TODOテキストの内容を取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化する
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すbottonの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    //戻すボタンを押すと削除し、未完了に追加する
    backButton.addEventListener("click", () => {
      //戻すボタンを押すと、親要素のdivタグを削除する
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const text = backButton.parentNode.firstChild.innerText;

      cleateIncompleteList(text);
    });

    //divタグ（addTaget）に各要素を入れる
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //未完了リストに追加する
    document.getElementById("complete-list").appendChild(addTarget);
  });
  //削除ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタン押すと、親要素divタグ全体を削除する
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  // divの子要素にliタグを入れる
  // divの子要素に完了ボタンを入れる
  // divの子要素に削除ボタンを入れる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // テキストを未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
