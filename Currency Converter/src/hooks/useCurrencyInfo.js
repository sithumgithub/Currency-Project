import { useEffect, useState } from "react";

function userCurrenvyInfo(currecy){
    const [data, setData] = useState({});
    useEffect(() => {
     fetch(`https://console.fastforex.io/`)
    }, [currecy])
}

export default userCurrenvyInfo;