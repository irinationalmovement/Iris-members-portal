import "./globals.css";

export const metadata = {
  title: "بوابة أعضاء حركة إيرس الوطنية",
  description: "البوابة التنظيمية الرسمية لحركة إيرس الوطنية"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
