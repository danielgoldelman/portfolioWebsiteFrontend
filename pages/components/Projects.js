const projectDb = [
	{
		name: "Privacy Pioneer",
		relatedTo: "Privacy-Tech-Lab",
		desc: "Privacy Pioneer is a browser extension that informs users of invasive procedures on the web and what data is being collected by the websites that they visit. Major funding from Google's Research Scholar Program.",
		links: [
			"https://github.com/privacy-tech-lab/privacy-pioneer",
			"https://github.com/privacy-tech-lab/privacy-pioneer-machine-learning",
			"https://www.youtube.com/watch?v=emENqmVxi7k",
		],
	},
	{
		name: "OurCampus",
		relatedTo: "OurCampus Wesleyan",
		desc: "OurCampus is a cross-platform mobile app and SPA  distributing current dining options, professor reviews, and campus events to the Wesleyan community",
		links: ["https://apps.apple.com/us/app/ourcampuswes/id1447905927"],
	},
	{
		name: "WesHack",
		relatedTo: "WesHack",
		desc: "WesHack is a school wide hackathon open to all skill levels that incorporates coding, workshops, and alumni presentations to display the efforts of the Wesleyan coding and tech community.",
		links: [
			"https://weshack.devpost.com/",
			"http://wesleyanargus.com/2021/05/07/weshack-hosts-weekend-long-programming-competition/",
		],
	},
	{
		name: "Gender Diversity in Video Marketing ML Algorithm",
		relatedTo: "Wesleyan University",
		desc: "The goal of this research was to determine how online advertising of selected alcohol brands correlates to the public perception of these brands.",
		links: [
			{
				actionText: "",
				link: "https://colab.research.google.com/drive/1EnPBBTenO1uiQ80Ql8rK94gbsrbGDFW7",
			},
		],
	},
	{
		name: "Gold Vinyl",
		relatedTo: "Wesleyan University",
		desc: "Gold Vinyl is a music streaming, rating, distribution, and discussion platform.",
		links: [],
	},
];

const projects = [
	{
		name: "Privacy Pioneer",
		relatedTo: "Privacy-Tech-Lab",
		desc: "Privacy Pioneer is a browser extension that informs users of invasive procedures on the web and what data is being collected by the websites that they visit. Major funding from Google's Research Scholar Program.",
		links: [
			"https://github.com/privacy-tech-lab/privacy-pioneer",
			"https://github.com/privacy-tech-lab/privacy-pioneer-machine-learning",
			"https://www.youtube.com/watch?v=emENqmVxi7k",
		],
	},
	{
		name: "OurCampus",
		relatedTo: "OurCampus Wesleyan",
		desc: "OurCampus is a cross-platform mobile app and SPA  distributing current dining options, professor reviews, and campus events to the Wesleyan community",
		links: ["https://apps.apple.com/us/app/ourcampuswes/id1447905927"],
	},
	{
		name: "WesHack",
		relatedTo: "WesHack",
		desc: "WesHack is a school wide hackathon open to all skill levels that incorporates coding, workshops, and alumni presentations to display the efforts of the Wesleyan coding and tech community.",
		links: [
			"https://weshack.devpost.com/",
			"http://wesleyanargus.com/2021/05/07/weshack-hosts-weekend-long-programming-competition/",
		],
	},
	{
		name: "Gender Diversity in Video Marketing ML Algorithm",
		relatedTo: "Wesleyan University",
		desc: "The goal of this research was to determine how online advertising of selected alcohol brands correlates to the public perception of these brands.",
		links: [
			"https://colab.research.google.com/drive/1EnPBBTenO1uiQ80Ql8rK94gbsrbGDFW7",
		],
	},
	{
		name: "Gold Vinyl",
		relatedTo: "Wesleyan University",
		desc: "Gold Vinyl is a music streaming, rating, distribution, and discussion platform.",
		links: [],
	},
];

export default function Projects() {
	return (
		<div className="min-h-screen py-8">
			<div className="text-4xl font-medium">Projects</div>

			{projectDb.map(({ name, relatedTo, desc, links }) => {
				return (
					<div className="py-12 px-8 border my-8 bg-[#0d1117]">
						<div className="text-xl font-semibold">{name}</div>
						<div className="text-base font-medium">{relatedTo}</div>
						{desc ? <div className="my-3 italic">{desc}</div> : <></>}
					</div>
				);
			})}
		</div>
	);
}
