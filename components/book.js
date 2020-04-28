
const Book = (props) => {

  return (
    <div className='book' style={{
      width: props.width,
      height: props.height,
      margin: props.margin,
      fontSize: props.fontSize,
      color: props.color,
      backgroundColor: props.backgroundColor,
      fontFamily: props.fontFamily
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
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          writing-mode: vertical-rl;
          text-orientation: upright;
        }

      `}</style>
      <div className='text' style={{  
        display: props.titleStyle.display
      }}>
        {props.title}
      </div>
    </div>
  )
}

export default Book
