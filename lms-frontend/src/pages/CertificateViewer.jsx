import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCertificateByCourse } from "../api/certificate";

export default function CertificateViewer() {
  const { courseId } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCertificateByCourse(courseId).then(data => {
      setCertificate(data);
      setLoading(false);
    });
  }, [courseId]);

  if (loading) return <p className="p-4">กำลังโหลดใบรับรอง...</p>;
  if (!certificate) return <p className="p-4 text-red-600">ไม่พบใบรับรอง</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto text-center border rounded shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-2">🎓 ใบรับรองการจบหลักสูตร</h1>
      <p className="mb-2">ผู้เรียน: <strong>{certificate.studentName}</strong></p>
      <p className="mb-2">คอร์ส: <strong>{certificate.courseTitle}</strong></p>
      <p className="mb-4">วันที่ได้รับ: {certificate.issuedDate}</p>
      <a
        href={certificate.downloadUrl}
        className="inline-block bg-green-600 text-white px-4 py-2 rounded"
        target="_blank"
        rel="noreferrer"
      >
        ดาวน์โหลดใบรับรอง
      </a>
    </div>
  );
}
