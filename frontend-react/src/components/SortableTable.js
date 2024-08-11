import Table from "./Table";
import useSort from "../hooks/use-sort";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
function SortableTable(props) {

    const { config, data } = props;
    const { setSortLabel, sortedData, sortBy, sortOrder } = useSort(data, config);
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => (
                <th className="cursor-pointer px-4 py-2 border-gray-300 hover:bg-gray-300" onClick={() => setSortLabel(column.label)}>
                    <div className="flex items-center gap-1">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        }
    })

    return (
        < Table {...props} data={sortedData} config={updatedConfig} />
    );

}
function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <FaAngleUp />
            <FaAngleDown />
        </div>
    }
    if (sortOrder === null) {
        return <div>
            <FaAngleUp />
            <FaAngleDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <FaAngleUp />
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
            <FaAngleDown />
        </div>
    }

}

export default SortableTable;