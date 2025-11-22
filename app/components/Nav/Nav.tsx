export function Nav() {
  return (
    <nav className="mt-10 flex gap-4 justify-center text-sm text-gray-600">
      <a href="#projects" className="hover:text-emerald-600">
        Projects
      </a>
      <a href="#about" className="hover:text-emerald-600">
        About Me
      </a>
      <a href="#blog" className="hover:text-emerald-600">
        Blog
      </a>
      <a href="#contact" className="hover:text-emerald-600">
        Contact
      </a>
    </nav>
  );
}
