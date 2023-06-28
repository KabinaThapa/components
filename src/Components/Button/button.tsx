import React from "react";
import clsx from "clsx";
import { ButtonProps } from "./type";
import { baseClasses, variantClasses, sizeClasses, outlineClasses } from './styles';
//const Button defines a constant variable named Button that represents our React component.
//React.FC<ButtonProps> specifies that Button is a functional component that accepts props of type ButtonProps.
//({...}):This is the destructuring syntax used to extract individual properties from the ButtonProps object passed to the component.
//size = 'medium', variant = 'primary', outline = false, disabled = false, type = 'button', isPill = false:
//These are the default values assigned to the corresponding properties if they are not provided when using the Button component.

const Button:React.FC<ButtonProps> = ({
    size='medium',
    variant='primary',
    outline=false,
    icon, 
    children,
    className,
    onClick,
    disabled=false,
    type='button',
    isPill=false, }: ButtonProps) => {
        const buttonClasses=clsx(
            baseClasses,
            variantClasses[variant],
            outlineClasses[outline.toString()],
            sizeClasses[size],
            className,
            isPill ? 'bg-black':''

        )
        return(
           <button 
           className={buttonClasses}
           onClick={onClick}
           disabled={disabled}
           >
            {children}

           </button>
        )

    };
