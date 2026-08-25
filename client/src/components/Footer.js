import { FaFacebookF, FaInstagram } from "react-icons/fa";

const logo = "/assets/logo/Homsia.png";

const Footer = () => {
  return (
    <div className="footer bg-black text-white py-16">
      <div className="container-site">
        {/* LOGO */}
        <img
          className="logo h-10 w-24 min-w-[96px] mb-2"
          src={logo}
          alt="Homsia"
        />
        <p className="text-sm text-gray-400 mb-12">
          Your blueprint to better living.
        </p>

        {/* UPPER: Contact + Address */}
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10">
          <div className="contact-col">
            <h3 className="text-xs tracking-[0.3em] uppercase text-white mb-6">
              Contact
            </h3>
            <p className="text-gray-400 mb-3">
              Phone:{" "}
              <a href="tel:01600322205" className="text-white hover:text-gray-300">
                01600322205
              </a>
              ,{" "}
              <a href="tel:01717732465" className="text-white hover:text-gray-300">
                01717732465
              </a>
              ,{" "}
              <a href="tel:01678175401" className="text-white hover:text-gray-300">
                01678175401
              </a>
            </p>
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:mohitrahmanc@gmail.com"
                className="text-white hover:text-gray-300"
              >
                mohitrahmanc@gmail.com
              </a>
            </p>
          </div>

          <div className="address-col md:text-right">
            <h3 className="text-xs tracking-[0.3em] uppercase text-white mb-6">
              Address
            </h3>
            <p className="text-gray-400 leading-relaxed">
              House 5, Road 9, Sector 3,
              <br />
              Uttara, Dhaka
            </p>
          </div>
        </div>

        <hr className="border-gray-800" />

        {/* LOWER: copyright + socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2026 Homsia Properties Ltd. All rights reserved.
            <span className="mx-3 text-gray-700">|</span>
            Made By <span className="text-white">Proteron Digital</span>
          </p>

          <div className="socials flex items-center gap-3">
            <a
              href="https://www.facebook.com/homsiapropertiesltd"
              aria-label="Facebook"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-colors"
            >
              <FaFacebookF className="text-xs" />
            </a>
            <a
              href="https://www.instagram.com/explore/locations/100170635955437/homsia-properties-ltd/"
              aria-label="Instagram"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-colors"
            >
              <FaInstagram className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
