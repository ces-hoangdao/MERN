/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { gerListUser, getUser, User } from '../services/UserServices';

function Home() {
	const [users, setUsers] = useState<User[]>([]);
	const [user, setUser] = useState<User>();
	const handleGetUsers = async () => {
		try {
			const data = await gerListUser();
			setUsers(data);
		} catch (error: unknown) {
			if (
				(error as { response: { status: number } }).response?.status === 401
			) {
				window.location.href = '/login';
			}
		}
	};
	const handleGetUser = async (userId: string) => {
		try {
			const data = await getUser(userId);
			setUser(data);
			console.log(user);
		} catch (error: unknown) {
			if (
				(error as { response: { status: number } }).response?.status === 401
			) {
				window.location.href = '/login';
			}
		}
	};

	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.href = '/login';
	};

	return (
		<div>
			<div className="bg-gradient-to-b from-green-50 to-green-100">
				<header className="">
					<div className="px-4 mx-auto sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-16 lg:h-20">
							<div className="flex-shrink-0">
								<a href="#" title="" className="flex">
									<img
										className="w-auto h-8"
										src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg"
										alt=""
									/>
								</a>
							</div>

							<button
								type="button"
								className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
							>
								<svg
									className="block w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>

								<svg
									className="hidden w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>

							<div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
								<a
									href="#"
									title=""
									className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
								>
									Features
								</a>

								<a
									href="#"
									title=""
									className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
								>
									Resources
								</a>

								<button
									onClick={handleLogout}
									type="button"
									className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
								>
									Log out
								</button>

								<Link
									to="/login"
									className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80 hover:underline"
								>
									Login
								</Link>

								<Link
									to="/register"
									className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
									role="button"
								>
									Register
								</Link>
							</div>
						</div>
					</div>
				</header>

				<button
					onClick={handleGetUsers}
					title=""
					className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
					type="button"
				>
					Get User
				</button>
			</div>

			<div className="bg-white p-8 rounded-md w-full">
				<div className=" flex items-center justify-between pb-6">
					<div>
						<h2 className="text-gray-600 font-semibold">Products Oder</h2>
						<span className="text-xs">All products item</span>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex bg-gray-50 items-center p-2 rounded-md">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								/>
							</svg>
							<input
								className="bg-gray-50 outline-none ml-1 block "
								type="text"
								name=""
								id=""
								placeholder="search..."
							/>
						</div>
					</div>
				</div>
				<div>
					<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
						<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
							<table className="min-w-full leading-normal">
								<thead>
									<tr>
										<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
											Name
										</th>
										<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
											Email
										</th>
										<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
											Action
										</th>
									</tr>
								</thead>
								<tbody>
									{users?.map((userInfo, index) => (
										<tr key={index}>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<div className="flex items-center">
													<div className="ml-3">
														<p className="text-gray-900 whitespace-no-wrap">
															{userInfo.username}
														</p>
													</div>
												</div>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-gray-900 whitespace-no-wrap">
													{userInfo.email}
												</p>
											</td>
											<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
												<button
													type="button"
													onClick={() => handleGetUser(userInfo._id)}
												>
													GetUserDetails
												</button>
											</th>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
