import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const CheckCircle = forwardRef<SVGSVGElement, IconProps>(
  (
    { color = 'currentColor', size = '1em', weight = 'regular', ...rest },
    ref
  ) => {
    switch (weight) {
      case 'thin':
      case 'light':
      case 'regular':
        return (
          <svg
            ref={ref}
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 16 16'
            fill='none'
            stroke={color}
            {...rest}
          >
            {' '}
            <title>ph-check-circle</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-172.000000, -868.000000)'
              >
                <g
                  id='ph-check-circle'
                  transform='translate(172.000000, 868.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M8,1.5 C11.5891424,1.5 14.5,4.41085763 14.5,8 C14.5,11.5891424 11.5891424,14.5 8,14.5 C4.41085763,14.5 1.5,11.5891424 1.5,8 C1.5,4.41085763 4.41085763,1.5 8,1.5 Z M8,2.5 C4.96314237,2.5 2.5,4.96314237 2.5,8 C2.5,11.0368576 4.96314237,13.5 8,13.5 C11.0368576,13.5 13.5,11.0368576 13.5,8 C13.5,4.96314237 11.0368576,2.5 8,2.5 Z M11.1116934,6.15477855 C11.2811695,6.33234101 11.2941732,6.60214155 11.1546743,6.79381209 L11.0952215,6.86169345 L7.42822145,10.3616934 C7.25914806,10.523067 7.00521501,10.5432228 6.81494354,10.4221711 L6.73772928,10.3616464 L4.90472928,8.61164642 C4.70499748,8.42095866 4.69766583,8.10446108 4.88835358,7.90472928 C5.05785381,7.7271899 5.32675933,7.7016704 5.52470155,7.83211734 L5.59527072,7.88835358 L7.083,9.308 L10.4047785,6.13830655 C10.6045363,5.94764601 10.9210329,5.95502077 11.1116934,6.15477855 Z'
                    id='Combined-Shape'
                    fill={color}
                    fillRule='nonzero'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        )
      case 'bold':
      case 'fill':
      case 'duotone':
      default:
        throw new Error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        )
    }
  }
)

CheckCircle.displayName = 'CheckCircle'

export default CheckCircle
