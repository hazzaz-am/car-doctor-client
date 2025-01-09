import PropTypes from "prop-types"

export const FooterMenu = ({title, children}) => {
  return (
    <div className="space-y-10 text-center">
      <h2 className="text-white font-semibold text-xl">{title}</h2>
      <menu className="space-y-7">
        {children}
      </menu>
    </div>
  )
}

FooterMenu.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element
}