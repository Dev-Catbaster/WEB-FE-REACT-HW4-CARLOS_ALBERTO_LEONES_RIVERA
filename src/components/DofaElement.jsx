const DofaElement = ({ data }) => {
    return <article className="flex flex-col p-4 bg-[#505050] rounded-lg shadow-lg h-full">
        <h3 className="text-xl font-semibold mb-2 text-orange-500">{data.type}</h3>
        <ul className="list-decimal pl-5 space-y-2 flex-grow">
            {data.items.map((item) => (
                <li key={item.id} className="mb-2">
                    <h4 className="text-lg font-medium text-amber-500">{item.name}</h4>
                    <p className="text-white">{item.description}</p>
                </li>
            ))}
        </ul>
    </article>
}

export default DofaElement;
