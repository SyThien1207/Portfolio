import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Github, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`fixed w-full z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Le Sy Thien</h1>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`${activeSection === 'home' ? 'font-bold border-b-2 border-blue-500' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`${activeSection === 'about' ? 'font-bold border-b-2 border-blue-500' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`${activeSection === 'projects' ? 'font-bold border-b-2 border-blue-500' : ''}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`${activeSection === 'contact' ? 'font-bold border-b-2 border-blue-500' : ''}`}
              >
                Contact
              </button>
            </nav>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} py-4`}>
            <nav className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-left py-2 ${activeSection === 'home' ? 'font-bold' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-left py-2 ${activeSection === 'about' ? 'font-bold' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`text-left py-2 ${activeSection === 'projects' ? 'font-bold' : ''}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-left py-2 ${activeSection === 'contact' ? 'font-bold' : ''}`}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="min-h-screen pt-24 pb-16 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Le Sy Thien</h2>
                <h3 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6">Fresher ASP.NET Developer</h3>
                <p className="text-lg mb-8 max-w-lg">
                  "My short-term goal is to enhance my knowledge and skills in software development by actively contributing to company projects. My long-term goal is to continuously improve my expertise and value, allowing me to grow alongside the company as a dedicated and passionate member."
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    View Projects
                  </button>
                 
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="../src/assets/imag2.png" 
                  alt="Le Sy Thien" 
                  className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                    <Mail size={16} />
                  </span>
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Mail className="mr-2 mt-1 text-blue-500" size={18} />
                    <span>lesythien2003@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="mr-2 mt-1 text-blue-500" size={18} />
                    <span>039 7768 003</span>
                  </li>
                  <li className="flex items-start">
                    <Github className="mr-2 mt-1 text-blue-500" size={18} />
                    <a 
                      href="https://github.com/SyThien1207" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition duration-300"
                    >
                      github.com/SyThien1207
                    </a>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="mr-2 mt-1 text-blue-500" size={18} />
                    <span>Di An, Binh Duong</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </span>
                  Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Programming Languages</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>C# (Intermediate)</li>
                      <li>PHP (Intermediate)</li>
                      <li>Java (Basic )</li>
                      <li>JavaScript (Basic )</li>
                      <li>C++ (Basic )</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Frameworks</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>ASP.NET Core (Intermediate)</li>
                      <li>WinForm (Basic )</li>
                      <li>Laravel (Intermediate)</li>
                      <li>Spring Boot (Basic )</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Databases</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>SQL Server (Intermediate)</li>
                      <li>MySQL (Intermediate)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Soft Skills</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Teamwork</li>
                      <li>Working independently</li>
                      <li>Research</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
              <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </span>
                Education
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                  <div>
                    <h4 className="font-medium">Ho Chi Minh City College of Industry and Trade </h4>
                    <p className="text-gray-600 dark:text-gray-400">9/2021 - 9/2024</p>
                    <p>Major: Information Technology</p>
                    <p>Graduated with a Merit</p>
                  </div>
                </li>
            
              </ul>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                    <path d="M16 2v4"></path>
                    <path d="M8 2v4"></path>
                    <path d="M4 10h16"></path>
                  </svg>
                </span>
                Certificates
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                  <div>
                    <h4 className="font-medium">Vocational Intermediate Certificate
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">2020</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                  <div>
                    <h4 className="font-medium">Security the OS and Network </h4>
                    <p className="text-gray-600 dark:text-gray-400">2023</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src="../src/assets/project.png" 
                  alt="Supermarket Management Software" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Supermarket Management Software</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">07/2023 - 09/2023</span>
                  </div>
                  <p className="mb-4">
                  Supermarket Management Software with functions for managing products, customers, orders, and reports.                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">C#</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">SQL Server</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">WinForms</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Entity Framework</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Design a database for managing products, customers, and orders.
                      </li>
                      <li>Develop the user interface using WinForms.
                      </li>
                      <li>Integrate features for product and customer management, order processing, and reporting.
</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Achievements: 7.8/10</h4>
                  
                  </div>
                  <a 
                    href="https://github.com/SyThien1207/winform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View on GitHub <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src="../src/assets/project1.png" 
                  alt="Product Management Website" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Product Management Website</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">02/2024 - 04/2024</span>
                  </div>
                  <p className="mb-4">
                  A website for managing products and articles, featuring an admin panel for administrators and a user interface for customers.
</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">ASP.NET Core Web API</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Bootstrap 5</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">SQL Server</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Design and develop a product and article management system.
                      </li>
                      <li>Build an admin panel for administrators and a user interface for users.
                      </li>
                      <li>Provide APIs for CRUD operations.
</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Achievements: 8.5/10</h4>
                  
                  </div>
                  <a 
                    href="https://github.com/SyThien1207/webasp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View on GitHub <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src="../src/assets/project2.png" 
                  alt="Fashion Website" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Fashion Website</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">07/2024 - 09/2024</span>
                  </div>
                  <p className="mb-4">
                  Develop an e-commerce website with all essential features of a standard marketplace website.
</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Laravel 11</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">PHP</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">MySQL</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Bootstrap</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Develop the user interface and interactive features for the website, including login, search, and purchasing functions,... .
</li>
                      <li>Develop an admin panel for managing the website, including products, shopping carts, and the user interface.
</li>
                      <li>Design and develop database tables to store website data.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Achievements: 8.7/10</h4>
                  
                  </div>
                  <a 
                    href="https://github.com/SyThien1207/webshop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View on GitHub <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Project 4 */} 
         
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <a 
                        href="mailto:lesythien2003@gmail.com" 
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        lesythien2003@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <a 
                        href="tel:0397768003" 
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        039 7768 003
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      <Github size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">GitHub</h3>
                      <a 
                        href="https://github.com/SyThien1207" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        github.com/SyThien1207
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Location</h3>
                      <p>Di An, Binh Duong</p>
                    </div>
                  </div>
                </div>
              </div>
              
           
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Le Sy Thien</h2>
              <p className="text-gray-400">Fresher ASP.NET Developer</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SyThien1207" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:lesythien2003@gmail.com" 
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:0397768003" 
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        
        </div>
      </footer>
    </div>
  );
}

export default App;