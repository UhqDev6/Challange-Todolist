import ICInfo from '../../assets/icons/modal-information-icon.png';
const ModalInfoo = ({setModalInformation}) => {
    return(
        <>
            {/* <div data-cy='modal-information' className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setModalInformation(false)}> */}
                    <div className="bg-white rounded-2xl shadow dark:bg-gray-700 w-2/6 md:h-auto mx-auto z-50 fixed ml-[30%] -mt-[20%]">
                        <div className=" flex p-6 justify-between">
                            <img data-cy='modal-information-icon' src={ICInfo} alt='modal information icon' className='h-6 w-6' />
                            <p data-cy='modal-information-title' className='mr-48'>Activity berhasil dihapus</p>
                        </div>
                    </div>
            {/* </div> */}
        </>
    );
}

export default ModalInfoo;