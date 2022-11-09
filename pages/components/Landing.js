const landingDb = {
	title: "Hello, my name is Daniel",
	desc: "I am a software developer with a passion for finding solutions to today's problems by using technology to build streamlined and innovative products.",
};

export default function Landing() {
	const handleResume = () => {
		// using Java Script method to get PDF file
		fetch("resume.pdf").then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "Daniel Goldelman Resume 22.pdf";
				alink.click();
			});
		});
	};

	return (
		<div className="h-screen flex flex-col justify-center lg:w-8/12">
			<div className="text-5xl mb-5">{landingDb.title}</div>
			<div className="text-lg">{landingDb.desc}</div>

			<div className="text-xl py-8 items-center mt-20">
				<a
					className="flex space-x-4 items-center cursor-pointer group rounded-lg text-[#58a6ff] w-fit"
					onClick={handleResume}
				>
					<div className="group-hover:scale-105 transition ease-in duration-300">
						Download Resume
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
}
