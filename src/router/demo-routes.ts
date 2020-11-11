import { ComponentOptions } from "vue";

import Intro from "../docs/getting-started/Introduction.md";
import BrowserSupport from "../docs/getting-started/browser-support.md";
import IntelliSense from "../docs/getting-started/IntelliSense.md";
import ControllingFileSize from "../docs/getting-started/controlling-file-size.md";

import UtillityFirst from "../docs/core-concepts/utillity-first.md";
import ResponsiveDesign from "../docs/core-concepts/responsive-design.md";
import PseudoClassVariants from "../docs/core-concepts/pseudo-class-variants.md";
import AddingBaseStyles from "../docs/core-concepts/adding-base-styles.md";
import ExtractingComponents from "../docs/core-concepts/extracting-components.md";
import AddingNewUtilities from "../docs/core-concepts/adding-new-utilities.md";

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
      {
        name: "响应式设计",
        filePath: ResponsiveDesign,
        path: "responsive-design",
      },
      {
        name: "伪类",
        filePath: PseudoClassVariants,
        path: "pseudo-class-variants",
      },
      {
        name: "添加基础样式",
        filePath: AddingBaseStyles,
        path: "adding-base-styles",
      },
      {
        name: "提取组件",
        filePath: ExtractingComponents,
        path: "extracting-components",
      },
      {
        name: "添加工具",
        filePath: AddingNewUtilities,
        path: "adding-new-utilities",
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
