/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface TableHeaderProps extends PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>> {}

export const TableHeader = forwardRef(
  ({ children, className, ...restProps }: TableHeaderProps, ref: ForwardedRef<HTMLTableSectionElement>) => (
    <thead {...restProps} ref={ref} className={clsx('amsterdam-table__header', className)}>
      {children}
    </thead>
  ),
)

TableHeader.displayName = 'TableHeader'