export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Enter Username or Email Address!"
    } else if(!/^[A-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)){
        errors.username = "Email Address is invalid!"
    }

    if(!values.password) {
        errors.password = "Enter Password!"
    } else if (values.password.length < 6) {
        errors.password = "Passwords need to be 6 characters or more!"
    }

    return errors;
}