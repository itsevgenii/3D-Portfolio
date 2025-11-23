import React from "react";
import { counterItems } from "../constants/index.js";
import CountUpModule from "react-countup";
const CountUp = CountUpModule.default || CountUpModule;
// class CounterErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }
//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }
//   render() {
//     if (this.state.hasError) {
//       return <div>Counter failed to load</div>;
//     }
//     return this.props.children;
//   }
// }

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols gap-6">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div
              //   key={item.label}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              {/* {item.value} {item.suffix} */}
              <CountUp start={0} end={item.value} suffix={item.suffix} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
