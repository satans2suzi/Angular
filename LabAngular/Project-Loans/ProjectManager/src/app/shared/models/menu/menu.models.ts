interface ChildMenu {
  child_menu_name: string;
  child_router_name: string;
}

export interface MenuModel {
  name: string;
  router_name?: string;
  child_menu?: ChildMenu[];
}
