import TimerBody from "./TimerBody";
import TimerCount from "./TimerCount";

const Timer = () => {

  // render prop component for reusability 
  return (
    <TimerCount
      render={(days, hours, minutes, second) => (
        <TimerBody
          days={days}
          hours={hours}
          minutes={minutes}
          second={second}
        />
      )}
    offerTime={3}/>
  );
};

export default Timer;
