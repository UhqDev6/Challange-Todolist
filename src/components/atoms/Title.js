const Title = ({className = 'text-white text-sm font-semibold', text, children, ...props}) => {
    return(
        <>
            <p  {...props} className={`${className}`}>
                {text || children}
            </p>
        </>
    );
}

export default Title;