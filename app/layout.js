import "./globals.css";

export const metadata = {
  title: "BuildForm.ai",
  description: "Generate forms with no code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
