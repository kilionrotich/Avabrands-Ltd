import { useState } from "react";

function News({ posts, bgImages }) {
  const [expandedPostId, setExpandedPostId] = useState(null);

  const handleReadMore = (postId) => {
    setExpandedPostId((currentId) => (currentId === postId ? null : postId));
  };

  return (
    <section id="news" className="border-t border-yellow/20 bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      {bgImages && bgImages[0] && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-60 h-96 w-96">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[0]}`} alt="" className="w-full h-full object-cover rounded-r-3xl" />
        </div>
      )}
      {bgImages && bgImages[1] && (
        <div className="absolute right-0 bottom-0 opacity-55 h-72 w-72">
          <img src={`${import.meta.env.BASE_URL}images/${bgImages[1]}`} alt="" className="w-full h-full object-cover rounded-tl-3xl" />
        </div>
      )}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between bg-black/70 backdrop-blur-sm rounded-2xl p-6 -mx-6 border border-yellow/15">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold font-semibold drop-shadow-sm">News & Updates</p>
            <h2 className="mt-4 text-4xl font-heading uppercase tracking-[0.08em] md:text-6xl text-gold font-bold drop-shadow-sm">
              Latest from the studio.
            </h2>
          </div>
          <button
            type="button"
            className="interactive-button rounded-full border border-yellow/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gold/70 hover:border-yellow hover:text-gold font-medium"
          >
            View All
          </button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => {
            const isExpanded = expandedPostId === post.id;

            return (
            <article key={post.id} className="rounded-2xl border border-yellow/20 bg-black/80 backdrop-blur-sm p-6 hover:border-yellow/40 transition shadow-md">
              <p className="text-xs uppercase tracking-[0.25em] text-gold/70 font-medium">{post.date}</p>
              <h3 className="mt-4 text-xl font-heading uppercase tracking-[0.08em] text-gold font-bold drop-shadow-sm">
                {post.title}
              </h3>
              <p className="mt-3 text-base text-gold font-medium">{post.excerpt}</p>
              {isExpanded && post.content ? (
                <div className="mt-4 space-y-3 border-t border-yellow/20 pt-4">
                  {post.content.map((paragraph, idx) => (
                    <p key={idx} className="text-sm leading-relaxed text-gold/85">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}
              <button
                type="button"
                onClick={() => handleReadMore(post.id)}
                className="interactive-button mt-6 text-xs uppercase tracking-[0.3em] text-gold font-bold hover:text-gold/80"
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default News;
