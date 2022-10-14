import * as React from "react"

interface GradientProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export function Gradient(props: GradientProps) {
  return (
    <svg
      width={938}
      height={930}
      viewBox="0 0 938 930"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_f_3_50)">
        <ellipse cx={516} cy={504.5} rx={216} ry={204.5} fill="#8257E6" />
      </g>
      <defs>
        <filter
          id="filter0_f_3_50"
          x={0}
          y={0}
          width={1032}
          height={1009}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={150}
            result="effect1_foregroundBlur_3_50"
          />
        </filter>
      </defs>
    </svg>
  )
}

