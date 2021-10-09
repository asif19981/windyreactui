import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({
  children,
  isPrimary,
  isSecondary,
  utilities,
  ...otherProps
}) => (
  <button
    className={`
      ${isPrimary && "primary-button"}
      ${isSecondary && "secondary-button"}
      ${utilities}
      default-button-styles
    `}
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton
