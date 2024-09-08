import React from "react"
import CourseHeading from "./CourseHeading"
import CourseCards from "./CourseCards"

const CourseSection = () => {
   
  return (
    <section className='h-auto pb-10 bg-white z-0 pt-16' >
        <CourseHeading />
        <CourseCards />
    </section>
  )
}

export default CourseSection