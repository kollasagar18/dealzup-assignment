export default function Hero() {
  return (
    <section className="relative">
      <div className="container-xl grid md:grid-cols-2 gap-8 items-center py-10 md:py-16">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Find Your <span className="text-brand">Dream Home</span> in One Click!</h1>
          <p className="mt-3 text-slate-600">Discover featured properties across the globe. Buy or rent with confidence.</p>
          <div className="mt-6 flex gap-3">
            <a href="/listings" className="btn-primary">Browse Properties</a>
            <a href="#what-we-do" className="btn-outline">What We Do</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            className="w-full h-64 md:h-80 object-cover"
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
            alt="Modern house"
          />
        </div>
      </div>
    </section>
  )
}
