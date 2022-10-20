const ModalBackground = ({closeModalAdd, setOpenModalAdd, openModalAdd,openModalEdit,closeModalEdit,setOpenModalEdit, CloseModalInformation, CloseModalInformationActivity}) => {
    return(
        <>
            {openModalAdd && (
                <div className="fixed z-20 inset-0  bg-gray-600 bg-opacity-75" onClick={() => closeModalAdd(!setOpenModalAdd)} >
                </div>
            )}

            {openModalEdit && (
                <div className="fixed z-20 inset-0  bg-gray-600 bg-opacity-75" onClick={() => closeModalEdit(!setOpenModalEdit)} >
                </div>
            )}

            {CloseModalInformation && (
                <div className="fixed z-20 inset-0  bg-gray-600 bg-opacity-75" onClick={() => CloseModalInformation(false)} >
                </div>
            )}

            {CloseModalInformationActivity && (
                <div className="fixed z-20 inset-0  bg-gray-600 bg-opacity-75" onClick={() => CloseModalInformationActivity(false)} >
                </div>
            )}
        </>
    );
}

export default ModalBackground;