import DownLoadIcon from "@/app/assets/download_icon.svg";
import Image from "next/image";

export function Header() {
  return (
    <header className="text-center bg-[#F7F7F7] py-16 flex flex-col items-center gap-4">
      <h1 className="text-4xl font-semibold leading-[1.3] text-[#1A1A1A]">
        안녕하세요,
        <br />
        프론트엔드 개발자
        <br />
        <span className="text-emerald-600 font-bold">김가영</span>
        입니다.
      </h1>
      <span className="text-gray-600 text-base">
        Next.js 기반 웹 서비스 개발에 집중하고 있습니다.
        <br />더 나은 사용자 경험을 고민하며 성장하고 있습니다.
      </span>

        <button
          className="
          mt-4 px-4 py-2
          bg-[#E5E7EB] 
          text-[#1F2937] 
          border border-[#D1D5DB]
          rounded-lg
          hover:bg-[#D1D5DB]
          cursor-pointer
          flex items-center gap-2
        "
        >
          이력서 다운로드
          <Image
            src={DownLoadIcon}
            alt="이력서 다운로드"
            width={20}
            height={20}
          />
        </button>
    </header>
  );
}
