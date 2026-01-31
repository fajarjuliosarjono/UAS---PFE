import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import FormInput from './components/FormInput';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import { getAllStudents, createStudent, updateStudent, deleteStudent } from './services/api';

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
    email: '',
    telepon: '',
    prodi: '',
    angkatan: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Load data saat komponen pertama kali dimuat
  useEffect(() => {
    loadStudents();
  }, []);

  // READ - Ambil semua data
  const loadStudents = () => {
    const data = getAllStudents();
    setStudents(data);
  };

  // CREATE - Tambah mahasiswa baru
  const handleCreate = () => {
    if (validateForm()) {
      createStudent(formData);
      loadStudents();
      resetForm();
      alert('✅ Data mahasiswa berhasil ditambahkan!');
    }
  };

  // UPDATE - Edit mahasiswa
  const handleUpdate = () => {
    if (validateForm()) {
      updateStudent(editId, formData);
      loadStudents();
      resetForm();
      alert('✅ Data mahasiswa berhasil diupdate!');
    }
  };

  // DELETE - Hapus mahasiswa
  const handleDelete = (id) => {
    if (window.confirm('⚠️ Apakah Anda yakin ingin menghapus data mahasiswa ini?')) {
      deleteStudent(id);
      loadStudents();
      alert('✅ Data mahasiswa berhasil dihapus!');
    }
  };

  // Fungsi untuk memulai edit
  const handleEdit = (student) => {
    setFormData({
      nama: student.nama,
      nim: student.nim,
      email: student.email,
      telepon: student.telepon,
      prodi: student.prodi,
      angkatan: student.angkatan
    });
    setIsEditing(true);
    setEditId(student.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Submit form (create atau update)
  const handleSubmit = () => {
    if (isEditing) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      nama: '',
      nim: '',
      email: '',
      telepon: '',
      prodi: '',
      angkatan: ''
    });
    setIsEditing(false);
    setEditId(null);
  };

  // Validasi form
  const validateForm = () => {
    if (!formData.nama || !formData.nim || !formData.email ||
      !formData.telepon || !formData.prodi || !formData.angkatan) {
      alert('⚠️ Semua field harus diisi!');
      return false;
    }
    return true;
  };

  const StudentRegistration = () => (
    <div className="max-w-[960px] mx-auto">
      {/* Page Heading */}
      <div className="flex flex-col gap-2 mb-8 text-center sm:text-left">
        <h1 className="text-[#0d121b] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
          Pendaftaran Mahasiswa Baru
        </h1>
        <p className="text-[#4c669a] dark:text-gray-400 text-base font-normal leading-normal">
          Input detail data mahasiswa baru :
        </p>
      </div>

      <FormInput
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        onCancel={resetForm}
        isEditing={isEditing}
      />

      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[#0d121b] dark:text-white text-2xl font-bold leading-tight">Mahasiswa Terdaftar</h2>
          {students.length === 0 && (
            <span className="text-sm text-gray-500">Tidak di temukan data mahasiswa baru</span>
          )}
        </div>

        {students.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map(student => (
              <StudentCard
                key={student.id}
                student={student}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {students.length === 0 && (
          <div className="p-8 text-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <span className="material-symbols-outlined text-4xl text-gray-400 mb-2">school</span>
            <p className="text-gray-500">Belum ada data mahasiswa baru. Input data mahasiswa baru di atas untuk menambahkan data.</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Router>
      <div className="layout-container flex h-full grow flex-col font-sans">
        <Navbar totalStudents={students.length} />

        <main className="flex-1 py-10 px-4">
          <div className="max-w-[960px] mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard students={students} />} />
              <Route path="/students" element={<StudentRegistration />} />
              <Route path="/reports" element={<Reports students={students} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
