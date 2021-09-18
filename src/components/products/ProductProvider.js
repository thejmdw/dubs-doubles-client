import React, { useState } from "react"

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {
    const [ products, setProducts ] = useState([])
    const [ product, setProduct ] = useState({})
    const [ productTypes, setProductTypes ] = useState([])
    const [ image, setImage ] = useState({})

    const createProduct = (product) => {
        return fetch("http://localhost:8000/products", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(product)
         })
            .then(setProduct(product))
            // .then()
    }
    
    const createImage = (image) => {
        return fetch("http://localhost:8000/images", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            },
            body: JSON.stringify(image)
         })
            .then(setImage(image))
            // .then()
    }

    const updateProduct = (product) => {
        return fetch(`http://localhost:8000/products/${product.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            },
            body: JSON.stringify(product)
         })
            .then(setProduct(product))
            // .then()
    }
    
    const getProductById = (id) => {
        return fetch(`http://localhost:8000/products/${id}`, { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            // .then(setProduct)
    }

    const getProductTypes = () => {
        return fetch("http://localhost:8000/producttypes", { 
            headers:{
                "Authorization": `Token ${localStorage.getItem("dd_token")}`
            }
        })
            .then(response => response.json())
            .then(setProductTypes)
    }

    // const getBurgers = () => {
    //     return fetch("http://localhost:8000/products?product_type=2", { 
    //         headers:{
    //             "Authorization": `Token ${localStorage.getItem("dd_token")}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(setBurgers)
    // }

    return (
        <ProductContext.Provider value={{ product, productTypes, image, setImage, createImage, createProduct, getProductById, updateProduct, getProductTypes }} >
            { props.children }
        </ProductContext.Provider>

    )
}
