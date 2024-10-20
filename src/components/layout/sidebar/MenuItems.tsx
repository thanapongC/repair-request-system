import { CollectionsBookmark, Group, Handyman } from "@mui/icons-material";
import {
  IconHome,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";
import { useTranslations, useLocale } from "next-intl";

export const useMenuItems = () => {
  
  const t = useTranslations("Menus");
  const localActive = useLocale();

  return [
    {
      id: uniqueId(),
      title: t("menu1"),
      icon: IconHome,
      href: `/${localActive}/dashboard`,
    },
    {
      id: uniqueId(),
      title: t("menu2"),
      icon: CollectionsBookmark,
      href: `/${localActive}/borrowing-system`,
      children: [
        {
          id: uniqueId(),
          title: t("menu2-1"),
          href: `/${localActive}/borrowing-system`,
        },
        {
          id: uniqueId(),
          title: t("menu2-2"),
          href: `/${localActive}/borrowing-system/add-borrow-document`,
        },
        {
          id: uniqueId(),
          title: "Reports",
          href: `/${localActive}/borrowing-system/reports`,
        },
      ],
    },
    {
      id: uniqueId(),
      title: t("menu3"),
      icon: Handyman,
      href: `/${localActive}/maintenance-request`,
      children: [
        {
          id: uniqueId(),
          title: t("menu3-1"),
          href: `/${localActive}/maintenance-request`,
        },
        {
          id: uniqueId(),
          title: t("menu3-2"),
          href: `/${localActive}/maintenance-request/add-maintenance-request`,
        },
        {
          id: uniqueId(),
          title: "Reports",
          href: `/${localActive}/maintenance-request/reports`,
        }
      ],
    },
    {
      id: uniqueId(),
      title: t("menu4"),
      icon: Group,
      href: `/${localActive}/user-management`,
      children: [
        {
          id: uniqueId(),
          title: t("menu4-1"),
          href: `/${localActive}/user-management`,
        },
        {
          id: uniqueId(),
          title: t("menu4-2"),
          href: `/${localActive}/user-management/add-new-user`,
        },
      ],
    },
  ];
};
