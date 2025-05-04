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
    "React Developer",
    "Franklin Camp Tech",
    "Franklin Camp Denver",
    "Frank Camp Software Engineer",
    "Franklin Levi Camp",
  ],
  metadataBase: new URL("https://frankcamp.tech"),
  openGraph: {
    title: "Frank Camp – Full Stack Developer",
    description:
      "Explore projects and skills of Frank Camp, a developer building performant apps with clarity and craft.",
    url: "https://frankcamp.tech",
    siteName: "Frank Camp Portfolio",
    images: ["https://frankcamp.tech/opengraph-image"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank Camp – Full Stack Developer",
    description: "Explore Frank Camp’s modern portfolio and projects.",
    creator: "@FrankCampTech",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  alternates: {
    canonical: "https://frankcamp.tech",
  },
  other: {
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0f172a" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Frank Camp",
              url: "https://frankcamp.tech",
              sameAs: [
                "https://github.com/roaring-lion-33",
                "https://www.linkedin.com/in/frankcamp/",
              ],
              jobTitle: "Full Stack Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Independent / Freelance",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}
