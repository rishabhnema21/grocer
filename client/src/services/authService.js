import axios from "axios";

export const loginUser = async (email, password) => {
    const { data } = await axios.post("/api/user/login", {email, password});
    return data;
};

export const registerUser = async (name, email, password) => {
    const { data } = await axios.post("/api/user/register", {name, email, password});
    return data;
};

export const logoutUser = async () => {
    await axios.get("/api/user/logout");
}