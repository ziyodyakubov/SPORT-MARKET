"use client";

import { useRouter } from 'next/navigation';
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signInValidationSchema } from "@/utils/validation";
import { Notification } from "@/utils/notification";
import { auth } from "@/service/auth.service";



const Index = () => {
  const initialValues = {
    email: "xasannosirov094@gmail.com",
    password: "Sehtols@01",
  };

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values) => {
  try {
    console.log("Submitting values:", values);
    const response = await auth.login(values);
    console.log("Response:", response);

    if (response.status === 200) {
      console.log("RESPONSE", response.data);
      localStorage.setItem("access_token", response?.data?.access_token);
      localStorage.setItem("refresh_token", response?.data?.refresh_token);
      Notification({
        title: "Sign In Successfully",
        type: "success",
      });
      setTimeout(() => {
        router.push("/");
      }, 2300);
    }
  } catch (error) {
    console.error("Sign In Error:", error);
    Notification({
      title: "Sign In Failed",
      type: "error",
    });
  }
};



  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <div className="h-screen flex-col flex items-center justify-center p-5">
      <h1 className="text-[35px] text-[#1F1D14]  sm:text-[36px] md:text-[56px]">
        Login
      </h1>
      <div className="max-w-[400px]">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={signInValidationSchema}
        >
          {() => (
            <Form>
              <Field
                name="email"
                type="email"
                as={TextField}
                label="Email address"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-gray-500 text-[15px]"
                  />
                }
              />
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                as={TextField}
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-gray-500 text-[15px]"
                  />
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ backgroundColor: "white" }}>
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                id="gray"
                type="submit"
                fullWidth
                className='bg-[#1F1D14] text-[#fff] hover:bg-[#1f1d14ca] active:bg-[#1F1D14]'
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Index;
