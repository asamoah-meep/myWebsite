import axios from 'axios';
    /*
        startDate
        endDate
        success
        tutor
        student
        teacher
    */
    module.exports = async function applyFilters(filterObj){
        const url = "";
        return axios.get(url, {
            params: filterObj
        });
    }