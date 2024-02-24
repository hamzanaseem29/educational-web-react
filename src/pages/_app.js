import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
// import { AuthProvider, useAuth } from '../../context/AuthProvider';
import { useRouter } from 'next/router'; // Import the useRouter hook
import { AuthProvider, useAuth } from '../../context/AuthProvider';

const font = Poppins({
  weight: ["400", "500", "700", "900"],
  preload: false,
});

export default function App({ Component, pageProps }) {


  return (
    <div className={`${font.className}`}>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </div>
  );
}
