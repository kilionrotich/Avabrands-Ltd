function News({ posts, bgImages }) {
  return (
    <section id="news" className="border-t border-white/10 bg-[#0d0d0d] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
      {bgImages && bgImages[0] && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-35 h-96 w-96">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[0]}`} alt="" className="w-full h-full object-cover rounded-r-3xl" />
        </div>
      )}
      {bgImages && bgImages[1] && (
        <div className="absolute right-0 bottom-0 opacity-30 h-72 w-72">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[1]}`} alt="" className="w-full h-full object-cover rounded-tl-3xl" />
        </div>
      )}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">News & Updates</p>
            <h2 className="mt-4 text-4xl font-heading uppercase tracking-[0.08em] md:text-6xl text-text-light">
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
              <p className="text-xs uppercase tracking-[0.25em] text-text-light/50">{post.date}</p>
              <h3 className="mt-4 text-xl font-heading uppercase tracking-[0.08em] text-gold">
                {post.title}
              </h3>
              <p className="mt-3 text-base text-text-light/70">{post.excerpt}</p>
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
