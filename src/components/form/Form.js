import React, { useState } from "react"
import { useForm } from "react-hook-form"

// Components
import ThemeButton from "../base/Button"

// Redux
import { connect } from "react-redux"
import {
  changeIsSubmitting,
  changeLandingText,
  changeIsFormText,
  changeIsError,
} from "../../../actions/globalActions"

const Form = ({
  changeIsSubmitting,
  changeLandingText,
  changeIsFormText,
  changeIsError,
  global,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = data => {
    // e.preventDefault()
    changeIsSubmitting(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contactForm",
        ...data,
      }),
    })
      .then(reponse => {
        changeIsFormText(true)
        changeIsSubmitting(false)

        if (reponse.ok) {
          reset()
          changeIsError(false)
          changeLandingText(
            "Bedankt om mij te contacteren. Ik neem zo snel mogelijk contact met u op."
          )
        } else {
          // changeLandingTextToError(e)
          changeIsError(true)
          changeLandingText("Er ging iets mis. Probeer later opnieuw.")
        }
        const top = document.querySelector("#top")
        if (top) {
          top.scrollIntoView({ behavior: "smooth" })
        }
      })
      .catch(error => {
        console.log(error)
        changeIsSubmitting(false)
      })
  }

  const inputClass =
    "peer h-5 p-1 pl-0 w-full border-0 border-b-2 text-base outline-none focus:ring-0 focus:border-primary placeholder-transparent "
  const textareaClass =
    "peer h-10 p-1 pl-0 pt-1.5 leading-none w-full border-0 border-b-2 text-base outline-none focus:ring-0 focus:border-primary placeholder-transparent "

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      data-netlify="true"
      data-netlify-honeypot="bedrijf"
      name="contactForm"
      className="w-full"
    >
      <input type="hidden" name="bedrijf" />
      <input type="hidden" name="form-name" value="contactForm" />
      <div className="relative">
        <input
          id="name"
          {...register("name", {
            required: "Dit veld is verplicht.",
          })}
          type="text"
          className={
            errors.name
              ? inputClass + "focus:border-error border-error "
              : inputClass
          }
          placeholder="Naam"
        />
        <label
          htmlFor="name"
          className="absolute left-0 text-sm top-0 
          peer-placeholder-shown:text-base text-gray 
          peer-placeholder-shown:text-gray 
           peer-placeholder-shown:top-2 transition-all 
           peer-focus:text-sm
           peer-focus:top-0
           peer-focus:text-gray 
           "
        >
          Naam
        </label>
        <div className="absolute right-0 -bottom-2 text-sm text-error z-10 font-medium">
          {errors.name?.message}
        </div>
      </div>
      <div className="relative mt-1.5">
        <input
          id="firstname"
          {...register("firstname", {
            required: "Dit veld is verplicht.",
          })}
          type="text"
          className={
            errors.firstname
              ? inputClass + "focus:border-error border-error "
              : inputClass
          }
          placeholder="Voornaam"
        />
        <label
          htmlFor="firstname"
          className="absolute left-0 text-sm top-0 text-gray  
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray 
           peer-placeholder-shown:top-2 transition-all 
           peer-focus:text-sm
           peer-focus:top-0
           peer-focus:text-gray 
           "
        >
          Voornaam
        </label>
        <div className="absolute right-0 -bottom-2 text-sm text-error z-10 font-medium">
          {errors.firstname?.message}
        </div>
      </div>
      <div className="relative mt-1.5">
        <input
          id="phone"
          {...register("phone", {
            required: "Dit veld is verplicht.",
          })}
          type="text"
          className={
            errors.phone
              ? inputClass + "focus:border-error border-error "
              : inputClass
          }
          placeholder="Telefoon Nummer"
        />
        <label
          htmlFor="phone"
          className="absolute left-0 text-sm top-0  text-gray 
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray 
           peer-placeholder-shown:top-2 transition-all 
           peer-focus:text-sm
           peer-focus:top-0
           peer-focus:text-gray 
           "
        >
          Telefoon Nummer
        </label>
        <div className="absolute right-0 -bottom-2 text-sm text-error z-10 font-medium">
          {errors.phone?.message}
        </div>
      </div>
      <div className="relative mt-1.5">
        <input
          id="email"
          {...register("email", {
            required: "Dit veld is verplicht.",
            pattern: {
              value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: "Vul een geldig emailadres in.",
            },
          })}
          type="text"
          className={
            errors.email
              ? inputClass + "focus:border-error border-error "
              : inputClass
          }
          placeholder="Email address"
        />
        <label
          htmlFor="email"
          className="absolute text-gray left-0 text-sm top-0 
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray 
           peer-placeholder-shown:top-2 transition-all 
           peer-focus:text-sm
           peer-focus:top-0
           peer-focus:text-gray 
           "
        >
          Email address
        </label>
        <div className="absolute right-0 -bottom-2 text-sm text-error z-10 font-medium">
          {errors.email?.message}
        </div>
      </div>
      <div className="relative mt-1.5">
        <textarea
          id="message"
          {...register("message", { required: "Dit veld is verplicht." })}
          className={
            errors.message
              ? textareaClass + "focus:border-error border-error "
              : textareaClass
          }
          placeholder="Bericht"
        />
        <label
          htmlFor="message"
          className="absolute left-0 text-sm top-0 text-gray 
            peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray 
           peer-placeholder-shown:top-2 transition-all 
           peer-focus:text-sm
           peer-focus:top-0
           peer-focus:text-gray 
           "
        >
          Bericht
        </label>
        <div className="absolute right-0 -bottom-2 text-sm text-error z-10 font-medium">
          {errors.message?.message}
        </div>
      </div>
      <button type="submit" className="btnBase btn--primary mt-3">
        Verstuur{" "}
      </button>
      {/* <ThemeButton
        text="Verstuur"
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white mt-3"
      /> */}
    </form>
  )
}

const mapStateToProps = state => ({
  global: state.global,
})
export default connect(mapStateToProps, {
  changeIsSubmitting,
  changeLandingText,
  changeIsFormText,
  changeIsError,
})(Form)
