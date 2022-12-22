const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
import Countdown from "react-countdown";


export default function Counter({ hours, minutes, seconds, completed }){
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

  <Countdown date={Date.now() + 900000} Counter={Counter} />


