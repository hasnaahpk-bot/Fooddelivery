import React, { useContext } from 'react'
import { StoreContext } from '../context/Store.Context';

const FoodDisplay = () => {
  const { food_list, cart, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="px-4 sm:px-6 md:px-16 py-10" id='menu'>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
        Top dishes near you
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food_list.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 sm:h-52 md:h-56 object-cover"
            />

            <div className="p-4">
              <h3 className="text-base sm:text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-3">
                <p className="text-orange-600 font-semibold text-sm sm:text-base">
                  ${item.price}
                </p>

                {cart[item._id] ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="bg-orange-500 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex justify-center items-center"
                    >
                      -
                    </button>
                    <span className="text-sm sm:text-base">{cart[item._id]}</span>
                    <button
                      onClick={() => addToCart(item._id)}
                      className="bg-orange-500 text-white w-6 h-6 sm:w-7 sm:h-7 rounded-full flex justify-center items-center"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(item._id)}
                    className="bg-orange-500 text-white rounded-full w-8 h-8 sm:w-9 sm:h-9 flex justify-center items-center text-xl hover:bg-orange-600"
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodDisplay
