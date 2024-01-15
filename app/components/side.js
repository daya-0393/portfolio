import './style.scss';

const Side = ({position, children}) => {

  const horizontalPosition = position === 'left' ? {left: '3rem', right: 'auto'} : {right: '3rem', left: 'auto'};

  return (
    <div className="d-none d-lg-block position-fixed bottom-0 z-10 " style={horizontalPosition}>
      {children}
    </div>
  )
}

export default Side;