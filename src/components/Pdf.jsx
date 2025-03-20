import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useSelector } from 'react-redux';

const Pdf = () => {
  const { expenses } = useSelector(state => state.expense);

  const generatePdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('SaveMyMoney - Transaction History', 14, 15);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 22);
    doc.text('User: Saara Khan', 14, 27);

    const tableColumn = ['Date', 'Description', 'Category', 'Type', 'Amount'];
    const tableRows = expenses.map(expense => [
      new Date(expense.date).toLocaleDateString(),
      expense.name || '-',
      expense.category || '-',
      expense.transaction || '-',
      expense.amount ? `₹${Number(expense.amount).toFixed(2)}` : '-',
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 35,
      theme: 'grid',
      styles: {
        fontSize: 9,
        cellPadding: 1.5,
        halign: 'left',
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        fontSize: 11,
        fontStyle: 'bold',
      },
      columnStyles: {
        0: { halign: 'center', cellWidth: 25 },
        1: { cellWidth: 60 },
        2: { cellWidth: 40 },
        3: { cellWidth: 30 },
        4: { halign: 'left', cellWidth: 30 },
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
    });

    const totalIncome = expenses.filter(e => e.transaction === 'income').reduce((sum, e) => sum + Number(e.amount), 0);

    const totalExpense = expenses.filter(e => e.transaction === 'expense').reduce((sum, e) => sum + Number(e.amount), 0);

    autoTable(doc, {
      body: [
        ['Total Income', `₹${totalIncome.toFixed(2)}`],
        ['Total Expense', `₹${totalExpense.toFixed(2)}`],
        ['Net Balance', `₹${(totalIncome - totalExpense).toFixed(2)}`],
      ],
      startY: doc.lastAutoTable.finalY + 10,
      theme: 'plain',
      styles: {
        fontSize: 11,
        cellPadding: 3,
        halign: 'right',
      },
      columnStyles: {
        0: { fontStyle: 'bold', halign: 'right' },
        1: { fontStyle: 'bold' },
      },
    });

    doc.text('Thank you for using SaveMyMoney!', 14, doc.lastAutoTable.finalY + 15);

    doc.save('SaveMyMoney-Transactions.pdf');
  };

  return (
    <div className='mt-4'>
      {expenses.length > 0 && (
        <button
          onClick={generatePdf}
          className='bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200'>
          Download Transaction History
        </button>
      )}
    </div>
  );
};

export default Pdf;
