import Button from "../atoms/Button";
import ICClose from '../../assets/icons/modal-add-close-button.png'
import ICPVeryHigh from '../../assets/icons/Ellipse-high.png'
import ICPHigh from '../../assets/icons/Ellipse-high.png'
import ICPMedium from '../../assets/icons/Ellipse-high.png'
import ICPLow from '../../assets/icons/Ellipse-high.png'
import ICPVeryLow from '../../assets/icons/Ellipse-high.png'
import ICCheck from '../../assets/icons/tabler_check.png'
import Label from "../atoms/Label";
import useInput from "../../hooks/useInput";

const ModalAdd = ({closeModalAdd}) => {
    const [inputListItem, handleInputListItem] = useInput('');
    return(
        <>
        {/* <div className="fixed md:inset-0 bg-gray-600 bg-opacity-75">
            <div  data-cy='modal-delete' className="w-2/6 md:h-auto mx-auto mt-56">
                <div className=" bg-white rounded-2xl shadow dark:bg-gray-700">
                    <div className='p-6 text-center'>
                        <img src={''} alt='delete modal' className=' mx-auto h-24 w-24 '/>
                    </div>
                    <div className='p-2 text-center'>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Apakah anda yakin menghapus activity <br/><span className='font-semibold text-black'>"{'hai'}" ?</span></h3>
                    </div>
                    <div className=" flex p-6 justify-between">
                        <Button onClick={() => closeModalAdd(false)} className=" w-32 ml-20 text-gray-500 bg-gray-100 gap-9  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-full  text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 justify-center">Batal</Button>
                        <Button onClick={() => alert('hello')}  className="text-white w-32 mr-20 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm inline-flex px-5 py-2.5 justify-center ">
                            Hapus
                        </Button>
                    </div>
                </div>
            </div>
        </div> */}

        <div className="fixed md:inset-0 bg-gray-600 bg-opacity-75">
            <div  data-cy='modal-add' className="w-2/4 md:h-auto mx-auto mt-36">
                <div className=" bg-white rounded-2xl shadow dark:bg-gray-700">
                    <div className='p-6 border-b justify-between'>
                        <h3 data-cy='modal-add-title' className="text-black font-semibold text-xl">Tambah List Item</h3>
                        <img data-cy='modal-add-close-button' src={ICClose} alt='modal add close button' onClick={() => closeModalAdd(false)} className='mx-auto h-7 w-7 ml-[95%] -mt-[30px]'/>
                    </div>
                    <div className='p-2 w-full'>
                        <form className="px-8 pt-6 pb-8 mb-4">
                            <div className="mt-6">
                                <Label data-cy='modal-add-name-title' className='block text-gray-700 text-sm font-semibold mr-[80%]' >NAMA LIST ITEM</Label>
                                <input 
                                    placeholder="Tambahkan nama list item" 
                                    value={inputListItem}
                                    onChange={handleInputListItem}
                                    className="appearance-none border mt-4 rounded w-full py-4 px-3 text-gray-400 focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mt-6">
                                <Label className='block text-gray-700 text-sm font-semibold mr-[80%]' >PRIORITY</Label>
                                <select className="appearance-none border mt-4 rounded w-1/2 py-4 px-3 text-gray-900 focus:outline-none focus:shadow-outline">
                                    <option>Very High</option>
                                    <option>High</option>
                                    <option>Normal</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className=" flex p-6 border-t ">
                        {inputListItem.length < 1 ? (
                            <Button data-cy='modal-add-save-button' disabled className='text-white ml-[85%] w-32 mr-20 bg-primary cursor-not-allowed disabled:opacity-25 focus:outline-none font-medium rounded-full text-sm inline-flex px-5 py-2.5 justify-center'>
                                Simpan
                            </Button>
                        ): (
                            <Button data-cy='modal-add-save-button' className='text-white ml-[85%] w-32 mr-20 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm inline-flex px-5 py-2.5 justify-center'>
                                Simpan
                            </Button>
                        )}

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}






export default ModalAdd;