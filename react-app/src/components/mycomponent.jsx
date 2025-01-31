import PropTypes from "prop-types";
import Button from "./common/button/Button";
import "./mycomponent.css";

const MyComponent = ({title, description}) => {
    const myProps = {
        title:"шо я наробыу", 
        description: "што я написау"
    }

    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <Button 
                onClick={() => alert('clicked')}
            >
                click me 
            </Button>
        </div>
    );
};

MyComponent.PropTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired
};

export default MyComponent;