import { jsPDF } from 'jspdf';

export const generateTicketPDF = (purchaseData) => {
  const { ticket, customer, transactionId, date } = purchaseData;
  
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Background
  doc.setFillColor(10, 10, 10);
  doc.rect(0, 0, 210, 297, 'F');

  // Header avec gradient simulé
  doc.setFillColor(139, 0, 0);
  doc.rect(0, 0, 210, 60, 'F');
  doc.setFillColor(220, 20, 60);
  doc.rect(0, 0, 210, 50, 'F');

  // Logo (vous devrez charger l'image en base64)
  // doc.addImage(logoBase64, 'PNG', 15, 10, 40, 40);

  // Titre
  doc.setTextColor(255, 215, 0);
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.text('Miss FSS-Médecine', 105, 30, { align: 'center' });
  
  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.text('Soirée de Couronnement 2025', 105, 42, { align: 'center' });

  // Séparateur
  doc.setDrawColor(255, 215, 0);
  doc.setLineWidth(0.5);
  doc.line(20, 65, 190, 65);

  // Informations du billet
  doc.setFontSize(14);
  doc.setTextColor(255, 215, 0);
  doc.text('Détails du billet', 20, 80);

  doc.setFontSize(11);
  doc.setTextColor(200, 200, 200);
  
  const ticketInfo = [
    ['Type de billet:', ticket.name],
    ['Capacité:', ticket.capacity],
    ['Prix payé:', `${ticket.price.toLocaleString()} FCFA`],
    ['', ''],
    ['Nom:', customer.name],
    ['Email:', customer.email],
    ['Téléphone:', customer.phone],
  ];

  let yPos = 95;
  ticketInfo.forEach(([label, value]) => {
    if (label) {
      doc.setFont('helvetica', 'bold');
      doc.text(label, 25, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(value, 80, yPos);
    }
    yPos += 10;
  });

  // Avantages
  doc.setFontSize(14);
  doc.setTextColor(255, 215, 0);
  doc.text('Avantages inclus', 20, yPos + 5);
  
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  yPos += 15;
  
  ticket.features.forEach((feature) => {
    doc.text('• ' + feature, 25, yPos);
    yPos += 7;
  });

  // QR Code section (placeholder)
  yPos += 15;
  doc.setFillColor(255, 255, 255);
  doc.rect(75, yPos, 60, 60, 'F');
  
  doc.setTextColor(139, 0, 0);
  doc.setFontSize(10);
  doc.text('QR CODE', 105, yPos + 30, { align: 'center' });
  doc.setFontSize(8);
  doc.text(transactionId, 105, yPos + 36, { align: 'center' });

  // Instructions
  yPos += 70;
  doc.setFontSize(12);
  doc.setTextColor(255, 215, 0);
  doc.text('Instructions', 20, yPos);
  
  doc.setFontSize(9);
  doc.setTextColor(200, 200, 200);
  const instructions = [
    '• Présentez ce billet à l\'entrée de l\'événement',
    '• Le billet peut être présenté en format papier ou numérique',
    '• Arrivez 30 minutes avant le début de l\'événement',
    '• Ce billet est nominatif et non remboursable',
  ];
  
  yPos += 8;
  instructions.forEach((instruction) => {
    doc.text(instruction, 25, yPos);
    yPos += 7;
  });

  // Footer
  doc.setDrawColor(255, 215, 0);
  doc.line(20, 270, 190, 270);
  
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text('Organisé par AEMC', 20, 278);
  doc.text('Développé par GUI-LOK Dev', 20, 284);
  doc.text(`Date d'achat: ${new Date(date).toLocaleDateString('fr-FR')}, 190, 278, { align: 'right' }`);
  doc.text(`Transaction: ${transactionId}, 190, 284, { align: 'right' }`);

  // Sauvegarder le PDF
  doc.save(`Billet-Miss-FSS-${customer.name.replace(/\s+/g, '-')}.pdf`);
};