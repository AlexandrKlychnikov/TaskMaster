/// <reference types="react-scripts" />
declare module '*.svg';
declare module '*.mp4' {
  const src: string;
  export default src;
}
