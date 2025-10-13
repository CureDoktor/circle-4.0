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
  selectedItems?: string[];
  onSelectAll?: () => void;
  onSelectItem?: (id: string) => void;
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  className?: string;
}

const Table = <T extends { id: string }>({
  columns,
  data,
  selectedItems = [],
  onSelectAll,
  onSelectItem,
  onRowClick,
  isLoading = false,
  className = '',
}: TableProps<T>) => {
  if (isLoading) {
    return (
      <div className={`overflow-auto px-5 ${className}`}>
        <div className="animate-pulse h-full">
          <div className="overflow-y-auto h-full">
            <table className="w-full">
              <thead className="sticky top-0 bg-white z-10">
                <tr>
                  <th className="w-12 bg-white">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  </th>
                  {columns.map((column, index) => (
                    <th key={index} className="bg-white">
                      <div className="h-4 bg-gray-300 rounded w-16"></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }).map((_, index) => (
                  <tr key={index}>
                    <td className="w-12">
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    </td>
                    {columns.map((column, colIndex) => (
                      <td key={colIndex}>
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
    <div className={`overflow-auto px-5 ${className}`}>
      <div className="overflow-y-auto h-full">
        <table className="w-full">
          <thead className="sticky top-0 bg-white z-10">
            <tr>
              <th className="w-12 bg-white">
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
                <th key={index} className="bg-white">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id || index}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => onRowClick?.(item)}
              >
                <td className="w-12">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => onSelectItem?.(item.id)}
                    className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                  />
                </td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>
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
