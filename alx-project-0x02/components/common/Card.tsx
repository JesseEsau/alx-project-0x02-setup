import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 max-w-md w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{content}</p>
        </div>
    );
};

export default Card;
