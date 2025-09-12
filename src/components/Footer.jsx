export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-200">
      <div className="section">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Propify</h3>
            <p className="text-slate-400">
              Find your dream home in one click. Beautiful properties for sale
              and rent worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-slate-400">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/listings" className="hover:text-white">
                  Properties
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Newsletter</h4>
            <Newsletter />
          </div>
        </div>
        <p className="mt-10 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Propify. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function Newsletter() {
  const onSubmit = (e) => {
    e.preventDefault()
    const email = new FormData(e.currentTarget).get("email")
    const list = JSON.parse(localStorage.getItem("newsletter") || "[]")
    list.push({ email, at: new Date().toISOString() })
    localStorage.setItem("newsletter", JSON.stringify(list))
    e.currentTarget.reset()
    alert("Subscribed!")
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className="input bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-400"
      />
      <button className="btn-primary">Subscribe</button>
    </form>
  )
}
