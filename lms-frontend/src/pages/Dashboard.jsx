// 📁 Path: frontend/src/pages/dashboard.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const resUser = await axios.get('https://lms-nynum-full.onrender.com/api/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(resUser.data);

        const resCourses = await axios.get('https://lms-nynum-full.onrender.com/api/courses/enrolled', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(resCourses.data);
      } catch (err) {
        setError('ไม่สามารถโหลดข้อมูลผู้ใช้หรือคอร์สได้');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">📋 Dashboard นักเรียน</h1>
        <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          ออกจากระบบ
        </button>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      {user && <p className="mb-2">👋 สวัสดีคุณ {user.name}</p>}

      <h2 className="text-xl font-semibold mb-2">📚 คอร์สที่คุณลงทะเบียนเรียน:</h2>
      {courses.length === 0 ? (
        <p>⛔️ คุณยังไม่ได้ลงทะเบียนเรียนคอร์สใดเลย <a href="/courses" className="text-blue-600 underline">ไปเลือกคอร์ส</a></p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map(course => (
            <div key={course.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
              <button
                onClick={() => navigate(`/course/${course.id}`)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                เข้าสู่คอร์ส
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
