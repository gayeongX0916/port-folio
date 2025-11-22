import ExternalLink from "@/app/assets/external_link_icon.svg";
import Image from "next/image";

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "React Profiler로 찾아낸 불필요한 렌더링",
      url: "https://velog.io/@gayeong__0916/기능-React-Profiler로-찾아낸-불필요한-렌더링과-최적화-방법",
      preview:
        "React Profiler를 활용해 불필요한 렌더링을 분석하고, 실제로 어떤 최적화를 적용했는지 정리했습니다.",
    },
    {
      id: 2,
      title: "TanStack Query – useQuery / invalidateQueries",
      url: "https://velog.io/@gayeong__0916/%EA%B8%B0%EB%8A%A5-TanStack-Query%EB%A1%9C-%EC%84%9C%EB%B2%84-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-useQuery-invalidateQueries%EB%A1%9C-%EA%B9%94%EB%81%94%ED%95%9C-%EB%A6%AC%ED%8C%A8%EC%B9%98",
      preview:
        "TanStack Query로 서버 상태를 어떻게 관리하고, 캐시 무효화 전략을 어떻게 적용했는지 설명합니다.",
    },
    {
      id: 3,
      title: "TanStack Query – useInfiniteQuery / Infinite Scroll",
      url: "https://velog.io/@gayeong__0916/%EA%B8%B0%EB%8A%A5-TanStack-Query%EB%A1%9C-%EC%84%9C%EB%B2%84-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-useInfiniteQuery-IntersectionObserver%EB%A1%9C-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84",
      preview:
        "무한 스크롤을 IntersectionObserver와 함께 적용한 실제 구현 경험을 정리합니다.",
    },
  ];

  return (
    <section id="blog" className="py-12 bg-[#F7F7F7]">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-center">Blog</h2>
        <span>자세한 문제 해결 과정은 블로그에서 볼 수 있습니다.</span>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              className="group p-5 rounded-xl border border-gray-200 
                bg-white shadow-sm hover:shadow-md cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:underline break-keep">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 blur-sm group-hover:blur-none">
                {post.preview}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
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
            블로그로 이동
            <Image
              src={ExternalLink}
              alt="블로그로 이동"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
