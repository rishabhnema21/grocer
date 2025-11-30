import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const AddAddress = () => {
  const { navigate, axios } = useAppContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.street.trim()) {
      newErrors.street = "Street address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.zipcode.trim()) {
      newErrors.zipcode = "Zip code is required";
    } else if (!/^\d{5,6}$/.test(formData.zipcode.trim())) {
      newErrors.zipcode = "Please enter a valid zip code";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await axios.post("/api/address/add", { address: formData });
      toast.success("New Address Added");
      setFormData({
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
      });
      setErrors({});
      navigate("/cart");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Some Error Occured";
      toast.error(errorMessage);
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-5 flex justify-evenly items-center">
      <div>
        <div className="text-2xl sm:text-3xl mt-12 font-medium">
          <h2 className="text-gray-700">
            Add New <span className="text-green-600">Address</span>
          </h2>
        </div>

        <div className="mt-4">
          <div className="flex flex-col gap-3">
            <div>
              <input
                name="street"
                onChange={handleChange}
                value={formData.street}
                className="border outline-none border-gray-400 px-3 py-2 w-[100%] rounded-sm"
                type="text"
                placeholder="Enter Street Name"
                disabled={isSubmitting}
              />
              {errors.street && (
                <p className="text-red-500 text-sm mt-1">{errors.street}</p>
              )}
            </div>
            <div className="street flex justify-between gap-3 items-center">
              <div className="w-[100%]">
                <input
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                  className="border outline-none border-gray-400 px-3 py-2 w-[100%] rounded-sm"
                  type="text"
                  placeholder="Enter City"
                  disabled={isSubmitting}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>
              <div className="w-[100%]">
                <input
                  name="state"
                  onChange={handleChange}
                  value={formData.state}
                  className="border outline-none border-gray-400 px-3 py-2 w-[100%] rounded-sm"
                  type="text"
                  placeholder="Enter State"
                  disabled={isSubmitting}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                )}
              </div>
            </div>
            <div className="street flex justify-between gap-3 items-center">
              <div className="w-[100%]">
                <input
                  name="zipcode"
                  onChange={handleChange}
                  value={formData.zipcode}
                  className="border outline-none border-gray-400 px-3 py-2 w-[100%] rounded-sm"
                  type="text"
                  placeholder="Enter Zip Code"
                  disabled={isSubmitting}
                />
                {errors.zipcode && (
                  <p className="text-red-500 text-sm mt-1">{errors.zipcode}</p>
                )}
              </div>
              <div className="w-[100%]">
                <input
                  name="country"
                  onChange={handleChange}
                  value={formData.country}
                  className="border outline-none border-gray-400 px-3 py-2 w-[100%] rounded-sm"
                  type="text"
                  placeholder="Enter Country"
                  disabled={isSubmitting}
                />
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                )}
              </div>
            </div>
            <div>
              <input
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                className="border outline-none border-gray-400 px-3 py-2 w-[100%] rounded-sm"
                type="tel"
                placeholder="Enter Phone Number"
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-[#2B6E4E] mt-3 hover:bg-[#1b5c3d] transition-all duration-200 ease-in cursor-pointer px-10 py-2 text-white rounded-sm disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <img className="w-[30vw]" src="/address.png" alt="" />
      </div>
    </div>
  );
};

export default AddAddress;