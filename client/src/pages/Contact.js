import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef(null);
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_39ohboy",
        "template_dywyvo3",
        form.current,
        "1Yrfs77G5h8g2dM_3"
      )
      .then(
        (result) => {
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  window.addEventListener("DOMContentLoaded", () => {
    const input1 = document.querySelector('input[name="first_name"]');
    const input2 = document.querySelector('input[name="email"]');

    input1.addEventListener("invalid", function (event) {
      if (event.target.validity.valueMissing) {
        event.target.setCustomValidity(
          "Please tell us how we should address you."
        );
      }
    });

    input1.addEventListener("change", function (event) {
      event.target.setCustomValidity("");
    });

    input2.addEventListener("invalid", function (event) {
      if (event.target.validity.valueMissing) {
        event.target.setCustomValidity(
          "We need your email for us to send a reply."
        );
      }
    });

    input2.addEventListener("change", function (event) {
      event.target.setCustomValidity("");
    });
  });

  return (
    <div
      className="contact w-screen bg-cover bg-center md:bg-fixed"
      id="contact"
      style={{ backgroundImage: "url('/assets/hero/contact-hero-01.jpg')" }}
    >
      <div className="contact_overlay bg-black/50 w-full py-32">
       <div className="container-site flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="contact_left lg:w-1/2 text-white">
          <h1 className="text-4xl lg:text-5xl font-medium mb-4 font-merriweather">
            Get In Touch With Us
          </h1>
          <p className="text-gray-200 text-lg mb-10 max-w-md">
            Have a question about a project, ownership share, or partnership?
            We'd love to hear from you.
          </p>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-start">
              <div className="h-11 w-11 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <FaPhoneAlt className="text-sm" />
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-gray-300 mb-1">
                  Phone
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-white">
                  <a href="tel:01600322205" className="hover:text-gray-300">
                    01600322205
                  </a>
                  <span className="text-gray-500">,</span>
                  <a href="tel:01717732465" className="hover:text-gray-300">
                    01717732465
                  </a>
                  <span className="text-gray-500">,</span>
                  <a href="tel:01678175401" className="hover:text-gray-300">
                    01678175401
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="h-11 w-11 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <FaEnvelope className="text-sm" />
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-gray-300 mb-1">
                  Email
                </p>
                <a
                  href="mailto:mohitrahmanc@gmail.com"
                  className="text-white hover:text-gray-300"
                >
                  mohitrahmanc@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="h-11 w-11 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <FaMapMarkerAlt className="text-sm" />
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-gray-300 mb-1">
                  Address
                </p>
                <p className="text-white leading-relaxed">
                  House 5, Road 9, Sector 3,
                  <br />
                  Uttara, Dhaka
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_right w-full lg:w-1/2 flex items-start justify-end">
          <div className="contact_form bg-black/30 backdrop-blur-sm w-full px-5 md:px-12 py-12 rounded-xl">
            {/* CONTACT FORM */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contactform_internal"
            >
              <h1 className="text-white text-xl">Name</h1>
              <div className="w-full flex flex-col lg:flex-row gap-5 mb-5">
                <input
                  className="p-3 w-full rounded"
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  required
                />
                <input
                  className="p-3 w-full rounded"
                  type="text"
                  placeholder="Last name"
                  name="last_name"
                />
              </div>
              <h1 className="text-white text-xl">E-mail</h1>
              <input
                className="p-3 w-full rounded mb-5"
                type="email"
                placeholder="john@gmail.com"
                name="email"
                required
              />
              <h1 className="text-white text-xl">Your Message</h1>
              <textarea
                className="w-full p-3 rounded resize-none mb-5"
                name="message"
                placeholder="Share your thoughts"
                required
              />
              <div className="flex justify-start items-center gap-3">
                <input
                  type="submit"
                  value="Send"
                  className="submit_button bg-black hover:bg-gray-800 text-white px-8 py-4 rounded"
                />
                {emailSent && (
                  <p className="uppercase text-green-400 font-bold">sent!</p>
                )}
              </div>
            </form>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Contact;
