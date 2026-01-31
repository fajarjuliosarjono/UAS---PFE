const STORAGE_KEY = 'mahasiswa_data';

// Inisialisasi data dummy jika belum ada
const initializeData = () => {
  const existingData = localStorage.getItem(STORAGE_KEY);
  if (!existingData) {
    const dummyData = [
      {
        id: '1',
        nama: 'Ahmad Rizki',
        nim: '2024001',
        email: 'ahmad.rizki@email.com',
        telepon: '081234567890',
        prodi: 'Teknik Informatika',
        angkatan: '2024'
      },
      {
        id: '2',
        nama: 'Siti Nurhaliza',
        nim: '2024002',
        email: 'siti.nur@email.com',
        telepon: '082345678901',
        prodi: 'Sistem Informasi',
        angkatan: '2024'
      },
      {
        id: '3',
        nama: 'Budi Santoso',
        nim: '2024003',
        email: 'budi.santoso@email.com',
        telepon: '083456789012',
        prodi: 'Teknik Elektro',
        angkatan: '2024'
      }
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dummyData));
  }
};

// GET - Ambil semua data mahasiswa
export const getAllStudents = () => {
  initializeData();
  const data = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(data) || [];
};

// POST - Tambah mahasiswa baru
export const createStudent = (studentData) => {
  const students = getAllStudents();
  const newStudent = {
    id: Date.now().toString(),
    ...studentData
  };
  students.push(newStudent);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  return newStudent;
};

// PUT - Update data mahasiswa
export const updateStudent = (id, updatedData) => {
  const students = getAllStudents();
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...updatedData };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    return students[index];
  }
  return null;
};

// DELETE - Hapus mahasiswa
export const deleteStudent = (id) => {
  const students = getAllStudents();
  const filteredStudents = students.filter(s => s.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredStudents));
  return true;
};
