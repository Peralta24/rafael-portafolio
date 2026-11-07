const projects = [
    {
        name: "AnimeTier",
        description: "Aplicacion iOS para explorar, organizar y guardar animes favoritos utilizando la API de Jikan.",
        technologies: ["Swift", "SwiftUI", "SwiftData"],
        category: "iOS Development",
    },
    {
        name: "EvolvingHunt",
        description:"Aplicacion de fitness para adminstrar entreamientos, ejecicios y rutinas personalizadas.",
        technologies: ["Swift, SwiftData"],
        category: "iOS Development",
    },
    {
        name: "Musicales Doris",
        description: "Aplicaicon de comercio electronico para explorar instrumentos musicales y administrar un carrito de compras",
        technologies: ["Swift", "SwiftUI", "MVVM"],
        category: "iOS Development, Android Development,Web Services",
    }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <a href="#" className="text-xl font-bold">
          RP<span className="text-violet-400">.</span>
        </a>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white">Sobre mí</a>
          <a href="#projects" className="hover:text-white">Proyectos</a>
          <a href="#contact" className="hover:text-white">Contacto</a>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-24">
        <p className="mb-6 text-sm font-medium tracking-widest text-violet-400 uppercase">
          Software Developer · iOS Development
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Hola, soy Rafael.
          <span className="mt-3 block text-gray-400">
            Construyo experiencias digitales.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Soy desarrollador de software, especializado en el
          ecosistema Apple. Me apasiona crear aplicaciones
          intuitivas, escalables y con una excelente experiencia
          de usuario.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-violet-600 px-6 py-3 font-medium transition hover:bg-violet-500"
          >
            Ver mis proyectos
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-gray-700 px-6 py-3 font-medium transition hover:border-gray-400"
          >
            Contactarme
          </a>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm text-violet-400">01 / SOBRE MÍ</p>
          <h2 className="text-4xl font-bold">Un poco sobre mí.</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Estudio Ingeniería en Ciencias de la Computación en la
            Benemérita Universidad Autónoma de Puebla. Me enfoco
            en el desarrollo de aplicaciones móviles con Swift
            y SwiftUI, además de tener experiencia en desarrollo
            de software web.
          </p>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm text-violet-400">02 / PORTAFOLIO</p>
          <h2 className="mb-12 text-4xl font-bold">Proyectos destacados.</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-violet-500/50"
              >
                <p className="mb-5 text-sm text-violet-400">
                  {project.category}
                </p>

                <h3 className="mb-4 text-2xl font-semibold">
                  {project.name}
                </h3>

                <p className="mb-8 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm text-violet-400">03 / CONTACTO</p>
          <h2 className="text-4xl font-bold">¿Trabajamos juntos?</h2>
          <p className="mt-6 max-w-xl text-gray-400">
            Estoy interesado en oportunidades profesionales,
            proyectos y colaboraciones de desarrollo de software.
          </p>

          <a
            href="https://github.com/Peralta24"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-violet-600 px-6 py-3 font-medium hover:bg-violet-500"
          >
            Visitar mi GitHub
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rafael Peralta.
      </footer>
    </main>
  );
}