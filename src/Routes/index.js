import { Navigate, Route, Routes } from "react-router-dom";
import Activity from "../pages/Activity";

const Routee = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Activity/>} />
                <Route path="/detail/:id" element={'kamu'}/>
                <Route path="/404" element={'eror bos'} />
                <Route path="*" element={<Navigate to='/404' />} />
            </Routes>
        </>
    );
}

export default Routee;