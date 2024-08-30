import EntrySection from "./EntrySection"
import CourseSection from "./CourseSection"
import ChooseUsSection from "./ChooseUsSection"
import HowItWorksSection from "./HowItWorksSection"

const Home = () => {
  return (
    <div className="w-full h-auto flex flex-col z-0">
     <EntrySection/>
     <ChooseUsSection/>
     <CourseSection/>
     <HowItWorksSection/>
    </div>
  )
}

export default Home