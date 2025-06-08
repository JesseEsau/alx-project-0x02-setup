import React from 'react';
import { ButtonProps } from '../../interfaces';

const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({
    size = 'medium',
    shape = 'rounded-md',
    children,
    onClick,
}) => {
    const baseClasses = 'bg-blue-600 text-white hover:bg-blue-700 transition duration-200';
    const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${shape}`;

    return (
        <button className={combinedClasses} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;