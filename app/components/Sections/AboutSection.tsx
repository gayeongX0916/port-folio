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
            className="rounded-full flex-2"
          />
          <p className="text-gray-700 leading-relaxed text-xl break-keep flex-8">
            React와 Next.js 기반으로 사용자 경험을 개선하는 데 관심이 많은
            프론트엔드 개발자입니다. 새로운 기술을 배우고 실제 문제 해결에
            적용하는 과정에서 큰 동기부여를 느끼며, 배운 내용을 기술 블로그에
            기록하며 꾸준히 성장하고 있습니다. 협업과 소통을 통해 더 나은
            서비스를 만들어가는 과정을 중요하게 생각합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
