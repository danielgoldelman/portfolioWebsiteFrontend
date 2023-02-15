// import { useState, useEffect } from "react";

export default function WorkExp() {
	// const [workExps, setWorkExps] = useState([]);

	// useEffect(() => {
	// 	fetch(`https://website-api-dg.herokuapp.com/workExps`)
	// 	.then((response) => {
	// 		if (!response.ok) {
	// 		  throw new Error(
	// 			`This is an HTTP error: The status is ${response.status}`
	// 		  );
	// 		}
	// 		return response.json();
	// 	  })
	// 	  .then((actualData) => setWorkExps(actualData))
	// 	  .catch((err) => {
	// 		console.log(err.message);
	// 	  });
	//   }, []);

	const workExps = [
		{
			"ID":          "1",
			"Title":       "Technical Product Manager and Research Assistant",
			"Workplace":   "Privacy-Tech-Lab",
			"Description": "Project developed a browser extension that informs users of invasive procedures on the web and what data is being collected by the websites that they visit. Major funding from Google's Research Scholar Program.",
			"Contribution": [
				{"thing": "Managing SCRUM meetings, A/B tests, wireframes and product roadmaps"},
				{"thing": "Developing systems to detect browser fingerprinting, cross site tracking, and invasive procedures through analysis of HTTP requests"},
				{"thing": "Developing machine learning BERT sequence classification models using Huggingface, pytorch, tensorflowjs, learning distillation and multi-labeling to create browser-based ML models"},
				{"thing": "Co-authoring manuscript with Professor S. Zimmeck (Wesleyan CS) and three other members of the privacy-tech-lab"},
			],
			"Links": [
				{
					"Title": "Extension Source Code",
					"link":  "https://github.com/privacy-tech-lab/privacy-pioneer",
				},
				{
					"Title": "Machine Learning Repo",
					"link":  "https://github.com/privacy-tech-lab/privacy-pioneer-machine-learning",
				},
				{
					"Title": "Presentation to Google",
					"link":  "https://www.youtube.com/watch?v=emENqmVxi7k",
				},
			],
		},
		{
			"ID":          "2",
			"Title":       "Frontend Lead Developer",
			"Workplace":   "OurCampus Wesleyan",
			"Description": "OurCampus is a cross-platform mobile app and SPA  distributing current dining options, professor reviews, and campus events to the Wesleyan community",
			"Contribution": [
				{"thing": "Reviewed all pull requests and pushed frontend code"},
				{"thing": "Led frontend team discussions and assigned tasks"},
				{"thing": "Hosted Flutter/Dart/React/Git workshops"},
				{"thing": "Rebuilt and optimized frontend and created internal tools for database population"},
			],
			"Links": [
				{
					"Title": "Landing Page",
					"link":  "https://about.ourcampuswes.org/",
				},
				{
					"Title": "Apple App Store Page",
					"link":  "https://apps.apple.com/us/app/ourcampuswes/id1447905927?ign-itscg=30200&ign-itsct=apps_box_badge",
				},
			],
		},
		{
			"ID":          "3",
			"Title":       "Teaching Assistant - Computer Science II",
			"Workplace":   "Wesleyan University",
			"Description": "",
			"Contribution": [
				{"thing": "Teaching data structures and algorithms in functional programming languages"},
				{"thing": "Instructing 40+ Computer Science II students on CS fundamentals"},
			],
			"Links": [],
		},
		{
			"ID":          "4",
			"Title":       "Peer Tutor - Software Engineering",
			"Workplace":   "Wesleyan University",
			"Description": "",
			"Contribution": [
				{"thing": "Assisting COMP 333 students with understanding OOP fundamentals and principals"},
				{"thing": "Teaching the use of HTML, CSS, JS, React, Django, MySQL, PHP"},
			],
			"Links": [],
		},
		{
			"ID":          "5",
			"Title":       "IDEAS (Engineering) Lab Assistant",
			"Workplace":   "Wesleyan University",
			"Description": "",
			"Contribution": [
				{"thing": "Responsible for maintaining the IDEAS (Engineering) Lab"},
				{"thing": "Assisted students with classwork and personal projects using laser cutters, 3D printers, SolidWorks, Adobe Illustrator, and Cura"},
			],
			"Links": [],
		},
	]

	return (
		<div className="min-h-screen py-8">
			<div className="text-4xl font-medium">Work Experience</div>
			{workExps.map(({ id, title, workplace, description, contribution, links }) => {
				return (
					<div key={id} className="my-8 bg-[#0d1117]">
						<div className="bg-[#161b22] p-4 border-[0.1px] rounded-t-xl">
							<div className="text-xl font-medium">{workplace}</div>
							<div className="text-base font-normal">{title}</div>
						</div>
						<div className="p-4 border-x-[0.1px] border-b-[0.1px] rounded-b-xl">
							{description ? (
								<div className="mt-1 mb-2 italic text-slate-100">{description}</div>
							) : (
								<></>
							)}
							{contribution ? (contribution.map(({ thing }) => {
								return <div key={thing} className="pl-4">∙ {thing}</div>;
							})
							):(
								<></>
							)}
							{links ? (
								<div className="mt-4 mb-2 grid grid-flow-row md:grid-flow-col md:grid-cols-4 justify-center">
									{links.map(({Title, link}) => {
										return <a key={Title} className="text-white cursor-pointer md:mr-5 border-solid border-[#161b22] border-3 rounded-md my-2 md:my-0 py-2 px-7 md:px-3 bg-gray-800 text-center md:w-11/12 overflow-ellipsis" href={link} target="_blank" rel="noreferrer">{Title}</a>
									})}
								</div>
							):(
								<></>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}
