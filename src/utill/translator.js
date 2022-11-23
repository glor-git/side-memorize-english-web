import axios from 'axios';

export async function translator(query) {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  const { data } = await axios({
    method: 'post',
    url: '/v1/papago/n2mt',
    headers:{
      'X-Naver-Client-Id': CLIENT_ID,
      'X-Naver-Client-Secret': CLIENT_SECRET
    },
    data: {
      source: 'ko',
      target: 'en',
      text: query
    }
  })

  if (data) return data.message.result
}