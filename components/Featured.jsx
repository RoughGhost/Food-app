import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import First from "../public/img/jonathan-borba-7TeR1A1MUpM-unsplash-removebg-preview.png";
import Second from "../public/img/lucas-andrade-SwdzDPEOSkU-unsplash-removebg-preview.png";
import Third from "../public/img/sandie-clarke-pYAbhWb_LaQ-unsplash-removebg-preview.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Featured = () => {
  //   const images = [
  //     "/public/img/jonathan-borba-7TeR1A1MUpM-unsplash-removebg-preview.png",
  //     "/public/img/lucas-andrade-SwdzDPEOSkU-unsplash-removebg-preview.png",
  //     "/public/img/sandie-clarke-pYAbhWb_LaQ-unsplash-removebg-preview.png",
  //   ];

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider>
        <div className={styles.container}>
          <div className={styles.arrowContainer}>
            <ArrowLeftOutlined />
          </div>
          <div className={styles.wrapper}>
            <Slide index={0}>
              <div className={styles.imgContainer}>
                <Image src={First} alt="" />
              </div>
            </Slide>
            <Slide index={1}>
              <div className={styles.imgContainer}>
                <Image src={Second} alt="" />
              </div>
            </Slide>
            <Slide index={2}>
              <div className={styles.imgContainer}>
                <Image src={Third} alt="" />
              </div>
            </Slide>
          </div>
          <div className={styles.arrowContainer}>
            <ArrowRightOutlined />
          </div>
        </div>
      </Slider>
    </CarouselProvider>
  );
};

export default Featured;
