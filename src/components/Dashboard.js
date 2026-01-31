import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ students }) => {
    // Calculate statistics
    const stats = useMemo(() => {
        const total = students.length;
        const byProdi = students.reduce((acc, curr) => {
            acc[curr.prodi] = (acc[curr.prodi] || 0) + 1;
            return acc;
        }, {});

        return { total, byProdi };
    }, [students]);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-[#0d121b] dark:text-white text-3xl font-black leading-tight tracking-tight">
                    Dashboard Overview
                </h1>
                <p className="text-[#4c669a] dark:text-gray-400 text-base">
                    Selamat Datang Admin, Berikut adalah rincian data mahasiswa hari ini.
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Students */}
                <div className="bg-primary text-white rounded-xl p-6 shadow-lg shadow-primary/20 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-blue-100 font-medium mb-1">Total Mahasiswa</p>
                        <h3 className="text-4xl font-bold">{stats.total}</h3>
                        <div className="mt-4 flex items-center gap-2 text-sm text-blue-100">
                            <span className="bg-white/20 px-2 py-0.5 rounded text-white">+12%</span>
                            <span>dari bulan lalu</span>
                        </div>
                    </div>
                    <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-white/10 rotate-12">
                        group
                    </span>
                </div>

                {/* New Registrations */}
                <div className="bg-white dark:bg-[#1a2130] rounded-xl p-6 border border-[#e7ebf3] dark:border-gray-800 shadow-sm relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-[#4c669a] dark:text-gray-400 font-medium mb-1">Pendaftaran Baru</p>
                        <h3 className="text-4xl font-bold text-[#0d121b] dark:text-white">
                            {students.filter(s => s.id > Date.now() - 86400000).length}
                        </h3>
                        <div className="mt-4 flex items-center gap-2 text-sm text-[#4c669a] dark:text-gray-400">
                            <span className="text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">Hari Ini</span>
                        </div>
                    </div>
                    <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-gray-100 dark:text-gray-800 rotate-12">
                        person_add
                    </span>
                </div>

                {/* Pending Reviews */}
                <div className="bg-white dark:bg-[#1a2130] rounded-xl p-6 border border-[#e7ebf3] dark:border-gray-800 shadow-sm relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-[#4c669a] dark:text-gray-400 font-medium mb-1">Pending Reviews</p>
                        <h3 className="text-4xl font-bold text-[#0d121b] dark:text-white">0</h3>
                        <div className="mt-4 flex items-center gap-2 text-sm text-[#4c669a] dark:text-gray-400">
                            <span className="text-orange-600 bg-orange-50 dark:bg-orange-900/20 px-2 py-0.5 rounded">Action needed</span>
                        </div>
                    </div>
                    <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-gray-100 dark:text-gray-800 rotate-12">
                        pending_actions
                    </span>
                </div>
            </div>

            {/* Distribution Chart (Simple Bar) */}
            <div className="bg-white dark:bg-[#1a2130] rounded-xl border border-[#e7ebf3] dark:border-gray-800 p-8 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold text-[#0d121b] dark:text-white">Rincian Mahasiswa Berdasarkan Jurusan</h3>
                    <button className="text-sm text-primary font-semibold hover:underline">Lihat Detail</button>
                </div>

                <div className="space-y-6">
                    {Object.entries(stats.byProdi).map(([prodi, count]) => {
                        const percentage = Math.round((count / stats.total) * 100) || 0;
                        return (
                            <div key={prodi}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-medium text-[#0d121b] dark:text-gray-200">{prodi}</span>
                                    <span className="text-[#4c669a] dark:text-gray-400">{count} Mahasiswa ({percentage}%)</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                    {students.length === 0 && (
                        <p className="text-center text-gray-400 italic">Belum ada data.</p>
                    )}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#135bec] to-[#4285f4] rounded-xl p-8 text-white">
                    <h3 className="text-xl font-bold mb-2">Siap Mendaftar?</h3>
                    <p className="text-blue-100 mb-6">Tambahkan mahasiswa baru ke sistem dengan cepat menggunakan formulir pendaftaran.</p>
                    <Link to="/students" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                        <span className="material-symbols-outlined">add_circle</span>
                        Daftar Mahasiswa
                    </Link>
                </div>
                <div className="bg-[#101622] rounded-xl p-8 text-white relative overflow-hidden">
                    <h3 className="text-xl font-bold mb-2">Generate Reports</h3>
                    <p className="text-gray-400 mb-6">Download detailed PDF reports for faculty meetings.</p>
                    <Link to="/reports" className="inline-flex items-center gap-2 bg-[#2d3748] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#4a5568] transition-colors">
                        <span className="material-symbols-outlined">description</span>
                        Go to Reports
                    </Link>
                    <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[150px] text-white/5 rotate-12">
                        analytics
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
