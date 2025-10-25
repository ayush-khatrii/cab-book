import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import { siteMetadata } from "@/lib/sitemetadata";
import Script from "next/script";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased`}>
        <main>
          <Navbar />
          <Suspense>{children}</Suspense>
          <Footer />
        </main>

        <Toaster position="top-center" />

        <Script id="openwidget-init" strategy="afterInteractive">
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

        <noscript>
          You need to{" "}
          <a href="https://www.openwidget.com/enable-javascript" rel="noopener nofollow">
            enable JavaScript
          </a>{" "}
          to use the communication tool powered by{" "}
          <a href="https://www.openwidget.com/" rel="noopener nofollow" target="_blank">
            OpenWidget
          </a>.
        </noscript>
      </body>
    </html>
  );
}
