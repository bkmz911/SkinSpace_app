export async function getInventory() {
    try {
        const response = await fetch("http://localhost:3001/api/inventory", {
            credentials: "include",
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}
