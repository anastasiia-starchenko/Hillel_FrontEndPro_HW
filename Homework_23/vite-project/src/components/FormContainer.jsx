import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useFormik} from "formik";

const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Required";
    }

    if (!values.email) {
        errors.email = "Required";
    } else if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.phone) {
        errors.phone = "Required";
    } else if (!/^\d+$/.test(values.phone)) {
        errors.phone = "Phone input must contain only numbers";
    } else if (values.phone.length !== 12) {
        errors.phone = "Phone length should be 12";
    }

    return errors;
}

function FormContainer() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: ""
        },
        validate: validateForm
    })

    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        type="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && <Form.Text className={"text-danger"}>{formik.errors.name}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && <Form.Text className={"text-danger"}>{formik.errors.email}</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        type="tel"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && <Form.Text className={"text-danger"}>{formik.errors.phone}</Form.Text>}
                </Form.Group>
            </Form>
        </div>
    );
}

export default FormContainer;