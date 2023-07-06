import axios from "axios";

let listSpecialist =  axios.get('https://project1backend-da705e13e21b.herokuapp.com/list/specialists') // Thay 'URL_API' bằng đường dẫn tới API của bạn
        .then(response => {
            this.setState({ data: response.data });
        })
        .catch(error => {
            console.log(error);
        });

export default listSpecialist;