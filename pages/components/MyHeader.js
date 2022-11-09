import NavButton from "./NavButton";

const navactions = [
	{
		action: "Experience",
		id: "experience",
	},
	{
		action: "Projects",
		id: "projects",
	},
	{
		action: "Leadership",
		id: "leadership",
	},
];

export default function MyHeader() {
	return (
		<div className="shadow-lg bg-[#0d1117] py-10 text-white text-xl">
			<div className="fixed top-5 bottom-10 left-[9%] xs:left-[10%] text-3xl">DG</div>
			<div className="fixed top-7 bottom-10 right-[5%] xs:right-[10%] space-x-4 md:space-x-8 text-base">
				{navactions.map(({ action, id }) => {
					return <NavButton key={id} action={action} id={id} className="" />;
				})}
			</div>
		</div>
	);
}
