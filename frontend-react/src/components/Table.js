import { Fragment } from 'react';
function Table({ data, config, keyFn }) {
    const renderedRows = data.map((row) => {

        return (
            <tr className="border-b" key={keyFn(row)}>
                {
                    config.map((column) => {
                        return (
                            <td className="p-4 border border-gray-300" key={column.label}>{column.render(row)}</td>
                        )
                    })
                }
            </tr>
        )
    })
    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label} >{column.header()}</Fragment>;
        }
        return (
            <th key={column.label}>
                {column.label}
            </th>
        )
    })
    return (
        <table className="w-full border-collapse">
            <thead>
                <tr className="bg-gray-200">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}
export default Table;