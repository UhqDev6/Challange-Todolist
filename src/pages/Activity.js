import Button from "../components/atoms/ButtonAdd";
import Title from "../components/atoms/Title";
import Header from "../components/molecules/Header";
import ICPlus from '../assets/icons/tabler_plus.png';
import ICDelete from '../assets/icons/activity-item-delete-button.png';
import Card from "../components/molecules/Card";
import { useEffect, useState } from "react";
import { deleteActivity, getActivity, postActivity } from "../utils/api";
import Loading from "../components/atoms/Loading";
import ActivityEmpty from "../components/atoms/ActivityEmpty";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils/date";
import ButtonAdd from "../components/atoms/ButtonAdd";
import ButtonDelete from "../components/atoms/ButtonDelete";

const Activity = () => {

    const [activity, setActivity] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const {id} = useParams();


    const getDataActivity = async () => {
        const {data} = await getActivity();
        setActivity(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getDataActivity();
    },[]);



    const addActivity = async () => {
        const { success } = await postActivity({title: 'New Activity', email: 'ulhaqitcom@gmail.com'});
        if(!success) {
            getDataActivity();
        }

    }

    // const addActivity = async () => {
    //     const { success } = await postActivity();
    //     if(!success) {
    //         getDataActivity();
    //     }

    // }


    const onDeleteHandler = async (id) => {
        await deleteActivity(id);
        getDataActivity();
    }

    // console.log(activity);

    return(
        <>
            <header>
                <Header/>
            </header>

            <main>
                <div className="container mt-14 justify-center mx-auto">
                    <div className="flex justify-between">
                        <Title data='activity-title' className='text-black text-2xl font-semibold  ml-32 '>
                            Activity
                        </Title>
                            <ButtonAdd dataCyButton='activity-add-button' postActivity={addActivity} className='mr-32 bg-primary hover:bg-secondary w-44'>
                            <span className="flex mx-auto">
                            <img src={ICPlus} alt="tabler plus" />
                            Tambah
                            </span>
                            </ButtonAdd>
                            {/* <button type="submit" onClick={() => addActivity()}>
                                tambah
                            </button> */}
                    </div>
                </div>
                <article>
                    <div className="justify-center mx-auto mt-8 ml-32 mr-32">
                        <div className="flex flex-wrap"> 
                            { isLoading ? (
                                <Loading/>
                                ) : activity.length > 0 ? (
                                    activity.map((activites) => (
                                        <Card key={activites.id}>
                                            <Card.Title>
                                                {activites.title}
                                            </Card.Title>
                                            <Card.Body>
                                                
                                            </Card.Body>
                                            <Card.Footer>
                                            <div className="flex justify-between">
                                                <span>
                                                    <p data-cy='activity-card-date' className="ml-4 mt-4">{showFormattedDate(activites.created_at)}</p>
                                                </span>
                                                <span>

                                                    <ButtonDelete dataCyButton='activity-item-delete-button' id={activites.id} onDelete={onDeleteHandler}>
                                                        <img src={ICDelete} alt='hapus-item' className=" h-6 w-6" />
                                                    </ButtonDelete>
                                                </span>
                                            </div>
                                            </Card.Footer>
                                        </Card>
                                    ))
                                ) : (
                                <ActivityEmpty/>
                                )
                            }
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Activity;