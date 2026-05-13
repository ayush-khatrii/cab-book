import { Sora } from "next/font/google";
// @ts-ignore
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import { siteMetadata } from "@/lib/sitemetadata";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/next';

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
  variable: "--font-sora",
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.variable}>
      <body className={`${sora.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main>
            <Navbar />
            <Suspense fallback={<div className="h-screen bg-black" />}>
              {children}
            </Suspense>
            <Footer />
          </main>
        </ThemeProvider>
        <Toaster position="top-center" />
        <Script id="openwidget-init" strategy="lazyOnload">
          {`
            window.__ow = window.__ow || {};
            window.__ow.organizationId = "0593e38f-9862-4743-821f-2e361ff8ae86";
            window.__ow.integration_name = "manual_settings";
            window.__ow.product_name = "openwidget";

            (function(n,t,c){
              function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
              var e={_q:[],_h:null,_v:"2.0",
                on:function(){i(["on",c.call(arguments)])},
                once:function(){i(["once",c.call(arguments)])},
                off:function(){i(["off",c.call(arguments)])},
                get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},
                call:function(){i(["call",c.call(arguments)])},
                init:function(){
                  var n=t.createElement("script");
                  n.async=!0;
                  n.type="text/javascript";
                  n.src="https://cdn.openwidget.com/openwidget.js";
                  t.head.appendChild(n);
                }
              };
              !n.__ow.asyncInit && e.init();
              n.OpenWidget = n.OpenWidget || e;
            }(window,document,[].slice));
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}