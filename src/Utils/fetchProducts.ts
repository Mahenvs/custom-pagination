export const fetchProducts = async (currentPage: Number) => {
    console.log(currentPage);
    const limit:Number = 4
    // const skip = currentPage + 
    try {
        const res = await fetch(
            `https://dummyjson.com/products?limit=${limit}&skip=${currentPage}&select=title,price`
        );
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Fetched data:", data);
        return data
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }

}
