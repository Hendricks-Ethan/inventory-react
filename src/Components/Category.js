import React from 'react';
import { NewProductForm } from './NewProductForm';

/* Building the conatiners for each category and it's corresponding products. */

export const Category = (props) => {
    const { category, updateCategory } = props;

    const deleteProduct = (productId) => {
        const updatedCategory = {
            ...category, 
            products: category.products.filter((product) => product.productName !== productId)
        };
        updateCategory(updatedCategory);
    }

    const addProduct = (productName) => updateCategory({ ...category, products: [...category.products, productName]});

    /* Building the table data for the list of products. */

    const products = () => (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Cost per Case</th>
                        <th>Units per Case</th>
                        <th>Cases On Hand</th>
                        <th>Units on Hand</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {category.products.map((product, index) => (
                    <tr key={index}>
                        <td>{`${product.productName}`}</td>
                        <td>{`$${product.costPerCase}`}</td>
                        <td>{`${product.unitsPerCase}`}</td>
                        <td>{`${product.casesOnHand}`}</td>
                        <td>{`${product.unitsOnHand}`}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteProduct(product.productName)}>Delete Product</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

    /* Putting the category, form, and table data all together. */

    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    <h1>{category.categoryName}</h1>
                </div>
                <div className="card-body">
                    <NewProductForm addProduct={addProduct} />
                </div>
                <br/>
            {
                products({ products, categoryId: category.id, deleteProduct})
            }
            </div>
            <br/>
        </div>
    );
};
