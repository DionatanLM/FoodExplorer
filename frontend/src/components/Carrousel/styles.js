import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  transition: all 0.4s;

  @media (max-width: 768px) {
    margin-right: -24px;
    margin-left: -23px;
  }
`;

export const CarrouselItems = styled.div`
  display: flex;
  gap: 27px;
  overflow: hidden;
  scroll-behavior: smooth;

  scroll-snap-type: x mandatory;

  @media (max-width: 768px) {
    gap: 16px;
    overflow-x: scroll;

    .card:first-child {
      margin-left: 24px;
    }

    .card:last-child {
      margin-right: 24px !important;
    }
  }
`;

export const ButtonLeft = styled.button`
  position: absolute;
  height: 100%;
  width: 165px;
  border: none;
  left: 0;
  z-index: 10;
  background: linear-gradient(270deg, rgba(0, 10, 15, 0.1) 0%, #000a0f 100%);

  display: flex;
  align-items: center;
  padding-left: 10px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonRight = styled.button`
  position: absolute;
  height: 100%;
  width: 165px;

  background: linear-gradient(90deg, rgba(0, 10, 15, 0.1) 0%, #000a0f 100%);

  border: none;
  right: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  padding-right: 10px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;
