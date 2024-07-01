import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
	return (
		<div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-4">
			<div className="container mx-auto text-center">
				<p className="text-sm">
					&copy; 2024 BYTE-LINK |{" "}
					<span className="font-bold">DIVYANSH MULEY</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
