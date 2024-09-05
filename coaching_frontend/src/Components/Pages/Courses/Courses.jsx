import React from 'react';
import Helmet from 'react-helmet';
import CourseHeading from '../Courses/CourseHeading';
import FrontendCourse from './FrontendCourse';

const Courses = () => {

  return (
    <div>
      <Helmet>
        {/* Title of the page */}
        <title>Our Courses - Ezazi Classes</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore our wide range of courses at Ezazi Classes, designed to help you achieve your academic goals. From foundational courses to advanced studies, find the perfect course for your learning journey."
        />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Our Courses - Ezazi Classes" />
        <meta
          property="og:description"
          content="Discover the various courses offered by Ezazi Classes, tailored to provide top-notch education and career development opportunities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ezaziclasses.com/courses" />
        <meta property="og:image" content="https://www.ezaziclasses.com/images/courses-banner.jpg" />

        {/* Twitter Card for Twitter shares */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Courses - Ezazi Classes" />
        <meta
          name="twitter:description"
          content="Explore a wide range of courses at Ezazi Classes, designed for students at various levels of their academic journey."
        />
        <meta name="twitter:image" content="https://www.ezaziclasses.com/images/courses-banner.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.ezaziclasses.com/courses" />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="Ezazi Classes, courses, coaching, education, academic courses, learning, career development, student courses"
        />

        {/* Additional meta tags */}
        <meta name="author" content="Ezazi Classes" />
        <meta name="robots" content="index, follow" />
      </Helmet>


      <CourseHeading />
      <FrontendCourse/>

    </div>
  );
};

export default Courses;
