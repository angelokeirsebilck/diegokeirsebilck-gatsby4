import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

// Components

import Form from "../components/form/Form"

// Icons
import { MdMail, MdPhone } from "react-icons/md"

// Redux
import { connect } from "react-redux"

const Landing = ({ global }) => {
  const scrollToContact = () => {
    const contact = document.querySelector("#contact")
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" })
    }
  }

  let landingTextStyle = global.formText
    ? "mt-6 text-center font-medium text-md leading-none tracking-wider"
    : "uppercase mt-6 text-center font-bold text-lg leading-none tracking-wider"

  if (global.isError) {
    landingTextStyle += " text-error"
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div
        className="flex flex-col w-auto md:w-160 mx-auto justify-center items-center h-screen lg:h-auto "
        id="top"
      >
        <div className="flex">
          <StaticImage
            src="../images/elektro-diego-logo-black.jpg"
            alt="Elektro Diego Logo"
            placeholder="blurred"
            layout="constrained"
            loading="eager"
          />
        </div>
        <div className={landingTextStyle}>{global.landingText}</div>
        <div className="flex flex-col mt-3 text-center justify-center items-center">
          <a
            href="tel:+32473509041"
            className="flex items-center hover:text-primary transition-colors font-semibold"
          >
            <MdPhone className="text-primary text-md" />
            <span className="ml-1">+32 473 50 90 41</span>
          </a>
          <a
            href="mailto:info@elektro-diego.be"
            className="flex items-center hover:text-primary transition-colors font-semibold mt-1"
          >
            <MdMail className="text-primary text-md" />
            <span className="ml-1">info@elektro-diego.be</span>
          </a>
          <div
            className="lg:hidden btnBase btn--primary mt-4"
            onClick={scrollToContact}
          >
            Contact
          </div>
        </div>
      </div>
      <div
        className="w-full md:w-160 flex flex-col mx-auto justify-center items-center mt-5 lg:mt-2 pb-5 lg:pb-0"
        id="contact"
      >
        <div className="self-start mb-1.5 font-medium text-2.4 leading-none tracking-wider">
          Meer info gewenst? <br /> Stel hier uw vraag!
        </div>
        <Form />
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  global: state.global,
})

export default connect(mapStateToProps)(Landing)
