import Title from "../atoms/Title";

const Header = () => {
    return(
        <>
            <div data-cy="header-background" className="flex bg-primary pt-12">
                <div className="pl-20">
                    <h2 data-cy="header-title" className='text-[24px] text-white font-bold ml-32 pb-10'>
                        TO DO LIST APP
                    </h2>
                </div>
            </div> 
        </>
    );
}

export default Header;