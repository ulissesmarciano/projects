export interface ISidebar {
  active: (active: boolean) => void;
  onChange: () => void;
  closeIconVariant?: string | boolean,
  toLogon: string,
}

export interface ISidebarStyled {
  
  sidebar?: (active: boolean) => void
}