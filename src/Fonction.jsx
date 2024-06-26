import { useState } from "react"

function useLogique(valeurinitiale=0) {
    const [count, setCount] = useState(valeurinitiale);
  const plus = () => setCount(count+1);
  const moins = () => setCount(count-1);
  const reset = () => setCount(valeurinitiale);

 return {plus , moins, reset, count};
}

export default useLogique;