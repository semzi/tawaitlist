

const Button = ({
  label = '',
  type = 'button',
  variant = 'primary',
  icon =``,
  iconAlt = '',
  className = '',
  children = '',
  ...props
}) => {

  return (
    <button
    typeof={type}
      className={`${className} cursor-pointer`}
      {...props}
    >
      {icon && <img src={icon} alt={iconAlt} className="h-5 w-5" />}
      {label && <span>{label}</span>}
      {children}
    </button>
  );
};


export default Button;
