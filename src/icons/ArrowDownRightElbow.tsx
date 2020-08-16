/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="160 128 208 176 160 224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <polyline points="64 32 64 176 208 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  </g>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="160 128 208 176 160 224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="64 32 64 176 208 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M220.37524,186.13892c.14624-.178.27271-.36573.40992-.54834.176-.23413.35742-.46387.5205-.70777.15113-.22583.282-.46045.42041-.69189.12915-.21582.2649-.42725.384-.64966.12768-.239.23608-.48462.35083-.72852.10815-.229.22241-.45434.31982-.6892.09912-.239.17871-.48291.26563-.72559.08984-.24976.18554-.49634.26318-.75171.07422-.24536.12842-.49438.19067-.74219.0647-.25805.13721-.51269.18921-.77539.05738-.28906.0918-.58081.1333-.87231.03174-.22534.075-.44727.09742-.67554a16.09494,16.09494,0,0,0,0-3.16162c-.02222-.22827-.06568-.44971-.09742-.675-.04126-.2915-.07568-.5835-.1333-.8728-.052-.2627-.12426-.51709-.189-.7749-.06226-.24805-.1167-.49732-.19092-.74268-.07764-.25537-.17334-.50195-.26318-.75171-.08692-.24267-.16651-.48657-.26563-.72559-.09741-.23486-.21167-.4602-.31982-.6892-.11475-.2439-.22315-.48951-.35108-.72852-.11889-.22192-.25415-.43286-.383-.64844-.13868-.23217-.26978-.467-.42115-.69336-.16308-.2434-.34375-.47241-.51928-.7063-.1377-.18286-.26465-.37109-.41114-.54956-.33667-.4104-.69213-.80542-1.06738-1.18017l-47.99438-47.99439a15.99968,15.99968,0,0,0-22.627,22.627L169.37305,160H80V32a16,16,0,0,0-32,0V176a15.99985,15.99985,0,0,0,16,16H169.37305l-20.68653,20.68652a15.99968,15.99968,0,1,0,22.627,22.627l47.99438-47.99439C219.68311,186.94434,220.03857,186.54932,220.37524,186.13892Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="160 128 208 176 160 224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    <polyline points="64 32 64 176 208 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  </g>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="160 128 208 176 160 224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    <polyline points="64 32 64 176 208 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="160 128 208 176 160 224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="64 32 64 176 208 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowDownRightElbow = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const { color, size, weight, mirrored, ...rest } = props;
    const {
      color: contextColor,
      size: contextSize,
      weight: contextWeight,
      mirrored: contextMirrored,
      ...contextRest
    } = useContext(IconContext);

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size ?? contextSize}
        height={size ?? contextSize}
        fill={color ?? contextColor}
        viewBox="0 0 256 256"
        transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
        {...contextRest}
        {...rest}
      >
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

ArrowDownRightElbow.displayName = "ArrowDownRightElbow";

export default ArrowDownRightElbow;
