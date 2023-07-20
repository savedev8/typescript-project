import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation('about');
  return (
    <><div>{t("О сайте")}</div><div>{t("О сайте c плагином")}</div></>
  )
}

export default AboutPage;
