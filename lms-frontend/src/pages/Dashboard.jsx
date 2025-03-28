import { useEffect, useState } from 'react';
import { getMyCourses } from '../api/courses';
import { logout } from '../api/auth';

export default function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getMyCourses().then(setCourses).catch(() => logout());
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard นักเรียน</h1>
        <button className="text-sm text-red-500" onClick={() => { logout(); window.location.href = '/'; }}>ออกจากระบบ</button>
      </div>
      <ul className="space-y-2">
        {courses.map(course => (
          <li key={course.id} className="border p-2 rounded">
            <h2 className="text-lg font-semibold">{course.title}</h2>
            <p className="text-sm text-gray-600">{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
