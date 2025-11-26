import meImage from '../assets/me.jpg'
import ddImage from '../assets/dd.jpg'

function Home() {
  const topSkills = [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 95 },
    { name: "Node.js", level: 92 },
    { name: "TypeScript", level: 90 },
    { name: "Python", level: 88 },
    { name: "MongoDB", level: 90 },
    { name: "HTML/CSS", level: 98 },
    { name: "Git/GitHub", level: 95 },
    { name: "AWS", level: 85 },
    { name: "Tailwind CSS", level: 88 }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 z-20">
            <div className="lg:w-1/2 text-left">
              <h1 className="text-5xl font-bold text-yellow-400 mb-6">About Me</h1>
              <p className="text-4xl text-white font-serif leading-relaxed animate-slide-up mb-6">
                Hi, I'm Umer - Creative & Passionate Full-Stack Web Developer
              </p>
              <p className="text-lg text-gray-300 mb-6">
                I'm a dedicated full-stack web developer with 2+ years of experience creating innovative digital solutions. 
                I specialize in modern web technologies and have a passion for clean, efficient code.
              </p>
              <div className="flex space-x-4">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">Full-Stack Developer</span>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">UI/UX Enthusiast</span>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img
                src={meImage}
                alt="Umer"
                className="w-80 h-80 rounded-xl shadow-2xl animate-slow-bounce hover:scale-110 hover:border-4 hover:border-yellow-400 transition-all duration-500 object-cover object-top cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Professional Summary</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              As a versatile web developer, I bring ideas to life through code. My journey began with curiosity about 
              how websites work, and has evolved into a passion for creating seamless user experiences and robust backend systems.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">2+</h3>
                <p className="text-gray-300">Years of Experience</p>
              </div>
              <div className="bg-blue-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">10+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-blue-900 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">5+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">My Projects</h2>
          <div className="space-y-16">
            {/* Featured Project 1 */}
            <div className="bg-blue-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4">DireDawa police clinic management system</h3>
                  <p className="text-gray-300 mb-6">
                    The Dire Dawa Police Clinic Management System is a digital platform that helps the clinic handle patient records,
                     appointments, and daily operations more smoothly. It reduces paperwork and keeps information organized in one place.
                      Staff can access what they need quickly, which speeds up service. 
                    Overall, it makes the clinic’s work easier and improves care for police officers and their families.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">PHP</span>
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">MY SQL</span>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gray-800 flex items-center justify-center p-8">
                  <img
                    src={ddImage}
                    alt="Dire Dawa Police Clinic"
                    className="w-48 h-48 rounded-full object-cover border-4 border-yellow-400"
                  />
                </div>
              </div>
            </div>

            {/* Other Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl text-yellow-400 mb-4">🌐</div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Weather App</h3>
                <p className="text-gray-300 mb-4">Real-time weather application with location-based forecasts.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">API</span>
                </div>
              </div>
              <div className="bg-blue-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl text-yellow-400 mb-4">🎥</div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Ethio Movie Platform</h3>
                <p className="text-gray-300 mb-4">Ethiopian movie streaming platform with local content and user-friendly interface.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">Node.js</span>
                </div>
              </div>
              <div className="bg-blue-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl text-yellow-400 mb-4">✈️</div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">3D Games Plane</h3>
                <p className="text-gray-300 mb-4">Interactive 3D airplane game with realistic physics and engaging gameplay.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm">OPEN GL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-900 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                {topSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-yellow-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-blue-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Team Leader</h3>
              <p className="text-gray-300 mb-2">HUCISA 8 Teams • 2025</p>
              <p className="text-gray-400">Leading 8 teams at Haramaya University College of Computing and Informatics Students Association</p>
            </div>
            <div className="bg-blue-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Research and Innovation Team Associate</h3>
              <p className="text-gray-300 mb-2">Haramaya University College of Computing and Informatics Students Association • 2024</p>
              <p className="text-gray-400">Contributing to research initiatives and innovation projects within the computing and informatics field</p>
            </div>
            <div className="bg-blue-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Software Development Intern</h3>
              <p className="text-gray-300 mb-2">Dire Dawa American Corner • 2025</p>
              <p className="text-gray-400">Developed the Dire Dawa Police Clinic Management System project during internship program, focusing on healthcare digitization and system optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Soft Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-900 p-6 rounded-lg text-center">
              <div className="text-4xl text-yellow-400 mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Problem Solving</h3>
              <p className="text-gray-300">Analytical thinking and creative solutions</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg text-center">
              <div className="text-4xl text-yellow-400 mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-2">Team Leadership</h3>
              <p className="text-gray-300">Leading and mentoring development teams</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg text-center">
              <div className="text-4xl text-yellow-400 mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-2">Communication</h3>
              <p className="text-gray-300">Clear technical communication</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg text-center">
              <div className="text-4xl text-yellow-400 mb-4">⏰</div>
              <h3 className="text-xl font-bold text-white mb-2">Time Management</h3>
              <p className="text-gray-300">Efficient project delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-900 p-6 rounded-lg text-center">
              <div className="text-4xl text-yellow-400 mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Web Development Fundamentals</h3>
              <p className="text-gray-300">Udacity • 2023</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg text-center">
              <div className="text-4xl text-yellow-400 mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-2">Software Development</h3>
              <p className="text-gray-300">Nile Technology Solutions • 2023</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg text-center">
              <div className="text-4xl text-yellow-400 mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-2">MUN Simulation</h3>
              <p className="text-gray-300">UNA-ET-HU Chapter • 2024</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg text-center">
              <div className="text-4xl text-yellow-400 mb-4">🚗</div>
              <h3 className="text-xl font-bold text-white mb-2">Driving License</h3>
              <p className="text-gray-300">Ethiopian Transport Authority • 2023</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg text-center">
              <div className="text-4xl text-yellow-400 mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-2">HUCISA Coordinator</h3>
              <p className="text-gray-300">Haramaya University • 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Let's Work Together</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-blue-900 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-yellow-400 mb-8">Send Me a Message</h3>
              <form action="https://formspree.io/f/xpznvqko" method="POST" className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-yellow-400 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-yellow-400 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-yellow-400 focus:outline-none resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-8">Get In Touch</h3>
                <p className="text-gray-300 text-lg mb-8">
                  I'm currently available for freelance work and full-time opportunities. 
                  Let's discuss how we can bring your ideas to life!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <span className="text-black text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <a href="mailto:uselahadin@gmail.com" className="text-yellow-400 hover:underline">uselahadin@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <span className="text-black text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <a href="tel:+251986334453" className="text-yellow-400 hover:underline">+251 986 334 453</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <span className="text-black text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-300">Harar, Ethiopia</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <a href="https://www.linkedin.com/in/umer-selahadin-77b83b318/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-4 rounded-lg text-center hover:bg-blue-700 transition-colors">
                  <div className="text-2xl mb-2">💼</div>
                  <span className="text-white">LinkedIn</span>
                </a>
                <a href="https://github.com/33-44-53" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                  <div className="text-2xl mb-2">💻</div>
                  <span className="text-white">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home