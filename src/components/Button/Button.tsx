import Image from "next/image";

type TButtonProps = {
    icon?: React.ReactNode | string,
    children?: React.ReactNode,
}

export default function Button({ icon, children }: TButtonProps) {
    return (
        <button className="bg-blue-900 text-white px-4 py-3 min-w-44 rounded-md flex flex-row justify-center shadow-sm hover:shadow-xl">
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