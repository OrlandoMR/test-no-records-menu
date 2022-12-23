/**
 * Main Application script
 */
import React, {
  FunctionComponent,
  useEffect,
  useRef,
} from "react";
import { BryntumScheduler } from "@bryntum/scheduler-react";
import { schedulerConfig } from "./SchedulerConfig";
import "./App.scss";

const App: FunctionComponent = () => {
  const ref = useRef<BryntumScheduler>(null);


  //This funtion open the contextmenu for every click in the "locked" subgrid
  useEffect(() => {
    if (ref && ref.current) {
      (ref.current.instance.subGrids as any)[
        "locked"
      ].currentElement.addEventListener("contextmenu", (ev: any) => {
        if (ref && ref.current) {
          ref.current.instance.features.cellMenu.menu.show();

          ref.current.instance.features.cellMenu.menu.setXY(
            ev.clientX,
            ev.clientY
          );
        }
        ev.preventDefault();
      });
    }
  }, []);

  return <BryntumScheduler ref={ref} {...schedulerConfig} />;
};

// If you plan to use stateful React collections for data binding please check this guide
// https://bryntum.com/products/scheduler/docs/guide/Scheduler/integration/react/data-binding

export default App;
