import Button from "../components/atoms/Button";
import Title from "../components/atoms/Title";
import Header from "../components/molecules/Header";
import ICPlus from '../assets/icons/tabler_plus.png';
import ICDelete from '../assets/icons/activity-item-delete-button.png';
import Card from "../components/molecules/Card";
import { useEffect, useState } from "react";
import { deleteActivity, getActivity, postActivity } from "../utils/api";
import Loading from "../components/atoms/Loading";
import ActivityEmpty from "../components/atoms/ActivityEmpty";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/date";
import Modal from "../components/molecules/Modal";
import ModalInfo from "../components/atoms/ModalInfo";
import Wrapper from "../components/atoms/Wrapper";

const Activity = () => {

    const [activity, setActivity] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [dataActivity, setDataActivity] = useState({});
    const [modalInformation, setModalInformation] = useState(false);


    const getDataActivity = async () => {
        const {data} = await getActivity();
        setActivity(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getDataActivity();
    },[]);



    const addActivity = async () => {
        const {success} = await postActivity({title: 'New Activity', email: 'ulhaqitcom@gmail.com'});
        if(!success) {
            getDataActivity();
        }

    }


    const onDeleteHandler = async (id) => {
        await deleteActivity(id);
        setOpenModal(false);
        setModalInformation(true);
        getDataActivity();
    }

    const modalDelete = (activites) => {
        setDataActivity(activites)
        setOpenModal(true);
    }


    return(
        <Wrapper>
            <header>
                <Header/>
            </header>

            <main>
                <div className="flex w-full mt-14 mx-auto justify-center sm:justify-start">
                    <div className="flex gap-10">
                        <div className="sm:absolute sm:left-0 sm:ml-20">
                            <h1 data-cy='activity-title' className='text-black text-2xl md:text-4xl font-bold mt-4'>
                                Activity
                            </h1>
                        </div>
                        <div className="sm:absolute sm:right-0 sm:mr-20">
                            <Button data-cy='activity-add-button' onClick={() => addActivity()} className='w-32 bg-primary hover:bg-secondary'>
                                <span className="flex mx-auto">
                                <img src={ICPlus} alt="tabler plus" />
                                    Tambah
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
                <article>
                    <div className="flex w-full mx-auto justify-center sm:mt-14 p-12 ">
                        <div className="flex flex-wrap gap-2"> 
                            { isLoading ? (
                                <Loading/>
                                ) : activity.length > 0 ? (
                                    activity.map((activites) => (
                                        <Card key={activites.id}>
                                            <Link to={`/detail/${activites.id}`} >
                                            <Card.Title>
                                                    {activites.title}
                                            </Card.Title>
                                            <Card.Body>
                                            </Card.Body>
                                            </Link>
                                            <Card.Footer>
                                            <div className="flex justify-between">
                                                <span>
                                                    <p data-cy='activity-item-date' className="ml-4 mt-4">{showFormattedDate(activites.created_at)}</p>
                                                </span>
                                                <span>

                                                    <Button data-cy='activity-item-delete-button' id={activites.id} onClick={() => modalDelete(activites)}>
                                                        <img src={ICDelete} alt='delete-item' className=" h-6 w-6" />
                                                    </Button>
                                                    
                                                </span>
                                            </div>
                                            </Card.Footer>
                                        </Card>
                                    ))
                                    
                                ) : (
                                <ActivityEmpty addActivity={addActivity} />
                                )
                            }

                        </div>
                    </div>
                    {openModal && <div onClick={() => setOpenModal(!openModal)}><Modal closeModal={setOpenModal} dataActivity={dataActivity} deleteActivity={onDeleteHandler} /></div>}
                    {modalInformation && <ModalInfo setModalInformation={setModalInformation}/>}
                </article>
            </main>
        </Wrapper>
    );
}

export default Activity;