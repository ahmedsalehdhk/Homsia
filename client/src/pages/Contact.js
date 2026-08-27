import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const inputClass =
  "w-full rounded bg-white/95 text-gray-900 placeholder:text-gray-500 py-4 px-4 focus:outline-none focus:ring-2 focus:ring-white/70 transition";
const labelClass =
  "block text-[11px] tracking-[0.25em] uppercase text-gray-200 mb-2";

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_39ohboy",
        "template_dywyvo3",
        form.current,
        "1Yrfs77G5h8g2dM_3"
      )
      .then(
        () => {
          setStatus("sent");
          form.current && form.current.reset();
          setTimeout(() => setStatus("idle"), 6000);
        },
        (error) => {
          console.log(error && error.text);
          setStatus("error");
        }
      );
  };

  const handleFirstNameInvalid = (e) => {
    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity(
        "Please tell us how we should address you."
      );
    }
  };
  const handleEmailInvalid = (e) => {
    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity(
        "We need your email for us to send a reply."
      );
    }
  };
  const clearValidity = (e) => e.target.setCustomValidity("");

  return (
    <div
      className="contact w-screen bg-cover bg-center md:bg-fixed"
      id="contact"
      style={{ backgroundImage: "url('/assets/hero/contact-hero-01.jpg')" }}
    >
      <div className="contact_overlay bg-black/50 w-full py-32">
       <div className="container-site flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="contact_left lg:w-1/2 text-white">
          <h1 className="text-4xl lg:text-5xl mb-4 font-display leading-tight">
            Get In Touch With Us
          </h1>
          <p className="text-gray-200 text-lg font-light mb-10 max-w-md">
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
          <div className="contact_form bg-black/30 backdrop-blur-sm w-full px-5 md:px-10 py-10 md:py-12 rounded-xl">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contactform_internal"
              noValidate={false}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label htmlFor="first_name" className={labelClass}>
                    First name
                  </label>
                  <input
                    id="first_name"
                    className={inputClass}
                    type="text"
                    placeholder="Jane"
                    name="first_name"
                    onInvalid={handleFirstNameInvalid}
                    onChange={clearValidity}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className={labelClass}>
                    Last name
                  </label>
                  <input
                    id="last_name"
                    className={inputClass}
                    type="text"
                    placeholder="Doe"
                    name="last_name"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  className={inputClass}
                  type="email"
                  placeholder="you@example.com"
                  name="email"
                  onInvalid={handleEmailInvalid}
                  onChange={clearValidity}
                  required
                />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className={labelClass}>
                  Your message
                </label>
                <textarea
                  id="message"
                  className={`${inputClass} resize-none min-h-[140px]`}
                  name="message"
                  placeholder="Share your thoughts"
                  required
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="submit_button bg-white text-gray-900 hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed text-xs tracking-[0.25em] uppercase font-semibold px-8 py-4 rounded"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
                {status === "sent" && (
                  <p className="text-[11px] tracking-[0.25em] uppercase text-emerald-300 font-semibold">
                    Message sent
                  </p>
                )}
                {status === "error" && (
                  <p className="text-[11px] tracking-[0.25em] uppercase text-red-300 font-semibold">
                    Couldn't send — please try again
                  </p>
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
