import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('https://lms-nynum-full.onrender.com/api/courses', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCourses(res.data);
      } catch (err) {
        setError('⚠️ โหลดข้อมูลคอร์สไม่สำเร็จ');
        console.error(err);
      }
    };

    fetchCourses();
  }, []);

  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  if (courses.length === 0) return <div className="text-center mt-10">ยังไม่มีคอร์สให้แสดง</div>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📚 รายชื่อคอร์สทั้งหมด</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map(course => (
          <div key={course.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <button
              onClick={() => alert('ฟีเจอร์ลงทะเบียนยังไม่เปิด')}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
            >
              ลงทะเบียนเรียน
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
