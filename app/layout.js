import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--jakarta"
});

export const metadata = {
  title: "Michael Mendez | WordPress, React & Next.js Developer",
  description:
    "Michael Mendez is a web developer specializing in WordPress, React, Next.js, Laravel, and n8n automation. Building fast, modern, SEO-friendly websites and automated solutions.",
  keywords: [
    "Michael Mendez",
    "web developer Philippines",
    "WordPress developer Philippines",
    "WordPress developer",
    "React developer",
    "Next.js developer",
    "Laravel developer",
    "frontend developer Philippines",
    "full stack developer Philippines",
    "website developer",
    "custom WordPress development",
    "WooCommerce developer",
    "n8n automation",
    "AI automation",
    "web automation",
    "website optimization",
    "SEO-friendly websites",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
