import { useState } from 'react';
import { register } from '../api/auth';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      setMsg('สมัครเรียบร้อยแล้ว! กำลังพาไปหน้าเข้าสู่ระบบ...');
      setTimeout(() => {
        window.location.href = '/login';
      }, 1500);
    } catch (err) {
      setMsg('เกิดข้อผิดพลาดในการสมัคร');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">สมัครสมาชิก</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="email" placeholder="Email" className="border p-2" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="border p-2" value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="bg-green-600 text-white py-2 rounded">สมัครสมาชิก</button>
        {msg && <p className="text-blue-600">{msg}</p>}
      </form>
    </div>
  );
}
