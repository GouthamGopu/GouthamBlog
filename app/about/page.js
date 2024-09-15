import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/goutham.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
              Hello! I'm Goutham, a software developer passionate about building modern web applications. I specialize in React, Node.js, and MongoDB, and I love solving complex coding challenges. My goal is to stay updated with the latest tech trends and continuously improve.<br/>
              I believe that collaboration and knowledge sharing are key to growth in the tech community, and I'm excited to contribute in any way I can.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Goutham's Journey as a Developer</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From early explorations to full-stack development, here's my story in tech.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/1.jpeg" alt="Goutham as a beginner" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white ">The Beginning of My Journey</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  My coding journey began with web development technologies like HTML, CSS, and JavaScript. I found immense joy in creating websites and bringing ideas to life on the web. This was the foundation that sparked my love for front-end development and programming in general.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Goutham learning new skills" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Exploring Full-Stack Development</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  I quickly realized that to be a versatile developer, I needed to dive into full-stack technologies. Learning React, Node.js, and MongoDB gave me the ability to create complete applications from start to finish. With hands-on projects, I grew my skills and tackled more complex challenges, such as building secure and scalable systems.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010129.jpg" alt="Goutham working on a big project" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenging Projects</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  As my experience grew, I took on larger and more challenging projects. These involved creating dynamic web apps, developing APIs, and optimizing performance. Each project allowed me to apply my skills in new ways, leading to growth not only as a developer but also as a problem-solver who enjoys tackling complex issues head-on.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="https://img.freepik.com/free-photo/researchers-looking-alternative-energy-souces_23-2149311438.jpg" alt="Goutham mentoring others" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Sharing Knowledge and Collaborating</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  I'm passionate about sharing knowledge and collaborating with other developers. Whether it's writing blog posts, creating tutorials, or contributing to open-source projects, I enjoy giving back to the community. Collaboration helps me grow as a developer while empowering others to succeed in their coding journeys as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
