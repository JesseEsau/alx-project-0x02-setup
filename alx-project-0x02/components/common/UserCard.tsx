import { UserProps } from '../../interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
    return (
        <div className="bg-white shadow-md rounded p-4 border border-gray-200">
            <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
            <p className="text-gray-700 mb-1">{user.email}</p>
            <p className="text-gray-500 text-sm">
                {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </p>
        </div>
    );
};

export default UserCard;