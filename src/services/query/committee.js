import endpoints from 'src/constants/endpoints';
import { axios, privateAxios } from '../request/axiosConfig';

export const getCommittee = async (data) => {
  try {
    //const response = await axios.get(`${endpoints.CARDS}`, { params: data });
    //return response.data;
    
    const data = [
        {
          name: `Alex Johnson`,
          img: `/src/assets/images/profile/user-1.jpg`,
          post: `President`
        },
        {
          name: `Samantha Brown`,
          img: `/src/assets/images/profile/user-1.jpg`,
          post: `Vice President`
        },
        {
          name: `Michael Green`,
          img: `/src/assets/images/profile/user-1.jpg`,
          post: `Secretary`
        },
        {
          name: `Emma Wilson`,
          img: `/src/assets/images/profile/user-1.jpg`,
          post: `Treasurer`
        },
        {
          name: `Daniel Smith`,
          img: `/src/assets/images/profile/user-1.jpg`,
          post: `Event Coordinator`
        },
      ];

    return data;      
    
  } catch (error) {
    throw error;
  }
};

