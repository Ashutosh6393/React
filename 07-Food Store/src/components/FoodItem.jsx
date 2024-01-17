import React from "react";
import styled from "styled-components";

const FoodItem = () => {
  return (
    <MainContainer>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="right">
        <h2>Samosa Chutnney</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          perspiciatis nisi{" "}
        </p>
        <div className="bottom">
          <p>$100</p>
          <button>Add+</button>
        </div>
      </div>
    </MainContainer>
  );
};

export default FoodItem;

const MainContainer = styled("div")`
  display: flex;
  background-color: #adadad22;
  backdrop-filter: blur(10px);
  width: clamp(30rem, 40vw + 1rem, 35rem);
  min-height: 20rem;
  max-height: auto;
  padding: 1rem;
  padding-inline: 2rem;
  border: 1px solid #dedede81;
  border-radius: 1rem;

  .image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    img {
      border: 1px solid black;
      border-radius: 100%;
      width: 100%;
      aspect-ratio: 1;
    }
  }

  .right {
    width: 50%;
    display: flex;
    gap: 1rem;
    flex-direction: column;

    h2 {
      font-size: clamp(1.5rem, 1.2vw + 0.5rem, 3rem);
    }
    button {
      bottom: 1rem;
      font-size: 1rem;
      background-color: #ff4343;
      border: none;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      width: fit-content;
    }

    p {
      font-size: clamp(0.3rem, 1vw + 0.5rem, 1rem);
    }
    .bottom {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 530px) {
    flex-direction: column;
    justify-content: space-between;

    .image {
      width: 100%;
      img{
        width: clamp(10rem, 50vw + .5rem, 60%);
      }
    }
    .right {
        text-align: center;
      width: 100%;
    }
  }
`;
