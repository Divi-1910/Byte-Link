import * as React from "react";
import axios from "axios";
import {serverUrl} from "../../helpers/Constants";

interface IFormContainerProps {
	updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
	const {updateReloadState} = props;
	const [fullUrl, setFullUrl] = React.useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await axios.post(`${serverUrl}/shorturl`, {
				fullUrl: fullUrl,
			});
			setFullUrl("");
			updateReloadState();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container mx-auto p-4">
			<div className="relative bg-gradient-to-r from-blue-500 via-green-500 to-indigo-500 bg-size-200 bg-pos-0 animate-gradient my-8 rounded-xl shadow-2xl overflow-hidden animate-fadeIn">
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative w-full h-full p-12 flex flex-col items-center justify-center text-center text-white animate-bounceIn">
					<h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg animate-floating">
						BYTE-LINK
					</h2>
					<p className="text-2xl md:text-3xl font-light mt-4 font-serif">
						Paste your untidy link to shorten it
					</p>
					<p className="text-base md:text-lg font-thin mt-2 max-w-md mx-auto">
						Free tool to shorten a URL or reduce link. Use our URL shortener to
						create a shortened & neat link, making it easy to use.
					</p>
					<form onSubmit={handleSubmit} className="w-full max-w-2xl mt-8">
						<div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden ">
							<div className="relative w-full md:w-4/5 flex items-center">
								<div className="absolute left-4 text-gray-500 font-medium">
									bytelink.link/
								</div>
								<input
									type="text"
									placeholder="Add your link"
									required
									className="w-full py-4 pl-36 pr-4 text-gray-900 border-0 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
									value={fullUrl}
									onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
										setFullUrl(e.target.value)
									}
								/>
							</div>
							<button
								type="submit"
								className="w-full md:w-1/5 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold hover:from-green-500 hover:to-blue-600 transition-all duration-300">
								Shorten URL
							</button>
						</div>
					</form>
				</div>
				<div className="absolute -bottom-8 -left-8 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
				<div className="absolute -top-8 -right-8 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
				<div className="absolute -bottom-16 right-16 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
			</div>
		</div>
	);
};

export default FormContainer;
