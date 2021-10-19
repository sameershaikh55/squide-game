// import React, { useEffect } from "react";

// // IMPORTING COMPONENTS
// import Login from "./Login";

// const Access = () => {
// 	const [tableState, setTableState] = useState(1);

// 	const [authState, setAuthState] = useState();

// 	let auth = localStorage.getItem("auth");

// 	useEffect(() => {
// 		if (auth === null) {
// 			localStorage.setItem("auth", 0);
// 			setAuthState(!authState);
// 		}
// 	}, []);

// 	useEffect(() => {}, [auth]);

// 	return <div>{(auth == "1" && <>panel</>) || <Login />}</div>;
// };

// export default Access;
