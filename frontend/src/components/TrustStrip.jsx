const stats = [
  { label: "On-time delivery", value: "96%" },
  { label: "Quality assurance checks", value: "200+" },
  { label: "Regional partners", value: "40" }
];

function TrustStrip() {
  return (
    <section className="border-y border-teal-primary/10 bg-[#178A98]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-teal-primary/60">{stat.label}</p>
              <p className="mt-2 text-2xl font-heading text-teal-primary font-bold">{stat.value}</p>
            </div>
            <div className="h-10 w-px bg-teal-secondary/20" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustStrip;
