import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import { cn } from '../../lib/utils';

export interface TableColumn<T = any> {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
  width?: string | number;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  selectedItems: string[];
  onSelectAll: () => void;
  onSelectItem: (itemId: string) => void;
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  className?: string;
  containerClassName?: string;
}

const TableEnhanced = <T extends { id: string }>({
  columns,
  data,
  selectedItems,
  onSelectAll,
  onSelectItem,
  onRowClick,
  isLoading = false,
  containerClassName = '',
}: TableProps<T>) => {
  if (isLoading) {
    return (
      <div className={cn('overflow-auto px-5', containerClassName)}>
        <div className="animate-pulse h-full">
          <div className="overflow-y-auto h-full">
            <Table>
              <TableHeader className="sticky top-0 bg-white z-10">
                <TableRow>
                  <TableHead className="w-12 bg-white">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  </TableHead>
                  {columns.map((column, index) => (
                    <TableHead key={index} className="bg-white">
                      <div className="h-4 bg-gray-300 rounded w-16"></div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell className="w-12">
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    </TableCell>
                    {columns.map((column, colIndex) => (
                      <TableCell key={colIndex}>
                        <div className="h-4 bg-gray-300 rounded w-24"></div>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(' h-full flex flex-col relative', containerClassName)}>
      {/* Fixed Header */}
      <div className="sticky top-0 bg-white z-20 shadow-sm border-b border-gray-200">
        <div className="flex w-full align-middle items-center">
          <div className="w-12 px-6 py-3 bg-white flex-shrink-0">
            <input
              type="checkbox"
              checked={selectedItems.length === data.length && data.length > 0}
              onChange={onSelectAll}
              className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
            />
          </div>
          {columns.map((column, index) => (
            <div
              key={index}
              className={cn(
                'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white',
                column.className
              )}
              style={{
                width: column.width || 'auto',
                minWidth: column.width || '150px',
                flex: column.width ? 'none' : '1',
              }}
            >
              {column.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto overflow-x-auto relative">
        <div className="w-full">
          {data.map((item, index) => (
            <div
              key={item.id || index}
              className="flex hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100"
              onClick={() => onRowClick?.(item)}
            >
              <div className="w-12 px-6 py-4 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => onSelectItem(item.id)}
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                />
              </div>
              {columns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className={cn('px-6 py-4', column.className)}
                  style={{
                    width: column.width || 'auto',
                    minWidth: column.width || '150px',
                    flex: column.width ? 'none' : '1',
                  }}
                >
                  {column.render
                    ? column.render(item)
                    : (item as any)[column.key]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableEnhanced;
