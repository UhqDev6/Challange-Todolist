const Title = (props) => {
        const {className = 'text-white text-sm font-semibold', data='activity', text, children} = props;
    return(
        <>
            <p data-cy={`${data}`} className={`${className}`}>
                {text || children}
            </p>
        </>
    );
}

export default Title;