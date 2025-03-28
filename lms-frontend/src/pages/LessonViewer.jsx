import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLessonById, markLessonAsCompleted } from '../api/lessons';

export default function LessonViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLessonById(id).then(data => {
      setLesson(data);
      setLoading(false);
    });
  }, [id]);

  const handleComplete = async () => {
    await markLessonAsCompleted(id);
    alert("บันทึกความคืบหน้าแล้ว!");
    if (lesson?.nextLessonId) {
      navigate(`/lesson/${lesson.nextLessonId}`);
    }
  };

  if (loading) return <p className="p-4">กำลังโหลดบทเรียน...</p>;
  if (!lesson) return <p className="p-4 text-red-600">ไม่พบบทเรียน</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
      <div className="aspect-video mb-4">
        <iframe
          src={lesson.videoUrl}
          title="วิดีโอบทเรียน"
          className="w-full h-full rounded-lg"
          allowFullScreen
        />
      </div>
      <p className="mb-4">{lesson.description}</p>
      <button onClick={handleComplete} className="bg-green-600 text-white px-4 py-2 rounded">
        เรียนจบบทนี้แล้ว
      </button>
    </div>
  );
}
