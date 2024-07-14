import { FaPencil, FaTrashCan } from 'react-icons/fa6';

function DataTable({ data, columns, handleDelete, set, handleOpenModal }) {
  return (
    <>
      {/* Data */}
      <div className="flex justify-center w-full h-full">
        <div className="overflow-x-auto w-3/4">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
                <th>actions</th>
              </tr>
            </thead>
            {data && (
              <tbody>
                {/* rows */}
                {data.map((row, index) => (
                  <tr key={index}>
                    {columns.map((col, index) => (
                      <td key={index}>{row[col]}</td>
                    ))}
                    <td>
                      <button
                        onClick={() => handleDelete(row._id)}
                        className="btn btn-error btn-sm mr-2 text-base-100"
                      >
                        <FaTrashCan />
                      </button>
                      <button
                        onClick={() => {
                          set(row);
                          handleOpenModal();
                        }}
                        className="btn btn-primary btn-sm text-base-100"
                      >
                        <FaPencil />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
            {/* <p className="text-center pt-5 font-bold">No data</p> */}
          </table>
        </div>
      </div>
      {/* Data */}
    </>
  );
}

export default DataTable;
