import React, { useEffect, useState } from "react";

// data fetch inside table
//filter dropdown
//selected field dropdown
//apply func
//reset func

const FilterApp = () => {
  const [filterData, setFilterData] = useState(null);
  const [filterCustData, setFilterCustData] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  const [selectName, setSelectName] = useState("");
  const [selectEmail, setSelectEmail] = useState("");
  const [selectCompany, setSelectCompany] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setFilterData(data);
    setFilterCustData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleApply = () => {
    const filterUserData = filterData?.filter(
      (user) =>
        user?.name?.toLowerCase() === selectName?.toLowerCase() &&
        user?.email?.toLowerCase() === selectEmail?.toLowerCase() &&
        user?.company?.name?.toLowerCase() === selectCompany?.toLowerCase()
    );
    setFilterCustData(filterUserData);
  };

  console.log("filterData", filterData);
  console.log("filterCustData", filterCustData);

  const handleReset = () => {
    setSelectName("");
    setSelectEmail("");
    setSelectCompany("");
    setFilterCustData(filterData);
  };

  return (
    <div>
      <h2>FilterApp</h2>
      <div>
        <button onClick={handleFilter}>
          Filter {showFilter ? "🔻" : "🔺"}
        </button>
      </div>
      <div className="filter-container">
        {showFilter && (
          <div className="filter-label">
            <div>
              <div className="common-lbl">
                <label for="name">Name</label>
              </div>
              <select
                className="common-select"
                value={selectName}
                onChange={(e) => setSelectName(e.target.value)}
              >
                <option>Select Name</option>
                <option>Leanne Graham</option>
                <option>Ervin Howell</option>
                <option>Clementine Bauch</option>
              </select>
            </div>
            <div>
              <div className="common-lbl">
                <label for="email">Email</label>
              </div>
              <select
                id="email"
                className="common-select"
                value={selectEmail}
                onChange={(e) => setSelectEmail(e.target.value)}
              >
                <option>Select Email</option>

                <option>Sincere@april.biz</option>
                <option>Sincere@april.biz</option>
                <option>Nathan@yesenia.net</option>
              </select>
            </div>
            <div>
              <div className="company-lbl">
                <label for="company">Company Name</label>
              </div>
              <select
                id="company"
                className="common-select"
                value={selectCompany}
                onChange={(e) => setSelectCompany(e.target.value)}
              >
                <option>Select Company</option>

                <option>Romaguera-Crona</option>
                <option>Deckow-Crist</option>
                <option>Deckow-Crist</option>
              </select>
            </div>
            <div className="footer-btn">
              <div>
                <button className="reset-btn" onClick={handleReset}>
                  Reset
                </button>
              </div>
              <div>
                <button className="apply-btn" onClick={handleApply}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <table border={2}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Company Name</td>
            <td>City</td>
            <td>Zipcode</td>
          </tr>
        </thead>
        <tbody>
          {filterCustData?.map((user) => (
            <tr key={user?.id}>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.company?.name}</td>
              <td>{user?.address?.city}</td>
              <td>{user?.address?.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterApp;
