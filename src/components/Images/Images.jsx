import { useState } from "react";
import React, { useContext } from "react";
import { ImageContext } from "../../App";
import Image from "./Image";
import Skeleton from "../Search/Skeleton";
import "./model.css";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className="text-center sm:text-left sm:ml-96 my-20 text-3xl sm:text-5xl font-semibold">
        Explore {searchImage || ""}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 my-10 max-w-7xl mx-auto px-4">
        {isLoading ? (
          <Skeleton item={10} />
        ) : (
          response.map((data) => <Image key={data.id} data={data} />)
        )}
      </div>
    </>
  );
};

export default Images;
