import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center">
      {/* โครงสร้าง Layout */}
      <div className="grid grid-cols-2 gap-8 w-4/5">
        {/* คอลัมน์ซ้าย */}
        <div>
          {/* โปรไฟล์ */}
          <div className="text-center mb-8">
            <div className="relative w-52 h-52 mx-auto">
              <Image
                src="/image/2.jpeg"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-white shadow-lg"
              />
              <div className="absolute inset-0 rounded-full border-[6px] border-blue-500"></div>
            </div>
            <p className="text-2xl font-bold mt-4">Chukkarin Junchang</p>
          </div>

          {/* การศึกษา */}
          <div className="mb-6 p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <p className="text-2xl font-bold">Education</p>
            <p>University of Phayao</p>
          </div>

          {/* ทักษะ */}
          <div className="mb-6 p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <p className="text-2xl font-bold">Skills</p>
            <ul className="list-disc pl-5">
              <li>Programming: JavaScript, Python</li>
              <li>Web Development: HTML, CSS, React, Next.js</li>
              <li>Team Collaboration</li>
            </ul>
          </div>

          {/* การติดต่อ */}
          <div className="p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <p className="text-2xl font-bold">Contact</p>
            <p>Email: example@example.com</p>
            <p>Phone: +123456789</p>
          </div>
        </div>

        {/* คอลัมน์ขวา */}
        <div>
          {/* Content Creator */}
          <div className="mb-6 p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <h3 className="text-xl font-bold">Content Creator</h3>
            <p>
              This section is for additional content. You can add anything here,
              like descriptions, images, or links.
            </p>
            <p>
              Example: Include a short bio, portfolio links, or detailed
              achievements.
            </p>
          </div>

          {/* ประสบการณ์ */}
          <div className="p-6 border-2 border-gray-300 rounded-lg bg-white text-black shadow-md">
            <p className="text-2xl font-bold">Experience</p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Frontend Developer Intern</strong> - ABC Tech Co. (June 2023 - Aug 2023)
                <p>- Designed and developed user-friendly UI using React.js and Tailwind CSS.</p>
                <p>- Collaborated with backend team to integrate APIs effectively.</p>
              </li>
              <li className="mt-2">
                <strong>Team Leader - University Project</strong> (Jan 2024 - May 2024)
                <p>- Led a team of 5 to create a chat application using Vue.js and Firebase.</p>
                <p>- Successfully delivered a fully functional prototype within the deadline.</p>
              </li>
              <li className="mt-2">
                <strong>Freelance Web Developer</strong> (Ongoing)
                <p>- Created and maintained responsive websites for local businesses.</p>
                <p>- Ensured cross-browser compatibility and optimized page loading speed.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
