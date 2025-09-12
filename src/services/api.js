import axios from "axios"
import { stableTypeFromId } from "../utils/index.js"

export const API_URL = "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"

export async function fetchProperties() {
  try {
    const { data } = await axios.get(API_URL)
    // Normalize by adding listingType (sale/rent based on id)
    return data.map((p) => ({
      ...p,
      listingType: stableTypeFromId(p.id),
    }))
  } catch (err) {
    console.error("❌ Failed to fetch properties:", err)
    return []
  }
}
