export default function NavButton({ action, id }) {
	return (
		<a
			href={`#${id}`}
			className="cursor-pointer transition ease-in duration-300 hover:scale-110 "
		>
			{action}
		</a>
	);
}
