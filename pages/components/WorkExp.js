const workExperience = [
	{
		emp: "Privacy-Tech-Lab",
		title: "Technical Product Manager and Research Assistant",
		desc: "Project developed a browser extension that informs users of invasive procedures on the web and what data is being collected by the websites that they visit. Major funding from Google's Research Scholar Program.",
		cont: [
			{
				thing:
					"Managing SCRUM meetings, A/B tests, wireframes and product roadmaps",
			},
			{
				thing:
					"Developing systems to detect browser fingerprinting, cross site tracking, and invasive procedures through analysis of HTTP requests",
			},
			{
				thing:
					"Developing machine learning BERT sequence classification models using Huggingface, pytorch, tensorflowjs, learning distillation and multi-labeling to create browser-based ML models",
			},
			{
				thing:
					"Co-authoring manuscript with Professor S. Zimmeck (Wesleyan CS) and three other members of the privacy-tech-lab",
			},
		],
	},
	{
		emp: "Teaching Assistant - Computer Science II",
		title: "Teaching Assistant",

		cont: [
			{
				thing:
					"Teaching data structures and algorithms in functional programming languages",
			},
			{
				thing:
					"Instructing 40+ Computer Science II students on CS fundamentals",
			},
		],
	},
	{
		emp: "OurCampus Wesleyan",
		title: "Frontend Lead Developer",
		desc: "OurCampus is a cross-platform mobile app and SPA  distributing current dining options, professor reviews, and campus events to the Wesleyan community",
		cont: [
			{
				thing: "Reviewed all pull requests and pushed frontend code",
			},
			{
				thing: "Led frontend team discussions and assigned tasks",
			},
			{
				thing: "Hosted Flutter/Dart/React/Git workshops",
			},
			{
				thing:
					"Rebuilt and optimized frontend and created internal tools for database population",
			},
		],
	},
	{
		emp: "Peer Tutor - Software Engineering",
		title: "Peer Tutor",

		cont: [
			{
				thing:
					"Assisting COMP 333 students with understanding OOP fundamentals and principals",
			},
			{
				thing: "Teaching the use of HTML, CSS, JS, React, Django, MySQL, PHP",
			},
		],
	},
	{
		emp: "IDEAS (Engineering) Lab Assistant",
		title: "Lab Assistant",

		cont: [
			{
				thing: "Responsible for maintaining the IDEAS (Engineering) Lab",
			},
			{
				thing:
					"Assisted students with classwork and personal projects using laser cutters, 3D printers, SolidWorks, Adobe Illustrator, and Cura",
			},
		],
	},
];

export default function WorkExp() {
	return (
		<div className="min-h-screen py-8">
			<div className="text-4xl font-medium">Work Experience</div>
			{workExperience.map(({ emp, title, desc, cont }) => {
				return (
					<div className="my-8 bg-[#0d1117]">
						<div className="bg-[#161b22] p-4 border-[0.1px] rounded-t-xl">
							<div className="text-xl font-medium">{emp}</div>
							<div className="text-base font-normal">{title}</div>
						</div>
						<div className="p-4 border-x-[0.1px] border-b-[0.1px] rounded-b-xl">
							{desc ? (
								<div className="my-3 italic text-slate-100">{desc}</div>
							) : (
								<></>
							)}
							<div>
								{cont.map(({ thing }) => {
									return <div className="pl-4">∙ {thing}</div>;
								})}
							</div>
							<div className="py-8">
								<a className="text-[#58a6ff] transition ease-in duration-300 hover:scale-125 cursor-pointer">
									Demo
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
