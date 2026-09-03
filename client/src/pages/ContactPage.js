import Navbar from "../components/Navbar";
import Contact from "./Contact";

const ContactPage = () => {
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
