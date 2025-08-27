import React from "react";

const CheckoutForm = () => {
  return (
    <div className="my-32 bg-white">
      <div className="max-w-lg mx-auto p-8 rounded-md border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Checkout
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-slate-300"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              placeholder="123-456-7890"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-slate-300"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Address
            </label>
            <textarea
              placeholder="123 Main Street, City, Country"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-slate-300 resize-none"
              rows={3}
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Payment Method
            </label>
            <select
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-slate-300"
            >
              <option value="cod">Cash on Delivery</option>
              <option value="esewa">eSewa</option>
              <option value="khalti">Khalti</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm
