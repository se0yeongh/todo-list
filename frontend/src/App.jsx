import React, {useState, useEffect} from 'react';
import axios from 'axios';
//여기서 작성한 내용이 사용자 화면에 나타남
//다른 컴포넌트들 불러와서 화면에 배치
//하위 컴포넌트에 어떤 데이터를 전달할 지 결정하는 중심 로직 
// function App() {
//   //로직 작성 영역(데이터 처리, 상태 관리 등)
  
//   //화면에 보여줄 UI 영역(JSX)
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

function App() {
  const [todos, setTodos] = useState([]); // 할 일 목록 저장소

  // 1. 컴포넌트가 처음 나타날 때 실행
  useEffect(() => {
    fetchTodos();
  }, []);

  // 2. Django API에서 데이터를 가져오는 함수
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/todos/');
      setTodos(response.data); // 가져온 JSON 데이터를 상태에 저장
    } catch (error) {
      console.error("데이터를 가져오는 중 에러 발생:", error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Todo List</h1>
      <ul>
        {/* 3. map을 이용해 데이터 수만큼 li 태그 생성 */}
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <strike>{todo.title}</strike> : todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;