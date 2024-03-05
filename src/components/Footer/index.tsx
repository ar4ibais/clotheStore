import React from "react";

import logo from "../../assets/images/logo_46_11zon.webp";

const Footer = () => {
	return (
		<>
			<div className="flex items-center justify-center">
				<hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
			</div>
			<div className="flex items-center justify-around pt-4">
				<div>
					<img className="h-20" src={logo} alt="logo" />
				</div>
				<div>
					<p className="text-black text-sm font-inter no-underline normal-case">
						Copyright {new Date().getFullYear()} page by Ar4ibais ❤️
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
