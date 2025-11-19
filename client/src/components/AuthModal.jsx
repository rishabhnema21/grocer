import React, { useState } from "react";
import {
  Modal,
  Backdrop,
  Box,
  Fade,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    sm: 380,
    md: 420 
  },
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

const AuthModal = () => {
  const {
    showUserLogin,
    setShowUserLogin,
    authMode,
    setAuthMode,
    setUser,
    handleUserLogin,
    handleUserRegister,
    logoutUser,
    navigate
  } = useAppContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (authMode === "register" && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      if (authMode === "login") {
      await handleUserLogin(formData.email, formData.password);
    } else {
      await handleUserRegister(formData.name, formData.email, formData.password);
    }
    navigate("/");
    setShowUserLogin(false);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <Modal
      open={showUserLogin}
      onClose={() => setShowUserLogin(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={showUserLogin}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" mb={2}>
            {authMode === "login" ? "Login to Your Account" : "Create an Account"}
          </Typography>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {authMode === "register" && (
              <TextField
                label="Full Name"
                type="text"
                name="name"
                required
                size="small"
                value={formData.name}
                onChange={handleChange}
              />
            )}

            <TextField
              label="Email"
              type="email"
              name="email"
              required
              size="small"
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              label="Password"
              type="password"
              name="password"
              required
              size="small"
              value={formData.password}
              onChange={handleChange}
            />

            {authMode === "register" && (
              <TextField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                required
                size="small"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            )}

            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ mt: 2 }}
            >
              {authMode === "login" ? "Login" : "Register"}
            </Button>
          </form>

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              textAlign: "center",
              cursor: "pointer",
              color: "#2B6E4E",
            }}
            onClick={() =>
              setAuthMode(authMode === "login" ? "register" : "login")
            }
          >
            {authMode === "login"
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AuthModal;
