import { useContext } from "react"
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from "../../Context"



const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (ProductDetail) => {
        context.openProductDetail()
        context.setproductToShow(ProductDetail)


    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()


    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 m-2 bg-black rounded-full">
                    <CheckIcon className="w-6 h-6 text-white"></CheckIcon>
                </div>

            )

        } else {
            return (
                <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 m-2 bg-white rounded-full"
                    onClick={(event) => addProductsToCart(event, data.data)}>
                    <PlusIcon className="w-6 h-6 text-black" ></PlusIcon>
                </div>
            )
        }
    }
    return (
        <div
            className="w-56 bg-white rounded-lg cursor-pointer h-60"
            onClick={() => showProduct(data.data)}>
            <figure className="relative w-full mb-2 h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
                <img className="object-cover w-full h-full rounded-lg" src={data.data.images[0]} alt={data.data.description}></img>
                {renderIcon(data.data.id)}

            </figure>
            <p className="flex justify-between ">
                <span className="text-sm font-light">{data.data.description}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card