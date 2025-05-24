import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageHeader from './components/PageHeader';
import GTM from './components/GTM';

export const metadata = {
  title: 'ديم السحاب',
  description: 'ديم السحاب شركة متخصصة في خدمات التخزين وإصدار التراخيص للمنتجات الغذائية والطبية ومستحضرات التجميل، بمستودعات مرخّصة من هيئة الغذاء والدواء في الرياض. نوفر حلول تخزين مرنة وآمنة تدعم نمو أعمالك وتسهّل إجراءات الاستيراد والتوزيع.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <GTM />

        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WN9GFB44"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Navbar />
        <main>
          <PageHeader />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
