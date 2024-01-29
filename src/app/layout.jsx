import "./globals.css";
import PreLayout from "./Prelayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PreLayout>
        <body>{children}</body>
      </PreLayout>
    </html>
  );
}
