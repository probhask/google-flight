import {
  NavigationItem,
  bottomNavigationItems,
  mainNavigationItems,
  secondaryNavigationItems,
} from "@/config/navigation";

interface SidebarProps {
  activeTab: string;
  onNavigate: (path: string) => void;
}

interface MenuItemProps {
  item: NavigationItem;
  isActive: boolean;
  onNavigate: (path: string) => void;
}

const MenuItem = ({ item, isActive, onNavigate }: MenuItemProps) => (
  <button
    onClick={() => onNavigate(item.path)}
    className={`
      w-full flex items-center gap-6 px-6 py-3 text-sm
      ${
        isActive
          ? "bg-primary-50 text-primary-700"
          : "text-gray-700 hover:bg-gray-100"
      }
    `}
  >
    <item.Icon
      fontSize="small"
      className={`
        ${isActive ? "text-primary-600" : "text-gray-600"}
        ${item.rotate ? "rotate-45" : ""}
      `}
    />
    <span className="font-medium">{item.label}</span>
  </button>
);

const Sidebar = ({ activeTab, onNavigate }: SidebarProps) => {
  return (
    <div className="w-72 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 fixed top-16 left-0">
      <div className="flex flex-col h-full">
        {/* Main navigation items */}
        <div className="py-2">
          {mainNavigationItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isActive={activeTab === item.id}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-2" />

        {/* Secondary items */}
        <div className="py-2">
          {secondaryNavigationItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isActive={activeTab === item.id}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* Bottom items */}
        <div className="mt-auto border-t border-gray-200">
          <div className="py-2">
            {bottomNavigationItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                isActive={activeTab === item.id}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
