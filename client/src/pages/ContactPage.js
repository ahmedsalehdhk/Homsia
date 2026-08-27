import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Contact from "./Contact";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-24 bg-black">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
