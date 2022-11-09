import { useState, useEffect } from "react";

export default function Leadership() {
    const [leadership, setLeadership] = useState([]);

	useEffect(() => {
		fetch(`https://website-api-dg.herokuapp.com/leadership`)
		.then((response) => {
			if (!response.ok) {
			  throw new Error(
				`This is an HTTP error: The status is ${response.status}`
			  );
			}
			return response.json();
		  })
		  .then((actualData) => setLeadership(actualData))
		  .catch((err) => {
			console.log(err.message);
		  });
	  }, []);

    return (
		<div className="min-h-screen py-8">
			<div className="text-4xl font-medium">Leadership Experience</div>
			{leadership.map(({ id, title, workplace, description, contribution, links }) => {
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
									{links.map(({title, link}) => {
										return <a key={title} className="text-white cursor-pointer md:mr-5 border-solid border-[#161b22] border-3 rounded-md my-2 md:my-0 py-2 px-7 md:px-3 bg-gray-800 text-center md:w-11/12 overflow-ellipsis z-50" href={link} target="_blank" rel="noreferrer">{title}</a>
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


// 	return (
// 		<div className="min-h-screen py-8">
// 			<div className="text-4xl font-medium">Leadership</div>
// 			{leadership.map(({ name, role, desc, cont, links }) => {
// 				return (
// 					<div key="" className="my-8 bg-[#0d1117]">
// 						<div className="bg-[#161b22] p-4 border-[0.1px] rounded-t-xl">
// 							<div className="text-xl font-medium">{name}</div>
// 							<div className="text-base font-normal">{role}</div>
// 						</div>
// 						<div className="p-4 border-x-[0.1px] border-b-[0.1px] rounded-b-xl">
// 							{desc ? (
// 								<div className="my-3 italic text-slate-100">{desc}</div>
// 							) : (
// 								<></>
// 							)}
// 							<div>
// 								{cont.map(({ thing }) => {
// 									return <div key="" className="pl-4">∙ {thing}</div>;
// 								})}
// 							</div>
// 							<div>
// 								{links ? (links.map(({title, link}) => {
// 										return <a key="" className="text-[#58a6ff] transition ease-in duration-300 hover:scale-125 cursor-pointer m-3" href={link} target="_blank" rel="noreferrer">{title}</a>
// 									})
// 								):(
// 									<></>
// 								)}
// 							</div>
// 						</div>
// 						<br></br>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// }
