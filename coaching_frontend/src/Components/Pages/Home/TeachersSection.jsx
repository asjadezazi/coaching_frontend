import React from "react"
import TeachersHeading from "./TeachersHeading"
import TeachersCards from "./TeachersCards"

const TeachersSection = () => {
  return (
    <section className='h-auto bg-white z-0 pt-16' >
        <TeachersHeading />
        <TeachersCards />
    </section>
  )
}

export default TeachersSection