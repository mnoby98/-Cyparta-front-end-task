import { Lexend, Cairo, Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";

const lexend = Lexend({
  subsets: ["latin"],
});

const cairo = Cairo({
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Front End Task",
  description:
    "A small web application using Next.js for the frontend framework and Tailwind CSS for styling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`  ${lexend.className} ${cairo.className} ${inter.className}`}>
        <div className="  pl-7 flex py-10 ">
          {/* Sidebar */}
          <div className=" w-[329px] h-[943px]">
            <Sidebar />
          </div>
          {/* Main Page */}
          <div className=" grow ">{children}</div>
        </div>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "black",
            },
          }}
        />
      </body>
    </html>
  );
}
