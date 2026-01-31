import React from 'react';


const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div className="bg-white dark:bg-[#1a2130] rounded-xl shadow-sm border border-[#e7ebf3] dark:border-gray-800 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">person</span>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#0d121b] dark:text-white leading-tight">{student.nama}</h3>
            <p className="text-xs text-[#4c669a] dark:text-gray-400 font-medium">{student.nim}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-sm text-[#4c669a] dark:text-gray-400">
          <span className="material-symbols-outlined text-[18px]">school</span>
          <span>{student.prodi}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#4c669a] dark:text-gray-400">
          <span className="material-symbols-outlined text-[18px]">email</span>
          <span className="truncate">{student.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#4c669a] dark:text-gray-400">
          <span className="material-symbols-outlined text-[18px]">call</span>
          <span>{student.telepon}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#4c669a] dark:text-gray-400">
          <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          <span>Class of {student.angkatan}</span>
        </div>
      </div>

      <div className="flex gap-2 pt-4 border-t border-[#e7ebf3] dark:border-gray-800">
        <button
          onClick={() => onEdit(student)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-[#4c669a] dark:text-gray-300 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors border border-[#e7ebf3] dark:border-gray-700"
        >
          <span className="material-symbols-outlined text-[18px]">edit</span>
          Edit
        </button>
        <button
          onClick={() => onDelete(student.id)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-red-600 bg-transparent hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors border border-red-100 dark:border-red-900"
        >
          <span className="material-symbols-outlined text-[18px]">delete</span>
          Delete
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
