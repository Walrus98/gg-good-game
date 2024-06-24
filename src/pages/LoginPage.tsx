import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Login";


export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="mt-8 flex justify-center">
        <Login />
      </div>
      <Footer />
    </>
  );
}
