
import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = (options = {}) => {
  const defaultOptions = {
    duration: 1000,
    once: false,
    offset: 120,
    easing: 'ease',
    delay: 100,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  AOS.init(mergedOptions);
};

export const refreshAOS = () => {
    AOS.refresh();
  };
