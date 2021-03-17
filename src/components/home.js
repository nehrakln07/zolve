import React, { useEffect, useState } from 'react';
import DateTime from "react-datetime";
import moment from "moment";

import Chart from "./chart";

const DATE_FORMAT = "YYYY-MM-DD";
const DEFAULT_PARAMS = {
  order: "desc",
  sort: "popular",
  site: "stackoverflow"
}
const Home = () => {
  const [data, setData] = useState(null);
  const [formdata, setFormData] = useState({
    pagesize: 30,
    page: 1
  });



  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    const params = {
      page: formdata.page,
      pagesize: formdata.pagesize,
    }

    if (formdata.fromdate) {
      let date = new Date(moment(formdata.fromdate).format(DATE_FORMAT));
      params.fromdate = date.getTime() / 1000;
    }

    if (formdata.todate) {
      let date = new Date(formdata.todate);
      params.todate = date.getTime() / 1000;
    }

    const url = "https://api.stackexchange.com/2.2/tags?" + toQueryString({ ...params, ...DEFAULT_PARAMS });
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data.items));
  }

  const handleChange = e => {
    let temp = { ...formdata };
    temp[e.target.name] = e.target.value
    setFormData(temp);
  }

  const onDateChange = (key, value) => {
    let temp = formdata;
    temp[key] = value
    setFormData(temp);
  }

  const toQueryString = (obj) => {
    var parts = [];
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
      }
    }
    return parts.join("&");
  }

  const getFormatedData = (arr) => {
    return arr.map((item, key) => {
      return [item.name, item.count]
    })
  }

  console.log(data);

  return (
    <div className="home">
      <div className="form-container">
        <div className="">
          <label>FromDate</label>
          <DateTime
            value={formdata.fromdate}
            onChange={e => onDateChange('fromdate', e)}
            dateFormat={DATE_FORMAT}
            timeFormat={false}
            className="col-lg-3 col-md-3"
            closeOnSelect
          />
        </div>
        <div className="">
          <label>ToDate</label>
          <DateTime
            value={formdata.todate}
            onChange={e => onDateChange('todate', e)}
            dateFormat={DATE_FORMAT}
            timeFormat={false}
            className="col-lg-3 col-md-3"
            closeOnSelect
          />
        </div>
        <div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
          <label style={{width: "100%"}}>Page</label>
          <input type="number" name="page" placeholder="page" onChange={handleChange} value={formdata.page} />
        </div>
        <div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
          <label style={{width: "100%"}}>PageSize</label>
          <input type="number" name="pagesize" placeholder="pagesize" onChange={handleChange} value={formdata.pagesize} />
        </div>
        <div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
        <button className="" style={{marginTop:'20px'}} onClick={fetchData} >Search</button>
        </div>
      </div>

      {
        data && data.length &&
        <div className="chart-container">
          <Chart data={getFormatedData(data)} />
        </div>
      }
    </div>
  );
}

export default Home;
