import DesktopNavLink from "./DesktopNavLink";
import { useTranslation } from "react-i18next";

const DesktopNav = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden lg:flex w-full pt-[80px] pb-[20px] bg-white">
      <div className="w-full padding py-3 flex items-center justify-between text-text-2 ">
        <div className="flex items-center justify-start gap-x-7">
          <DesktopNavLink
            title={t("headerConstant.navLink.gunung.title")}
            list={"gunung"}
          />
          <DesktopNavLink
            title={t("headerConstant.navLink.alam.title")}
            list={"alam"}
          />
          <DesktopNavLink
            title={t("headerConstant.navLink.pantai.title")}
            list={"pantai"}
          />
          <DesktopNavLink
            title={t("headerConstant.navLink.edukasi.title")}
            list={"edukasi"}
          />
          <DesktopNavLink
            title={t("headerConstant.navLink.sejarah.title")}
            list={"sejarah"}
          />
          <DesktopNavLink
            title={t("headerConstant.navLink.romantis.title")}
            list={"romantis"}
          />
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default DesktopNav;
