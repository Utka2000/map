const users = [
    {
      first_name: 'Mike',
      location: 'London'
    },
    {
      first_name: 'Tim',
      location: 'US'
    },
    {
      first_name: 'John',
      location: 'Australia'
    }
  ];
  
  let a =users.map((array)=>{
    return `${array.first_name} lives in ${array.location}`
  })
  console.log(a)
  