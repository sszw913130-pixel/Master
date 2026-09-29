/// <reference types="react-scripts" />

declare module '*.module.less' {
  const styles: { readonly [className: string]: string };
  export default styles;
}

declare module '*.less' {}