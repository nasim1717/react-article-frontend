import { useEffect } from "react";

const useTitle = (titleText) => {
    useEffect(() => {
        document.title = titleText;
    }, [titleText]);
}

export default useTitle;