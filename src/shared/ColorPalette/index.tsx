type ClassName = string;

export type ColorScheme = {
  background: {
    default: ClassName;
    hover: ClassName;
    focus: ClassName;
  };
  border: {
    default: ClassName;
    hover: ClassName;
    focus: ClassName;
  };
  text: {
    default: ClassName;
    contrast: ClassName;
  };
};

export type ColorPalette = {
  grayscale: ColorScheme;
  accent: ColorScheme;
};
