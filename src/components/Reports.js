import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const Reports = ({ students = [] }) => {
    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        // Add Title
        doc.setFontSize(18);
        doc.text("Laporan Data Mahasiswa Baru", 14, 22);

        // Add Date
        doc.setFontSize(11);
        doc.setTextColor(100);
        const date = new Date().toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        doc.text(`Tanggal: ${date}`, 14, 30);

        // Define Table Columns
        const tableColumn = ["No", "Nama", "NIM", "Prodi", "Angkatan", "Email", "Telepon"];
        const tableRows = [];

        // Map data to rows
        students.forEach((student, index) => {
            const studentData = [
                index + 1,
                student.nama,
                student.nim,
                student.prodi,
                student.angkatan,
                student.email,
                student.telepon,
            ];
            tableRows.push(studentData);
        });

        // Generate Table
        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 40,
            theme: 'grid',
            headStyles: { fillColor: [66, 133, 244] }, // Blue header
            styles: { fontSize: 8 },
        });

        // Save PDF
        doc.save("Laporan_Mahasiswa_Baru.pdf");
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-[#0d121b] dark:text-white text-3xl font-black leading-tight tracking-tight">
                    Reports & Documents
                </h1>
                <p className="text-[#4c669a] dark:text-gray-400 text-base">
                    Access and download administrative reports.
                </p>
            </div>

            {/* Generate Report Card */}
            <div className="bg-gradient-to-br from-[#135bec] to-[#4285f4] rounded-xl p-8 text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Laporan Mahasiswa Baru</h3>
                    <p className="text-blue-100 mb-6 max-w-xl">
                        Generate dan download laporan lengkap data mahasiswa baru dalam format PDF.
                        Laporan mencakup Nama, NIM, Prodi, Angkatan, dan Kontak.
                    </p>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleDownloadPDF}
                            disabled={students.length === 0}
                            className={`inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-bold transition-all
                            ${students.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50 shadow-md'}`}
                        >
                            <span className="material-symbols-outlined">picture_as_pdf</span>
                            Download PDF Report
                        </button>
                        {students.length === 0 && (
                            <span className="text-sm text-blue-200">Tidak ada data untuk di-generate.</span>
                        )}
                    </div>
                </div>
                <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[180px] text-white/10 rotate-12">
                    description
                </span>
            </div>
        </div>
    );
};

export default Reports;
