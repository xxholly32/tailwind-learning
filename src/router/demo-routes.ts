import { ComponentOptions } from "vue";

// 开始
import Intro from "../docs/getting-started/Introduction.md";
import BrowserSupport from "../docs/getting-started/browser-support.md";
import IntelliSense from "../docs/getting-started/IntelliSense.md";
import ControllingFileSize from "../docs/getting-started/controlling-file-size.md";

// 核心概念
import UtillityFirst from "../docs/core-concepts/Utillity-First.md";
import ResponsiveDesign from "../docs/core-concepts/responsive-design.md";
import PseudoClassVariants from "../docs/core-concepts/pseudo-class-variants.md";
import AddingBaseStyles from "../docs/core-concepts/adding-base-styles.md";
import ExtractingComponents from "../docs/core-concepts/extracting-components.md";
import AddingNewUtilities from "../docs/core-concepts/adding-new-utilities.md";
import FunctionsAndDirectives from "../docs/core-concepts/functions-and-directives.md";

// 个性化设置
import Configuration from "../docs/customization/configuration.md";
import Theme from "../docs/customization/theme.md";
import Breakpoints from "../docs/customization/breakpoints.md";
import CustomizingSpacing from "../docs/customization/customizing-spacing.md";
import ConfiguringVariants from "../docs/customization/configuring-variants.md";
import Plugins from "../docs/customization/plugins.md";

// 基础样式
import Preflight from "../docs/base-styles/preflight.md";

// 布局
import Container from "../docs/layout/container.md";
import BoxSizing from "../docs/layout/box-sizing.md";
import Display from "../docs/layout/display.md";
import Float from "../docs/layout/float.md";
import Clear from "../docs/layout/clear.md";
import ObjectFit from "../docs/layout/object-fit.md";
import ObjectPosition from "../docs/layout/object-position.md";
import Overflow from "../docs/layout/overflow.md";
import OverscrollBehavior from "../docs/layout/overscroll-behavior.md";
import Position from "../docs/layout/position.md";
import TopFightBottomLeft from "../docs/layout/top-right-bottom-left.md";
import Visibility from "../docs/layout/visibility.md";
import ZIndex from "../docs/layout/z-index.md";

import FlexDirection from "../docs/flexbox/flex-direction.md";
import FlexWrap from "../docs/flexbox/flex-wrap.md";
import Flex from "../docs/flexbox/flex.md";
import FlexGrow from "../docs/flexbox/flex-grow.md";
import FlexShrink from "../docs/flexbox/flex-shrink.md";
import Order from "../docs/flexbox/order.md";

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
        name: "自定义通用样式",
        filePath: AddingNewUtilities,
        path: "adding-new-utilities",
      },
      {
        name: "Tailwind 语法糖",
        filePath: FunctionsAndDirectives,
        path: "functions-and-directives",
      },
    ],
  },
  {
    name: "个性化设置",
    children: [
      {
        name: "自定义配置",
        filePath: Configuration,
        path: "configuration",
      },
      {
        name: "主题",
        filePath: Theme,
        path: "theme",
      },
      {
        name: "样式断点",
        filePath: Breakpoints,
        path: "breakpoints",
      },
      {
        name: "自定义间距",
        filePath: CustomizingSpacing,
        path: "customizing-spacing",
      },
      {
        name: "自定义伪类",
        filePath: ConfiguringVariants,
        path: "configuring-variants",
      },
      {
        name: "编写插件",
        filePath: Plugins,
        path: "plugins",
      },
    ],
  },
  {
    name: "基础样式",
    children: [
      {
        name: "基础样式",
        filePath: Preflight,
        path: "preflight",
      },
    ],
  },
  {
    name: "布局",
    children: [
      {
        name: "Container",
        filePath: Container,
        path: "container",
      },
      {
        name: "Box Sizing",
        filePath: BoxSizing,
        path: "box-sizing",
      },
      {
        name: "Display",
        filePath: Display,
        path: "display",
      },
      {
        name: "Float",
        filePath: Float,
        path: "float",
      },
      {
        name: "Clear",
        filePath: Clear,
        path: "clear",
      },
      {
        name: "Object Fit",
        filePath: ObjectFit,
        path: "object-fit",
      },
      {
        name: "Object Position",
        filePath: ObjectPosition,
        path: "object-position",
      },
      {
        name: "Overflow",
        filePath: Overflow,
        path: "overflow",
      },
      {
        name: "Overscroll Behavior",
        filePath: OverscrollBehavior,
        path: "overscroll-behavior",
      },
      {
        name: "Position",
        filePath: Position,
        path: "position",
      },
      {
        name: "Top/Fight/Bottom/Left",
        filePath: TopFightBottomLeft,
        path: "top-right-bottom-left",
      },
      {
        name: "Visibility",
        filePath: Visibility,
        path: "visibility",
      },
      {
        name: "Z-Index",
        filePath: ZIndex,
        path: "z-index",
      }
    ],
  },
  {
    name: "FlexBox",
    children: [
      {
        name: "Flex Direction",
        filePath: FlexDirection,
        path: "flex-direction",
      },
      {
        name: "Flex Wrap",
        filePath: FlexWrap,
        path: "flex-wrap",
      },
      {
        name: "Flex",
        filePath: Flex,
        path: "flex",
      },
      {
        name: "Flex Grow",
        filePath: FlexGrow,
        path: "flex-grow",
      },
      {
        name: "Flex Shrink",
        filePath: FlexShrink,
        path: "flex-shrink",
      },
      {
        name: "Order",
        filePath: Order,
        path: "order",
      },
    ]
  }
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
