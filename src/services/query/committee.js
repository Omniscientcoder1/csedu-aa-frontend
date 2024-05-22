import endpoints from 'src/constants/endpoints';
import { axios, privateAxios } from '../request/axiosConfig';
import ProfileImage from 'src/assets/images/profile/user-2.jpg'

export const getCommittee = async (data) => {
  try {    
    const data = [
        {
          name: `Professor Dr. Md. Rezaul Karim`,
          img: ProfileImage,
          post: `Convener`
        },
        {
          name: `Md. Ashfaque Iftekhar Khan`,
          img: ProfileImage,
          post: `Member`
        },
        {
          name: `Professor Dr. Lafifa Jamal`,
          img: ProfileImage,
          post: `Member`
        },
        {
          name: `Mohammad Miraj Uddin Khan`,
          img: ProfileImage,
          post: `Member`
        },
        {
          name: `Md. Faisal Hossain`,
          img: ProfileImage,
          post: `Member`
        },
        {
          name: `Sharmin Akter`,
          img: ProfileImage,
          post: `Member`
        },
        {
          name: `Md. Mahir Ashhab`,
          img: ProfileImage,
          post: `Member`
        },
      ];

    return data;      
    
  } catch (error) {
    throw error;
  }
};

