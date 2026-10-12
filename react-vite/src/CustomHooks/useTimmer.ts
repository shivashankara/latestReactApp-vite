import { useEffect, useRef, useState } from "react";
import CountDown from "../Components/CountDown";

function useTimmer(initialsec=0, isCountdDown= false) {
    const [second, setSecond]= useState(initialsec);
    const [isActive, setIsActive]=  useState(false);
    const intervalRef = useRef<number | undefined>(undefined);

    useEffect(()=>{
        if(isActive){
            intervalRef.current = setInterval(()=>{
                setSecond((prevSeconds)=>{
                    if(isCountdDown && prevSeconds<=0){
                        clearInterval(intervalRef.current)
                    }
                    return isCountdDown ? prevSeconds -1 : prevSeconds +1
                })
            },1000)
        }else if(!isActive && intervalRef.current !== undefined){
            clearInterval(intervalRef.current)
        }
        return()=>{
            if (intervalRef.current !== undefined) {
                clearInterval(intervalRef.current);
            }
        }
    },[isActive, isCountdDown])

    const start =()=>{setIsActive(true)};
    const stop =()=>{setIsActive(false)};
    const reset =()=>{
        setSecond(initialsec);
        setIsActive(false)
    }
  return {second, start, stop, reset, isActive};
}

export default useTimmer;