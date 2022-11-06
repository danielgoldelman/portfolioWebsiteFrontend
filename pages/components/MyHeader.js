import Link from "next/link";
import NavButton from "./NavButton";

const navactions = [
	{
		action: "Projects",
		id: "projects",
	},
	{
		action: "Experience",
		id: "experience",
	},
	{
		action: "Leadership",
		id: "leadership",
	},
];

export default function MyHeader() {
	return (
		<div className="shadow-lg bg-[#0d1117] py-6 text-white text-xl">
			<div className="flex justify-between px-48 items-end">
				<div className="text-3xl">DG</div>
				<div className="flex space-x-8 text-base">
					{navactions.map(({ action, id }) => {
						return <NavButton action={action} id={id} />;
					})}
				</div>
			</div>
		</div>
	);
}
