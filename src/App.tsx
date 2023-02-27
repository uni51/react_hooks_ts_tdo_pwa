import { useState } from 'react';

// Todo 型の定義
type Todo = {
  // プロパティ value は文字列型
  value: string;
  readonly id: number;
};

export const App = () => {
  // 初期値: ''  （空文字列）のステート
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    // 何も入力されていなかったらリターン
    if (!text) return;
    // 新しい Todo を作成
    // 明示的に型注釈を付けてオブジェクトの型を限定する
    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
    };

    /**
     * スプレッド構文を用いて todos ステートのコピーへ newTodo を追加する
     * 以下と同義
     *
     * const copyTodos = todos.slice();  // 配列をコピー
     * copyTodos.unshift(newTodo);  // 配列の先頭に要素を追加
     * setTodos(copyTodos);
     *
     **/
    setTodos([newTodo, ...todos]);
    // フォームへの入力をクリアする
    setText('');
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          // text ステートが持っている入力中テキストの値を value として表示
          value={text}
          // onChange イベント（＝入力テキストの変化）を text ステートに反映する
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" value="追加" onSubmit={handleSubmit} />
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.value}</li>;
        })}
      </ul>
    </div>
  );
};
