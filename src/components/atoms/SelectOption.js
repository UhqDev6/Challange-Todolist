import Label from "./Label";
import ICArrowTop from '../../assets/icons/tabler_chevron-top.png';
import ICArrowDown from '../../assets/icons/tabler_chevron-down.png';
import ICIndicator from '../../assets/icons/tabler_check.png';
const SelectOption = (
    {
        openOptionSelected,
        setOpenOptionSelected,
        iconOptionSelected,
        labelOptionSelected,
        valueOptionSelected,
        optionSelected,
        indicatorSelected,
        HandleOptionSelected
    }
    ) => {

    return(
        <>
            <div className="mt-6 z-10 absolute">
                <Label data-cy='modal-add-priority-title' className='text-gray-700 text-sm font-semibold mr-[80%]' >PRIORITY</Label>
                <div data-cy='modal-add-priority-dropdown'>
                { openOptionSelected ? (
                    <div onClick={() => setOpenOptionSelected(!openOptionSelected)} value={valueOptionSelected}  className="appearance-none border mt-4 rounded w-[80%] py-4 px-3 text-gray-600 bg-slate-100 focus:outline-none focus:shadow-outline cursor-pointer">
                    <div className="flex">
                        <p className="mt-[2px]">Pilih Priority</p>
                        <img src={ICArrowTop} alt="Arrow Top" className="w-7 h-7 ml-[58%]" />
                    </div>
                    </div>
                ) : (
                    <div onClick={() => setOpenOptionSelected(!openOptionSelected)} value={valueOptionSelected}  className="appearance-none border mt-4 rounded w-[80%] py-4 px-3 text-gray-600 focus:outline-none focus:shadow-outline cursor-pointer">
                    <div className="flex w-96">
                        <img src={iconOptionSelected} alt="Arrow Top" className="w-4 h-4 mt-[6px]" />
                        <p className="ml-4 mt-[2px]">{labelOptionSelected}</p>
                        {openOptionSelected ? (
                            <img src={ICArrowTop} alt="Arrow Top" className="w-7 h-7 ml-[30%]" />
                        ): (
                            <img src={ICArrowDown} alt="Arrow Top" className="w-7 h-7 absolute ml-[65%]" />
                        )}
                    </div>
                    </div>        
                )
                }

                { openOptionSelected && (
                    <div>
                    {optionSelected.map((item) => (
                    <div key={item.value} data-cy='modal-add-priority-item' onClick={() => HandleOptionSelected(item)} className={`border-b-[1px] w-[80%] py-4 px-3 text-gray-600 hover:bg-slate-100 bg-white shadow-sm  cursor-pointer`}>
                            <div className="flex w-96" value={item.value} >
                                <img src={item.icon} alt="Arrow Top" className="w-3 h-3 mt-[6px]" />
                                <p className="ml-4">{item.label}</p>
                                {indicatorSelected === item.label && (
                                    <img src={ICIndicator} alt="Arrow Top" className="absolute w-6 h-6 ml-[65%]" />
                                )}
                            </div>
                    </div>
                    ))}
                    </div>
                )}
                </div>
            </div>
        </>
    );
}


export default SelectOption;