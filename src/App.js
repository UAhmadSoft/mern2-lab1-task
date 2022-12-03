import './App.css';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div>
      <TodoApp />
      {/* <TodoApp>
        <h1>Todo App</h1>
      </TodoApp> */}

      {/* <TodoApp children={<h1>Todo App</h1>} /> */}
    </div>
  );
}

export default App;
