
type TButtonProps = {
    icon?: React.ReactNode,
    children?: React.ReactNode,
}

export default function Button({ icon, children }: TButtonProps) {
    return (
        <button className="bg-blue-900 text-white px-4 py-3 min-w-44 rounded-md flex flex-row justify-center shadow-sm hover:shadow-xl">
            {icon}
            {children}
        </button>
    );
}