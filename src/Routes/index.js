import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../components/atoms/NotFound";
import Activity from "../pages/Activity";
import DetailActivity from "../pages/DetailActivity";

const Routee = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Activity/>} />
                <Route path="/detail/:id" element={<DetailActivity/>}/>
                <Route path="/404" element={<NotFound/>} />
                <Route path="*" element={<Navigate to='/404' />} />
            </Routes>
        </>
    );
}

export default Routee;