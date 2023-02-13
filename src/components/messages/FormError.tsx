// * IMPORTS
// Icons
import iconError from '../../theme/images/icons/error.svg';

// * INTERFACE FOR PROPS
interface FormErrorProps {
  text: string;
}

// * FORM ERROR
const FormError: React.FC<FormErrorProps> = (props) => {
  // Render Form Error
  return (
    <aside className="qd-form-error-container
      animate__animated animate__lightSpeedInLeft animate__fast
    ">

      {/* Icon */}
      <img className="icon-error
        animate__animated animate__flip animate__infinite animate__slower
      " src={iconError} alt=""/>

      {/* Text */}
      <p className="qd-form-error">{props.text}</p>

    </aside>
  );
};

export default FormError;
