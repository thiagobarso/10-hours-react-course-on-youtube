import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('Default User');

  useEffect(() => {
    setIsLoading(true);
    fetch(url).then((resp) => {
      if(resp.status >= 200 && resp.status <=299){
        return resp.json();
      }else{
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
        // This is for a throw the error and jump to catch console.log
        // to emulate this, add a user that don't exist
      }
    })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
      // This is for a networking error, not error like 404...
  }, [])

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  if (isError) {
    return (<div>
      <h1>Error...</h1>
    </div>);
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
