import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import Cards from "../Component/Cards";
import Footer from "../Component/Footer";
import Homebody from "../Component/Homebody";
import axios from "axios";

function Home() {
  const [datas, Setdatas] = useState([]);
  async function fetchUsers() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    

    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((response) => {
    //     return response.json()
    // })
    // .then((data)=>{
    //     console.log(data)
    // })



    Setdatas(result.data);
    // console.log(result.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="flex gap-5 justify-center items-center flex-wrap">
        {datas.map((user) => {
          return <Cards key={user.id} user={user} />;
        })}
      </div>
      <Footer />
      <Header />
      <Homebody />
    </div>
  );
}

export default Home;
