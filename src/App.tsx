import { useState } from 'react';

// Todo 型の定義
type Todo = {
  // プロパティ value は文字列型
  value: string;
};

export const App = () => {
  // 初期値: ''  （空文字列）のステート
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          // text ステートが持っている入力中テキストの値を value として表示
          value={text}
          // onChange イベント（＝入力テキストの変化）を text ステートに反映する
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="submit"
          value="追加"
          onSubmit={(e) => e.preventDefault()}
        />
      </form>
      {/* ↓ DOM のリアクティブな反応を見るためのサンプル */}
      <p>{text}</p>
      {/* ↑ あとで削除 */}
    </div>
  );
};
