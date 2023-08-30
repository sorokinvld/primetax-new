const getToken = () => {
  const token = sessionStorage.getItem('token') || null;
  return token;
}

export default getToken