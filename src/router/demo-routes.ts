import { ComponentOptions } from "vue";

import Intro from "../docs/getting-started/Introduction.md";
import BrowserSupport from "../docs/getting-started/browser-support.md";
import IntelliSense from "../docs/getting-started/IntelliSense.md";
import ControllingFileSize from "../docs/getting-started/controlling-file-size.md";
import UtillityFirst from "../docs/core-concepts/Utillity-First.md";

declare type Menu = {
  name: string;
  filePath: ComponentOptions;
  path: string;
};
declare type SubMenu = {
  name: string;
  children: Array<Menu>;
};

const menuConfig: Array<SubMenu> = [
  {
    name: "开始",
    children: [
      {
        name: "安装",
        filePath: Intro,
        path: "Intro",
      },
      {
        name: "控制文件大小",
        filePath: ControllingFileSize,
        path: "controlling-file-size",
      },
      {
        name: "浏览器支持",
        filePath: BrowserSupport,
        path: "browser-support",
      },
      {
        name: "VScode插件",
        filePath: IntelliSense,
        path: "intelli-sense",
      },
    ],
  },
  {
    name: "核心概念",
    children: [
      {
        name: "实用主义",
        filePath: UtillityFirst,
        path: "utillity-first",
      },
    ],
  },
];

export { menuConfig };

export default menuConfig
  .reduce((prev: Array<Menu>, current: SubMenu): Array<Menu> => {
    return [...prev, ...current.children];
  }, [])
  .map((demo: Menu) => {
    const path: string = demo.path;
    return {
      path: `${path?.toLowerCase()}`,
      name,
      component: demo.filePath,
    };
  });
