const formConfig = {
  username: {
    fieldName: "username",
    type: "text",
    placeholder: "Your name",
    validate: {
      required: "Please enter your name",
    },
  },

  phone: {
    fieldName: "phone",
    type: "tel",
    placeholder: "Enter phone",
    validate: {
      required: "Phone is required",
      minLength: {
        value: 11,
        message: "Phone should be at least 11 digits",
      },
    },
  },

  email: {
    fieldName: "email",
    type: "email",
    placeholder: "Your email address",
    validate: {
      required: "Email is required",
    },
  },
};

export default formConfig;

