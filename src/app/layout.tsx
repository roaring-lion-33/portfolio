import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Frank Camp – Full Stack Developer",
    template: "%s | Frank Camp",
  },
  description:
    "Portfolio of Frank Camp – full stack software engineer building scalable apps with Next.js, Rails, and cloud-native tools.",
  keywords: [
    "Frank Camp",
    "Web Developer",
    "Full Stack",
    "Next.js",
    "Ruby on Rails",
    "Portfolio",
    "Software Engineer",
  ],
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Frank Camp – Full Stack Developer",
    description:
      "Explore projects and skills of Frank Camp, a developer building performant apps with clarity and craft.",
    url: "https://yourdomain.com",
    siteName: "Frank Camp Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frank Camp Portfolio Screenshot",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank Camp – Full Stack Developer",
    description: "Explore Frank Camp’s modern portfolio and projects.",
    creator: "@yourhandle",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}
