import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <link rel="icon" href="/tomato.svg" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
