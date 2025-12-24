import React, { useState } from 'react';
import "./Home.css";
import Avatar from "../../components/avatar/Avatar";
import Headers from "../../components/header/Header";
import MyTasks from "../../components/MyTasks/MyTasks";
import AddTask from "../../components/AddTask/AddTask";
import TaskList from "../../components/taskList/TaskList";

/**
 * Home Component - "Bộ não" quản lý toàn bộ ứng dụng Todo
 */
function Home() {
  // State: Lưu danh sách các công việc //hiểu
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete the React dashboard component', completed: false },
    { id: 2, text: 'Review pull requests from the team', completed: false },
    { id: 3, text: 'Update documentation for the API', completed: true },
  ]);

  // State: Lưu trạng thái lọc (all, active, completed)// hiểu
  

  // Hàm: Thêm công việc mới vào đầu danh sách// hiểu


  // // Hàm: Đảo ngược trạng thái hoàn thành (Check/Uncheck)// hiểu
  // const toggleTodo = (id) => {
  //   setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ));
  // };// duyệt từng phần tử nếu todo.id === id thì đảo ngược trạng thái hoàn thành

  // Hàm: Xóa tất cả những công việc đã hoàn thành
  

  return (
    <div className="home">
      {/* Header và Avatar hiển thị phần trên cùng */}
      <Headers />
      
      {/* Card giới thiệu và thanh tiến độ */}
      <MyTasks />

      <div style={{ marginTop: '32px' }}>
        {/* Ô nhập liệu - Truyền hàm addTodo xuống để con sử dụng */}
        <AddTask />

        {/* Danh sách công việc - Truyền dữ liệu và các hàm xử lý xuống */}
        <TaskList 
           
          
        />
      </div>
    </div>
  );
}

export default Home;
