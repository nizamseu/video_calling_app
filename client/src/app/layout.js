import { SocketProvider } from "@/lib/socketProvider";
import "./globals.css";

export const metadata = {
  title: "Video Calling",
  description: "Created by Nizam Uddin Babu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SocketProvider>
        <body>{children}</body>
      </SocketProvider>
    </html>
  );
}
