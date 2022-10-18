import Title from "../atoms/Title";

const Header = () => {
    return(
        <>
            <div data-cy="header-background" className="flex bg-primary pt-12">
                <div className="pl-20">
                    <Title data-cy="header-title" className='text-3xl text-white font-semibold ml-32 pb-10'>
                        TO DO LIST APP
                    </Title>
                </div>
            </div> 
        </>
    );
}

export default Header;