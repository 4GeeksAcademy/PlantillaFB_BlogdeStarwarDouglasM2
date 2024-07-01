// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";

// import { Context } from "../store/appContext";

// export const Demo = () => {
//     const { store, actions } = useContext(Context);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//         }, 1000); // Adjust delay as needed or replace with actual data fetching logic
//     }, []);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="container">
//             <ul className="list-group">
//                 {store.demo ? (
//                     store.demo.map((item, index) => (
//                         <li
//                             key={index}
//                             className="list-group-item d-flex justify-content-between"
//                             style={{ background: item.background }}
//                         >
//                             <Link to={"/single/" + index}>
//                                 <span>Link to: {item.title}</span>
//                             </Link>
//                             {item.background === "orange" && (
//                                 <p style={{ color: item.initial }}>
//                                     Check store/flux.js scroll to the actions to see the code
//                                 </p>
//                             )}
//                             <button
//                                 className="btn btn-success"
//                                 onClick={() => actions.changeColor(index, "orange")}
//                             >
//                                 Change Color
//                             </button>
//                         </li>
//                     ))
//                 ) : (
//                     <p>No data available</p>
//                 )}
//             </ul>
//             <br />
//             <Link to="/">
//                 <button className="btn btn-primary">Back home</button>
//             </Link>
//         </div>
//     );
// };
