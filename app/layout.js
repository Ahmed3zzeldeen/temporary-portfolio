import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed M. Ezzeldeen | Personal Portfolio",
  description:
    "This is the portfolio of Ahmed M. Ezzeldeen. I'm Full-Stack web developer passionate about making the world a better place by finding space between code and design. I love learning about the latest technologies and finding out how to improve my craft. I am detail-oriented and focused. When I am not in front of a computer, I like playing chess or drinking ice coffee and relaxing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
