import axios from "axios";

let listSpecialist = axios.get('URL_API') // Thay 'URL_API' bằng đường dẫn tới API của bạn
        .then(response => {
            this.setState({ data: response.data });
        })
        .catch(error => {
            console.log(error);
        });