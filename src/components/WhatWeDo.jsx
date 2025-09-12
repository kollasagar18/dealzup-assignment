const items = [
  { title: "Buy Homes", desc: "Explore thousands of verified homes for sale." },
  { title: "Rent Homes", desc: "Hand-picked rentals at great locations." },
  { title: "Property Tours", desc: "Schedule in-person or virtual tours." },
  { title: "Trusted Agents", desc: "Talk to verified local experts." },
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">What We Do</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div key={i} className="card p-5">
            <div className="h-10 w-10 rounded-xl bg-brand/10 flex items-center justify-center mb-3">✨</div>
            <h3 className="font-semibold">{it.title}</h3>
            <p className="text-slate-600 text-sm mt-1">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
