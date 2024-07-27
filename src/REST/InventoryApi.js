const CATEGORY_ENDPOINT = "https://6674d9dc75872d0e0a97b21a.mockapi.io/api/my_projects/category";

/* My request page. */

class InventoryApi {

    get = async () => {
        try {
            const resp = await fetch(CATEGORY_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("Something wrong with GET", e);
        }
    }

    put = async (category) => {
        try {
            const resp = await fetch(`${CATEGORY_ENDPOINT}/${category.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            });
            return await resp.json();
        } catch(e) {
            console.log("Something wrong with PUT", e);
        }
    }
}

export const inventoryApi = new InventoryApi();