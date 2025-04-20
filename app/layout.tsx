// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "SillaLink Company",
  description: "SillaLink is a cutting-edge software development company specializing in innovative solutions, web applications, and digital transformation. We deliver scalable, secure, and high-performance technology tailored to your business needs.",
  keywords: [
    "software development",
    "web applications",
    "SaaS solutions",
    "digital transformation",
    "custom software",
    "IT consulting"
  ],
  icons:{
    icon: "/Silla-Link-compnay.svg"
  },
  openGraph: {
    title: "SillaLink Company | Innovative Software Solutions",
    description: "Leading software development company creating custom digital solutions for businesses.",
    url: "https://www.sillalink.com",
    siteName: "SillaLink Company",
    images: [
      {
        url: "https://www.sillalink.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // أضف هذا الجزء لتحديد أي layout يعرض
  
  return (
    <html lang="en">
      <body >
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SillaLink Company",
              "url": "https://www.sillalink.com",
              "logo": "https://www.sillalink.com/logo.png",
              "sameAs": [
                "https://twitter.com/sillalink",
                "https://linkedin.com/company/sillalink"
              ]
            })
          }}
        />
        {/* {!isAdmin && (
          <div className="landing-header">Header for Landing</div>
        )} */}
        {children}
        {/* {!isAdmin && (
          <div className="landing-footer">Footer for Landing</div>
        )} */}
      </body>
    </html>
  );
}