export function Footer() {
  return (
    <footer className="w-full py-8 bg-[#F7F7F7] border-t border-gray-300 text-center">
      <section id="contact">
        <p className="text-sm text-gray-700 font-medium mb-3">
          Kim Gayeong · Frontend Developer
        </p>

        <div className="flex justify-center gap-6 text-[15px] mb-4 text-gray-700">
          <span>📞 010-8822-9960</span>
          <a
            href="mailto:gayeongx0916@gmail.com"
            className="hover:text-emerald-600"
          >
            📧 Email
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/gayeongX0916"
            target="_blank"
            className="hover:text-emerald-600 text-[16px]"
          >
            GitHub
          </a>
          <a
            href="https://velog.io/@gayeong__0916/posts"
            target="_blank"
            className="hover:text-emerald-600 text-[16px]"
          >
            Velog
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © 2025 Kim Gayeong. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
