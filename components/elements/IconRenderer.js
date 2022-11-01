function IconRenderer(props) {
  return (
    <div className="svg_icon_container">
      <img
        className="svg_icon"
        src={props?.src}
        alt={props?.alt}
        width={props?.size?.width}
        height={props?.size?.height}
      />
    </div>
  )
}

export default IconRenderer;