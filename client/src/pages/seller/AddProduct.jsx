import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddProduct = () => {

    const { axios, navigate } = useAppContext();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [productData, setProductData] = useState({
        images: [],
        name: "",
        description: "",
        category: "",
        price: "",
        offerPrice: "",
    })

    const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const imageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Only image files allowed");
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
        toast.error("Max size should be 3 MB");
        return;
    }

    setProductData((prev) => ({
        ...prev,
        images: [...prev.images, file],
    }))
  }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formdata = new FormData();

            productData.images.forEach((img) => {
                formdata.append("images", img);
            })

            Object.keys(productData).forEach((key) => {
                if (key != "images") {
                    formdata.append(key, productData[key]);
                }
            })

            const res = await axios.post("/api/product/add", formdata, { headers: { "Content-Type": "multipart/form-data" }, });
            toast.success("New Product Added");
            setProductData({
                images: [],
                name: "",
                description: "",
                category: "",
                price: "",
                offerPrice: "",
            })
            setErrors({});
            navigate("/seller/product-list");
        } catch(err) {  
            const errorMessage = err.response?.data?.message || "Some Error Occured";
            toast.error(errorMessage);
            console.log(err);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="py-10 w-full flex flex-col justify-between bg-white">
            <h2 className="md:px-10 px-4 font-semibold text-2xl space-y-5 max-w-lg">Add New Item </h2>
            <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
                <div>
                    <p className="text-base font-medium">Product Image</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">

                        {productData.images.map((img, i) => (
                            <img key={i} src={URL.createObjectURL(img)} alt="preview" className="w-24 h-24 object-cover rounded" />
                        ))}

                        {Array(4 - productData.images.length).fill('').map((_, i) => (
                            <label key={i} htmlFor={`image${i}`}>
                                <input accept="image/*" type="file" id={`image${i}`} hidden onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setProductData(prev => ({
                                            ...prev,
                                            images: [...prev.images, file]
                                        }))
                                    }
                                }} />
                                <img className="max-w-24 cursor-pointer" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png" alt="uploadArea" width={100} height={100} />
                            </label>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
                    <input id="product-name" name="name" value={productData.name} onChange={handleChange} type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
                    <textarea id="product-description" name="description" value={productData.description} onChange={handleChange} rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-base font-medium" htmlFor="category">Category</label>
                    <select id="category" name="category" value={productData.category} onChange={handleChange} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
                        <option value="">Select Category</option>
                        {[{ name: 'Vegetables' }, { name: 'Fruits' }, { name: 'Dairy' }, { name: 'instant foods' }].map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
                        <input id="product-price" name="price" value={productData.price} onChange={handleChange} type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
                        <input id="offer-price" name="offerPrice" value={productData.offerPrice} onChange={handleChange} type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>
                <button className="bg-[#2B6E4E] hover:bg-[#1b5c3d] transition-all duration-200 ease-in cursor-pointer px-10 py-2 text-white rounded-sm">ADD</button>
            </form>
        </div>
    );
};

export default AddProduct;