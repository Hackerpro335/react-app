const Button =({ onClick, children}) => (
    <Button label = 'click me' onClick={onClick} style = {{backgroundColor: 'red', color: 'white'}}>
        {children}
    </Button>
);

export default Button;