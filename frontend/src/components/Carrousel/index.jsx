import { useEffect, useRef, useState } from "react";
import { Container, ButtonLeft, ButtonRight, CarrouselItems } from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function Carrousel({ children }) {
  const carousel = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isLeftVisible = carousel.current.scrollLeft > 0;
      const isRightVisible =
        carousel.current.scrollLeft + carousel.current.offsetWidth <
        carousel.current.scrollWidth;

      setShowLeftButton(isLeftVisible);
      setShowRightButton(isRightVisible);
    };

    carousel.current.addEventListener("scroll", handleScroll);
    handleScroll(); // Verifica a posição inicial de rolagem

    return () => {
      carousel.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  return (
    <Container>
      {showLeftButton && (
        <ButtonLeft onClick={handleLeftClick}>
          <FiChevronLeft size={50} color="white" />
        </ButtonLeft>
      )}
      <CarrouselItems className="carousel" ref={carousel}>
        {children}
      </CarrouselItems>
      {showRightButton && (
        <ButtonRight onClick={handleRightClick}>
          <FiChevronRight size={50} color="white" />
        </ButtonRight>
      )}
    </Container>
  );
}
