import React, { useContext, useState, useEffect } from "react"
import { ProductContext } from "../products/ProductProvider.js"
// import { ProfileContext } from "../auth/ProfileProvider.js"
import { useHistory, useParams } from 'react-router-dom'


export const ProductForm = () => {
    const history = useHistory()
    const { product, createProduct, getProductTypes, productTypes, getProductById, updateProduct } = useContext(ProductContext)
    // const { getProfile } = useContext(ProfileContext)

    const { productId } = useParams()

    const [currentProduct, setCurrentProduct] = useState({
        name: "",
        price: 0,
        description: "",
        quantity: "",
        image_path: null,
        product_type: 0
    })

    // {
    //     "id": 1,
    //     "name": "The Classic",
    //     "price": 10.0,
    //     "description": "",
    //     "quantity": 0,
    //     "image_path": null,
    //     "product_type": {
    //         "id": 1,
    //         "name": "Burgers"
    //     }
    // }
    /*
        Get Product types on initialization so that the <select>
        element presents Product type choices to the user.
    */
    useEffect(() => {
        getProductTypes()
        
        if (productId) {
            getProductById(parseInt(productId))
             .then(product => setCurrentProduct({
                 name: product.name,
                 price: product.price,
                 description: product.description,
                 product_type: product.product_type.id
 
             }))
         }
    }, [])
    
    // useEffect(() => {
    //    if (productId) {   
    //        getProductById(parseInt(productId))
    //         .then(Product => setCurrentProduct({
    //             skillLevel: Product.skill_level,
    //             numberOfPlayers: Product.number_of_players,
    //             title: Product.title,
    //             maker: Product.maker,
    //             ProductTypeId: Product.Product_type.id

    //         }))
    //     }
    // }, [productId])

    /*
        REFACTOR CHALLENGE START

        Can you refactor this code so that all property
        state changes can be handled with a single function
        instead of five functions that all, largely, do
        the same thing?

        One hint: [event.target.name]
    */
    const changeProductState = (event) => {
        const newProductState = { ...currentProduct }
        newProductState[event.target.name] = event.target.value
        setCurrentProduct(newProductState)
    }

    // const changeProductMakerState = (event) => {
    //     const newProductState = { ...currentProduct }
    //     newProductState.maker = event.target.value
    //     setCurrentProduct(newProductState)
    // }

    // const changeProductPlayersState = (event) => {
    //     const newProductState = { ...currentProduct }
    //     newProductState.numberOfPlayers = event.target.value
    //     setCurrentProduct(newProductState)
    // }

    // const changeProductSkillLevelState = (event) => {
    //     const newProductState = { ...currentProduct }
    //     newProductState.skillLevel = event.target.value
    //     setCurrentProduct(newProductState)
    // }

    const changeProductTypeState = (event) => {
        const newProductState = { ...currentProduct }
        newProductState.ProductTypeId = event.target.value
        setCurrentProduct(newProductState)
    }
    /* REFACTOR CHALLENGE END */

    return (
        <form className="ProductForm">
            { productId ? <h2 className="ProductForm__title">Edit Product</h2> : <h2 className="ProductForm__title">Register New Product</h2>}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentProduct.name}
                        onChange={changeProductState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input type="text" name="price" required autoFocus className="form-control"
                        value={currentProduct.price}
                        onChange={changeProductState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentProduct.description}
                        onChange={changeProductState}
                    />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="skillLevel">Skill Level: </label>
                    <input type="number" name="skillLevel" required autoFocus className="form-control"
                        value={currentProduct.skillLevel}
                        onChange={changeProductState}
                    />
                </div>
            </fieldset> */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ProductTypeId">Product Type: </label>
                    <select name="product_type" required className="form-control"
                        value={currentProduct.product_type}
                        onChange={changeProductTypeState}
                    >
                        <option key="0" value="0">Select Product Type</option>
                        {productTypes.map(gt => (
                            <option key={gt} value={gt.id}>{gt.name}</option>
                        ))}
                    </select>
                </div>
            </fieldset>
                              
            {/* You create the rest of the input fields for each Product property */}
            { productId ? <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const product = {
                        id: parseInt(productId),
                        name: currentProduct.name,
                        price: currentProduct.price,
                        description: currentProduct.description,
                        skillLevel: parseInt(currentProduct.skillLevel),
                        quantity: 0,
                        image_path: null,
                        product_type: parseInt(currentProduct.product_type)
                    }

                    // Send POST request to your API
                    updateProduct(product)
                        .then(() => history.push("/admin/products"))
                }}
                className="btn btn-primary">Update</button> 
             : <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const product = {
                        mame: currentProduct.name,
                        price: currentProduct.price,
                        description: currentProduct.description,
                        skillLevel: parseInt(currentProduct.skillLevel),
                        quantity: 0,
                        image_path: null,
                        product_type: parseInt(currentProduct.product_type)
                    }

                    // Send POST request to your API
                    createProduct(product)
                        .then(() => history.push("/admin/products"))
                }}
                className="btn btn-primary">Create</button>}
        </form>
    )
}
