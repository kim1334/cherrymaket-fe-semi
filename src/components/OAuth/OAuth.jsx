const baseUrl = process.env.REACT_APP_API;
const CLIENT_ID ="d076fe1f6ef395a74777a7f125ce215e";
const REDIRECT_URI = `${baseUrl}/oauth/kakao/sign-in`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;