import React from "react"
import TestimonialHeading from "./TestimonialHeading"
import TestimonialCards from "./TestimonialCards"
import mapbg from '../../../assets/mapbg.svg'
import TestimonialModel from "./TestimonialModel"

const TestimonialSection = () => {
    return (
        <section  style={{ backgroundImage: `url(${mapbg})` }}>
          < TestimonialHeading/>
          <div className="flex gap-36">
          < TestimonialCards/>
          < TestimonialModel/>
          </div>
        </section>
    )
}

export default TestimonialSection