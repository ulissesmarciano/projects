export interface ISidebar {
  active: (active: boolean) => void;
  onChange: () => void;
  closeIconVariant?: string | boolean,
}

export interface ISidebarStyled {
  
  sidebar?: (active: boolean) => void
}