import { SVGAttributes } from "react";


interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={456}
      height={492}
      viewBox="0 0 556 492"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M556 246.056c0-36.598-46.126-71.283-116.844-92.792 16.32-71.62 9.067-128.602-22.893-146.845-7.366-4.28-15.979-6.306-25.386-6.306v25.112c5.213 0 9.407 1.013 12.92 2.928 15.413 8.784 22.1 42.23 16.886 85.247-1.246 10.585-3.286 21.734-5.78 33.108-22.212-5.406-46.465-9.572-71.965-12.275-15.299-20.833-31.165-39.752-47.145-56.306 36.946-34.121 71.625-52.815 95.198-52.815V0c-31.166 0-71.965 22.072-113.218 60.36C236.521 22.297 195.722.45 164.556.45v25.113c23.46 0 58.252 18.58 95.198 52.477-15.866 16.554-31.733 35.36-46.806 56.193-25.612 2.703-49.865 6.869-72.078 12.387a337.647 337.647 0 01-5.893-32.657c-5.327-43.018 1.246-76.463 16.546-85.36 3.4-2.027 7.82-2.928 13.033-2.928V.563c-9.52 0-18.133 2.027-25.613 6.306-31.846 18.243-38.985 75.112-22.552 146.508C45.899 174.998 0 209.57 0 246.056c0 36.599 46.126 71.283 116.844 92.792-16.32 71.621-9.067 128.603 22.893 146.846 7.366 4.279 15.979 6.306 25.499 6.306 31.166 0 71.965-22.072 113.217-60.36 41.253 38.063 82.052 59.91 113.218 59.91 9.519 0 18.133-2.027 25.612-6.307 31.846-18.243 38.986-75.112 22.553-146.507C510.101 317.227 556 282.542 556 246.056zm-147.556-75.112c-4.194 14.527-9.407 29.505-15.3 44.482-4.647-9.009-9.52-18.018-14.846-27.027-5.214-9.009-10.767-17.792-16.32-26.351 16.093 2.365 31.619 5.293 46.466 8.896zm-51.906 119.932c-8.84 15.202-17.906 29.617-27.313 43.017-16.886 1.464-33.999 2.253-51.225 2.253-17.113 0-34.226-.789-50.999-2.14-9.406-13.401-18.586-27.702-27.426-42.792-8.613-14.753-16.433-29.73-23.573-44.82 7.027-15.09 14.96-30.18 23.46-44.932 8.84-15.202 17.906-29.617 27.313-43.018 16.886-1.463 33.999-2.252 51.225-2.252 17.113 0 34.226.789 50.999 2.14 9.406 13.401 18.586 27.702 27.426 42.792 8.613 14.752 16.433 29.73 23.573 44.82-7.14 15.09-14.96 30.18-23.46 44.932zm36.606-14.64a480.59 480.59 0 0115.64 44.82c-14.847 3.603-30.486 6.644-46.693 9.009 5.554-8.672 11.107-17.568 16.32-26.689 5.213-9.009 10.086-18.131 14.733-27.14zM278.227 396.393c-10.54-10.811-21.08-22.86-31.506-36.036 10.2.451 20.626.788 31.166.788 10.653 0 21.193-.225 31.506-.788a440.446 440.446 0 01-31.166 36.036zm-84.318-66.328c-16.093-2.365-31.62-5.293-46.466-8.897 4.193-14.527 9.407-29.504 15.3-44.481 4.646 9.009 9.52 18.018 14.846 27.026a744.974 744.974 0 0016.32 26.352zM277.66 95.72c10.54 10.811 21.08 22.86 31.506 36.036-10.2-.451-20.626-.789-31.166-.789-10.653 0-21.193.225-31.506.789A440.484 440.484 0 01277.66 95.72zm-83.865 66.328c-5.553 8.671-11.106 17.567-16.319 26.689-5.213 9.009-10.087 18.018-14.733 27.027a480.59 480.59 0 01-15.64-44.82 553.566 553.566 0 0146.692-8.896zM91.231 303.038c-40.119-17.005-66.072-39.302-66.072-56.982s25.953-40.089 66.072-56.981c9.747-4.167 20.4-7.883 31.393-11.374 6.46 22.072 14.959 45.045 25.499 68.581-10.426 23.423-18.813 46.283-25.159 68.242-11.22-3.491-21.873-7.32-31.733-11.486zm60.972 160.922c-15.413-8.784-22.099-42.23-16.886-85.247 1.246-10.586 3.286-21.734 5.78-33.108 22.212 5.405 46.465 9.572 71.965 12.275 15.299 20.833 31.165 39.751 47.145 56.305C223.261 448.307 188.582 467 165.009 467c-5.099-.112-9.406-1.126-12.806-3.04zm268.82-85.81c5.327 43.017-1.246 76.463-16.546 85.359-3.4 2.027-7.82 2.928-13.033 2.928-23.459 0-58.252-18.581-95.198-52.477 15.867-16.554 31.733-35.36 46.806-56.193 25.613-2.703 49.865-6.869 72.078-12.387 2.607 11.373 4.647 22.297 5.893 32.77zm43.633-75.112c-9.747 4.166-20.4 7.883-31.393 11.374-6.46-22.072-14.96-45.045-25.499-68.581 10.426-23.423 18.812-46.283 25.159-68.243 11.22 3.491 21.873 7.32 31.846 11.487 40.119 17.004 66.072 39.301 66.072 56.981-.114 17.68-26.066 40.09-66.185 56.982z"
        fill="#8257E6"
      />
      <path
        d="M278 300c27.062 0 49-21.714 49-48.5S305.062 203 278 203s-49 21.714-49 48.5 21.938 48.5 49 48.5z"
        fill="#8257E6"
      />
    </svg>
  )
}

