import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Türk Hava Yolları ® | Dünyanın En Çok Ülkesine Uçan Havayolu',
    description:
        "Benzersiz bir seyahat deneyimi için Türk Hava Yolları ile 120'den fazla ülkeyi keşfedin. Uçak bileti alın, otel rezervasyonu yapın ve araç kiralayın.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='tr'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
