import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'machadodev - Artigos',
  description: 'Leia meus artigos.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold mb-8 tracking-tighter">Artigos</h1>
      <BlogPosts />
    </section>
  )
}
