import { useState, useEffect } from "react";
import axios from "axios";
import CustomTable from "./table";

function Commo() {
  const [CommodityPrice, setCommodityPrice] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/Commodity")
      .then((response) => {
        setCommodityPrice(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching Commodity prices:", error);
      });
  }, []);

  return (
    <section>
      <div>
        <h1>Commodities prices</h1>
        <h4>Date: {CommodityPrice.date}</h4>
      </div>

      <div>
        <CustomTable data={CommodityPrice} />
      </div>
    </section>
  );
}

export default Commo;
