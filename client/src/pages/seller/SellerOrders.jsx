import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";
import toast from "react-hot-toast";

const SellerOrders = () => {
    const boxIcon = "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/boxIcon.svg"

    // const orders = [
    //     { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
    //     { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
    //     { id: 1, items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }], address: { firstName: "John", lastName: "Doe", street: "123 Main St", city: "New York", state: "NY", zipcode: "10001", country: "USA"}, amount: 320.0, paymentType: "Credit Card", orderDate: "10/10/2022", isPaid: true },
    // ];

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [orders, setOrders] = useState([]);
    const { axios } = useAppContext();

    const getSellerOrders = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get("/api/order/all");
            console.log("API Response for Seller Orders: ", data);
            if (data.success && data.orders) {
                setOrders(data.orders);
            } else {
                setOrders([]);
                setError(data.message || "No Orders Found");
            }
        } catch(err) {
            console.log(err);
            setError("Failed to fetch orders");
            toast.error(error);
            setOrders([]);
        } finally {
            setLoading(false);
        }
        
    }

    useEffect(() => {
        getSellerOrders();
    }, [])

    if (loading) return <p className="p-4">Loading orders...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (orders.length === 0) return <p className="p-4">You have no orders yet.</p>;

    return (
        <div className="md:p-10 p-4 space-y-4">
            <h2 className="text-lg font-medium">Orders List</h2>
            {orders.map((order, index) => (
                <div key={index} className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800">
                    <div className="flex gap-5">
                        <div className="bg-emerald-200 p-3 rounded-sm">
                            <img className="w-12 h-12 object-cover opacity-60" src={boxIcon} alt="boxIcon" />
                        </div>
                        <div className="flex flex-col">
                            {order.items.map((item, index) => (
                                <div key={index} className="flex flex-col justify-center">
                                    <p className="font-medium">
                                        {item.productId.name} <span className={`text-indigo-500 ${item.quantity < 2 && "hidden"}`}>x {item.quantity}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-sm">
                        {/* <p className='font-medium mb-1'>{order.address.firstName} {order.address.lastName}</p> */}
                        <p>{order.addressId.street}, {order.addressId.city}, {order.addressId.state},{order.addressId.zipcode}, {order.addressId.country}</p>
                    </div>

                    <p className="font-medium text-base my-auto text-black/70">&#8377;{order.totalAmount}</p>

                    <div className="flex flex-col text-sm">
                        <p>Method: {order.paymentType}</p>
                        <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                        <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SellerOrders;