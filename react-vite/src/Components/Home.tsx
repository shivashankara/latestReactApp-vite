import React from "react";
import useFetch from "../CustomHooks/useFetch";

import { Product } from "../Interface/Product";
import CountDown from "./CountDown";
import Timmer from "./Timmer";

export const Select = () => {
  null;
};

const Home = () => {
  const [data, loading] = useFetch("https://fakestoreapi.com/products");
  return (
    <>
      <div>
        <h1>Higher order component </h1>
        <div>Login page for unauthenticated user </div>
        {loading ? (
          <>loading...</>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {Array.isArray(data) &&
              data.map((ele: Product) => {
                return (
                  <>
                    <div
                      style={{
                        width: "200px",
                        backgroundColor: "#fff",
                        color: "#000",
                        borderRadius: "4px",
                        padding: "4px",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        display: "flex",
                      }}
                      key={ele.id}
                    >
                      {ele.title.slice(0, 20)}
                      <img
                        src={ele.image}
                        style={{ width: "100px", height: "150px" }}
                        alt="productImage"
                      />
                    </div>
                  </>
                );
              })}
          </div>
        )}
      </div>
      <h2>compound component</h2>
      <CountDown  initialsec={60}/>
      <Timmer />
    </>
  );
};

export default Home;
