import React, { useState } from 'react';
import './AddTask.css';

/**
 * AddTask Component - Ô nhập liệu để thêm công việc mới
 */
const AddTask = () => {
  // State nội bộ: Lưu trữ chữ đang gõ trong ô input
  const [text, setText] = useState('');

    const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Tạo ID duy nhất bằng thời gian hiện tại
      text,
      completed: false // Mặc định việc mới chưa hoàn thành
    };
    setTodos([...todos, newTodo]); // Spread operator để tạo mảng mới
  };

  // Hàm: Xử lý khi người dùng nhấn nút Add hoặc phím Enter
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trang web tải lại (mặc định của form)
    if (text.trim()) {  // Kiểm tra nếu chuỗi không trống
      onAdd(text);      // Gọi hàm của "Cha" (Home) để thêm việc
      setText('');      // Xóa trắng ô nhập sau khi thêm
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-task-input"
        placeholder="What needs to be done?"
        value={text}
        // Mỗi khi gõ chữ, cập nhật lại state text
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-task-button">
        + Add Task
      </button>
    </form>
  );
};

export default AddTask;
