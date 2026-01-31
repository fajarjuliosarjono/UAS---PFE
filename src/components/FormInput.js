import React from 'react';


const FormInput = ({ formData, setFormData, onSubmit, onCancel, isEditing }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="bg-white dark:bg-[#1a2130] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden border border-[#e7ebf3] dark:border-gray-800">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-6 border-b border-[#e7ebf3] dark:border-gray-800 pb-3">
          <span className="material-symbols-outlined text-primary">
            {isEditing ? 'edit_square' : 'person_add'}
          </span>
          <h3 className="text-lg font-bold text-[#0d121b] dark:text-white">
            {isEditing ? 'Edit Data Mahasiswa' : 'Detail Data Mahasiswa'}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Personal & Contact */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nama */}
              <div className="flex flex-col gap-2">
                <label className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold">Nama Lengkap *</label>
                <div className="relative">
                  <input
                    className="w-full rounded-lg border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-[#101622] px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#4c669a] dark:text-white"
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                  />
                </div>
              </div>

              {/* NIM */}
              <div className="flex flex-col gap-2">
                <label className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold">Nomor Induk Mahasiswa (NIM) *</label>
                <input
                  className="w-full rounded-lg border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-[#101622] px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#4c669a] dark:text-white"
                  type="text"
                  name="nim"
                  value={formData.nim}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 2024001"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold">Alamat Email *</label>
                <input
                  className="w-full rounded-lg border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-[#101622] px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#4c669a] dark:text-white"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john.doe@university.edu"
                />
              </div>

              {/* Telepon */}
              <div className="flex flex-col gap-2">
                <label className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold">Nomor Telepon *</label>
                <input
                  className="w-full rounded-lg border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-[#101622] px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#4c669a] dark:text-white"
                  type="tel"
                  name="telepon"
                  value={formData.telepon}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 08123456789"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Academic */}
          <section>
            <div className="flex items-center gap-2 mb-6 border-b border-[#e7ebf3] dark:border-gray-800 pb-3">
              <span className="material-symbols-outlined text-primary">school</span>
              <h3 className="text-lg font-bold text-[#0d121b] dark:text-white">Detail Akademik</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Prodi */}
              <div className="flex flex-col gap-2">
                <label className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold">Program Studi *</label>
                <div className="relative">
                  <select
                    className="w-full rounded-lg border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-[#101622] px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none dark:text-white"
                    name="prodi"
                    value={formData.prodi}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Pilih Program Studi...</option>
                    <option value="Teknik Informatika">Teknik Informatika</option>
                    <option value="Sistem Informasi">Sistem Informasi</option>
                    <option value="Teknik Elektro">Teknik Elektro</option>
                    <option value="Teknik Mesin">Teknik Mesin</option>
                    <option value="Manajemen">Manajemen</option>
                    <option value="Akuntansi">Akuntansi</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400">arrow_drop_down</span>
                  </div>
                </div>
              </div>

              {/* Angkatan */}
              <div className="flex flex-col gap-2">
                <label className="text-[#0d121b] dark:text-gray-200 text-sm font-semibold">Tahun Angkatan *</label>
                <input
                  className="w-full rounded-lg border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-[#101622] px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-[#4c669a] dark:text-white"
                  type="number"
                  name="angkatan"
                  value={formData.angkatan}
                  onChange={handleChange}
                  required
                  min="2026"
                  max="2030"
                  placeholder="Contoh: 2026"
                />
              </div>
            </div>
          </section>

          {/* Form Actions */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-[#e7ebf3] dark:border-gray-800">
            {isEditing && (
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 text-sm font-bold text-[#4c669a] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-8 py-3 text-sm font-bold text-white bg-primary hover:bg-blue-700 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
            >
              <span>{isEditing ? 'Simpan Perubahan' : 'Daftar'}</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};




export default FormInput;
