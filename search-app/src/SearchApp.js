import React, { useEffect, useState } from "react";

const SearchApp = () => {
  const [users, setUsers] = useState(null);
  const [usersFilterData, setUsersFilterData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("data", data);
    setUsers(data);
    setUsersFilterData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    let filterData = users?.filter((data) =>
      data?.name?.toLowerCase().includes(inputValue.toLowerCase())
    );
    setUsersFilterData(filterData);
  };
  return (
    <div>
      <h2>SearchApp App</h2>
      {/* <input
        onChange={(e) => {
          let filterData = users?.filter(
            (data) =>
              data?.name
                ?.toLowerCase()
                .includes(e.target.value.toLowerCase()) ||
              data?.address?.city
                ?.toLowerCase()
                .includes(e.target.value.toLowerCase())
          );
          setUsersFilterData(filterData);
        }}
      /> */}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <table border="2">
        <thead>
          <tr>
            <th>Name</th>
            <th>Website</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        {usersFilterData?.map((user) => (
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.website}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SearchApp;
