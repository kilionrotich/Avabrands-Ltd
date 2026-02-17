function News({ posts }) {
  return (
    <section id="news" className="border-t border-white/10 bg-[#0d0d0d] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">News & Updates</p>
            <h2 className="mt-4 text-3xl font-heading uppercase tracking-[0.08em] md:text-5xl">
              Latest from the studio.
            </h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70 hover:border-gold hover:text-gold"
          >
            View All
          </button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">{post.date}</p>
              <h3 className="mt-4 text-lg font-heading uppercase tracking-[0.08em] text-gold">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{post.excerpt}</p>
              <button type="button" className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
