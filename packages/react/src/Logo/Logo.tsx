/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'
import {
  LogoAmsterdam,
  LogoGgdAmsterdam,
  LogoStadsarchief,
  LogoStadsbankVanLening,
  LogoVgaVerzekeringen,
} from './brand'

type LogoBrand = 'amsterdam' | 'ggd-amsterdam' | 'stadsarchief' | 'stadsbank-van-lening' | 'vga-verzekeringen'

export interface LogoProps extends SVGProps<SVGSVGElement> {
  brand?: LogoBrand
}

const logoConfig: Record<
  LogoBrand,
  ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>
> = {
  amsterdam: LogoAmsterdam,
  'ggd-amsterdam': LogoGgdAmsterdam,
  stadsarchief: LogoStadsarchief,
  'stadsbank-van-lening': LogoStadsbankVanLening,
  'vga-verzekeringen': LogoVgaVerzekeringen,
}

export const Logo = forwardRef(
  ({ brand = 'amsterdam', className, ...restProps }: LogoProps, ref: ForwardedRef<SVGSVGElement>) => {
    const LogoComponent = logoConfig[brand]

    return <LogoComponent {...restProps} ref={ref} className={clsx('amsterdam-logo', className)} />
  },
)

Logo.displayName = 'Logo'