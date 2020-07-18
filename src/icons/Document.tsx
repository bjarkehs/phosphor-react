import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Document = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-document</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-236.000000, -836.000000)'
              >
                <g id='ph-doc' transform='translate(236.000000, 836.000000)'>
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M9.5,1.5 C9.52896443,1.5 9.55766975,1.50251317 9.58582442,1.50741875 L9.5,1.5 C9.53717995,1.5 9.57341209,1.50405811 9.60827763,1.51175555 C9.62775202,1.51617529 9.64709994,1.52170605 9.66603209,1.52837132 C9.67677972,1.5320035 9.68758225,1.53623305 9.69819437,1.54081971 C9.71222744,1.54702228 9.72585435,1.55365924 9.7391668,1.56090986 C9.75136271,1.56745005 9.76347123,1.57473542 9.77523219,1.58250443 C9.80320797,1.60101089 9.82948156,1.62237478 9.85355339,1.64644661 L9.80505204,1.60380833 C9.81761754,1.61349761 9.82970924,1.62377131 9.84128643,1.63458875 L9.85355339,1.64644661 L13.3535534,5.14644661 C13.3576167,5.1505099 13.3616028,5.15463592 13.3655108,5.1588224 C13.3762287,5.17029076 13.3865024,5.18238246 13.3961917,5.19494796 C13.4036348,5.20465073 13.410734,5.21460802 13.417449,5.22479402 C13.4252646,5.23652877 13.4325499,5.24863729 13.4393234,5.26106504 C13.4463408,5.27414565 13.4529777,5.28777256 13.4589828,5.30166987 C13.463767,5.31241775 13.4679965,5.32322028 13.4718538,5.33419807 C13.478294,5.35290006 13.4838247,5.37224798 13.4881784,5.39190902 C13.4895896,5.39781538 13.4908237,5.40395012 13.4919443,5.41012437 C13.4974868,5.44233025 13.5,5.47103557 13.5,5.5 L13.5,5.5 L13.5,14 C13.5,14.2761424 13.2761424,14.5 13,14.5 L13,14.5 L3,14.5 C2.72385763,14.5 2.5,14.2761424 2.5,14 L2.5,14 L2.5,2 C2.5,1.72385763 2.72385763,1.5 3,1.5 L3,1.5 Z M9,2.5 L3.5,2.5 L3.5,13.5 L12.5,13.5 L12.5,6 L9.5,6 C9.25454011,6 9.05039163,5.82312484 9.00805567,5.58987563 L9,5.5 L9,2.5 Z M11.793,5 L10,3.207 L10,5 L11.793,5 Z'
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

Document.displayName = 'Document'

export default Document
