
import { Link } from "react-router-dom"; // if you're using React Router

const projects = [
  {
    title: "School Management System",
    description: "Web application for comprehensive and feature-rich school management system. Interface for students, teachers, and administrators with desktop and mobile compatible.",
    tags: ["React", "vite", "TypeScript", "Tailwind", "Python", "Django", "PostgreSQL"],
    link: "/projects/school-management-system", // Adjust this based on your routing
  },
  {
    title: "Fee Tracker CLI",
    description: "Simple CLI tool to track student fees and generate summary reports.",
    tags: ["Python", "Click", "SQLite"],
    link: "/fee-tracker",
  },
  // Add more projects here
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to={project.link}
              className="inline-block text-blue-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
