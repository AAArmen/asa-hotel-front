import React from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  return (
    <>
      {/* Слайдер */}
      <div className={styles.slider}>
        <Swiper loop modules={[Navigation, Autoplay]} navigation autoplay={{ delay: 4000 }} speed={2000}>
          <SwiperSlide className={styles.slide} key={1}>
            <Image width={1500} height={500} src="/assets/images/slide.jpg" alt="slider" priority />
            <div className={styles.slideContent}>
              <h2>Отель АСА</h2>
              <div className={styles.description}>
                Мини-отель «ASA», расположен в городе Ереване, районе Малатия-Себастия. Номера оборудованы
                кондиционером, установлены телевизоры с плоским экраном и спутниковыми каналами. Стойка регистрации
                открыта круглосуточно, в распоряжении гостей работает бесплатный Wi-Fi.
              </div>
              <div className={styles.buttons}>
                <Link href={"/contact"}>Забронировать</Link>
                <Link href={"/rooms"}>Номера и цены</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide} key={2}>
            <Image width={1500} height={500} src="/assets/images/slide.jpg" alt="slider" priority />
            <div className={styles.slideContent}>
              <h2>Отель АСА</h2>
              <div className={styles.description}>
                Мини-отель «ASA», расположен в городе Ереване, районе Малатия-Себастия. Номера оборудованы
                кондиционером, установлены телевизоры с плоским экраном и спутниковыми каналами. Стойка регистрации
                открыта круглосуточно, в распоряжении гостей работает бесплатный Wi-Fi.
              </div>
              <div className={styles.buttons}>
                <Link href={"/contact"}>Забронировать</Link>
                <Link href={"/rooms"}>Номера и цены</Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.pageContainer}>
        {/* Наши услуги */}
        <div className={styles.ourService}>
          <h2>
            Наши <span>услуги</span>
          </h2>
          <div className={styles.services}>
            <div className={styles.service}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Image src="/assets/svg/community.svg" alt="taxi" width={80} height={80} />
                </div>
                <div className={styles.serviceTitle}>Чистки и глажки одежды</div>
                <div className={styles.serviceDesc}>Собственная прачечная с услугами чистки и глажки одежды</div>
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Image src="/assets/svg/car.svg" alt="taxi" width={80} height={80} />
                </div>
                <div className={styles.serviceTitle}>Parking</div>
                <div className={styles.serviceDesc}>Собственная парковка</div>
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Image src="/assets/svg/wifi.svg" alt="taxi" width={80} height={80} />
                </div>
                <div className={styles.serviceTitle}>WiFi</div>
                <div className={styles.serviceDesc}>Бесплатный Wi-Fi на всей территории отеля</div>
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Image src="/assets/svg/taxi.svg" alt="taxi" width={80} height={80} />
                </div>
                <div className={styles.serviceTitle}>Трансфер по заказу</div>
                <div className={styles.serviceDesc}>Можно заказать трансфер из аэропорта и обратно</div>
              </div>
            </div>
            <div className={styles.service}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Image src="/assets/svg/bus.svg" alt="taxi" width={80} height={80} />
                </div>
                <div className={styles.serviceTitle}>Транспорт</div>
                <div className={styles.serviceDesc}>2 Минуты до ближайшей автобусной остановки</div>
              </div>
            </div>
          </div>
        </div>
        {/* Номера и цены */}
        <div className={styles.rooms}>
          <h2>
            Номера <span>и цены</span>
          </h2>
          <div className={styles.roomsList}>
            <div className={styles.room}>
              <div className={styles.card}>
                <div className={styles.image}>
                  <Image src="/assets/images/room1.jpg" alt="room" width={200} height={200} />
                </div>
                <div className={styles.count}>👤👤👤</div>
                <div className={styles.raiting}>⭐️⭐️⭐️⭐️⭐️</div>
                <div className={styles.title}>Трехместный семейный номере с душем</div>
                <div className={styles.desc}>1 гость - 14000 драмов 2 гость - 18000 драмов 3 гость - 23000 драмов</div>
                <div className={styles.moreLink}>
                  <Link href={"#"}>Подробнее</Link>
                </div>
              </div>
            </div>
            <div className={styles.room}>
              <div className={styles.card}>
                <div className={styles.image}>
                  <Image src="/assets/images/room2.jpg" alt="room" width={200} height={200} />
                </div>
                <div className={styles.count}>👤👤</div>
                <div className={styles.raiting}>⭐️⭐️⭐️⭐️⭐️</div>
                <div className={styles.title}>Двухместный Классический номер с душем</div>
                <div className={styles.desc}>1 гость - 14000 драм . 2 гостя - 18000 драм - с душем</div>
                <div className={styles.moreLink}>
                  <Link href={"#"}>Подробнее</Link>
                </div>
              </div>
            </div>
            <div className={styles.room}>
              <div className={styles.card}>
                <div className={styles.image}>
                  <Image src="/assets/images/room3.jpg" alt="room" width={200} height={200} />
                </div>
                <div className={styles.count}>👤👤</div>
                <div className={styles.raiting}>⭐️⭐️⭐️⭐️⭐️</div>
                <div className={styles.title}>Двухместный номер Делюкс с 1 кроватью и душем</div>
                <div className={styles.desc}>1 гость - 14000 драм 2 гостя - 18000 драм 3 гостя - 23000 драм</div>
                <div className={styles.moreLink}>
                  <Link href={"#"}>Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviews}>
        <div className={styles.reviewContent}>
          <h2>ЧТО ГОВОРЯТ НАШИ ГОСТИ</h2>
          <div className={styles.reviewsList}>
            <Swiper
              loop
              modules={[Autoplay]}
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{ delay: 2000 }}
              speed={2000}
            >
              <SwiperSlide className={styles.review} key={1}>
                <Image src="/assets/images/user1.png" alt="review" width={200} height={200} />
                <div className={styles.reviewText}>
                  Очень гостеприимный гостевой дом!!! Чистота, порядок, очень удобное месторасположение.
                </div>
                <div className={styles.reviewAuthor}>Michael Grillaert</div>
              </SwiperSlide>
              <SwiperSlide className={styles.review} key={2}>
                <Image src="/assets/images/user2.jpg" alt="review" width={200} height={200} />
                <div className={styles.reviewText}>
                  Очень гостеприимный гостевой дом!!! Чистота, порядок, очень удобное месторасположение.
                </div>
                <div className={styles.reviewAuthor}>Аня</div>
              </SwiperSlide>
              <SwiperSlide className={styles.review} key={3}>
                <Image src="/assets/images/user1.png" alt="review" width={200} height={200} />
                <div className={styles.reviewText}>
                  Очень гостеприимный гостевой дом!!! Чистота, порядок, очень удобное месторасположение.
                </div>
                <div className={styles.reviewAuthor}>Michael Grillaert</div>
              </SwiperSlide>
              <SwiperSlide className={styles.review} key={4}>
                <Image src="/assets/images/user2.jpg" alt="review" width={200} height={200} />
                <div className={styles.reviewText}>
                  Очень гостеприимный гостевой дом!!! Чистота, порядок, очень удобное месторасположение.
                </div>
                <div className={styles.reviewAuthor}>Аня</div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
