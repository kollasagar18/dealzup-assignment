/* A compact property card that matches the assignment data model */
export default function PropertyCard({ p }) {
  return (
    <div className="card overflow-hidden group">
      <div className="relative">
        <img
          src={p.image}
          alt={p.name}
          className="h-44 w-full object-cover transition-transform group-hover:scale-[1.02]"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
          {p.listingType === "sale" ? "For Sale" : "For Rent"}
        </span>
      </div>
      <div className="p-4">
        <h4 className="font-semibold">{p.name}</h4>
        <p className="text-slate-600 text-sm">
          {p.city}, {p.state}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-slate-500 text-xs">
            Owner:{" "}
            <span className="font-medium text-slate-700">{p.ownerName}</span>
          </p>
          <a
            href={`tel:${p.contactNumber}`}
            className="text-brand text-sm hover:underline"
          >
            Call
          </a>
        </div>
      </div>
    </div>
  )
}
