import Head from "next/head";
import Image from "next/image";
import MyHeader from "./components/MyHeader";
import Landing from "./components/Landing";
import Leadership from "./components/Leadership";
import Projects from "./components/Projects";
import WorkExp from "./components/WorkExp";
import MiniMe from "./components/MiniMe.svg"


export default function Home() {
	return (
		<div className="bg-[#0d1117] overscroll-contain">
			<Head>
				<title>Daniel Goldelman</title>
				<meta name="description" content="Daniel Goldelman's Portfolio Website" />
				<link rel="icon" href="/MiniMe.svg" />
			</Head>

			<div className="sticky z-50 top-0 w-10/12">
				<MyHeader></MyHeader>
			</div>

			<main className="justify-center flex">
				<div className="w-10/12 lg:w-8/12">
					<div className="grid grid-cols-6 lg:grid-cols-8">
						<div className="col-span-5 lg:col-span-7 grid grid-cols-1 gap-20">
							<Landing />
							<div id="experience" className="py-20">
								<WorkExp />
							</div>
							<div id="projects" className="py-20">
								<Projects />
							</div>
							<div id="leadership" className="py-20">
								<Leadership />
							</div>
						</div>
						<div className="fixed bottom-0 left-3/4 ml-7">
							<Image src={MiniMe} alt="minime" />
						</div>
					</div>
				</div>
			</main>

			<footer></footer>
		</div>
	);
}
