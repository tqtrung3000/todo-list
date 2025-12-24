import React from 'react';
import './TaskList.css';

/**
 * TaskList Component - Hiển thị danh sách và bộ lọc
 */
const TaskList = ({ todos }) => {
  
  const [filter, setFilter] = useState('all');
  // Logic: Lọc danh sách công việc căn cứ theo Tab đang chọn
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed; // Chỉ lấy việc chưa xong
    if (filter === 'completed') return todo.completed; // Chỉ lấy việc đã xong
    return true; // Tab 'all': lấy tất cả
  });
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Tính toán: Số lượng công việc chưa hoàn thành (active)
  const activeCount = todos.filter(t => !t.completed).length;

  return (
    <div className="task-list-card">
      {nutBamTasklist(filter, setFilter)}

      {/* Danh sách các công việc đã được lọc */}
      <div className="task-items">
        {locDanhSach(filteredTodos, onToggle)}

        {/* Thông báo nếu danh sách trống */}
        {filteredTodos.length === 0 && (
          <div className="empty-message">No tasks found.</div>
        )}
      </div>
      

      {/* Chân trang hiển thị thông số và nút xóa */}
      <div className="task-footer">
        <span className="items-left">{activeCount} items left</span>
        <button className="clear-completed" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TaskList;

//Các nút bấm lọc
function nutBamTasklist(filter, setFilter) {
  return (
    <div className="task-tabs">
      <button
        className={`task-tab ${filter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >
        All Tasks
      </button>
      <button
        className={`task-tab ${filter === 'active' ? 'active' : ''}`}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={`task-tab ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
}

//Hiển thị danh sách công việc
function locDanhSach(filteredTodos, onToggle) {
  return filteredTodos.map(todo => (
    <div key={todo.id} className="task-item">
      <div
        className={`task-checkbox ${todo.completed ? 'completed' : ''}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed && <span className="checkmark">✔</span>}
      </div>
      <span className={`task-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
    </div>
  ));

}



const onToggle = ()=> {

}