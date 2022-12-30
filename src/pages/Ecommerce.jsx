import React from "react";
//import our icons
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
//import syncfusion Component
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
//import included Component
import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
//import Data from API or in this case our dummy data
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
//import Context
import { useStateContext } from "../contexts/ContextProvider";
//import image
import product9 from "../data/product9.jpg";

const Ecommerce = () => {
  const {setColor , setMode, currentMode , currentColor , setThemeSettings}  = useStateContext() ;
  return (
    <div className="mt-10">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-50 rounded-xl w-full lg:w-90  p-8 pt-9 m-3 bg-banner bg-no-repeat bg-cover bg-center shadow-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$55,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bg="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2 my-3 w-100">
        {earningData.map((item) => (
          <div
            key={item.title}
            className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-60  p-4 pt-9 rounded-2xl"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-${item.pcColor}-500 text-sm ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-sm text-gray-400  mt-1">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 p-4 m-3 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-center mt-10">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bg="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
                  <Stacked 
                  width="320px"
                  height="320px"
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
