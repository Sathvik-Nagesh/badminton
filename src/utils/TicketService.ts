import { jsPDF } from 'jspdf';

export const generateTicket = (data: {
  court: string;
  date: string;
  time: string;
  level: string;
  ref: string;
}) => {
  // Create a 80mm x 150mm "Mobile Pass" style PDF
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: [80, 150]
  });

  const accentColor = [27, 67, 50]; // Forest Green
  const creamBackground = [251, 250, 248];

  // Background
  doc.setFillColor(creamBackground[0], creamBackground[1], creamBackground[2]);
  doc.rect(0, 0, 80, 150, 'F');

  // Header Bar
  doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
  doc.rect(0, 0, 80, 25, 'F');

  // Title
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('AEROELITE KINETIC ATELIER', 40, 10, { align: 'center' });
  doc.setFontSize(7);
  doc.text('CHASSIS AUTHORIZATION PERMIT', 40, 15, { align: 'center' });

  // Main Content
  doc.setTextColor(27, 67, 50);
  doc.setFontSize(22);
  doc.text(data.court, 40, 45, { align: 'center' });
  
  // Divider
  doc.setDrawColor(27, 67, 50);
  doc.setLineWidth(0.5);
  doc.line(10, 55, 70, 55);

  // Stats
  doc.setFontSize(8);
  doc.text('DATE', 10, 65);
  doc.setFontSize(10);
  doc.text(data.date, 10, 70);

  doc.setFontSize(8);
  doc.text('TIME SLOT', 50, 65);
  doc.setFontSize(10);
  doc.text(data.time, 50, 70);

  doc.setFontSize(8);
  doc.text('ATHLETIC LEVEL', 10, 85);
  doc.setFontSize(10);
  doc.text(data.level, 10, 90);

  doc.setFontSize(8);
  doc.text('AUTHORIZATION REF', 10, 105);
  doc.setFontSize(8);
  doc.text(data.ref, 10, 110);

  // QR Code Placeholder Area
  doc.setDrawColor(200, 200, 200);
  doc.rect(25, 120, 30, 20);
  doc.setFontSize(6);
  doc.text('SCAN_SYSTEM_LINK', 40, 142, { align: 'center' });

  // Footer
  doc.setFontSize(5);
  doc.setTextColor(150, 150, 150);
  doc.text('NON-TRANSFERABLE | ELITE_ACCESS_ONLY', 40, 148, { align: 'center' });

  doc.save(`AeroElite_Pass_${data.ref}.pdf`);
};
