export const fetchPostAPI = () => {
    console.log("fetchPostAPI");
    try {
        fetch("http://192.168.136.10:8000/posts")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => reject(error))
        // return new Promise((resolve, reject) => {
        //     fetch("http://192.168.43.249:8000/category")
        //         .then((response) => response.json())
        //         .then((data) => console.log(data))
        //         .catch((error) => reject(error))
        // })
    } catch (e) {
        console.log(e);
        reject(e);
    }
}