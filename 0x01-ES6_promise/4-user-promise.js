export default function sugnUpUser(firstName, lastName) {
	return Promise.resolve(
		{
			firstName,
			lastName,
		},
	);
}
