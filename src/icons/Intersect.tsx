import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Intersect = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-intersect</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-203.000000, -803.000000)'
              >
                <g
                  id='ph-intersect'
                  transform='translate(203.500000, 803.500100)'
                >
                  <polygon
                    id='Fill-1'
                    points='0.5 16.5 16.5 16.5 16.5 0.5 0.5 0.5'
                  ></polygon>
                  <path
                    d='M6.5,1.5 C8.94827405,1.5 10.9859189,3.26022803 11.4162604,5.58400988 C13.739772,6.01408108 15.5,8.05172595 15.5,10.5 C15.5,13.2611424 13.2611424,15.5 10.5,15.5 C8.05172595,15.5 6.01408108,13.739772 5.58373958,11.4159901 C3.26022803,10.9859189 1.5,8.94827405 1.5,6.5 C1.5,3.73885763 3.73885763,1.5 6.5,1.5 Z M11.4976528,6.62545553 L11.4953799,6.71686856 C11.4580447,7.59145801 11.195973,8.40791312 10.7654523,9.10994649 C10.7615548,9.11734491 10.7567071,9.1245889 10.7516498,9.13172996 C10.3443147,9.78887069 9.78887069,10.3443147 9.13205674,10.7518141 L9.19675339,10.6967534 C9.16991912,10.7235877 9.14079357,10.7467342 9.11000652,10.766193 C8.35019336,11.2313696 7.45642998,11.5 6.5,11.5 L6.62545553,11.4976528 C7.06877085,13.2239166 8.63558668,14.5 10.5,14.5 C12.7088576,14.5 14.5,12.7088576 14.5,10.5 C14.5,8.63558668 13.2239166,7.06877085 11.4976528,6.62545553 Z M6.79138979,8.99864997 C6.60348798,9.46224927 6.5,9.96905734 6.5,10.5 C7.03094266,10.5 7.53775073,10.396512 8.00135003,10.2086102 Z M6.5,2.5 C4.29114237,2.5 2.5,4.29114237 2.5,6.5 C2.5,8.36441332 3.77608339,9.93122915 5.50234718,10.3745445 C5.52413592,9.46287857 5.79040954,8.61237065 6.23763747,7.88502177 C6.24109303,7.87971832 6.24485959,7.87416372 6.24875016,7.86867004 C6.65568527,7.21112931 7.21112931,6.65568527 7.86794326,6.2481859 L7.80364661,6.30364661 C7.82900533,6.27828789 7.85641027,6.25622251 7.88532994,6.23745047 C8.64585923,5.76981829 9.54145776,5.5 10.5,5.5 L10.3745445,5.50234718 C9.93122915,3.77608339 8.36441332,2.5 6.5,2.5 Z M8.0958978,7.30296662 C7.79598623,7.52886801 7.52886801,7.79598623 7.30296662,8.0958978 L8.9041022,9.69703338 C9.20401377,9.47113199 9.47113199,9.20401377 9.69703338,8.9041022 Z M10.5,6.5 C9.96905734,6.5 9.46224927,6.60348798 8.99864997,6.79138979 L10.2086102,8.00135003 C10.396512,7.53775073 10.5,7.03094266 10.5,6.5 Z'
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

Intersect.displayName = 'Intersect'

export default Intersect
