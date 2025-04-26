import Footer from "@/components/layout/footer/Footer";
import Navigation from "@/components/layout/navigation/Navigation";
import "@/styles/globals.css";
import { Providers } from "./providers";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-gunmetal text-light-gray'>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
