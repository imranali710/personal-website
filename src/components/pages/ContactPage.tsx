

function ContactPage() {
    return (
      <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <section className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome!</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Imran Ali, a full-stack web application developer and AI enthusiast. I'm passionate about crafting robust, scalable software solutions and exploring the exciting possibilities of artificial intelligence.
            </p>
          </section>
  
          <section className="mb-10 text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Expertise</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              My expertise lies in building comprehensive and feature-rich web applications from the ground up. I have the capability to develop complex systems such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
              <li><strong>School Management Systems:</strong> Encompassing features like student records, attendance tracking, grading, communication portals, and more.</li>
              <li><strong>Hospital Management Systems:</strong> Including functionalities for patient management, appointment scheduling, electronic health records, billing, and staff management.</li>
              <li><strong>Inventory Management Systems:</strong> Tailored for wholesalers and retailers, offering tools for tracking stock levels, managing orders, generating reports, and optimizing supply chains.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Furthermore, I am proficient in designing and implementing microservices using Python and leading frameworks such as Django, Flask, and FastAPI. This allows for the creation of modular, maintainable, and scalable backend architectures.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My fascination with artificial intelligence has led me to develop AI agents integrated with Large Language Models (LLMs). I leverage tools like model context protocols, Langchain, and LangGraph to build intelligent applications capable of [mention a few potential applications, e.g., automating tasks, providing insightful analysis, enhancing user experiences].
            </p>
          </section>
  
          <section className="mb-10 text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">My capabilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To give you a clearer picture of my capabilities, here are a few example projects I can undertake:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li className="mb-2">
                <strong>Full-Stack Web Application:</strong> Development of a custom <span className="font-medium">e-commerce platform</span> for a retailer, featuring product catalogs, shopping carts, secure payment gateways, order management, and customer support integration.
              </li>
              <li className="mb-2">
                <strong>Microservices Architecture:</strong> Building a <span className="font-medium">scalable recommendation engine</span> for a content platform using FastAPI for the API and integrating with a data processing pipeline built with Python.
              </li>
              <li className="mb-2">
                <strong>AI Agent:</strong> Creation of an <span className="font-medium">intelligent customer service chatbot</span> using Langchain and a relevant LLM, capable of answering inquiries, resolving issues, and escalating complex requests.
              </li>
            </ul>
          </section>
  
          <section className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am eager to collaborate with clients and partners who are looking for innovative and effective solutions. If you're interested in discussing your project or exploring potential collaborations, please don't hesitate to reach out through my{' '}
              <a href="/contact" className="text-blue-500 hover:underline">Contact</a> page. You can also view a selection of my previous work in my{' '}
              <a href="/portfolio" className="text-blue-500 hover:underline">Portfolio</a> section.
            </p>
            <p className="text-gray-700">Thank you for visiting. I look forward to connecting with you!</p>
          </section>
        </div>
      </div>
    );
  }
  
  export default ContactPage;