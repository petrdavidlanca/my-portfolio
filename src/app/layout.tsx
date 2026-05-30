import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petr David Lanča | Software Engineer",
  description: "Portfolio of Petr David Lanča, a Computer Science student at Brno University of Technology building modern web applications.",
  openGraph: {
    title: "Petr David Lanča | Software Engineer",
    description: "Portfolio of Petr David Lanča, a Computer Science student at Brno University of Technology building modern web applications.",
    type: "website",
    url: "https://petrdavidlanca.com", // Replace with your actual domain
    siteName: "Petr David Lanča Portfolio",
    images: [{
      url: "/images/og-image.jpg", // Add an og-image.jpg in the public/images folder
      width: 1200,
      height: 630,
      alt: "Petr David Lanča Portfolio"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Petr David Lanča | Software Engineer",
    description: "Portfolio of Petr David Lanča, a Computer Science student at Brno University of Technology building modern web applications.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
