
const HomePage = () => {
  

  return (
    // Adjusted Padding: Reduced overall padding, more vertical than horizontal.
    // Added min-height to help center content vertically on shorter viewports.
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-white px-4 sm:px-6 lg:px-8">
      {/* Main content container with a max-width */}
      <div className="max-w-4xl mx-auto text-center py-16 md:py-24"> {/* Added some vertical padding */}

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-4 md:mb-6"> {/* Slightly adjusted sizes/margin */}
          I'm Imran
        </h1>

        {/* Subheading - Using spans for potential individual styling and better spacing */}
        <div className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 md:mb-12"> {/* Adjusted size/margin */}
          <span>Developer</span>
          <span className="text-gray-700 mx-2">|</span> {/* Softer color for separator */}
          {/* Consider rephrasing 'NEET Failed' based on target audience */}
          <span className={`text-gray-700 mx-2`}>NEET Failed</span> {/* Example applying accent color */}
          <span className="text-gray-700 mx-2">|</span>
          <span>Science Enthusiast</span>
        </div>

        {/* Introduction Paragraph */}
        <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed md:leading-loose"> {/* Increased line-height, constrained max-width */}
          I’m a developer with a passion for crafting software that not only solves real-world problems but also drives innovation. With a strong foundation in full-stack web application development, AI integration, and microservice architectures, I specialize in transforming ideas into impactful solutions—from concept to launch—efficiently and with precision.
        </p>

        {/* Optional: Call to Action Button Area */}
        <div className="mt-12 md:mt-16">
          <a // Using <a> for navigation, could be <button> or Link from react-router
            href="projects" // Link to your projects section or contact page
            className={`inline-block  text-black font-medium py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 border`} // Example button styling
          >
            View My Work
          </a>
          {/* You could add more links/buttons here */}
          {/* <a href="#contact" className={`ml-4 ${accentColor} ${accentHoverColor} font-medium`}>Get In Touch</a> */}
        </div>

      </div>
    </div>
  );
}

export default HomePage;