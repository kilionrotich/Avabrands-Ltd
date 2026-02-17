const stats = [
  { label: "On-time delivery", value: "96%" },
  { label: "Quality assurance checks", value: "200+" },
  { label: "Regional partners", value: "40" }
];

function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
              <p className="mt-2 text-2xl font-heading text-gold">{stat.value}</p>
            </div>
            <div className="h-10 w-px bg-white/10" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustStrip;
