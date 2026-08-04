import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modals from "../components/Modals";
import BackToTop from "../components/BackToTop";
import TemplateScripts from "../components/TemplateScripts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khamiar Express - Travel & Tour",
  description:
    "Khamiar Express - modern travel and tour listing website. Discover tours, destinations and unforgettable journeys.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font */}
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="stylesheet" href="/fonts/font-icons.css" />
        {/* CSS */}
        <link rel="stylesheet" href="/css/boostrap.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/nouislider.min.css" />
        <link rel="stylesheet" href="/css/fancybox.css" />
        <link rel="stylesheet" href="/css/style.css" />
        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.ico" />
      </head>
      <body>
        {/* Loading */}
        <div className="preload preload-container">
          <div className="preload-logo">
            <div className="spinner"></div>
            <img src="/images/logo/khamiar-logo.png" alt="Khamiar Express" />
          </div>
        </div>
        {/* Header */}
        <Header />
        <main>{children}</main>
        {/* Footer */}
        <Footer />
        {/* Shared modals */}
        <Modals />
        {/* Back to top */}
        <BackToTop />
        {/* Legacy template scripts */}
        <TemplateScripts />
      </body>
    </html>
  );
}
