export function filterData(searchInput, restaurants) {
    const filData = restaurants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filData;
}
