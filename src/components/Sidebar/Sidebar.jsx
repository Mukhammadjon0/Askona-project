import * as React from "react";
import "./Sidebar.css";
import Select1 from "../Select/Select1";
import { HiXMark } from "react-icons/hi2";

export default function Sidebar({ languageDel, setState }) {

  return (
    <div className="bg-white desktop:w-[604px] tablet:w-[604px] mobile:w-screen h-full">
      <div>
        <div className="said_top">
          <h1>{languageDel?.yetkazish}</h1>
          <button onClick={() => setState({ right: false })}>
            <HiXMark className="text-[#00B6C9] text-2xl" />
          </button>
        </div>
        <div className="ourTop">
          <Select1 />
          <div className="border-y-[1px] border-gray-200 mt-5 py-5">
            <div className="flex items-center justify-between">
              <p>{languageDel?.uzbyetkazish}</p>
              <p>{languageDel?.pullik}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>{languageDel?.mdhyetkazish}</p>
              <p className="text-end">{languageDel?.ulgurji}</p>
            </div>
          </div>
          <div className="lastdown">
            <h1>{languageDel?.olibketish}</h1>
            <div className="downlist">
              <p>
                {languageDel?.olibketishmumkin}
              </p>
              <p>
                {languageDel?.kelishibolish}
              </p>
              <ul>
                <li>{languageDel?.tasdiqlashkod}</li>
                <li>{languageDel?.buyurtmaraqam}</li>
                <li>
                  {languageDel?.vaqtkelish}
                </li>
              </ul>
              <div className="our4">
                <h1>{languageDel?.xizmatqoida}</h1>
                <p>
                  {languageDel?.chipta}
                </p>
                <p>{languageDel?.bayram}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
