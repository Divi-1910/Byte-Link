import * as React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Container from "./Components/Container/Container";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
	return (
		<>
			<Header />
			<Container />
			<Footer />
		</>
	);
};

export default App;
