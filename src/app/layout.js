import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Shekhar Rao | Portfolio",
  description:
    "Discover the professional portfolio of Shekhar Rao — showcasing modeling, videos, and collaborations.",
  authors: [{ name: "Shekhar Rao" }],
  openGraph: {
    title: "Shekhar Rao | Portfolio",
    description:
      "Discover the professional portfolio of Shekhar Rao — showcasing modeling, videos, and collaborations.",
    url: "https://shekharrao.vercel.app",
    type: "website",
    images: [
      {
        url: "https://shekharrao.vercel.app/images/april18030.jpg",
        width: 1200,
        height: 630,
        alt: "Shekhar Rao promotional image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  icons: {
    icon: "/images/icons/favicon.ico",
    shortcut: "/images/icons/favicon-32x32.png",
    apple: "/images/icons/apple-touch-icon.png",
  },
  manifest: "/images/icons/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf7f3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-cream text-gray-900">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="icon" href="/images/icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/images/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/images/icons/site.webmanifest" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/favicon-16x16.png"
        />

        {/* --- Social Media Meta Preview --- */}
        <meta
          name="description"
          content="Discover the professional portfolio of Shekhar Rao — showcasing modeling, videos, and collaborations."
        />

        {/* Facebook / Open Graph */}
        <meta property="og:url" content="https://shekharrao.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shekhar Rao | Portfolio" />
        <meta
          property="og:description"
          content="Discover the professional portfolio of Shekhar Rao — showcasing modeling, videos, and collaborations."
        />
        <meta
          property="og:image"
          content="https://shekharrao.vercel.app/images/april18030.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="shekharrao.vercel.app" />
        <meta property="twitter:url" content="https://shekharrao.vercel.app" />
        <meta name="twitter:title" content="Shekhar Rao | Portfolio" />
        <meta
          name="twitter:description"
          content="Discover the professional portfolio of Shekhar Rao — showcasing modeling, videos, and collaborations."
        />
        <meta
          name="twitter:image"
          content="https://shekharrao.vercel.app/images/april18030.jpg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream`}
      >
        {children}
      </body>
    </html>
  );
}
