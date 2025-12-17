import meImage from '../assets/me.jpg'
import ddImage from '../assets/dd.jpg'
import { motion } from 'framer-motion'

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
    <div className="min-h-screen bg-white text-gray-800">
      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-green-100/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        ></motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 z-20">
            <motion.div 
              className="lg:w-1/2 text-left text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                About Me
              </motion.h1>
              <motion.p 
                className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-serif leading-relaxed mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Hi, I'm Umer - Creative & Passionate Full-Stack Web Developer
              </motion.p>
              <motion.p 
                className="text-base md:text-lg text-gray-600 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                I'm a dedicated full-stack web developer with 2+ years of experience creating innovative digital solutions. 
                I specialize in modern web technologies and have a passion for clean, efficient code.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:space-x-4 items-center lg:items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.span 
                  className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  Full-Stack Developer
                </motion.span>
                <motion.span 
                  className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  UI/UX Enthusiast
                </motion.span>
              </motion.div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  transition={{ duration: 1.0, delay: 1.0 }}
                  viewport={{ once: false, amount: 0.3 }}
                ></motion.div>
                <motion.img
                  src={meImage}
                  alt="Umer"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl shadow-2xl object-cover object-top cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1.0, delay: 0.9, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, rotate: 2, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: false, amount: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Professional Summary */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Professional Summary
          </motion.h2>
          <div className="max-w-4xl mx-auto text-center">
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              As a versatile web developer, I bring ideas to life through code. My journey began with curiosity about 
              how websites work, and has evolved into a passion for creating seamless user experiences and robust backend systems.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { number: "2+", text: "Years of Experience" },
                { number: "10+", text: "Projects Completed" },
                { number: "5+", text: "Happy Clients" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white border border-green-200 p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-green-600 mb-4">{stat.number}</h3>
                  <p className="text-gray-700">{stat.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            My Projects
          </motion.h2>
          <div className="space-y-16">
            <motion.div 
              className="bg-white border border-green-200 rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h3 className="text-3xl font-bold text-green-600 mb-4">DireDawa police clinic management system</h3>
                  <p className="text-gray-700 mb-6">
                    The Dire Dawa Police Clinic Management System is a digital platform that helps the clinic handle patient records,
                     appointments, and daily operations more smoothly. It reduces paperwork and keeps information organized in one place.
                      Staff can access what they need quickly, which speeds up service. 
                    Overall, it makes the clinic's work easier and improves care for police officers and their families.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">PHP</span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">MY SQL</span>
                  </div>
                </div>
                <div className="md:w-1/2 bg-green-50 flex items-center justify-center p-8">
                  <motion.img
                    src={ddImage}
                    alt="Dire Dawa Police Clinic"
                    className="w-48 h-48 rounded-full object-cover border-4 border-green-500"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white border border-green-200 p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div 
                  className="text-4xl text-green-500 mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  🌐
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Weather App</h3>
                <p className="text-gray-700 mb-4">Real-time weather application with location-based forecasts.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">API</span>
                </div>
              </motion.div>
              <motion.div 
                className="bg-white border border-green-200 p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div 
                  className="text-4xl text-green-500 mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  🎥
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Ethio Movie Platform</h3>
                <p className="text-gray-700 mb-4">Ethiopian movie streaming platform with local content and user-friendly interface.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                </div>
              </motion.div>
              <motion.div 
                className="bg-white border border-green-200 p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -10 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div 
                  className="text-4xl text-green-500 mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  ✈️
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-green-600">3D Games Plane</h3>
                <p className="text-gray-700 mb-4">Interactive 3D airplane game with realistic physics and engaging gameplay.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">OPEN GL</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Technical Skills
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white border border-green-200 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {topSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <motion.span 
                        className="text-green-600"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div 
                        className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Experience
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div 
              className="bg-white border border-green-200 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-green-600 mb-2">Team Leader</h3>
              <p className="text-gray-700 mb-2">HUCISA 8 Teams • 2025</p>
              <p className="text-gray-600">Leading 8 teams at Haramaya University College of Computing and Informatics Students Association</p>
            </motion.div>
            <motion.div 
              className="bg-white border border-green-200 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-green-600 mb-2">Research and Innovation Team Associate</h3>
              <p className="text-gray-700 mb-2">Haramaya University College of Computing and Informatics Students Association • 2024</p>
              <p className="text-gray-600">Contributing to research initiatives and innovation projects within the computing and informatics field</p>
            </motion.div>
            <motion.div 
              className="bg-white border border-green-200 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-green-600 mb-2">Software Development Intern</h3>
              <p className="text-gray-700 mb-2">Dire Dawa American Corner • 2025</p>
              <p className="text-gray-600">Developed the Dire Dawa Police Clinic Management System project during internship program, focusing on healthcare digitization and system optimization</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Soft Skills Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Soft Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white border border-green-200 p-6 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div 
                className="text-4xl text-green-500 mb-4"
                whileHover={{ scale: 1.3, rotate: 15 }}
              >
                🧠
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Problem Solving</h3>
              <p className="text-gray-600">Analytical thinking and creative solutions</p>
            </motion.div>
            <motion.div 
              className="bg-white border border-green-200 p-6 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div 
                className="text-4xl text-green-500 mb-4"
                whileHover={{ scale: 1.3, rotate: 15 }}
              >
                👥
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Team Leadership</h3>
              <p className="text-gray-600">Leading and mentoring development teams</p>
            </motion.div>
            <motion.div 
              className="bg-white border border-green-200 p-6 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div 
                className="text-4xl text-green-500 mb-4"
                whileHover={{ scale: 1.3, rotate: 15 }}
              >
                💬
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Communication</h3>
              <p className="text-gray-600">Clear technical communication</p>
            </motion.div>
            <motion.div 
              className="bg-white border border-green-200 p-6 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div 
                className="text-4xl text-green-500 mb-4"
                whileHover={{ scale: 1.3, rotate: 15 }}
              >
                ⏰
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Time Management</h3>
              <p className="text-gray-600">Efficient project delivery</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Certifications
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white border border-green-200 p-6 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div 
                className="text-4xl text-green-500 mb-4"
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                🏆
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Web Development Fundamentals</h3>
              <p className="text-gray-600">Udacity • 2023</p>
            </motion.div>
            <motion.div 
              className="bg-white border border-green-200 p-6 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div 
                className="text-4xl text-green-500 mb-4"
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                ⚙️
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Software Development</h3>
              <p className="text-gray-600">Nile Technology Solutions • 2023</p>
            </motion.div>
            <motion.div 
              className="bg-white border border-green-200 p-6 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div 
                className="text-4xl text-green-500 mb-4"
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                🌍
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">MUN Simulation</h3>
              <p className="text-gray-600">UNA-ET-HU Chapter • 2024</p>
            </motion.div>
            <motion.div 
              className="bg-white border border-green-200 p-6 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div 
                className="text-4xl text-green-500 mb-4"
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                🚗
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Driving License</h3>
              <p className="text-gray-600">Ethiopian Transport Authority • 2023</p>
            </motion.div>
            <motion.div 
              className="bg-white border border-green-200 p-6 rounded-lg text-center shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div 
                className="text-4xl text-green-500 mb-4"
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                💻
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">HUCISA Coordinator</h3>
              <p className="text-gray-600">Haramaya University • 2024</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Let's Work Together
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white border border-green-200 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-3xl font-bold text-green-600 mb-8">Send Me a Message</h3>
              <form action="https://formspree.io/f/xpznvqko" method="POST" className="space-y-6">
                <div>
                  <label className="block text-gray-800 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div>
                <h3 className="text-3xl font-bold text-green-600 mb-8">Get In Touch</h3>
                <p className="text-gray-700 text-lg mb-8">
                  I'm currently available for freelance work and full-time opportunities. 
                  Let's discuss how we can bring your ideas to life!
                </p>
              </div>

              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ x: 10 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <motion.div 
                    className="bg-green-500 p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <span className="text-white text-xl">📧</span>
                  </motion.div>
                  <div>
                    <h4 className="text-gray-800 font-semibold">Email</h4>
                    <a href="mailto:uselahadin@gmail.com" className="text-green-600 hover:underline">uselahadin@gmail.com</a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ x: 10 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <motion.div 
                    className="bg-green-500 p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <span className="text-white text-xl">📱</span>
                  </motion.div>
                  <div>
                    <h4 className="text-gray-800 font-semibold">Phone</h4>
                    <a href="tel:+251986334453" className="text-green-600 hover:underline">+251 986 334 453</a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ x: 10 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <motion.div 
                    className="bg-green-500 p-3 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <span className="text-white text-xl">📍</span>
                  </motion.div>
                  <div>
                    <h4 className="text-gray-800 font-semibold">Location</h4>
                    <p className="text-gray-600">Harar, Ethiopia</p>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.a 
                  href="https://www.linkedin.com/in/umer-selahadin-77b83b318/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-500 p-4 rounded-lg text-center hover:bg-green-600 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <motion.div 
                    className="text-2xl mb-2"
                    whileHover={{ scale: 1.2 }}
                  >
                    💼
                  </motion.div>
                  <span className="text-white">LinkedIn</span>
                </motion.a>
                <motion.a 
                  href="https://github.com/33-44-53" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-800 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <motion.div 
                    className="text-2xl mb-2"
                    whileHover={{ scale: 1.2 }}
                  >
                    💻
                  </motion.div>
                  <span className="text-white">GitHub</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home