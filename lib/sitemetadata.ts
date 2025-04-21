import { Metadata } from "next";


export const siteMetadata: Metadata = {
  title: "Shivay Safar | Best Cab Service in Gandhidham",
  description: "Experience the best 24/7 cab services in Gandhidham. Book now for a safe and reliable ride!",
  authors: [{ name: "Shivay Safar Team" }],
  publisher: 'Shivay Safar',
  applicationName: 'Shivay Safar - Cab Booking Service',
  keywords: [
    'cab service Gandhidham',
    'book taxi Gandhidham',
    'shivay safar',
    'online cab booking',
    'best cab service Kutch',
    'Gandhidham taxi',
  ],

  openGraph: {
    title: "Shivay Safar | Best Cab Service in Gandhidham",
    description: "24/7 reliable cab services in Gandhidham. Book your ride with Shivay Safar today.",
    url: "https://shivaysafar.com",
    locale: 'en_US',
    type: 'website',
    siteName: "Shivay Safar",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 600,
        alt: "Shivay Safar Cab Service",
      },
    ],
  },
  verification: {
    google: 'igwEV5TEq6u_2Gr5t1GwDMz-97GTRCpZqLnDynRPfkY',
  },

  alternates: {
    canonical: 'https://shivaysafar.com',
  },

  icons: {
    icon: '/favicon.ico',
  },
}