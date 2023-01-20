import Title from "../atoms/Title";

const Header = () => {
    return(
        <>
            <div data-cy="header-background" className="w-full flex justify-between items-center h-24 mx-auto px-20 bg-primary">
                <div className="flex mx-auto md:mx-0">
                    <h2 data-cy="header-title" className='w-full text-3xl font-bold text-white'>
                        TO DO LIST APP
                    </h2>
                </div>
            </div> 
        </>
    );
}

export default Header;