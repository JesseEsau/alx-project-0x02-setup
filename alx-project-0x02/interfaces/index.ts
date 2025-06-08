export interface CardProps {
    title: string;
    content: string;
}

export interface Post {
    title: string;
    content: string;
}

export interface PostProps {
    title: string;
    content: string;
    userId: number;
}


export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: Post) => void;
}

export interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    children: React.ReactNode;
    onClick?: () => void;
}

export interface UserProps {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
}