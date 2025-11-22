export function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "GlobalNomad",
      description: "캘린더·지도 SDK 기반의 체험 예약 플랫폼",
    },
    {
      id: 2,
      title: "Taskify",
      description: "커뮤니티 기반 일정·할 일 협업 도구",
    },
    {
      id: 3,
      title: "OpenMind",
      description: "익명 Q&A 커뮤니티 서비스",
    },
  ];

  return (
    <section id="projects" className="py-12 bg-[#F7F7F7] mt-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
