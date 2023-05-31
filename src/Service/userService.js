// import http from "../http-common";

// const getAll = () => {
//   return http.get("/tutorials");
// };

// const get = id => {
//   return http.get(`/tutorials/${id}`);
// };

// const create = data => {
//   return http.post("/tutorials", data);
// };

// const update = (id, data) => {
//   return http.put(`/tutorials/${id}`, data);
// };

// const remove = id => {
//   return http.delete(`/tutorials/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

// const TutorialService = {
//   getAll,
//   get,
//   create,
//   update,
//   remove,
//   removeAll,
//   findByTitle
// };

// export default TutorialService;



const API_URL = 'https://uat-afpl-phase2.annapurnamsme.net/journey';

export const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/data`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  
  export const generateOTP = async (data) => {
    console.log(data);
    try {
      const response = await fetch(`${API_URL}/otp/generate-user-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };
  export const verifiyOTP = async (data) => {
    console.log(data);
    try {
      const response = await fetch(`${API_URL}/otp/validate-user-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

