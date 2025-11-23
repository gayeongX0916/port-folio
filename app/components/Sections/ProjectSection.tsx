import GlobalNomad from "@/app/assets/GlobalNomad.png";
import Taskify from "@/app/assets/Taskify.png";
import OpenMind from "@/app/assets/OpenMind.png";

export function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "GlobalNomad",
      description: "캘린더·지도 SDK 기반의 체험 예약 플랫폼",
      img: GlobalNomad,
    },
    {
      id: 2,
      title: "Taskify",
      description: "커뮤니티 기반 일정·할 일 협업 도구",
      img: Taskify,
    },
    {
      id: 3,
      title: "OpenMind",
      description: "익명 Q&A 커뮤니티 서비스",
      img: OpenMind,
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
              className="relative h-[300px] rounded-xl overflow-hidden
              shadow-md hover:shadow-xl cursor-pointer"
            >
              <div
                className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat h-full"
                style={{ backgroundImage: `url(${project.img.src})` }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div
                className="
                  absolute bottom-4 right-4 text-right z-10 text-white
                "
              >
                <h3 className="text-xl font-semibold mb-2 text-right">
                  {project.title}
                </h3>
                <p className="text-right">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
