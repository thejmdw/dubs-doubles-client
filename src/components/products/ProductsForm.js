import React, { useContext, useState, useEffect } from "react"
import { ProductContext } from "../products/ProductProvider.js"
// import { ProfileContext } from "../auth/ProfileProvider.js"
import { useHistory, useParams } from 'react-router-dom'


export const ProductForm = () => {
    const history = useHistory()
    const { product, image, setImage, createImage, createProduct, getProductTypes, productTypes, getProductById, updateProduct } = useContext(ProductContext)
    // const { getProfile } = useContext(ProfileContext)

    const { productId } = useParams()
    const [ productImage, setProductImage ] = useState({})
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
                 product_type: product.product_type.id,
                 image_path: product.image_path
             }))
         }
    }, [])
    
    useEffect(() => {
        setProductImage(currentProduct.image_path)
    }, [currentProduct])
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

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }
    
    const createProductImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            console.log("Base64 of file is", base64ImageString);
            setProductImage(base64ImageString)
            // Update a component state variable to the value of base64ImageString
        });
    }

    const changeProductTypeState = (event) => {
        const newProductState = { ...currentProduct }
        newProductState.product_type = parseInt(event.target.value)
        setCurrentProduct(newProductState)
    }
    /* REFACTOR CHALLENGE END */

    return (
        <form className="ProductForm">
            { productId ? <h2 className="ProductForm__title">Edit Product</h2> : <h2 className="ProductForm__title">Register New Product</h2>}
            { productId ? <div><img src={currentProduct.image_path} /> </div> : ""}
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

            <div> <h3>Upload an image:</h3>
                            <input type="file" id="game_image" onChange={createProductImageString} />
                            {/* <input type="hidden" name="prod_id" value={product.id} /> */}
                            {/* <button onClick={(evt) => {
                                // Upload the stringified image that is stored in state
                                evt.preventDefault()

                                const image = {
                                    productId: productId,
                                    image: productImage
                                }

                                createImage(image)
                            }}>Upload</button> */}
                        </div>

            {/* You create the rest of the input fields for each Product property */}
            { productId ? <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    const product = {
                        id: parseInt(productId),
                        name: currentProduct.name,
                        price: parseInt(currentProduct.price),
                        description: currentProduct.description,
                        quantity: 0,
                        product_type: parseInt(currentProduct.product_type)
                    }
                    const productImageSplit = productImage.split('/')

                    productImageSplit[0] === 'http:' ? product.image_path = currentProduct.image_path : product.image_path = productImage

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
                        name: currentProduct.name,
                        price: currentProduct.price,
                        description: currentProduct.description,
                        quantity: 0,
                        image_path: productImage,
                        product_type_id: parseInt(currentProduct.product_type)
                    }

                    // Send POST request to your API
                    createProduct(product)
                        .then(() => history.push("/admin/products"))
                }}
                className="btn btn-primary">Create</button>}
        </form>
    )
}
