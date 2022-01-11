import React, { useContext, useState, useEffect } from "react"
import { ProductContext } from "../products/ProductProvider.js"
// import { ProfileContext } from "../auth/ProfileProvider.js"
import { useHistory, useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
  });
  

export const ProductForm = () => {
    const name = React.createRef()
    const price = React.createRef()
    const description = React.createRef()
    const productType = React.createRef()
    const [ nameError, setNameError ] = useState(false)
    const [ priceError, setPriceError ] = useState(false)
    const [ descriptionError, setDescriptionError ] = useState(false)
    const [ productTypeError, setProductTypeError ] = useState(false)
    const [ helperNameText, setHelperNameText ] = useState(" ")
    const [ helperPriceText, setHelperPriceText ] = useState(" ")
    const [ helperDescriptionText, setHelperDescriptionText ] = useState(" ")
    const [ helperProductTypeText, setHelperProductTypeText ] = useState(" ")
    const history = useHistory()
    const { product, image, setImage, createImage, deleteProduct, createProduct, getProductTypes, productTypes, getProductById, updateProduct } = useContext(ProductContext)
    // const { getProfile } = useContext(ProfileContext)

    const { productId } = useParams()
    const [ productImage, setProductImage ] = useState({})
    const [currentProduct, setCurrentProduct] = useState({
        name: "",
        price: "",
        description: "",
        quantity: "",
        image_path: "",
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
        if (event.target.name === "name") { setNameError(false) }
        if (event.target.name === "price") { setPriceError(false) }
        if (event.target.name === "description") { setDescriptionError(false) }
        if (event.target.name === "product_type") { setDescriptionError(false) }
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
        setProductTypeError(false)
        setHelperProductTypeText(" ")
    }

    const handleRemove = (id) => {
        deleteProduct(id)
        .then(history.push("/admin/products"))
      }
    /* REFACTOR CHALLENGE END */

    return (
        <form className="productForm form--product">
            { productId ? <h2 className="ProductForm__title">Edit Product</h2> : <h2 className="ProductForm__title">New Product</h2>}
            { productId ? <div><img src={currentProduct.image_path} alt =""/> </div> : ""}
            <fieldset>
                <TextField 
                        inputRef={name}
                        fullWidth
                        name="name"
                        id="outlined-helperText"
                        label="Product Name"
                        type="text"
                        value={currentProduct.name}
                        onChange={changeProductState}
                        error={nameError}
                        helperText={helperNameText}
                    />
            </fieldset>
            <fieldset>
            <TextField 
                    inputRef={price}
                    fullWidth
                    name="price"
                    id="outlined-helperText"
                    label="Price"
                    type="text"
                    value={currentProduct.price}
                    onChange={changeProductState}
                    error={priceError}
                    helperText={helperPriceText}
                />
            </fieldset>
            <fieldset>
            <TextField 
                    inputRef={description}
                    fullWidth
                    name="description"
                    id="outlined-helperText"
                    label="Description"
                    type="text"
                    value={currentProduct.description}
                    onChange={changeProductState}
                    error={descriptionError}
                    helperText={helperDescriptionText}
                />
            </fieldset>
            <fieldset>
                {/* <FormControl> */}
                    {/* <InputLabel >Product Type: </InputLabel> */}
                    <TextField inputRef={productType} select fullWidth name="product_type" label="Product Type" className="form-control"
                        value={currentProduct.product_type}
                        onChange={changeProductTypeState}
                        error={productTypeError}
                        helperText={helperProductTypeText}
                    >
                        <MenuItem key="0" value="0">Select Product Type</MenuItem>
                        {productTypes.map(gt => (
                            <MenuItem key={gt} value={gt.id}>{gt.name}</MenuItem>
                        ))}
                        
                    </TextField>
                    {/* </FormControl> */}
            </fieldset>

            <fieldset className="productForm__upload">
                
                <h3>Upload an image:</h3>
                {/* <input type="file" id="game_image" onChange={createProductImageString} /> */}
                <label htmlFor="contained-button-file">
                <Input onChange={createProductImageString} id="contained-button-file" type="file" />
                <Button variant="contained" component="span">
                Upload Product Image
                </Button>
                </label>
                
            </fieldset>
            { productId ? <div className="productForm__upload"><Button variant="contained" type="submit"
                onClick={evt => {
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
                className="btn btn-primary">Update</Button>
                <Button variant="contained" color="error" onClick={() => {handleRemove(parseInt(productId))}}>Delete</Button></div>
             : <div className="productForm__upload"><Button variant="contained" type="submit"
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
                    if (name.current.value.length === 0) {
                        setNameError(true)
                        setHelperNameText("Can't be blank")
                    }
                    if (price.current.value.length === 0 ) {
                        setPriceError(true)
                        setHelperPriceText("Can't be blank")
                    }
                    if (description.current.value.length === 0 ) {
                        setDescriptionError(true)
                        setHelperDescriptionText("Can't be blank")
                    }
                    if (productType.current.value === 0 ) {
                        setProductTypeError(true)
                        setHelperProductTypeText("Can't be blank")
                    }
                    // Send POST request to your API
                    else {
                        createProduct(product)
                        .then(() => history.push("/admin/products"))
                    }
                }}
                className="btn btn-primary">Create</Button></div>}
        </form>
    )
}
