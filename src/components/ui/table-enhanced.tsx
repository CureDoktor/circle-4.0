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
  className = '',
  containerClassName = '',
}: TableProps<T>) => {
  if (isLoading) {
    return (
      <div className={cn(' overflow-auto px-5', containerClassName)}>
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
    <div
      className={cn(
        'border-b border-t border-gray-200 overflow-hidden',
        containerClassName
      )}
    >
      <div className="overflow-y-auto overflow-x-auto">
        <Table className={cn('w-full min-w-full', className)}>
          <TableHeader className="sticky top-0 bg-white z-10">
            <TableRow>
              <TableHead className="w-12 px-6 py-3 bg-white">
                <input
                  type="checkbox"
                  checked={
                    selectedItems.length === data.length && data.length > 0
                  }
                  onChange={onSelectAll}
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                />
              </TableHead>
              {columns.map((column, index) => (
                <TableHead
                  key={index}
                  className={cn(
                    'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white',
                    column.className
                  )}
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={item.id || index}
                className="hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => onRowClick?.(item)}
              >
                <TableCell className="w-12 px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => onSelectItem(item.id)}
                    className="rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                  />
                </TableCell>
                {columns.map((column, colIndex) => (
                  <TableCell
                    key={colIndex}
                    className={cn('px-6 py-4', column.className)}
                  >
                    {column.render
                      ? column.render(item)
                      : (item as any)[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableEnhanced;
