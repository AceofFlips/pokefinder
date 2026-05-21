import {useState, useEffect, useCallback} from 'react'

const CAUGHT_KEY = "pokedex_caught";

export function useCaught() {
  const [caught, setCaught] = useState<Set<number>>(() => {
    return new Set();
    //try {
     // const item = window.localStorage.getItem(CAUGHT_KEY);
      //return item ? new Set(JSON.parse(item)) : new Set();
    //} catch (error) {
      //console.error("Error reading caught Pokemon from localStorage", error)
     // return new Set();
   // }
  });

  //useEffect(()=> {
    //try {
      //window.localStorage.setItem(CAUGHT_KEY, JSON.stringify(Array.from(caught)));
   // } catch (error) {
      //console.error("Error writing caught Pokemon to localStorage",error);
   // }
 // }, [caught]);

  const toggleCaught = useCallback((pid: number) => {
    setCaught(prevCaught => {
      const newCaught = new Set(prevCaught);
      if(newCaught.has(pid)) {
        newCaught.delete(pid);
      } else {
        newCaught.add(pid);
      }
      return newCaught;
    });
  }, []);

  return {caught, toggleCaught};
}

