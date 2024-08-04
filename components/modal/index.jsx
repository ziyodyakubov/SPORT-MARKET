"use client";

import React, { useState } from 'react';
import { Box, Modal, IconButton, InputAdornment, TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signInValidationSchema } from '@/utils/validation';
import Notification from '@/utils/notification';
import { login } from '@/service/auth.service';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomModal = ({ open, handleClose}) => {
  const initialValues = {
    email: "xasannosirov094@gmail.com",
    password: "Sehtols@01",
  };

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const status = await login(values);
      if (status === 200) {
        Notification({
          title: "Sign In Successfully",
          type: "success",
        });

        setTimeout(() => {
          window.location.reload()
        }, 2300);
      }
    } catch (error) {
      console.error("Error:", error);
      Notification({
        title: "Unsuccessfully Sign In",
        type: "error",
        message: error.message,
      });

      setTimeout(() => {
          window.location.reload()
        }, 2300);

      
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width:{
            sm:400,
            lg:400,
          },
          bgcolor: 'background.paper',
          borderRadius: '5px',
          boxShadow: 24,
          p:3,
          outline: 'none',
        }}>
          <div id="modal-description" className="max-w-[400px]">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={signInValidationSchema}
            >
              {({ isSubmitting }) => (
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
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{
                      mt: 2,
                      backgroundColor: '#1F1D14',
                      '&:hover': {
                        backgroundColor: '#1f1d14ca',
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CustomModal;
