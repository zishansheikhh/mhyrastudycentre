import * as Yup from 'yup';

export const CommentSchema = Yup.object({
    Comment: Yup.string().min(2).required('Comment is required'),
    Name: Yup.string().min(2).max(50).required('Name is required'),
    Email: Yup.string().email('Invalid email address').required('Email is required'),
});

export const ReplyCommentSchema = Yup.object({
    Comment: Yup.string().min(2).required('Comment is required'),
    Name: Yup.string().min(2).max(50).required('Name is required'),
});

export const LoginSchema = Yup.object({
    Email: Yup.string().email('Invalid email address').required('Email is required'),
    Password: Yup.string().min(6).required("Please enter your password")
})

export const RegistrationSchema = Yup.object({
    FirstName: Yup.string().min(2).max(25).required('please enter your first name'),
    LastName: Yup.string().min(2).max(25).required('please enter your last name'),
    Email: Yup.string().email('Invalid email address').required('Required'),
    Password: Yup.string().min(6).required("please enter your password"),
    Confirm_Password: Yup.string().required('please enter you password').oneOf([Yup.ref("Password"), null], "Password must match"),
});