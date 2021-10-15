import { useState } from "react";
import Calculator from "../components/Calculator";
import List from "../components/List";
import Cloud from "../components/Cloud";
import Clock from "../components/Clock";
import Music from "../components/Music";
import "../stylesheet/tapbar.scss";
import "../stylesheet/buttons.scss";

export default function Tapbar() {

  const [calc, setCalc] = useState(false)
  const [list, setList] = useState(false)
  const [cloud, setCloud] = useState(false)
  const [clock, setClock] = useState(false)
  const [music, setMusic] = useState(false)

  const handleToggle = (btn) => {
    btn.preventDefault();
    switch(btn.currentTarget.classList.value){
      case "widget-btn calculator":
        btn.currentTarget.value = setCalc(!calc);
        break;
      case "widget-btn list":
        btn.currentTarget.value = setList(!list);
        break;
      case "widget-btn cloud":
        btn.currentTarget.value = setCloud(!cloud);
        break;
      case "widget-btn clock":
        btn.currentTarget.value = setClock(!clock);
        break;
      case "widget-btn music":
        btn.currentTarget.value = setMusic(!music);
        break;
      default:
        return;
    }
  }

  return (
    <div className="tapbar">
      <div className="widgetlist">
      <button onClick={handleToggle} className="widget-btn calculator">
        <i className="fas fa-calculator"></i>
      </button> 
      { calc === true && (
        <Calculator />
        )
      }
      <button onClick={handleToggle} className="widget-btn list">
        <i className="fas fa-list"></i>
      </button>
      { list === true && (
        <List />
        )
      }
      <button onClick={handleToggle} className="widget-btn cloud">
        <i className="fas fa-cloud"></i>
      </button>
      { cloud === true && (
        <Cloud />
        )
      }
      <button onClick={handleToggle} className="widget-btn clock">
        <i className="fas fa-clock"></i>
      </button>
      { clock === true && (
        <Clock />
        )
      }
      <button onClick={handleToggle} className="widget-btn music">
        <i className="fas fa-music"></i>
      </button>
      { music === true && (
        <Music />
        )
      }
      </div>
    </div>
  )
}
