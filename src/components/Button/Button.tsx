import Image from "next/image";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode | string;
    children?: React.ReactNode;
}

export default function Button({ icon, children, ...props }: IButtonProps) {
    return (
        <button
            className="bg-blue-900 text-white px-4 py-3 min-w-44 rounded-md flex flex-row justify-center shadow-sm hover:shadow-xl"
            {...props}
        >
            {typeof icon === 'string'
                ? <Image
                    src={icon}
                    alt="Icon"
                    width={24}
                    height={24}
                    className="mx-2"
                />
                : <span className="mx-2">{icon}</span>
            }
            {children}
        </button>
    );
}