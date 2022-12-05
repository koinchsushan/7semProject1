import { useState } from "react";
import { useNavigate } from "react-router";

const useForm = validate => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    // const [viewSignInPhone, setViewSignInPhone] = useState(false);

    const history = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));

        const data = {
            username: values.username,
            password: values.password
        }
        if (
            (data.username === "shakyanischal686@gmail.com" && data.password === "123456")) {
            // const token = "testToken";
            // const test = token;
            // localStorage.setItem('token', test);
            // setViewSignInPhone(true);
            console.log("Done");
            history('/home', {state: {name: data.username}});
        }
        else if(data.username === "gaganpandey@gmail.com" && data.password === "123456") {
            console.log("Done");
            history('/home', {state: {name: data.username}});
        }
        else if(data.username === "riteemaharjan@gmail.com" && data.password === "123456") {
            console.log("Done");
            history('/home', {state: {name: data.username}});
        }
        else {
            console.log("Wrong username or password!"); 
            alert("Wrong Username or Password");
        }
    }

    return{ handleChange, values, errors, handleSubmit };
}

export default useForm;