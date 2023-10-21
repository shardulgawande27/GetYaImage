import format from "date-fns/format";
import React, { useState } from "react";
import "./model.css";

const Image = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const openModal = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImageSrc("");
    setIsModalOpen(false);
  };

  const formatLikesCount = (likes) => {
    if (likes >= 1000) {
      return (likes / 1000).toFixed(1) + "k";
    } else {
      return likes.toString();
    }
  };

  const formattedLikes = formatLikesCount(data.likes);

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal rounded-lg">
            <img src={modalImageSrc} alt={data.alt_description} />
            <div className="extra-info my-10 px-5  ">
              <div className="user-info flex gap-x-5">
                <img
                  className="w-10 rounded-full"
                  src={data.user.profile_image.small}
                  alt={data.alt_description}
                />
                <div className="list-none">
                  <li>{data.user.name}</li>
                  {data.user.instagram_username ? (
                    data.user.instagram_username.includes("instagram.com") ? (
                      <li className="italic text-gray-400">
                        <a
                          href={`https://www.instagram.com/${data.user.instagram_username.replace(
                            /^https:\/\/www.instagram.com\//,
                            ""
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          @
                          {data.user.instagram_username.replace(
                            /^https:\/\/www.instagram.com\//,
                            ""
                          )}
                        </a>
                      </li>
                    ) : (
                      <li className="italic text-gray-400">
                        <a
                          href={`https://www.instagram.com/${data.user.instagram_username}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          @{data.user.instagram_username}
                        </a>
                      </li>
                    )
                  ) : null}
                </div>
              </div>
              <div className="img-stat">
                <ul>
                  <li>
                    <i className="fa-regular fa-thumbs-up"></i>
                    &nbsp;{formattedLikes}
                  </li>
                  <li>
                    <i class="fa-regular fa-calendar"></i>&nbsp;&nbsp;
                    {format(new Date(data.created_at), "dd MMMM yyyy")}
                  </li>

                  <a className="download" href={data.urls.full} target="_blank">
                    Download
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="image-container border border-gray-300 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]  ">
        <img
          className="image h-72 w-full object-cover rounded-t shadow-md"
          src={data.urls.small}
          alt={data.alt_description}
          onClick={() => openModal(data.urls.regular)}
        />
        <div className="image-desc flex justify-between mt-5 mb-6 mx-3">
          <div className="user-details flex gap-x-5">
            <img
              className="w-12 h-12 rounded-full shadow-md "
              src={data.user.profile_image.small}
              alt={data.alt_description}
            />
            <ul>
              <li className="font-medium mb-0.5">{data.user.name}</li>
              {data.user.instagram_username ? (
                data.user.instagram_username.includes("instagram.com") ? (
                  <li className="italic text-gray-400">
                    <a
                      href={`https://www.instagram.com/${data.user.instagram_username.replace(
                        /^https:\/\/www.instagram.com\//,
                        ""
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @
                      {data.user.instagram_username.replace(
                        /^https:\/\/www.instagram.com\//,
                        ""
                      )}
                    </a>
                  </li>
                ) : (
                  <li className="italic text-gray-400">
                    <a
                      href={`https://www.instagram.com/${data.user.instagram_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @{data.user.instagram_username}
                    </a>
                  </li>
                )
              ) : null}
            </ul>
          </div>

          <ul>
            <li>
              <i className="fa-regular fa-thumbs-up"></i>
              &nbsp;&nbsp;{formattedLikes}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Image;
