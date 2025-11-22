import Profile from "@/app/assets/profile.jpg";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-12 bg-[#F7F7F7] pt-10">
      <div className="max-w-[1080px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex gap-7 items-center">
          <Image
            src={Profile}
            alt="프로필"
            width={120}
            height={150}
            className="rounded-full"
          />
          <p className="text-gray-700 leading-relaxed text-lg break-keep">
            React와 Next.js를 중심으로 사용자 경험을 개선하는 데 관심이 많은
            프론트엔드 개발자입니다. 배운 내용을 기술 블로그에 기록하며 꾸준히
            성장하고 있으며, 협업과 소통을 통해 더 나은 서비스를 만드는 과정에
            가치를 둡니다.
          </p>
        </div>
      </div>
    </section>
  );
}
