import * as yup from "yup";

const validations = yup.object().shape({
	name: yup
	.string()
	.min(2, "Adınız en az 2 karakter olmalıdır")
	.required("Zorunlu alan."),
	email: yup
		.string()
		.email("Gerçerli bir email girin.")
		.required("Zorunlu alan."),
	password: yup
		.string()
		.min(3, "Parolanız en az 3 karakter olmalıdır")
		.required(),
	passwordConfirm: yup
        .string()
        .oneOf([yup.ref("password")],"Parolalar uyuşmuyor.")
        .required(),
});

export default validations;