import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projetos',
  },
  '/blog': {
    name: 'Artigos',
  },
  '/about': {
    name: 'Sobre',
  }
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-hidden scroll-pr-6 md:relative"
          id="nav"
        >
          <Link className='flex flex-col no-underline active:translate-y-1 transition-all' href="/">
            <strong>machadodev</strong>
            <p className='absolute top-5 sm:relative sm:top-auto'>
              <span className="block sm:inline">Software </span>
              <span className="block sm:inline">Engineer</span>
            </p>
          </Link>
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-red-100 flex align-middle relative sm:py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
