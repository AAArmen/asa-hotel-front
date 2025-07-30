import { ROUTES } from "@/constants/routes";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

const Header = ({ styles, layoutInfo }) => {
  const [topScroll, setTopScroll] = useState(0);

  useEffect(() => {
    const onScroll = (e: Event) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTopScroll(e?.target?.documentElement?.scrollTop || 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [topScroll]);

  const router = useRouter();

  const pathName = useMemo(() =>  router.pathname, [router.pathname]);
  return (
    <header className={classNames(styles.dynamicHeader, { [styles.sticky]: topScroll > 60 })}>
      <div className={styles.upper}>
        <div className={styles.container}>
          <div className={styles.upperContent}>
            <div className={styles.socials}>
              <Link href={layoutInfo.facebookLink} className={styles.link} target="_blank">
                Facebook
              </Link>
              <Link href={layoutInfo.twitterLink} className={styles.link} target="_blank">
                Twitter
              </Link>
            </div>
            <div className={styles.contacts}>
              <Link href={`tel:${layoutInfo.mainPhone}`} target="_blank">
                {layoutInfo.mainPhone}
              </Link>
              /
              <Link href={`tel:${layoutInfo.secondaryPhone}`} target="_blank">
                {layoutInfo.secondaryPhone}
              </Link>
              <Link href="mailto:asa.hotel@mail.ru" className={styles.emailLink} target="_blank">
                asa.hotel@mail.ru
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.container}>
          <div className={styles.lowerContent}>
            <div className={styles.logo}>
              <Image src="/assets/logo.png" alt="logo" width={120} height={70} />
            </div>
            <nav className={styles.navBar}>
              {ROUTES.map((route) => {
                return (
                  <Link
                    key={route.key}
                    href={route.href}
                    className={classNames(styles.link, { [styles.active]: pathName === route.href })}
                  >
                    {route.title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
