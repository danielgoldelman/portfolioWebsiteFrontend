// import { useState, useEffect } from "react";

export default function Leadership() {
    // const [leadership, setLeadership] = useState([]);

	// useEffect(() => {
	// 	fetch(`https://website-api-dg.herokuapp.com/leadership`)
	// 	.then((response) => {
	// 		if (!response.ok) {
	// 		  throw new Error(
	// 			`This is an HTTP error: The status is ${response.status}`
	// 		  );
	// 		}
	// 		return response.json();
	// 	  })
	// 	  .then((actualData) => setLeadership(actualData))
	// 	  .catch((err) => {
	// 		console.log(err.message);
	// 	  });
	//   }, []);

	const leadership = [
		{
			"ID":          "1",
			"Title":       "Co-Founder, President, Finance Manager",
			"Workplace":   "Code_Wes",
			"Description": "Code_Wes is a student-managed coding club at Wesleyan that has grown from 7 to 200+ members since inception in 2020",
			"Contribution": [
				{"thing": "Managining financials dealings of the student-directed coding club including budgets, all purchases, event funding, and hosting speakers"},
				{"thing": "Hosting events, with the career center, that promote career planning, community building, and industry networking"},
				{"thing": "Built and continuously overseeing internal communication platform to project leaders to distribute tasks and club resources to team members"},
			],
			"Links": [
				{
					"Title": "Code_Wes GitHub",
					"link":  "https://github.com/danielgoldelman/Code_Wes",
				},
				{
					"Title": "WesNest Listing",
					"link":  "https://wesleyan.campuslabs.com/engage/organization/code_wes",
				},
				{
					"Title": "Code_Wes Instagram",
					"link":  "https://www.instagram.com/code_wes/",
				},
			],
		},
		{
			"ID":          "2",
			"Title":       "Co-Captain",
			"Workplace":   "Wesleyan Club Hockey",
			"Description": "Wesleyan's Club Hockey team is a student-managed club and has been around for 20+ years and currently serves 35+ members.",
			"Contribution": [
				{"thing": "Scheduling practices and game coordinated with the university's athletic, financial, and facility departments"},
				{"thing": "Secured club budget and purchasing equipment for new members"},
			],
			"Links": [],
		},
		{
			"ID":          "3",
			"Title":       "Band Leader",
			"Workplace":   "SKIBs",
			"Description": "Wesleyan-based Scottish, Klezmer, Irish, and Bluegrass strings and winds band.",
			"Contribution": [
				{"thing": "Scheduling practices and performances coordinated with the university's music department and various student groups"},
			],
			"Links": [],
		}
	]

    return (
		<div className="min-h-screen py-8">
			<div className="text-4xl font-medium">Leadership Experience</div>
			{leadership.map(({ ID, title, workplace, description, contribution, links }) => {
				return (
					<div key={"ID"} className="my-8 bg-[#0d1117]">
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
									{links.map(({title, link}) => {
										return <a key={"title"} className="text-white cursor-pointer md:mr-5 border-solid border-[#161b22] border-3 rounded-md my-2 md:my-0 py-2 px-7 md:px-3 bg-gray-800 text-center md:w-11/12 overflow-ellipsis" href={link} target="_blank" rel="noreferrer">{title}</a>
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
