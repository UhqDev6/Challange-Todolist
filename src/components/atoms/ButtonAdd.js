// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Loading from "./Loading";


// const ButtonAdd = (props) => {
//     const [isLoading, setIsLoading] = useState(true);
//     const {dataCyButton, className, text, children, postActivity } = props;

//     useEffect(() => {
//         setIsLoading(false);
//     })

//     return(
//         <>
//             {isLoading ? (
//                 <Loading/>
//             ) : (
//                 <button data-cy={`${dataCyButton}`} onClick={() => postActivity() } className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-4 rounded-full`}>
//                 {text || children}
//                 </button>
//             )}
//         </>
//     );
// }

// export default ButtonAdd;