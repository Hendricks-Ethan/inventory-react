import React, { useState } from 'react';

/* Creating states for each piece of info for a product. */

export const NewProductForm = (props) => {
    const [productName, setProductName] = useState('');
    const [costPerCase, setCostPerCase] = useState(undefined);
    const [unitsPerCase, setUnitsPerCase] = useState(undefined);
    const [casesOnHand, setCasesOnHand] = useState(undefined);
    const [unitsOnHand, setUnitsOnHand] = useState(undefined);

    /* Making handle functions for the inputs that are only supposed to be number. */

    const handleCostPerCaseInput = (e) => {
        const int = parseInt(e.target.value);
        setCostPerCase(int >= 0 ? int : "");
    }

    const handleUnitsPerCaseInput = (e) => {
        const int = parseInt(e.target.value);
        setUnitsPerCase(int >= 0 ? int : "");
    }
    const handleCasesOnHandInput = (e) => {
        const int = parseInt(e.target.value);
        setCasesOnHand(int >= 0 ? int : "");
    }
    const handleUnitsOnHandInput = (e) => {
        const int = parseInt(e.target.value);
        setUnitsOnHand(int >= 0 ? int : "");
    }

    /* The submit function for pushing the inputed data in a form for a category to the corresponding products array. */ 

    const onSubmit = (e) => {
        e.preventDefault();
        if (productName && costPerCase && unitsPerCase && casesOnHand && unitsOnHand) {
            props.addProduct({productName, costPerCase, unitsPerCase, casesOnHand, unitsOnHand});
            setProductName('');
            setCostPerCase('');
            setUnitsPerCase('');
            setCasesOnHand('');
            setUnitsOnHand('');
        } else {
            console.log('Invalid Input');
        };
    }

    return (
        <div>
            <h4>Add a Product</h4>
            <form className="row" onSubmit={onSubmit}>
                <input className="col-3"
                    type="text"
                    placeholder="Product Name"
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                />
                <input className="col"
                    type="text"
                    placeholder="Cost Per Case"
                    onChange={handleCostPerCaseInput}
                    value={costPerCase}
                />
                <input className="col"
                    type="text"
                    placeholder="Units Per Case"
                    onChange={handleUnitsPerCaseInput}
                    value={unitsPerCase}
                />
                <input className="col"
                    type="text"
                    placeholder="Cases On Hand"
                    onChange={handleCasesOnHandInput}
                    value={casesOnHand}
                />
                <input className="col"
                    type="text"
                    placeholder="Units On Hand"
                    onChange={handleUnitsOnHandInput}
                    value={unitsOnHand}
                />
                <button className="col btn btn-primary" type="submit">Add Product</button>
            </form>
        </div>
    );
}