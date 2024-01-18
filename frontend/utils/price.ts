export const calculatePrice = (distance: number): number => {
  const basePrice = 6000 // Harga dasar untuk jarak kurang dari 3 km
  const pricePerKm = 2000 // Harga per kilometer untuk jarak lebih dari 3 km

  if (distance < 3) {
    // Jarak kurang dari 3 km
    return basePrice
  } else {
    // Jarak lebih dari 3 km
    const additionalDistance = distance - 3
    const additionalPrice = additionalDistance * pricePerKm
    return basePrice + additionalPrice
  }
}
