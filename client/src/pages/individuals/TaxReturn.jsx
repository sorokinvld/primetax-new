import React, { useState, useEffect } from 'react';
import Page from './tax return/Page'
import Page0 from './tax return/Page0';
import Page1 from './tax return/Page1';
import Page2 from './tax return/Page2';
import Page3 from './tax return/Page3';
import Page4 from './tax return/Page4';
import Page5 from './tax return/Page5';
import Page6 from './tax return/Page6';
import axios from '../../interceptors/axios';

const TaxReturn = () => {

  const [page, setPage] = useState(0)
  const [user, setUser] = useState('');
  const [pk, setPk] = useState(0);

  useEffect(() => {
    axios.get('/auth/user/')
      .then((response) => {
        setPk(response.data.pk)
        axios.get(`/users/${response.data.pk}`)
          .then((response) => {
            console.log(response.data)
            setUser(response.data)
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  const handleNext = () => {
    setPage(page + 1)
  }

  return (
    <div className='container px-5 py-6 mx-auto'>
      <div className='container flex flex-wrap justify-center'>
        {page === 0 && <Page user={user} handleNext={handleNext} />}
        {page === 1 && <Page0 user={user} pk={pk} handleNext={handleNext} />}
        {page === 2 && <Page1 user={user} pk={pk} handleNext={handleNext} />}
        {page === 3 && <Page2 user={user} pk={pk} handleNext={handleNext} />}
        {page === 4 && <Page3 user={user} pk={pk} handleNext={handleNext} />}
        {page === 5 && <Page4 user={user} pk={pk} handleNext={handleNext} />}
        {page === 6 && <Page5 user={user} pk={pk} handleNext={handleNext} />}
        {page === 7 && <Page6 user={user} pk={pk} />}
      </div>
    </div>
  )
}

export default TaxReturn