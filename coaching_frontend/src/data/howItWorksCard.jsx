import Bg from '../assets/RectLight.svg'
import pinkBg from '../assets/pinkbg.svg'
import purplebg from '../assets/purplebg.svg'
import icon1 from '../assets/01.png'
import icon2 from '../assets/02.png'
import icon3 from '../assets/03.png'
import { ArrowRight } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'

const data = [
    {
      id: "01",
      title: "Send Us Message",
      description: "Reach out to us by sending a message through our contact form. We'll guide you from your first step to receiving a response within minutes.",
      image: Bg,
      icon: icon1,
      backgroundColor: "#CCE4FF",
      arrow: <ArrowRight className='stroke-white'/>
    },
    {
      id: "02",
      title: "Discuss With Us",
      description: "Once we receive your message, our team will review it and provide tailored advice on how our services can best meet your needs.",
      image: pinkBg,
      icon: icon2,
      backgroundColor: "#FFEAF5",
      arrow: <ArrowLeft className='stroke-white'/>
    },
    {
      id: "03",
      title: "Start Your Learning",
      description: "Getting started is simple and secure. We offer convenient payment options to ensure your learning journey begins without any hassle.",
      image: purplebg,
      icon: icon3,
      backgroundColor: "#F1D9FF",
      arrow: <ArrowRight className='stroke-white'/>
    }
  ];

  export default data