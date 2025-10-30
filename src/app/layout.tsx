import './globals.css'
const metadata = {
  title: 'FastFood',
  description: 'FastFood web application',
  viewport: "width=device-width, initial-scale=1"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}