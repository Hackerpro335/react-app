interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button =({ onClick, children} : ButtonProps) => (
    <button label = 'click me' onClick={onClick} style = {{backgroundColor: 'red', color: 'white'}}>
        {children}
    </button>
);

export default Button;