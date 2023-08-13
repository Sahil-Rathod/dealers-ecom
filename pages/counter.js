import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
// import "./Counter.css";

function Counter() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="counter-main">
        <div className="counter-title">
          <h3>300+ Distributors All over The Pan Maharashtra</h3>
        </div>
        <div className="counters">
          <div className="counter-1 counter">
            <b>
              {counterOn && (
                <CountUp
                  className="count-up"
                  start={0}
                  end={1000}
                  duration={10}
                />
              )}
            </b>
            <b>Projects</b>
          </div>
          <div className="counter-2 counter-even counter">
            <b>
              {counterOn && (
                <CountUp
                  className="count-up"
                  start={0}
                  end={520}
                  duration={10}
                />
              )}
            </b>
            <b>Happy Clients</b>
          </div>
          <div className="counter-3 counter">
            <b>
              {counterOn && (
                <CountUp
                  className="count-up"
                  start={0}
                  end={300}
                  duration={10}
                />
              )}
            </b>
            <b>Distributors</b>
          </div>
          <div className="counter-4 counter-even counter">
            <b>
              {counterOn && (
                <CountUp
                  className="count-up"
                  start={0}
                  end={120}
                  duration={10}
                />
              )}
            </b>
            <b>Recommended</b>
          </div>
        </div>
        {/* {counterOn && <CountUp start={0} end={1000} duration={5} />} */}
      </div>
    </ScrollTrigger>
  );
}

export default Counter;
