import "./globals.css";
import { Inter } from "next/font/google";
import { RouteChangeListener } from "./component/routeListener";

const interFont = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

// export const metadata: Metadata = {
//   title: 'Buider Ideas',
//   description: 'Explore ideas for your next project.',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable}`}>
        <RouteChangeListener />
        <div className="font-inter">{children}</div>
      </body>
    </html>
  );
}
