import React from 'react';

export interface TableColumn<T = any> {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  selectedItems: string[];
  onSelectAll: () => void;
  onSelectItem: (itemId: string) => void;
  isLoading?: boolean;
  className?: string;
  containerClassName?: string;
}

const Table = <T extends { id: string }>({
  columns,
  data,
  selectedItems,
  onSelectAll,
  onSelectItem,
  isLoading = false,
  className = '',
  containerClassName = '',
}: TableProps<T>) => {
  if (isLoading) {
    return (
      <div
        className={`border border-gray-200 rounded-lg overflow-hidden h-full ${containerClassName}`}
      >
        <div className="animate-pulse h-full">
          <div className="overflow-y-auto h-full">
            <table className="w-full">
              <thead className="bg-white sticky border-b border-gray-200 top-0">
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 bg-white">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  </th>
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="text-left py-3 px-4 text-sm font-medium text-gray-900 bg-white"
                    >
                      <div className="h-4 bg-gray-300 rounded w-16"></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }).map((_, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4">
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    </td>
                    {columns.map((column, colIndex) => (
                      <td key={colIndex} className="py-3 px-4">
                        <div className="h-4 bg-gray-300 rounded w-24"></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`border border-gray-200 rounded-lg overflow-hidden ${containerClassName}`}
    >
      <div className="overflow-y-auto overflow-x-auto">
        <table className={`w-full min-w-full table-fixed ${className}`}>
          <thead className="bg-white sticky top-0 border-b border-gray-200">
            <tr className="border-b border-gray-200">
              <th className="px-6 py-3 text-left w-12">
                <input
                  type="checkbox"
                  checked={
                    selectedItems.length === data.length && data.length > 0
                  }
                  onChange={onSelectAll}
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                />
              </th>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-0 ${
                    column.className || ''
                  }`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr
                key={item.id || index}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => onSelectItem(item.id)}
                    className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                  />
                </td>
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-6 py-4 min-w-0 ${column.className || ''}`}
                  >
                    {column.render
                      ? column.render(item)
                      : (item as any)[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
