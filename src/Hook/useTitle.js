import { useEffect } from "react";

//Dynamic title 

const useTitle = (title) => {

    useEffect(() => {

        document.title = `${title} - Improve Digitally`

    }, [title])

};

export default useTitle;