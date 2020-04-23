
const Book = (props) => {

  return (
    <div className='book' style={{
      width: props.width,
      height: props.height,
      margin: props.margin,
      fontSize: props.fontSize,
      color: props.color,
      backgroundColor: props.backgroundColor,
      fontFamily: props.fontFamily,
      titlePosition: props.titlePosition
    }}>
      <style jsx>{`
        .book {
          display: inline-block;

          text-align: center;
          vertical-align: bottom;

          border-radius: 3px;

          padding: 0;
        }

        .text {
          position: relative;
          transform: rotate(90deg);
        }

      `}</style>
      <div className='text' style={{
        top: props.titlePosition
      }}>
        {props.title}
      </div>
    </div>
  )
}

export default Book
