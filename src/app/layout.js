"use client";
import "./globals.css";
import "../assets/css/styles.css";
import Header from "../component/Header";
import { ThemeProvider } from "next-themes";
import LocomotiveScroll from 'locomotive-scroll';

export const metaData = {
  title: "Vercel",
  description: "vercel demo next app",
};


export default function RootLayout({ children }) {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('html'),
    smooth: true
  });

  return (
    <html lang="en">
      <body>
        <div data-scroll-container>
          <div data-scroll-section>
            <Header />
            <ThemeProvider enableSystem={true} attribute="class">
              {children}
            </ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
