import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "LectureHub - Платформа для лекций",
  description:
    "Платформа для размещения и просмотра лекций с поддержкой интерактивных презентаций",
  keywords: ["лекции", "презентации", "обучение", "Next.js", "React"],
  authors: [{ name: "LectureHub Team" }],
  openGraph: {
    title: "LectureHub - Платформа для лекций",
    description: "Платформа для размещения и просмотра лекций",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
