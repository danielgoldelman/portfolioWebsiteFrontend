// import { useState, useEffect } from "react";

export default function Projects() {
	// const [projects, setProjects] = useState([]);

	// useEffect(() => {
	// 	fetch(`https://website-api-dg.herokuapp.com/projects`)
	// 	.then((response) => {
	// 		if (!response.ok) {
	// 		  throw new Error(
	// 			`This is an HTTP error: The status is ${response.status}`
	// 		  );
	// 		}
	// 		return response.json();
	// 	  })
	// 	  .then((actualData) => setProjects(actualData))
	// 	  .catch((err) => {
	// 		console.log(err.message);
	// 	  });
	//   }, []);

	const projects = [
		{
			"ID":          "1",
			"Title":       "WesHack",
			"Workplace":   "WesHack",
			"Description": "WesHack is a school wide hackathon open to all skill levels that incorporates coding, workshops, and alumni presentations to display the efforts of the Wesleyan coding and tech community.",
			"Contribution": [
				{"thing": "Reinstated school-wide hackathon with 60+ participants on 15+ teams"},
				{"thing": "Secured judges, mentors, speakers, and obtained funding from the University and outside supporters"},
				{"thing": "Led daily coding workshops and community-building exercises during the event"},
				{"thing": "Managed budget and disbursed funding and prizes"},
			],
			"Links": [
				{
					"title": "Resulting Projects",
					"link":  "https://weshack.devpost.com/",
				},
				{
					"title": "Wesleyan's Argus Article",
					"link":  "http://wesleyanargus.com/2021/05/07/weshack-hosts-weekend-long-programming-competition/",
				},
			],
		},
		{
			"ID":           "2",
			"Title":        "Personal Project",
			"Workplace":    "DG Whisk(e)y",
			"Description":  "Website dedicated to my love of whiskey.",
			"Contribution": [],
			"Links": [
				{
					"title": "Website Link",
					"link":  "https://dgwhiskey.vercel.app/",
				},
			],
		},
		{
			"ID":           "3",
			"Title":        "Gender Diversity in Video Marketing ML Algorithm",
			"Workplace":    "Wesleyan University",
			"Description":  "The goal of this research was to determine how online advertising of selected alcohol brands correlates to the public perception of these brands.",
			"Contribution": [],
			"Links": [
				{
					"title": "Google Colab Link",
					"link":  "https://colab.research.google.com/drive/1EnPBBTenO1uiQ80Ql8rK94gbsrbGDFW7",
				},
			],
		},
		{
			"ID":           "4",
			"Title":        "Gold Vinyl",
			"Workplace":    "Wesleyan Univeristy",
			"Description":  "Gold Vinyl is a CRUD (Django), web (React.js), and mobile (React Mobile) music streaming, rating, distribution, and discussion platform.",
			"Contribution": [],
			"Links":        [],
		},
	]

	return (
		<div className="min-h-screen py-8">
			<div className="text-4xl font-medium">Other Projects</div>
			{projects.map(({ ID, Title, Workplace, Description, Contribution, Links }) => {
				return (
					<div key={ID} className="my-8 bg-[#0d1117]">
						<div className="bg-[#161b22] p-4 border-[0.1px] rounded-t-xl">
							<div className="text-xl font-medium">{Workplace}</div>
							<div className="text-base font-normal">{Title}</div>
						</div>
						<div className="p-4 border-x-[0.1px] border-b-[0.1px] rounded-b-xl">
							{Description ? (
								<div className="mt-1 mb-2 italic text-slate-100">{Description}</div>
							) : (
								<></>
							)}
							{Contribution ? (Contribution.map(({ thing }) => {
								return <div key={thing} className="pl-4">∙ {thing}</div>;
							})
							):(
								<></>
							)}
							{Links ? (
								<div className="mt-4 mb-2 grid grid-flow-row md:grid-flow-col md:grid-cols-4 justify-center">
									{Links.map(({title, link}) => {
										return <a key={title} className="text-white cursor-pointer md:mr-5 border-solid border-[#161b22] border-3 rounded-md my-2 md:my-0 py-2 px-7 md:px-3 bg-gray-800 text-center md:w-11/12 overflow-ellipsis" href={link} target="_blank" rel="noreferrer">{title}</a>
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