import { useEffect, useMemo, useState } from "react"
import PropertyCard from "../components/PropertyCard.jsx"
import { SkeletonCard } from "../components/SkeletonCard.jsx"
import { fetchProperties } from "../services/api.js"

export default function Listings() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [type, setType] = useState("all")
  const [query, setQuery] = useState("")

  useEffect(() => {
    let mounted = true
    fetchProperties()
      .then((res) => {
        if (mounted) {
          setData(res)
          setLoading(false)
        }
      })
      .catch(() => setLoading(false))
    return () => {
      mounted = false
    }
  }, [])

  const filtered = useMemo(() => {
    let list = data
    if (type !== "all") list = list.filter((p) => p.listingType === type)
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter((p) =>
        (p.city + " " + p.state + " " + p.country + " " + p.name)
          .toLowerCase()
          .includes(q)
      )
    }
    return list
  }, [data, type, query])

  return (
    <section className="p-6">
      {/* Header + Filter Buttons */}
      <div className="mb-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold">Property Listings</h1>

        <div className="flex gap-2">
          <button
            onClick={() => setType("all")}
            className={`btn ${type === "all" ? "btn-primary" : "btn-outline"}`}
          >
            All
          </button>
          <button
            onClick={() => setType("sale")}
            className={`btn ${type === "sale" ? "btn-primary" : "btn-outline"}`}
          >
            For Sale
          </button>
          <button
            onClick={() => setType("rent")}
            className={`btn ${type === "rent" ? "btn-primary" : "btn-outline"}`}
          >
            For Rent
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          className="input w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by city, state, country or name..."
        />
      </div>

      {/* Listings Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)
          : filtered.map((p) => <PropertyCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}
