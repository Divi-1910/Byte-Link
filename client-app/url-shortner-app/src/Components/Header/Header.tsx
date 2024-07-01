import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
	return (
		<div className="bg-gradient-to-r from-blue-900 to-indigo-900">
			<div className="container mx-auto px-4 py-6">
				<nav className="flex items-center justify-between">
					<div className="text-white text-3xl font-bold">BYTE-LINK</div>
					<div className="flex items-center space-x-4"></div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
