import {
  IconBoxMultiple,
  IconCircleDot,
  IconHome,
  IconInfoCircle,
  IconLayout,
  IconLayoutGrid,
  IconPhoto,
  IconPoint,
  IconStar,
  IconTable,
  IconUser,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";
import { useTranslations } from "next-intl";

export const useMenuItems = () => {
  const t = useTranslations("Menus");
  return [
    {
      id: uniqueId(),
      title: t('menu1'),
      icon: IconHome,
      href: "/dashboard",
    },
    {
      id: uniqueId(),
      title: t('menu2'),
      icon: IconHome,
      href: "/barrow-lend-system",
    },
    {
      id: uniqueId(),
      title: t('menu3'),
      icon: IconHome,
      href: "/maintenance-request",
    },
    {
      id: uniqueId(),
      title: t('menu4'),
      icon: IconHome,
      href: "/user-management",
    },
  ];
};
