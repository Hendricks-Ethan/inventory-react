import React from 'react';
import { Category } from "./Category";
import { inventoryApi } from "../REST/InventoryApi.js";

/* Building the list of categories for the inventory. */

export class CategoryList extends React.Component {
    state = {
        categories: []
    };

    componentDidMount() {
        this.fetchCategories();
    };

    /* Setting the state for categories. */

    fetchCategories = async () => {
        const categories = await inventoryApi.get();
        this.setState({ categories });
    };

    /* Calling the update request. */

    updateCategory = async (updatedCategory) => {
        await inventoryApi.put(updatedCategory);
        this.fetchCategories();
    };

    render() {
        return (
            <div className="body">
                <div className="page-header">My Store Inventory</div>
                    <div className="container">
                        {this.state.categories.map((category) => (
                            <Category 
                                key={category.id} 
                                category={category} 
                                updateCategory={this.updateCategory} 
                            />
                        ))};
                    </div>
            </div>
        );
    };
}