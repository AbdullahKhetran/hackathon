// "use client"

// import { useAppDispatch, useAppSelector } from "@/redux/hooks"
// import { useState } from "react"
// import { getData } from "@/app/cart/cartData"
// import { Product } from "@/types/sanity"
// import { handleChange } from "@/lib/utils"
// import { NewCart } from "@/lib/drizzle"
// import { addToCart, increaseQuantity } from "@/redux/features/cartSlice"
// import { handleAddToCart } from "@/lib/utils"
// import { Minus, Plus, ShoppingCart } from "lucide-react"


// type Prop = {
//     product: Product
//     cartProduct: NewCart
// }

// export default async function Quantity({ product, cartProduct }: Prop) {

//     const userId = useAppSelector(state => state.auth.uid)

//     const [quantity, setQuantity] = useState(1)

//     const dispatch = useAppDispatch()

//     const handleAddToCartClick = async () => {

//         try {
//             const data = await getData(userId)

//             const existingProduct = data.find((item) => item.id === product._id)

//             if (existingProduct) {

//                 const newQuantity = existingProduct.quantity + quantity

//                 await handleChange({ uid: userId, product: existingProduct, quantity: newQuantity })

//                 dispatch(increaseQuantity(existingProduct.id))

//             } else {
//                 handleAddToCart({ product: cartProduct, quantity: quantity, uid: userId }) // updates database
//                 const payload = {
//                     product: cartProduct,
//                     quantity: quantity,
//                 }
//                 dispatch(addToCart(payload)); // updating state
//             }

//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <div>
//             <div className="flex gap-8 items-center">

//                 <h1 className="font-bold text-lg">Quantity:</h1>

//                 <div className='flex gap-3 items-center'>
//                     <button
//                         disabled={quantity === 0 ? true : false}
//                         onClick={() => setQuantity(quantity - 1)}
//                         className='bg-[#f1f1f1] rounded-[50%] p-1'
//                     >
//                         <Minus />
//                     </button>

//                     <h2>{quantity}</h2>

//                     <button
//                         onClick={() => setQuantity(quantity + 1)}
//                         className='border-2 border-black rounded-[50%] p-1'
//                     >
//                         <Plus />
//                     </button>

//                 </div>
//             </div>

//             <div className="flex my-4 gap-2 max-w-[60%] lg:max-w-none">

//                 <button
//                     onClick={handleAddToCartClick}
//                     className="flex gap-2  justify-center items-center grow bg-darkGray text-white font-bold p-3 border-2 border-l-gray-600 border-t-gray-600 border-r-black border-b-black"
//                 >

//                     <ShoppingCart size={28} />
//                     <span> Add to Cart</span>
//                 </button>


//                 <h2 className="self-center text-3xl font-bold tracking-widest">{"$" + product?.price * quantity}</h2>
//             </div>

//         </div>

//     )
// }

